// Enhanced Terraform Associate Practice Questions with Categories and Additional Questions
const examQuestions = [
    // Objective 1: Understand Infrastructure as Code (IaC) concepts
    {
        id: 1,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Understand Infrastructure as Code (IaC) concepts",
        question: "What is the primary purpose of Terraform?",
        options: [
            "To manage container orchestration",
            "To provision and manage infrastructure as code",
            "To monitor application performance",
            "To handle database migrations"
        ],
        correctAnswer: 1,
        explanation: "Terraform is an Infrastructure as Code (IaC) tool that allows you to define and provision infrastructure using declarative configuration files. It helps manage infrastructure across various cloud providers and services."
    },
    {
        id: 2,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Understand Infrastructure as Code (IaC) concepts",
        question: "What is a key benefit of Infrastructure as Code?",
        options: [
            "Manual configuration management",
            "Version control and repeatability",
            "Increased deployment time",
            "Reduced automation"
        ],
        correctAnswer: 1,
        explanation: "Infrastructure as Code provides version control, repeatability, and automation, making infrastructure management more reliable and traceable."
    },
    {
        id: 3,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Understand Infrastructure as Code (IaC) concepts",
        question: "Which of the following is NOT a characteristic of Infrastructure as Code?",
        options: [
            "Declarative configuration",
            "Version control integration",
            "Manual server provisioning",
            "Automated deployments"
        ],
        correctAnswer: 2,
        explanation: "Manual server provisioning goes against IaC principles. IaC promotes automation and declarative configuration management."
    },
    
    // Objective 2: Understand Terraform's purpose (vs other IaC)
    {
        id: 4,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Understand Terraform's purpose (vs other IaC)",
        question: "How does Terraform differ from configuration management tools like Ansible?",
        options: [
            "Terraform only works with AWS",
            "Terraform focuses on infrastructure provisioning, while Ansible focuses on configuration management",
            "Terraform requires agents on target machines",
            "Terraform cannot manage cloud resources"
        ],
        correctAnswer: 1,
        explanation: "Terraform is primarily designed for infrastructure provisioning and lifecycle management, while tools like Ansible are better suited for configuration management and application deployment."
    },
    {
        id: 5,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 2,
        objectiveName: "Understand Terraform's purpose (vs other IaC)",
        question: "What makes Terraform cloud-agnostic?",
        options: [
            "It only works with one cloud provider",
            "It uses provider plugins to support multiple platforms",
            "It requires separate tools for each cloud",
            "It doesn't support cloud platforms"
        ],
        correctAnswer: 1,
        explanation: "Terraform uses provider plugins that allow it to manage resources across multiple cloud platforms and services, making it cloud-agnostic."
    },

    // Objective 3: Understand Terraform basics
    {
        id: 6,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Understand Terraform basics",
        question: "Which command initializes a new Terraform working directory?",
        code: `# Directory structure
.
├── main.tf
├── variables.tf
└── outputs.tf`,
        options: [
            "terraform plan",
            "terraform apply",
            "terraform init",
            "terraform validate"
        ],
        correctAnswer: 2,
        explanation: "The 'terraform init' command initializes a working directory containing Terraform configuration files. This is the first command that should be run after writing a new Terraform configuration or cloning an existing one."
    },
    {
        id: 7,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Understand Terraform basics",
        question: "What does the following Terraform configuration block define?",
        code: `resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"

  tags = {
    Name = "HelloWorld"
  }
}`,
        options: [
            "A data source for an AWS instance",
            "A variable definition",
            "A resource block for creating an AWS EC2 instance",
            "An output value"
        ],
        correctAnswer: 2,
        explanation: "This is a resource block that defines an AWS EC2 instance to be created with the specified AMI, instance type, and tags."
    },
    {
        id: 8,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 3,
        objectiveName: "Understand Terraform basics",
        question: "What file extension do Terraform configuration files use?",
        options: [
            ".tf",
            ".yaml",
            ".json",
            ".hcl"
        ],
        correctAnswer: 0,
        explanation: "Terraform configuration files use the .tf extension and are written in HashiCorp Configuration Language (HCL)."
    },

    // Objective 4: Use the Terraform CLI (outside of core workflow)
    {
        id: 9,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Use the Terraform CLI (outside of core workflow)",
        question: "Which command shows the current state of resources managed by Terraform?",
        options: [
            "terraform show",
            "terraform state list",
            "terraform state show",
            "All of the above"
        ],
        correctAnswer: 3,
        explanation: "All three commands can show state information: 'terraform show' displays the state file, 'terraform state list' lists resources, and 'terraform state show' shows details of specific resources."
    },
    {
        id: 10,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 4,
        objectiveName: "Use the Terraform CLI (outside of core workflow)",
        question: "What does the 'terraform import' command do?",
        options: [
            "Imports configuration files from another directory",
            "Imports existing infrastructure into Terraform state",
            "Imports modules from the Terraform Registry",
            "Imports environment variables"
        ],
        correctAnswer: 1,
        explanation: "The 'terraform import' command allows you to import existing infrastructure resources into your Terraform state, enabling Terraform to manage previously created resources."
    },

    // Objective 5: Interact with Terraform modules
    {
        id: 11,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 5,
        objectiveName: "Interact with Terraform modules",
        question: "How do you call a module in Terraform?",
        code: `module "vpc" {
  source = "terraform-aws-modules/vpc/aws"
  
  name = "my-vpc"
  cidr = "10.0.0.0/16"
}`,
        options: [
            "Using the 'resource' block",
            "Using the 'module' block",
            "Using the 'data' block",
            "Using the 'provider' block"
        ],
        correctAnswer: 1,
        explanation: "Modules are called using the 'module' block, which specifies the source location and passes input variables to the module."
    },
    {
        id: 12,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 5,
        objectiveName: "Interact with Terraform modules",
        question: "Where can Terraform modules be sourced from?",
        options: [
            "Local file system only",
            "Terraform Registry only", 
            "Git repositories only",
            "Local file system, Terraform Registry, Git repositories, and HTTP URLs"
        ],
        correctAnswer: 3,
        explanation: "Terraform modules can be sourced from multiple locations including local paths, the Terraform Registry, Git repositories, and HTTP URLs."
    },

    // Objective 6: Navigate Terraform workflow
    {
        id: 13,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 6,
        objectiveName: "Navigate Terraform workflow",
        question: "What is the correct order of the core Terraform workflow?",
        options: [
            "Write → Plan → Apply",
            "Init → Write → Plan → Apply",
            "Plan → Write → Apply",
            "Write → Init → Plan → Apply"
        ],
        correctAnswer: 3,
        explanation: "The core Terraform workflow is: Write configuration → Initialize (terraform init) → Plan changes (terraform plan) → Apply changes (terraform apply)."
    },
    {
        id: 14,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 6,
        objectiveName: "Navigate Terraform workflow",
        question: "What does 'terraform plan' do?",
        options: [
            "Creates infrastructure resources",
            "Shows what changes Terraform will make",
            "Destroys infrastructure resources",
            "Validates configuration syntax"
        ],
        correctAnswer: 1,
        explanation: "'terraform plan' creates an execution plan, showing what actions Terraform will take to reach the desired state defined in the configuration files."
    },

    // Objective 7: Implement and maintain state
    {
        id: 15,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "What is the purpose of Terraform state?",
        options: [
            "To store configuration files",
            "To track resource metadata and improve performance",
            "To store provider plugins",
            "To cache downloaded modules"
        ],
        correctAnswer: 1,
        explanation: "Terraform state tracks metadata about resources, maps configuration to real-world resources, and improves performance by caching resource attributes."
    },
    {
        id: 16,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "Which backend type is recommended for production environments?",
        code: `terraform {
  backend "s3" {
    bucket = "my-terraform-state"
    key    = "terraform.tfstate"
    region = "us-west-2"
  }
}`,
        options: [
            "Local backend",
            "Remote backend like S3",
            "In-memory backend",
            "File system backend"
        ],
        correctAnswer: 1,
        explanation: "Remote backends like S3 are recommended for production as they provide state locking, encryption, and team collaboration features."
    },

    // Objective 8: Read, generate, and modify configuration
    {
        id: 17,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "What is the purpose of the 'count' meta-argument?",
        code: `resource "aws_instance" "web" {
  count         = 3
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
}`,
        options: [
            "To count existing resources",
            "To create multiple instances of a resource",
            "To limit the number of resources",
            "To validate resource configuration"
        ],
        correctAnswer: 1,
        explanation: "The 'count' meta-argument creates multiple instances of a resource. In this example, it creates 3 EC2 instances."
    },
    {
        id: 18,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "What does 'for_each' provide that 'count' doesn't?",
        code: `resource "aws_instance" "web" {
  for_each      = toset(["web", "app", "db"])
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
  
  tags = {
    Name = each.key
  }
}`,
        options: [
            "Better performance",
            "More readable output",
            "Stable resource addresses when the collection changes",
            "Support for complex data types"
        ],
        correctAnswer: 2,
        explanation: "'for_each' provides stable resource addresses based on map keys or set values, making it safer when the collection changes compared to 'count' which uses index numbers."
    },

    // Objective 9: Understand Terraform Cloud and Enterprise capabilities
    {
        id: 19,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 9,
        objectiveName: "Understand Terraform Cloud and Enterprise capabilities",
        question: "What is a key benefit of Terraform Cloud?",
        options: [
            "Local state management only",
            "Remote execution and collaboration features",
            "Faster local development",
            "Reduced configuration complexity"
        ],
        correctAnswer: 1,
        explanation: "Terraform Cloud provides remote execution, state management, collaboration features, and policy enforcement for teams."
    },
    {
        id: 20,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 9,
        objectiveName: "Understand Terraform Cloud and Enterprise capabilities",
        question: "What are Sentinel policies used for in Terraform Enterprise?",
        options: [
            "State file encryption",
            "Policy as code for governance and compliance",
            "Resource naming conventions",
            "Performance optimization"
        ],
        correctAnswer: 1,
        explanation: "Sentinel policies implement policy as code, enabling governance, compliance, and security controls in Terraform Enterprise."
    },

    // Additional questions from various objectives
    {
        id: 21,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Understand Terraform basics",
        question: "What is the difference between 'terraform plan' and 'terraform apply'?",
        options: [
            "There is no difference",
            "Plan shows intended changes, apply executes them",
            "Plan executes changes, apply shows them",
            "Plan is for validation, apply is for formatting"
        ],
        correctAnswer: 1,
        explanation: "'terraform plan' shows what changes will be made without executing them, while 'terraform apply' actually executes the changes to create, modify, or destroy infrastructure."
    },
    {
        id: 22,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "How do you define a variable in Terraform?",
        code: `variable "instance_type" {
  description = "Type of EC2 instance"
  type        = string
  default     = "t2.micro"
}`,
        options: [
            "Using the 'var' block",
            "Using the 'variable' block", 
            "Using the 'input' block",
            "Using the 'parameter' block"
        ],
        correctAnswer: 1,
        explanation: "Variables are defined using the 'variable' block, which can include description, type, default value, and validation rules."
    },
    {
        id: 23,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "What command would you use to remove a resource from Terraform state without destroying it?",
        options: [
            "terraform state rm",
            "terraform destroy",
            "terraform delete",
            "terraform state delete"
        ],
        correctAnswer: 0,
        explanation: "'terraform state rm' removes a resource from the Terraform state file without destroying the actual infrastructure resource."
    },
    {
        id: 24,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "What does the 'depends_on' meta-argument do?",
        code: `resource "aws_eip" "ip" {
  instance   = aws_instance.web.id
  depends_on = [aws_internet_gateway.gw]
}`,
        options: [
            "Creates a dependency between resources",
            "Validates resource configuration",
            "Counts resource instances",
            "Defines resource outputs"
        ],
        correctAnswer: 0,
        explanation: "'depends_on' explicitly defines dependencies between resources, ensuring proper creation and destruction order when implicit dependencies aren't sufficient."
    },
    {
        id: 25,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 6,
        objectiveName: "Navigate Terraform workflow",
        question: "What does 'terraform destroy' do?",
        options: [
            "Deletes configuration files",
            "Destroys all infrastructure managed by Terraform",
            "Removes the Terraform binary",
            "Clears the provider cache"
        ],
        correctAnswer: 1,
        explanation: "'terraform destroy' terminates and removes all infrastructure resources managed by the current Terraform configuration."
    },
    {
        id: 26,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 4,
        objectiveName: "Use the Terraform CLI (outside of core workflow)",
        question: "Which command checks if a Terraform configuration is syntactically valid?",
        options: [
            "terraform check",
            "terraform validate",
            "terraform verify",
            "terraform test"
        ],
        correctAnswer: 1,
        explanation: "'terraform validate' verifies that a configuration is syntactically valid and internally consistent, regardless of any provided variables or existing state."
    },
    {
        id: 27,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 5,
        objectiveName: "Interact with Terraform modules",
        question: "What command downloads and installs modules referenced in the configuration?",
        options: [
            "terraform get",
            "terraform init",
            "terraform install",
            "terraform download"
        ],
        correctAnswer: 1,
        explanation: "'terraform init' downloads and installs all modules referenced in the configuration, along with provider plugins."
    },
    {
        id: 28,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "What is state locking and why is it important?",
        options: [
            "Encrypting state files for security",
            "Preventing concurrent Terraform operations that could corrupt state",
            "Backing up state files automatically",
            "Compressing state files to save space"
        ],
        correctAnswer: 1,
        explanation: "State locking prevents multiple users from running Terraform operations simultaneously, which could corrupt the state file or cause conflicts."
    },
    {
        id: 29,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Understand Terraform's purpose (vs other IaC)",
        question: "Which of the following best describes Terraform's approach?",
        options: [
            "Imperative - you specify how to achieve the desired state",
            "Declarative - you specify the desired end state",
            "Procedural - you write step-by-step instructions",
            "Object-oriented - you define classes and objects"
        ],
        correctAnswer: 1,
        explanation: "Terraform uses a declarative approach where you describe the desired end state of your infrastructure, and Terraform figures out how to achieve it."
    },
    {
        id: 30,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Understand Infrastructure as Code (IaC) concepts",
        question: "What is the main advantage of treating infrastructure as code?",
        options: [
            "Increased manual intervention",
            "Version control, automation, and repeatability",
            "Reduced documentation needs",
            "Slower deployment processes"
        ],
        correctAnswer: 1,
        explanation: "Treating infrastructure as code provides version control, automation, and repeatability, making infrastructure management more reliable and traceable."
    },
    
    // Additional comprehensive questions for better coverage
    {
        id: 31,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 3,
        objectiveName: "Understand Terraform basics",
        question: "What is the purpose of the terraform.tfvars file?",
        options: [
            "To define variable types and descriptions",
            "To store actual values for variables",
            "To define output values",
            "To configure provider settings"
        ],
        correctAnswer: 1,
        explanation: "The terraform.tfvars file is used to set actual values for variables defined in your Terraform configuration. It's automatically loaded by Terraform when present."
    },
    {
        id: 32,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "What happens if you lose your Terraform state file?",
        options: [
            "Terraform will automatically recreate it",
            "You lose track of managed resources and may create duplicates",
            "All infrastructure will be automatically destroyed",
            "Nothing, Terraform doesn't need state files"
        ],
        correctAnswer: 1,
        explanation: "If you lose your state file, Terraform loses track of what resources it manages. This can lead to orphaned resources or attempts to create duplicate resources. Always backup your state!"
    },
    {
        id: 33,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "What does the 'lifecycle' meta-argument prevent_destroy do?",
        code: `resource "aws_instance" "critical" {
  ami           = "ami-12345678"
  instance_type = "t3.large"
  
  lifecycle {
    prevent_destroy = true
  }
}`,
        options: [
            "Prevents the resource from being updated",
            "Prevents the resource from being destroyed via terraform destroy",
            "Prevents the resource from being created",
            "Prevents the resource from being imported"
        ],
        correctAnswer: 1,
        explanation: "The prevent_destroy lifecycle rule prevents Terraform from destroying a resource. This is useful for protecting critical infrastructure components."
    },
    {
        id: 34,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 4,
        objectiveName: "Use the Terraform CLI (outside of core workflow)",
        question: "Which command formats Terraform configuration files to a canonical format?",
        options: [
            "terraform format",
            "terraform fmt",
            "terraform style",
            "terraform beautify"
        ],
        correctAnswer: 1,
        explanation: "'terraform fmt' formats Terraform configuration files to a canonical format and style, making code more readable and consistent."
    },
    {
        id: 35,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 5,
        objectiveName: "Interact with Terraform modules",
        question: "How do you specify a particular version of a module from the Terraform Registry?",
        code: `module "vpc" {
  source  = "terraform-aws-modules/vpc/aws"
  version = "~> 3.0"
  
  name = "my-vpc"
}`,
        options: [
            "Using the 'version' argument",
            "Using the 'tag' argument", 
            "Using the 'release' argument",
            "Versions cannot be specified"
        ],
        correctAnswer: 0,
        explanation: "The 'version' argument in a module block specifies which version of the module to use. Version constraints like '~> 3.0' allow for compatible updates."
    },
    {
        id: 36,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "What is the difference between a resource and a data source?",
        code: `# Resource
resource "aws_instance" "web" {
  ami           = "ami-12345678"
  instance_type = "t2.micro"
}

# Data source  
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
}`,
        options: [
            "No difference, they are the same",
            "Resources create infrastructure, data sources read existing infrastructure",
            "Data sources create infrastructure, resources read existing infrastructure", 
            "Resources are for AWS, data sources are for other providers"
        ],
        correctAnswer: 1,
        explanation: "Resources create, update, and destroy infrastructure. Data sources read information about existing infrastructure or compute values without managing infrastructure."
    },
    {
        id: 37,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 6,
        objectiveName: "Navigate Terraform workflow",
        question: "What does the -auto-approve flag do with terraform apply?",
        options: [
            "Automatically approves the plan without user confirmation",
            "Automatically generates a plan",
            "Automatically validates the configuration",
            "Automatically formats the code"
        ],
        correctAnswer: 0,
        explanation: "The -auto-approve flag skips the interactive approval step during terraform apply, automatically proceeding with the plan execution. Use with caution!"
    },
    {
        id: 38,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 9,
        objectiveName: "Understand Terraform Cloud and Enterprise capabilities",
        question: "What is the primary purpose of Sentinel in Terraform Enterprise?",
        options: [
            "State file encryption",
            "Policy as code enforcement",
            "Performance monitoring",
            "User authentication"
        ],
        correctAnswer: 1,
        explanation: "Sentinel is a policy-as-code framework that allows you to enforce rules and policies across your Terraform configurations before they are applied."
    },
    {
        id: 39,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Understand Infrastructure as Code (IaC) concepts",
        question: "What does 'idempotent' mean in the context of Infrastructure as Code?",
        options: [
            "Operations can be run only once",
            "Operations produce the same result regardless of how many times they're executed",
            "Operations must be run in a specific order",
            "Operations require manual intervention"
        ],
        correctAnswer: 1,
        explanation: "Idempotent means that running the same operation multiple times produces the same result. This is a key principle of IaC tools like Terraform."
    },
    {
        id: 40,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 2,
        objectiveName: "Understand Terraform's purpose (vs other IaC)",
        question: "Which language does Terraform use for its configuration files?",
        options: [
            "YAML",
            "JSON", 
            "HCL (HashiCorp Configuration Language)",
            "XML"
        ],
        correctAnswer: 2,
        explanation: "Terraform uses HCL (HashiCorp Configuration Language), which is designed to be both human-readable and machine-parsable."
    },
    {
        id: 41,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "Which of the following is NOT stored in Terraform state?",
        options: [
            "Resource metadata",
            "Resource dependencies",
            "Terraform configuration code",
            "Provider configuration"
        ],
        correctAnswer: 2,
        explanation: "Terraform state stores resource metadata, dependencies, and provider info, but not the actual configuration code (.tf files)."
    },
    {
        id: 42,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 4,
        objectiveName: "Use the Terraform CLI (outside of core workflow)",
        question: "What does 'terraform taint' do?",
        options: [
            "Marks a resource as corrupted in the state file",
            "Marks a resource for recreation on the next apply",
            "Removes a resource from state",
            "Validates a resource configuration"
        ],
        correctAnswer: 1,
        explanation: "'terraform taint' marks a resource for recreation. On the next terraform apply, the resource will be destroyed and recreated."
    },
    {
        id: 43,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "How do you reference an output from another Terraform configuration?",
        code: `# In configuration A
output "vpc_id" {
  value = aws_vpc.main.id
}

# In configuration B  
data "terraform_remote_state" "network" {
  backend = "s3"
  config = {
    bucket = "my-terraform-state"
    key    = "network/terraform.tfstate"
    region = "us-west-2"
  }
}`,
        options: [
            "terraform_remote_state data source",
            "Direct variable reference",
            "Module output",
            "Environment variables"
        ],
        correctAnswer: 0,
        explanation: "The terraform_remote_state data source allows you to access outputs from another Terraform configuration's state file."
    },
    {
        id: 44,
        type: "Multiple Choice", 
        difficulty: "Easy",
        objective: 3,
        objectiveName: "Understand Terraform basics",
        question: "What is a Terraform provider?",
        options: [
            "A cloud service vendor",
            "A plugin that enables Terraform to interact with APIs",
            "A configuration file template",
            "A user who provides Terraform configurations"
        ],
        correctAnswer: 1,
        explanation: "A Terraform provider is a plugin that enables Terraform to interact with APIs of cloud providers, SaaS providers, and other services."
    },
    {
        id: 45,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 5,
        objectiveName: "Interact with Terraform modules",
        question: "What happens when you change the source of a module?",
        options: [
            "Terraform automatically downloads the new module",
            "You must run 'terraform init' to download the new module",
            "The old module continues to be used",
            "Terraform throws an error"
        ],
        correctAnswer: 1,
        explanation: "When you change a module source, you must run 'terraform init' to download and install the new module version."
    },
    {
        id: 46,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 6,
        objectiveName: "Navigate Terraform workflow",
        question: "What is the purpose of a Terraform workspace?",
        options: [
            "To organize Terraform files",
            "To manage multiple state files for the same configuration",
            "To store provider credentials",
            "To cache downloaded modules"
        ],
        correctAnswer: 1,
        explanation: "Workspaces allow you to manage multiple instances of the same configuration with separate state files. Each workspace has its own state."
    },
    {
        id: 47,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 8,
        objectiveName: "Read, generate, and modify configuration",
        question: "What does the 'ignore_changes' lifecycle rule do?",
        code: `resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
  
  lifecycle {
    ignore_changes = [ami]
  }
}`,
        options: [
            "Ignores all changes to the resource",
            "Ignores changes to specified attributes",
            "Prevents the resource from being created",
            "Ignores validation errors"
        ],
        correctAnswer: 1,
        explanation: "The ignore_changes lifecycle rule tells Terraform to ignore changes to specified attributes, useful when external systems modify resources."
    },
    {
        id: 48,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 9,
        objectiveName: "Understand Terraform Cloud and Enterprise capabilities",
        question: "What is a workspace in Terraform Cloud?",
        options: [
            "A local directory with Terraform files",
            "A collection of infrastructure and the state that represents it", 
            "A user account in Terraform Cloud",
            "A type of Terraform provider"
        ],
        correctAnswer: 1,
        explanation: "In Terraform Cloud, a workspace represents a collection of infrastructure and the state that represents it, along with variables and settings."
    },
    {
        id: 49,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 1,
        objectiveName: "Understand Infrastructure as Code (IaC) concepts",
        question: "What is configuration drift?",
        options: [
            "When configuration files become corrupted",
            "When actual infrastructure differs from the defined configuration",
            "When Terraform commands fail",
            "When providers are outdated"
        ],
        correctAnswer: 1,
        explanation: "Configuration drift occurs when the actual state of infrastructure differs from what's defined in the configuration, often due to manual changes."
    },
    {
        id: 50,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 7,
        objectiveName: "Implement and maintain state",
        question: "What is the recommended approach for sharing Terraform state among team members?",
        options: [
            "Share the state file via email",
            "Store state file in version control",
            "Use a remote backend with state locking",
            "Each team member maintains their own state"
        ],
        correctAnswer: 2,
        explanation: "The recommended approach is to use a remote backend (like S3) with state locking (like DynamoDB) to safely share state among team members and prevent conflicts."
    }];

