# Terraform Associate Practice Platform
**Great for**: Individual study, team training, bootcamps, and certification preparation programs.

A comprehensive, modern practice platform for the HashiCorp Terraform Associate (003) certification exam featuring an interactive study guide, multiple exam formats, advanced performance analytics, and full mobile responsiveness.

##Features
- **📚 Interactive Study Guide**: Comprehensive study materials organized by all 9 certification objectives
- **🎯 Multiple Exam Formats**:
  - Full practice exam (30 questions, 45 minutes)
  - Category-based exams for focused study (per objective)
  - Objective-specific practice questions
- **📊 Advanced Performance Analytics**:
  - Detailed breakdown by certification objectives
  - Score tracking and improvement recommendations
  - Question review with detailed explanations
- **🔄 Dynamic Question System**: 50+ randomized questions from comprehensive question bank
- **� Dark/Light Theme Toggle**: Modern theme switching with persistent preferences
- **📱 Fully Mobile Responsive**: Optimized for all devices (iPhone, Android, tablets, desktop)
- **⚡ Zero Dependencies**: Lightweight, fast-loading vanilla JavaScript application
- **🐳 Simplified Docker Setup**: Easy containerized deployment without complex orchestration

### Study Guide Coverage (All 9 Objectives)

1. **Understand Infrastructure as Code (IaC) concepts**
2. **Understand Terraform's purpose (vs other IaC)**
3. **Understand Terraform basics**
4. **Use the Terraform CLI (outside of core workflow)**
5. **Interact with Terraform modules**
6. **Navigate Terraform workflow**
7. **Implement and maintain state**
8. **Read, generate, and modify configuration**
9. **Understand Terraform Cloud and Enterprise capabilities**

## Quick Start

### Option 1: Direct Access
Simply open `index.html` in any modern web browser - no server required!

```bash
# Clone the repository
git clone <repository-url>
cd learn-terraform

# Open directly in browser (macOS)
open index.html

# Or on Linux
xdg-open index.html

# Or on Windows
start index.html
```

### Option 2: Local Development Server

```bash
# Using Python (recommended for development)
python3 -m http.server 8000
# Then open: http://localhost:8000

# Using Node.js (if you have it installed)
npx http-server -p 8000
# Then open: http://localhost:8000

# Using PHP (if available)
php -S localhost:8000
# Then open: http://localhost:8000
```

### Option 3: Docker

```bash
# Start with Docker Compose
docker-compose up -d

# Access the platform
open http://localhost:4880
```

## How to Use

### 🎓 Study Guide Mode
1. Click **"Study Guide"** from the welcome screen
2. Browse all 9 certification objectives with detailed explanations
3. Click on any objective to view comprehensive study materials
4. Use **"Practice Questions for This Objective"** to test specific knowledge areas
5. Navigate back to study guide or home easily

### Practice Exam Modes

#### Full Practice Exam
1. Click **"Practice Exams"** → **"Full Practice Exam"**
2. Take a comprehensive **57-question exam (60 minutes)** - **matches real exam format exactly**
3. Questions balanced across all 9 objectives for realistic testing
4. Receive complete performance analysis with objective breakdown
5. **Real exam simulation** with authentic timing and question distribution

#### Category-Based Exams
1. Click **"Practice Exams"** → **"Category-based Exams"**
2. Choose specific objectives to focus your study
3. Take **untimed exams** with all available questions per objective
4. Perfect for deep learning and reviewing weak areas without time pressure
5. **Study mode** - focus on understanding concepts rather than speed

### Performance Analytics & Review
- **Real-time scoring** with immediate feedback on each question
- **Objective-level breakdown** showing performance across all 9 areas
- **Detailed answer review** with comprehensive explanations
- **Study recommendations** based on performance gaps
- **Progress tracking** across multiple exam attempts

## Project Structure

```
learn-terraform/
├── index.html                 # Multi-screen SPA with all application screens
├── script.js                  # Complete platform functionality (590+ lines)
├── styles.css                 # Modern responsive design with themes (1300+ lines)
├── questions.js              # 50+ questions + comprehensive study guide content
├── docker-compose.yml         # Simplified single-service Docker setup
├── Dockerfile                 # Lightweight Nginx container configuration
├── docker-manager.sh          # Easy Docker management script
├── test-platform.sh          # Platform testing and validation script
└── README.md                  # Complete documentation (this file)
```

### Key File Details
- **index.html**: Single-page application with 7 distinct screens
- **script.js**: Full-featured platform with exam engine, study guide, analytics
- **styles.css**: Modern CSS with themes, mobile responsiveness, accessibility
- **questions.js**: 50+ categorized questions + detailed study guide content

## Question Bank & Content

### Question Database
- **200+ comprehensive questions** covering all certification objectives
- **Three difficulty levels**: Easy, Medium, Hard
- **Categorized by objectives**: Each question mapped to specific exam objectives
- **Detailed explanations**: Comprehensive explanations for every answer
- **Randomization**: Questions shuffled for varied practice sessions
- **Real-world scenarios**: Practical Terraform use cases and examples

### Question Format
```javascript
{
    id: 1,
    type: "Multiple Choice",
    difficulty: "Medium",
    objective: 3,
    objectiveName: "Understand Terraform basics",
    question: "What does 'terraform plan' do?",
    options: [
        "Creates infrastructure resources",
        "Shows what changes Terraform will make",
        "Destroys infrastructure resources",
        "Validates configuration syntax"
    ],
    correctAnswer: 1,
    explanation: "terraform plan shows what changes will be made without actually executing them..."
}
```
