#!/bin/bash

# Simple Docker management script for Terraform Practice Platform
# Usage: ./docker-manager.sh [start|stop|restart|logs|status]

set -e

PROJECT_NAME="terraform-practice"
SERVICE_NAME="terraform-exam"

print_usage() {
    echo "Usage: $0 [start|stop|restart|logs|status|help]"
    echo ""
    echo "Commands:"
    echo "  start    - Start the Terraform practice platform"
    echo "  stop     - Stop the platform"
    echo "  restart  - Restart the platform"
    echo "  logs     - Show application logs"
    echo "  status   - Show container status"
    echo "  help     - Show this help message"
    echo ""
    echo "Access the platform at: http://localhost:8080"
}

start_platform() {
    echo "🚀 Starting Terraform Practice Platform..."
    
    if ! command -v docker-compose &> /dev/null && ! command -v docker &> /dev/null; then
        echo "❌ Docker is not installed. Please install Docker first."
        exit 1
    fi
    
    # Use docker compose (new) or docker-compose (legacy)
    if command -v docker &> /dev/null && docker compose version &> /dev/null; then
        COMPOSE_CMD="docker compose"
    elif command -v docker-compose &> /dev/null; then
        COMPOSE_CMD="docker-compose"
    else
        echo "❌ Neither 'docker compose' nor 'docker-compose' found."
        exit 1
    fi
    
    $COMPOSE_CMD up -d
    
    if [ $? -eq 0 ]; then
        echo "✅ Platform started successfully!"
        echo "🌐 Access the platform at: http://localhost:8080"
        echo ""
        echo "📊 To view logs: $0 logs"
        echo "🛑 To stop: $0 stop"
    else
        echo "❌ Failed to start the platform"
        exit 1
    fi
}

stop_platform() {
    echo "🛑 Stopping Terraform Practice Platform..."
    
    if command -v docker &> /dev/null && docker compose version &> /dev/null; then
        COMPOSE_CMD="docker compose"
    elif command -v docker-compose &> /dev/null; then
        COMPOSE_CMD="docker-compose"
    else
        echo "❌ Docker Compose not found."
        exit 1
    fi
    
    $COMPOSE_CMD down
    
    if [ $? -eq 0 ]; then
        echo "✅ Platform stopped successfully!"
    else
        echo "❌ Failed to stop the platform"
        exit 1
    fi
}

restart_platform() {
    echo "🔄 Restarting Terraform Practice Platform..."
    stop_platform
    sleep 2
    start_platform
}

show_logs() {
    echo "📊 Showing application logs..."
    echo "Press Ctrl+C to exit log view"
    echo ""
    
    if command -v docker &> /dev/null && docker compose version &> /dev/null; then
        COMPOSE_CMD="docker compose"
    elif command -v docker-compose &> /dev/null; then
        COMPOSE_CMD="docker-compose"
    else
        echo "❌ Docker Compose not found."
        exit 1
    fi
    
    $COMPOSE_CMD logs -f
}

show_status() {
    echo "📈 Platform Status:"
    echo ""
    
    if command -v docker &> /dev/null; then
        # Check if container is running
        CONTAINER_ID=$(docker ps -q -f "name=${PROJECT_NAME}")
        
        if [ -n "$CONTAINER_ID" ]; then
            echo "✅ Platform is running"
            echo "🆔 Container ID: $CONTAINER_ID"
            echo "🌐 URL: http://localhost:8080"
            echo ""
            docker ps -f "name=${PROJECT_NAME}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
        else
            echo "❌ Platform is not running"
            echo "💡 Start with: $0 start"
        fi
    else
        echo "❌ Docker not found"
    fi
}

case "${1:-}" in
    start)
        start_platform
        ;;
    stop)
        stop_platform
        ;;
    restart)
        restart_platform
        ;;
    logs)
        show_logs
        ;;
    status)
        show_status
        ;;
    help|--help|-h)
        print_usage
        ;;
    *)
        echo "❌ Invalid command: ${1:-}"
        echo ""
        print_usage
        exit 1
        ;;
esac