// Study Guide Content organized by certification objectives
const studyGuide = {
    1: {
        title: "Understand Infrastructure as Code (IaC) concepts",
        content: [
            {
                topic: "What is Infrastructure as Code?",
                details: "Infrastructure as Code (IaC) is the practice of managing and provisioning computing infrastructure through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools."
            },
            {
                topic: "Benefits of IaC",
                details: "Version control, consistency, repeatability, collaboration, automation, reduced human error, faster deployments, easier rollbacks, and cost optimization."
            },
            {
                topic: "IaC vs Traditional Infrastructure",
                details: "Traditional: Manual, error-prone, inconsistent, difficult to scale. IaC: Automated, consistent, version-controlled, easily scalable and maintainable."
            }
        ]
    },
    2: {
        title: "Understand Terraform's purpose (vs other IaC)",
        content: [
            {
                topic: "Terraform Overview",
                details: "Terraform is a cloud-agnostic infrastructure as code tool that enables you to safely and predictably create, change, and improve infrastructure using declarative configuration files."
            },
            {
                topic: "Terraform vs Other Tools",
                details: "CloudFormation (AWS-only), ARM templates (Azure-only), Ansible (configuration management), Pulumi (multiple languages). Terraform is multi-cloud, declarative, and has a large provider ecosystem."
            },
            {
                topic: "Key Advantages",
                details: "Multi-cloud support, large provider ecosystem, state management, plan-before-apply workflow, modular and reusable code, active community and documentation."
            }
        ]
    },
    3: {
        title: "Understand Terraform basics",
        content: [
            {
                topic: "Terraform Workflow",
                details: "Write → Plan → Apply. Write configuration files, run 'terraform plan' to preview changes, then 'terraform apply' to execute changes."
            },
            {
                topic: "HCL Language",
                details: "HashiCorp Configuration Language (HCL) is human-readable and machine-parseable. Uses blocks, arguments, and expressions to define infrastructure."
            },
            {
                topic: "Core Concepts",
                details: "Providers (plugins for services), Resources (infrastructure objects), Data sources (read-only information), Variables (input parameters), Outputs (return values)."
            }
        ]
    },
    4: {
        title: "Use the Terraform CLI (outside of core workflow)",
        content: [
            {
                topic: "Essential Commands",
                details: "terraform init, terraform validate, terraform fmt, terraform show, terraform state, terraform import, terraform refresh, terraform destroy."
            },
            {
                topic: "State Management Commands",
                details: "terraform state list, terraform state show, terraform state mv, terraform state rm, terraform state pull, terraform state push."
            },
            {
                topic: "Debugging and Troubleshooting",
                details: "TF_LOG environment variable, terraform console for testing expressions, terraform graph for dependency visualization."
            }
        ]
    },
    5: {
        title: "Interact with Terraform modules",
        content: [
            {
                topic: "Module Basics",
                details: "Modules are containers for multiple resources used together. Root module is your main configuration, child modules are called by root or other modules."
            },
            {
                topic: "Module Sources",
                details: "Local paths, Terraform Registry, Git repositories, S3 buckets, HTTP URLs. Public modules available on registry.terraform.io."
            },
            {
                topic: "Module Structure",
                details: "main.tf (primary logic), variables.tf (input variables), outputs.tf (output values), README.md (documentation), versions.tf (provider requirements)."
            }
        ]
    },
    6: {
        title: "Navigate Terraform workflow",
        content: [
            {
                topic: "Core Workflow Steps",
                details: "1. Write configuration, 2. Initialize working directory (terraform init), 3. Plan changes (terraform plan), 4. Apply changes (terraform apply), 5. Manage state."
            },
            {
                topic: "Environment Management",
                details: "Use workspaces for environment isolation, separate state files, variable files for environment-specific values, remote backends for team collaboration."
            },
            {
                topic: "Best Practices",
                details: "Version pin providers, use remote state, implement state locking, validate configurations, use consistent naming conventions, document your code."
            }
        ]
    },
    7: {
        title: "Implement and maintain state",
        content: [
            {
                topic: "State File Purpose",
                details: "State file maps real-world resources to configuration, tracks metadata, improves performance, and enables collaboration. Never edit state file manually."
            },
            {
                topic: "Remote State",
                details: "Store state remotely for team collaboration using S3, Azure Storage, GCS, Terraform Cloud. Enables state locking and backup."
            },
            {
                topic: "State Locking",
                details: "Prevents concurrent modifications using DynamoDB (AWS), Azure Storage locks, or Terraform Cloud. Essential for team environments."
            }
        ]
    },
    8: {
        title: "Read, generate, and modify configuration",
        content: [
            {
                topic: "Resource Configuration",
                details: "Resource blocks define infrastructure objects. Syntax: resource 'type' 'name' { arguments }. Reference with type.name.attribute."
            },
            {
                topic: "Variables and Outputs",
                details: "Variables parameterize configurations. Outputs expose information. Use locals for computed values. Validation rules ensure correct inputs."
            },
            {
                topic: "Functions and Expressions",
                details: "Built-in functions for string manipulation, collection operations, date/time, cryptographic operations. Conditional expressions and for loops."
            }
        ]
    },
    9: {
        title: "Understand Terraform Cloud and Enterprise capabilities",
        content: [
            {
                topic: "Terraform Cloud Features",
                details: "Remote operations, state management, team collaboration, policy enforcement, cost estimation, private module registry, VCS integration."
            },
            {
                topic: "Terraform Enterprise",
                details: "Self-hosted version with additional features: SSO integration, audit logging, clustering, air-gapped environments, advanced security features."
            },
            {
                topic: "Team Collaboration",
                details: "Workspaces for organizing infrastructure, teams and permissions, sentinel policies for governance, run triggers for automation."
            }
        ]
    }
};
