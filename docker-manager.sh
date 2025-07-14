#!/bin/bash

# Terraform Practice Exam - Docker Management Script
# This script provides easy commands to manage the Docker containers

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if Docker is running
check_docker() {
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
}

# Function to build and start the application
start() {
    print_status "Starting Terraform Practice Exam..."
    check_docker

    docker-compose up -d --build terraform-exam

    print_success "Application started successfully!"
    print_status "Access the exam at: http://localhost:8080"
    print_status "View logs with: ./docker-manager.sh logs"
}

# Function to start with production profile (includes Traefik)
start_production() {
    print_status "Starting Terraform Practice Exam with production setup..."
    check_docker

    docker-compose --profile production up -d --build

    print_success "Production setup started successfully!"
    print_status "Access the exam at: http://localhost (port 80)"
    print_status "Traefik dashboard at: http://localhost:8081"
}

# Function to start with monitoring
start_monitoring() {
    print_status "Starting Terraform Practice Exam with monitoring..."
    check_docker

    # Create monitoring directory if it doesn't exist
    mkdir -p monitoring

    # Create basic Prometheus config if it doesn't exist
    if [ ! -f monitoring/prometheus.yml ]; then
        cat > monitoring/prometheus.yml << EOF
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'prometheus'
    static_configs:
      - targets: ['localhost:9090']

  - job_name: 'terraform-exam'
    static_configs:
      - targets: ['terraform-exam:80']
EOF
    fi

    docker-compose --profile monitoring up -d --build

    print_success "Application with monitoring started successfully!"
    print_status "Access the exam at: http://localhost:8080"
    print_status "Prometheus at: http://localhost:9090"
}

# Function to stop the application
stop() {
    print_status "Stopping Terraform Practice Exam..."
    docker-compose down
    print_success "Application stopped successfully!"
}

# Function to restart the application
restart() {
    print_status "Restarting Terraform Practice Exam..."
    stop
    start
}

# Function to view logs
logs() {
    print_status "Showing application logs..."
    docker-compose logs -f terraform-exam
}

# Function to view status
status() {
    print_status "Checking application status..."
    docker-compose ps
    echo ""

    if docker-compose ps | grep -q "terraform-practice-exam.*Up"; then
        print_success "Application is running at http://localhost:8080"
    else
        print_warning "Application is not running"
    fi
}

# Function to clean up everything
clean() {
    print_status "Cleaning up Docker resources..."
    docker-compose down -v --remove-orphans
    docker system prune -f
    print_success "Cleanup completed!"
}

# Function to update the application
update() {
    print_status "Updating Terraform Practice Exam..."
    docker-compose down
    docker-compose pull
    docker-compose up -d --build
    print_success "Application updated successfully!"
}

# Function to backup data
backup() {
    print_status "Creating backup of application data..."
    timestamp=$(date +"%Y%m%d_%H%M%S")
    backup_dir="backup_${timestamp}"

    mkdir -p "${backup_dir}"
    cp -r . "${backup_dir}/" 2>/dev/null || true

    print_success "Backup created in ${backup_dir}/"
}

# Function to show help
show_help() {
    echo "Terraform Practice Exam - Docker Management Script"
    echo ""
    echo "Usage: ./docker-manager.sh [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  start              Start the application (default mode)"
    echo "  start-prod         Start with production setup (includes Traefik)"
    echo "  start-monitoring   Start with monitoring (includes Prometheus)"
    echo "  stop               Stop the application"
    echo "  restart            Restart the application"
    echo "  logs               View application logs"
    echo "  status             Check application status"
    echo "  clean              Clean up all Docker resources"
    echo "  update             Update and restart the application"
    echo "  backup             Create a backup of application data"
    echo "  help               Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./docker-manager.sh start"
    echo "  ./docker-manager.sh start-prod"
    echo "  ./docker-manager.sh logs"
    echo "  ./docker-manager.sh status"
}

# Main script logic
case "${1:-}" in
    start)
        start
        ;;
    start-prod|start-production)
        start_production
        ;;
    start-monitoring)
        start_monitoring
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    logs)
        logs
        ;;
    status)
        status
        ;;
    clean)
        clean
        ;;
    update)
        update
        ;;
    backup)
        backup
        ;;
    help|--help|-h)
        show_help
        ;;
    "")
        print_status "No command specified. Starting application in default mode..."
        start
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac
