# Terraform Associate Practice Exam

An interactive practice exam website for the HashiCorp Certified Terraform Associate certification. This application provides real-time feedback, timed practice sessions, and comprehensive explanations to help you prepare for the certification exam.

## Features

### 🎯 **Interactive Exam Experience**
- 50 carefully crafted questions based on official exam objectives
- Real-time feedback for both correct and incorrect answers
- Detailed explanations for each question
- Multiple question types (Multiple Choice, scenarios with code blocks)

### ⏱️ **Timed Practice**
- 60-minute timer to simulate real exam conditions
- Visual timer warnings when time is running low
- Automatic exam completion when time expires

### 📊 **Progress Tracking**
- Progress bar showing completion status
- Question counter (current/total)
- Comprehensive results summary with score breakdown
- Pass/fail indication based on 70% threshold

### 🧠 **Learning-Focused Design**
- Immediate feedback on answer selection
- Color-coded correct/incorrect indicators
- Comprehensive explanations for all answers
- Review mode to study missed questions

### 💻 **Modern UI/UX**
- Clean, professional interface
- Responsive design for desktop and mobile
- Syntax-highlighted code blocks for Terraform examples
- Smooth animations and transitions

## Exam Coverage

The practice exam covers all official Terraform Associate certification objectives:

1. **Understand Infrastructure as Code (IaC) concepts**
2. **Understand Terraform's purpose (vs other IaC)**
3. **Understand Terraform basics**
4. **Use the Terraform CLI (outside of core workflow)**
5. **Interact with Terraform modules**
6. **Navigate Terraform workflow**
7. **Implement and maintain state**
8. **Read, generate, and modify configuration**
9. **Understand Terraform Cloud and Enterprise capabilities**

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional software installation required

### Running the Application

1. **Clone or download this repository**
2. **Open the `index.html` file in your web browser**
3. **Click "Start Practice Exam" to begin**

### Alternative: Using a Local Server

For the best experience, you can serve the files using a local web server:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have npx installed)
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

### Using Docker (Recommended)

The easiest way to run the application is using Docker:

```bash
# Quick start - using the management script
./docker-manager.sh start

# Or using docker-compose directly
docker-compose up -d

# Access the application
open http://localhost:8080
```

**Docker Management Script Commands:**
```bash
./docker-manager.sh start              # Start the application
./docker-manager.sh start-prod         # Start with production setup (Traefik)
./docker-manager.sh start-monitoring   # Start with monitoring (Prometheus)
./docker-manager.sh stop               # Stop the application
./docker-manager.sh logs               # View logs
./docker-manager.sh status             # Check status
./docker-manager.sh clean              # Clean up resources
```

## Project Structure

```
learn-terraform/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── questions.js            # Question database with 50 practice questions
├── script.js               # Main application logic
├── Dockerfile              # Docker container configuration
├── docker-compose.yml      # Multi-container Docker setup
├── docker-manager.sh       # Docker management script
├── .dockerignore           # Docker ignore file
└── README.md              # This file
```

## Question Categories

The practice exam includes questions across different difficulty levels:

- **Easy (30%)**: Basic concepts, terminology, and simple commands
- **Medium (50%)**: Configuration syntax, workflows, and practical scenarios
- **Hard (20%)**: Complex scenarios, advanced features, and edge cases

## Keyboard Shortcuts

- **1-4**: Select answer options A-D
- **Enter**: Submit answer or proceed to next question
- **Escape**: (During review) Close review modal

## Scoring

- **90%+ (45-50 correct)**: Excellent - Ready for certification
- **70-89% (35-44 correct)**: Well Done - Good preparation level
- **50-69% (25-34 correct)**: Keep Studying - Review weak areas
- **<50% (<25 correct)**: Needs Improvement - Focus on fundamentals

## Contributing

To add more questions or improve the application:

1. **Adding Questions**: Edit `questions.js` and add new question objects following the existing format
2. **Styling**: Modify `styles.css` for visual improvements
3. **Features**: Extend `script.js` for new functionality

## Deployment Options

### 🐳 **Docker Deployment (Recommended)**

**Local Development:**
```bash
# Start the application
./docker-manager.sh start
# Access at http://localhost:8080
```

**Production Deployment:**
```bash
# With reverse proxy and SSL termination
./docker-manager.sh start-prod
# Access at http://localhost (port 80)
```

**Cloud Deployment:**
```bash
# AWS ECS, Google Cloud Run, Azure Container Instances
docker build -t terraform-exam .
docker tag terraform-exam your-registry/terraform-exam:latest
docker push your-registry/terraform-exam:latest
```

### ☁️ **Static Hosting**

**Netlify/Vercel:**
1. Connect your GitHub repository
2. Set build command: `echo "Static files only"`
3. Set publish directory: `/`
4. Deploy automatically on git push

**AWS S3 + CloudFront:**
```bash
# Upload files to S3 bucket
aws s3 sync . s3://your-bucket-name --exclude ".*" --exclude "*.md"

# Configure CloudFront distribution
aws cloudfront create-distribution --distribution-config file://cloudfront-config.json
```

**GitHub Pages:**
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Choose source: main branch
4. Access via: https://username.github.io/repository-name

### 🔧 **Self-Hosted Options**

**Nginx:**
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/terraform-exam;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Enable gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript;
}
```

**Apache:**
```apache
<VirtualHost *:80>
    ServerName your-domain.com
    DocumentRoot /path/to/terraform-exam
    DirectoryIndex index.html

    <Directory /path/to/terraform-exam>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
```

### 📊 **Environment Configuration**

**Docker Environment Variables:**
```yaml
# docker-compose.override.yml
version: '3.8'
services:
  terraform-exam:
    environment:
      - APP_TITLE=Custom Terraform Exam
      - EXAM_TIME_LIMIT=3600  # seconds
      - SHOW_TIMER=true
```

**Kubernetes Deployment:**
```yaml
# k8s-deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: terraform-exam
spec:
  replicas: 3
  selector:
    matchLabels:
      app: terraform-exam
  template:
    metadata:
      labels:
        app: terraform-exam
    spec:
      containers:
      - name: terraform-exam
        image: your-registry/terraform-exam:latest
        ports:
        - containerPort: 80
---
apiVersion: v1
kind: Service
metadata:
  name: terraform-exam-service
spec:
  selector:
    app: terraform-exam
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

### Question Format

```javascript
{
    id: 1,
    type: "Multiple Choice",
    difficulty: "Easy|Medium|Hard",
    question: "Question text here",
    code: "optional terraform code block", // Optional
    options: [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
    ],
    correctAnswer: 1, // Index of correct option (0-based)
    explanation: "Detailed explanation of why this answer is correct..."
}
```

## Based On

This project is inspired by the [HashiCorp-Certified-Terraform-Associate](https://github.com/devenes/HashiCorp-Certified-Terraform-Associate) repository, but provides an interactive web-based experience with real-time feedback and comprehensive explanations.

## Disclaimer

This practice exam is designed for educational purposes and to help you prepare for the HashiCorp Certified Terraform Associate certification. The questions are not actual exam questions and are created based on the official exam objectives and publicly available study materials.

## License

MIT License - feel free to use, modify, and distribute this project for educational purposes.

## Comprehensive Study Guide

This study guide is structured according to the official HashiCorp Terraform Associate (003) certification objectives. Follow this guide systematically to ensure comprehensive coverage of all exam topics.

### 🎯 **Exam Objectives Overview**

The Terraform Associate certification covers 9 main objectives:

1. **Understand Infrastructure as Code (IaC) concepts** (16%)
2. **Understand Terraform's purpose (vs other IaC)** (20%)
3. **Understand Terraform basics** (20%)
4. **Use the Terraform CLI (outside of core workflow)** (8%)
5. **Interact with Terraform modules** (8%)
6. **Navigate Terraform workflow** (8%)
7. **Implement and maintain state** (8%)
8. **Read, generate, and modify configuration** (8%)
9. **Understand Terraform Cloud and Enterprise capabilities** (4%)

---

### 📚 **1. Infrastructure as Code (IaC) Concepts**

**Key Topics:**
- Benefits of Infrastructure as Code
- IaC vs. traditional infrastructure management
- Terraform's approach to IaC
- Declarative vs. imperative configuration

**Essential Resources:**
- [Infrastructure as Code Introduction](https://www.hashicorp.com/resources/what-is-infrastructure-as-code)
- [Introduction to IaC Documentation](https://developer.hashicorp.com/terraform/intro)
- [Infrastructure as Code with Terraform Tutorial](https://developer.hashicorp.com/terraform/tutorials/certification-associate-tutorials-003/infrastructure-as-code)
- [IaC in Private or Public Cloud](https://www.hashicorp.com/blog/infrastructure-as-code-in-a-private-or-public-cloud/)

**Study Focus:**
- Understanding the problems IaC solves
- Benefits: version control, repeatability, consistency
- Infrastructure lifecycle management
- Team collaboration and governance

---

### 🔧 **2. Terraform's Purpose vs. Other IaC Tools**

**Key Topics:**
- Terraform vs. CloudFormation, ARM templates, Ansible
- Multi-cloud capabilities
- Provider ecosystem
- Terraform use cases

**Essential Resources:**
- [Terraform Use Cases](https://developer.hashicorp.com/terraform/intro/v1.1.x/use-cases)
- [Terraform vs. Other Tools](https://developer.hashicorp.com/terraform/intro/vs)

**Study Focus:**
- Terraform's declarative approach
- State management advantages
- Cross-platform capabilities
- When to use Terraform vs. other tools

---

### ⚙️ **3. Terraform Basics**

**Key Topics:**
- Terraform core concepts
- Providers and resources
- Configuration syntax (HCL)
- Terraform settings and version constraints

**Essential Resources:**
- [Get Started with Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started) (Complete all tutorials)
- [Purpose of Terraform State](https://developer.hashicorp.com/terraform/language/v1.1.x/state/purpose)
- [Terraform Settings](https://developer.hashicorp.com/terraform/language/v1.1.x/settings)
- [Providers Summary](https://developer.hashicorp.com/terraform/language/v1.1.x/providers)

**Study Focus:**
- Resources, data sources, providers
- Configuration blocks and syntax
- Provider installation and versioning
- Dependency lock files

---

### 💻 **4. Terraform CLI (Outside Core Workflow)**

**Key Topics:**
- State manipulation commands
- Import functionality
- Workspace management
- Debugging and troubleshooting

**Essential Resources:**
- [Command: state](https://developer.hashicorp.com/terraform/cli/v1.1.x/commands/state)
- [Manage Resources in Terraform State](https://developer.hashicorp.com/terraform/tutorials/state/state-cli)
- [Command: import](https://developer.hashicorp.com/terraform/cli/v1.1.x/commands/import)
- [Debugging Terraform](https://developer.hashicorp.com/terraform/internals/v1.1.x/debugging)

**Study Focus:**
- `terraform state` subcommands (list, show, mv, rm)
- Importing existing infrastructure
- Workspace commands (new, select, list, delete)
- Debug logging and troubleshooting

---

### 📦 **5. Terraform Modules**

**Key Topics:**
- Module structure and organization
- Input variables and outputs
- Module versioning
- Public and private registries

**Essential Resources:**
- [Reuse Configuration with Modules](https://developer.hashicorp.com/terraform/tutorials/modules) (Complete all tutorials)
- [Finding and Using Modules](https://developer.hashicorp.com/terraform/registry/modules/use)
- [Input Variables](https://developer.hashicorp.com/terraform/language/v1.1.x/values/variables)
- [Output Values](https://developer.hashicorp.com/terraform/language/v1.1.x/values/outputs)

**Study Focus:**
- Creating and structuring modules
- Module composition and reusability
- Version constraints and source paths
- Module inputs, outputs, and documentation

---

### 🔄 **6. Terraform Core Workflow**

**Key Topics:**
- Init, plan, apply, destroy cycle
- Configuration validation and formatting
- Plan files and execution
- Workspace workflow

**Essential Resources:**
- [The Core Terraform Workflow](https://developer.hashicorp.com/terraform/intro/v1.1.x/core-workflow)
- [Initialize Terraform Configuration](https://developer.hashicorp.com/terraform/tutorials/cli/init)
- [Create a Terraform Plan](https://developer.hashicorp.com/terraform/tutorials/cli/plan)
- [Apply Terraform Configuration](https://developer.hashicorp.com/terraform/tutorials/cli/apply)

**Study Focus:**
- `terraform init` functionality and options
- Understanding plan output and execution
- Apply process and confirmation
- Destroy operations and safety

---

### 🗃️ **7. State Management**

**Key Topics:**
- State file purpose and structure
- Remote state backends
- State locking mechanisms
- Sensitive data in state

**Essential Resources:**
- [State Locking](https://developer.hashicorp.com/terraform/language/v1.1.x/state/locking)
- [Sensitive Data in State](https://developer.hashicorp.com/terraform/language/v1.1.x/state/sensitive-data)
- [Backends](https://developer.hashicorp.com/terraform/language/v1.1.x/settings/backends)
- [Manage Resource Drift](https://developer.hashicorp.com/terraform/tutorials/state/resource-drift)

**Study Focus:**
- Local vs. remote state storage
- Backend configuration and migration
- State file security considerations
- Handling state conflicts and corruption

---

### 📝 **8. Configuration Language (HCL)**

**Key Topics:**
- Resource and data source syntax
- Variables, locals, and outputs
- Functions and expressions
- Dynamic blocks and meta-arguments

**Essential Resources:**
- [Resources Documentation](https://developer.hashicorp.com/terraform/language/v1.1.x/resources)
- [Data Sources](https://developer.hashicorp.com/terraform/language/v1.1.x/data-sources)
- [Built-in Functions](https://developer.hashicorp.com/terraform/language/v1.1.x/functions)
- [Create Dynamic Expressions](https://developer.hashicorp.com/terraform/tutorials/configuration-language/expressions)

**Study Focus:**
- Resource blocks and meta-arguments (count, for_each, lifecycle)
- Variable types and validation
- Function usage and string interpolation
- Conditional expressions and loops

---

### ☁️ **9. Terraform Cloud & Enterprise**

**Key Topics:**
- HCP Terraform workspace management
- Remote execution and collaboration
- Policy as Code (Sentinel)
- Private module registry

**Essential Resources:**
- [What is HCP Terraform?](https://developer.hashicorp.com/terraform/cloud-docs)
- [HCP Terraform Get Started Collection](https://developer.hashicorp.com/terraform/tutorials/cloud-get-started)
- [Sentinel Documentation](https://developer.hashicorp.com/terraform/cloud-docs/policy-enforcement/define-policies/custom-sentinel)
- [Private Registry](https://developer.hashicorp.com/terraform/cloud-docs/registry)

**Study Focus:**
- Workspace types and execution modes
- Version control system integration
- Team permissions and organization management
- Policy enforcement and compliance

---

### 📖 **Recommended Study Path**

**Week 1-2: Foundations**
1. Complete "Infrastructure as Code" concepts
2. Work through "Get Started" tutorials
3. Practice basic CLI commands

**Week 3-4: Intermediate Concepts**
1. Deep dive into configuration language
2. Learn module creation and usage
3. Practice state management

**Week 5-6: Advanced Topics**
1. Master CLI commands beyond core workflow
2. Explore Terraform Cloud features
3. Practice complex scenarios

**Week 7: Exam Preparation**
1. Review all objectives systematically
2. Take practice exams
3. Focus on weak areas identified

---

### 🎯 **Hands-On Practice Recommendations**

**Essential Labs:**
- Deploy infrastructure across multiple providers
- Create and publish a custom module
- Implement remote state with state locking
- Practice importing existing resources
- Set up a collaborative workflow with Terraform Cloud

**Key Commands to Master:**
```bash
# Core workflow
terraform init
terraform plan
terraform apply
terraform destroy

# State management
terraform state list
terraform state show
terraform state mv
terraform state rm

# Advanced operations
terraform import
terraform taint
terraform workspace new/select/list
terraform fmt
terraform validate
```

---

## Study Resources

### Official HashiCorp Resources
- [Terraform Associate Study Guide](https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-study-003)
- [Terraform Associate Sample Questions](https://developer.hashicorp.com/terraform/tutorials/certification-003/associate-questions)
- [Terraform Documentation](https://developer.hashicorp.com/terraform/docs)
- [HashiCorp Learn Platform](https://developer.hashicorp.com/terraform/tutorials)

### Additional Learning Materials
- [Terraform Registry](https://registry.terraform.io/)
- [Terraform Best Practices](https://developer.hashicorp.com/terraform/cloud-docs/recommended-practices)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Terraform Examples Repository](https://github.com/hashicorp/terraform-provider-aws/tree/main/examples)

---

**Good luck with your Terraform Associate certification! 🚀**
Repository dedicated to learning Terraform with real time responses to associate level questions.
