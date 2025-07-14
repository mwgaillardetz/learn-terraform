// Terraform Associate Practice Exam Questions
const examQuestions = [
    {
        id: 1,
        type: "Multiple Choice",
        difficulty: "Easy",
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
        difficulty: "Medium",
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
        id: 3,
        type: "Multiple Choice",
        difficulty: "Medium",
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
            "A variable for instance configuration",
            "A resource for creating an AWS EC2 instance",
            "An output for displaying instance information"
        ],
        correctAnswer: 2,
        explanation: "This is a resource block that defines an AWS EC2 instance. The 'resource' keyword indicates this will create infrastructure, 'aws_instance' is the resource type, and 'web' is the local name for this resource."
    },
    {
        id: 4,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which file extension is used for Terraform configuration files?",
        options: [
            ".tf",
            ".terraform",
            ".hcl",
            ".json"
        ],
        correctAnswer: 0,
        explanation: "Terraform configuration files use the .tf extension. While Terraform can also read .tf.json files (JSON syntax), the standard and most commonly used extension is .tf for HCL (HashiCorp Configuration Language) syntax."
    },
    {
        id: 5,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What happens when you run 'terraform plan' with the following configuration?",
        code: `resource "aws_instance" "example" {
  count         = var.instance_count
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
}

variable "instance_count" {
  description = "Number of instances to create"
  type        = number
  default     = 2
}`,
        options: [
            "Creates 2 AWS instances immediately",
            "Shows a plan to create 2 AWS instances",
            "Validates the configuration syntax only",
            "Destroys existing instances and creates new ones"
        ],
        correctAnswer: 1,
        explanation: "The 'terraform plan' command creates an execution plan showing what actions Terraform will take to reach the desired state. It doesn't actually create resources - it only shows what would be created, modified, or destroyed. In this case, it would show a plan to create 2 AWS instances due to the count parameter."
    },
    {
        id: 6,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "Which command would you use to apply the changes planned by Terraform?",
        options: [
            "terraform execute",
            "terraform run",
            "terraform apply",
            "terraform deploy"
        ],
        correctAnswer: 2,
        explanation: "The 'terraform apply' command executes the actions proposed in a Terraform plan. It will prompt for confirmation before making any changes unless you use the -auto-approve flag."
    },
    {
        id: 7,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "What is Terraform state?",
        options: [
            "A log of all Terraform commands executed",
            "A record of the current state of managed infrastructure",
            "The configuration files written by the user",
            "The output of terraform plan command"
        ],
        correctAnswer: 1,
        explanation: "Terraform state is a record of the current state of your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and improve performance for large infrastructures."
    },
    {
        id: 8,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the purpose of the following code block?",
        code: `variable "region" {
  description = "AWS region"
  type        = string
  default     = "us-west-2"
}`,
        options: [
            "It defines an output value",
            "It creates a resource",
            "It defines an input variable",
            "It configures a provider"
        ],
        correctAnswer: 2,
        explanation: "This is a variable block that defines an input variable named 'region'. Variables allow you to parameterize your configurations, making them more flexible and reusable. The variable has a default value of 'us-west-2' but can be overridden when running Terraform."
    },
    {
        id: 9,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will happen if you run 'terraform destroy' on this configuration?",
        code: `resource "aws_s3_bucket" "example" {
  bucket = "my-unique-bucket-name-12345"
}

resource "aws_s3_bucket_object" "example" {
  bucket = aws_s3_bucket.example.bucket
  key    = "example.txt"
  source = "example.txt"
}`,
        options: [
            "Only the S3 bucket will be destroyed",
            "Only the S3 object will be destroyed",
            "Both the S3 object and bucket will be destroyed in dependency order",
            "An error will occur due to dependencies"
        ],
        correctAnswer: 2,
        explanation: "Terraform will destroy both resources in the correct dependency order. Since the S3 object depends on the bucket, Terraform will first destroy the object, then the bucket. Terraform automatically handles dependency ordering during destruction."
    },
    {
        id: 10,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which command checks the syntax and validates a Terraform configuration?",
        options: [
            "terraform check",
            "terraform validate",
            "terraform verify",
            "terraform syntax"
        ],
        correctAnswer: 1,
        explanation: "The 'terraform validate' command validates the configuration files in a directory, referring only to the configuration and not accessing any remote services such as remote state, provider APIs, etc."
    },
    {
        id: 11,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What does this output block accomplish?",
        code: `output "instance_ip" {
  description = "The public IP address of the instance"
  value       = aws_instance.web.public_ip
}`,
        options: [
            "Creates a new resource with public IP",
            "Displays the public IP after terraform apply",
            "Configures the instance's public IP",
            "Validates the instance's IP address"
        ],
        correctAnswer: 1,
        explanation: "Output blocks define values that will be displayed to the user after Terraform applies the configuration. This output will show the public IP address of the 'web' instance after it's created."
    },
    {
        id: 12,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What is the purpose of terraform.tfvars file?",
        options: [
            "To store Terraform state information",
            "To define resource configurations",
            "To provide values for input variables",
            "To store provider configurations"
        ],
        correctAnswer: 2,
        explanation: "The terraform.tfvars file (or *.tfvars files) are used to set values for input variables. Terraform automatically loads variable definitions from files named terraform.tfvars or *.auto.tfvars in the current directory."
    },
    {
        id: 13,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "Which of the following is NOT a valid Terraform variable type?",
        options: [
            "string",
            "number",
            "boolean",
            "array"
        ],
        correctAnswer: 3,
        explanation: "The valid Terraform primitive types are string, number, and bool (not boolean). Complex types include list, set, map, object, and tuple. There is no 'array' type in Terraform - you would use 'list' instead."
    },
    {
        id: 14,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "What command would you use to see the current state of your infrastructure?",
        options: [
            "terraform show",
            "terraform state",
            "terraform list",
            "terraform status"
        ],
        correctAnswer: 0,
        explanation: "The 'terraform show' command provides human-readable output from a state or plan file. It's useful for inspecting the current state of your infrastructure or reviewing a planned set of changes."
    },
    {
        id: 15,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What is the effect of the following locals block?",
        code: `locals {
  instance_tags = {
    Environment = var.environment
    Project     = "WebApp"
    Owner       = "DevOps Team"
  }
}

resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
  tags          = local.instance_tags
}`,
        options: [
            "Creates a variable that can be set externally",
            "Defines reusable values within the configuration",
            "Creates a data source for tags",
            "Configures provider-specific settings"
        ],
        correctAnswer: 1,
        explanation: "The locals block defines local values that can be reused throughout the configuration. Local values are like variables but are set within the configuration itself rather than passed in from outside. This helps avoid repetition and makes configurations more maintainable."
    },
    {
        id: 16,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What does the count meta-argument do in this resource?",
        code: `resource "aws_instance" "web" {
  count         = 3
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"

  tags = {
    Name = "web-server-\${count.index}"
  }
}`,
        options: [
            "Creates a single instance with count of 3",
            "Creates 3 identical instances",
            "Creates 3 instances with different names",
            "Sets the instance count limit to 3"
        ],
        correctAnswer: 2,
        explanation: "The count meta-argument creates multiple instances of the resource. In this case, it creates 3 AWS instances. The count.index value provides the index (0, 1, 2) which is used to give each instance a unique name: web-server-0, web-server-1, web-server-2."
    },
    {
        id: 17,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which provider is responsible for managing AWS resources in Terraform?",
        options: [
            "hashicorp/terraform",
            "hashicorp/aws",
            "amazon/aws",
            "aws/terraform"
        ],
        correctAnswer: 1,
        explanation: "The 'hashicorp/aws' provider is the official AWS provider for Terraform, maintained by HashiCorp. It provides resources and data sources for Amazon Web Services."
    },
    {
        id: 18,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will happen when this configuration is applied?",
        code: `data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"] # Canonical

  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd/ubuntu-focal-20.04-amd64-server-*"]
  }
}

resource "aws_instance" "web" {
  ami           = data.aws_ami.ubuntu.id
  instance_type = "t2.micro"
}`,
        options: [
            "Creates an instance with a hardcoded AMI ID",
            "Creates an instance using the most recent Ubuntu 20.04 AMI",
            "Creates multiple instances with different AMIs",
            "Fails because data sources cannot be used in resources"
        ],
        correctAnswer: 1,
        explanation: "This configuration uses a data source to dynamically find the most recent Ubuntu 20.04 AMI owned by Canonical. The data source queries AWS to find the latest AMI matching the specified filters, and then uses that AMI ID to create the instance."
    },
    {
        id: 19,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the purpose of the terraform.tfstate file?",
        options: [
            "To store variable definitions",
            "To track the state of managed infrastructure",
            "To define resource configurations",
            "To store provider credentials"
        ],
        correctAnswer: 1,
        explanation: "The terraform.tfstate file stores the state of your managed infrastructure and configuration. This state is used by Terraform to map real world resources to your configuration, keep track of metadata, and improve performance."
    },
    {
        id: 20,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which command would you use to format Terraform configuration files?",
        options: [
            "terraform format",
            "terraform fmt",
            "terraform style",
            "terraform beautify"
        ],
        correctAnswer: 1,
        explanation: "The 'terraform fmt' command is used to format Terraform configuration files to a canonical format and style. This helps maintain consistent formatting across your configuration files."
    },
    {
        id: 21,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What is the difference between these two blocks?",
        code: `# Block A
variable "bucket_name" {
  type = string
}

# Block B
locals {
  bucket_name = "my-app-bucket-2023"
}`,
        options: [
            "Both create the same type of value",
            "Block A creates an input variable, Block B creates a local value",
            "Block A is for outputs, Block B is for inputs",
            "There is no functional difference"
        ],
        correctAnswer: 1,
        explanation: "Block A defines an input variable that can be set from outside the configuration (via tfvars files, command line, etc.). Block B defines a local value that is computed within the configuration itself and cannot be overridden externally."
    },
    {
        id: 22,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What does the depends_on meta-argument do?",
        code: `resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"
  depends_on    = [aws_security_group.web]
}`,
        options: [
            "Creates a dependency on the security group resource",
            "Copies configuration from the security group",
            "Creates the resources in parallel",
            "Validates the security group exists"
        ],
        correctAnswer: 0,
        explanation: "The depends_on meta-argument explicitly defines dependencies between resources. It ensures that the security group is created before the instance, even if Terraform can't automatically detect the dependency from the configuration."
    },
    {
        id: 23,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "What is a Terraform module?",
        options: [
            "A single Terraform configuration file",
            "A collection of Terraform configuration files in a directory",
            "A Terraform command",
            "A type of resource"
        ],
        correctAnswer: 1,
        explanation: "A Terraform module is a container for multiple resources that are used together. A module consists of a collection of .tf files kept together in a directory. Every Terraform configuration has at least one module, known as its root module."
    },
    {
        id: 24,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will be the value of local.environment_config?",
        code: `variable "environment" {
  default = "production"
}

locals {
  environment_config = {
    production  = { instance_type = "t3.large", min_size = 3 }
    staging     = { instance_type = "t3.small", min_size = 1 }
    development = { instance_type = "t2.micro", min_size = 1 }
  }[var.environment]
}`,
        options: [
            "{ instance_type = \"t2.micro\", min_size = 1 }",
            "{ instance_type = \"t3.large\", min_size = 3 }",
            "{ instance_type = \"t3.small\", min_size = 1 }",
            "An error will occur"
        ],
        correctAnswer: 1,
        explanation: "Since the variable 'environment' has a default value of 'production', the local value will select the production configuration from the map, resulting in { instance_type = \"t3.large\", min_size = 3 }."
    },
    {
        id: 25,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "Which command removes resources from Terraform state without destroying them?",
        options: [
            "terraform delete",
            "terraform remove",
            "terraform state rm",
            "terraform untrace"
        ],
        correctAnswer: 2,
        explanation: "The 'terraform state rm' command removes items from the Terraform state. This tells Terraform to stop managing the resource, but it doesn't destroy the actual infrastructure resource."
    },
    {
        id: 26,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "What is the default name for Terraform's main configuration file?",
        options: [
            "terraform.tf",
            "main.tf",
            "config.tf",
            "infrastructure.tf"
        ],
        correctAnswer: 1,
        explanation: "While Terraform will read all .tf files in a directory, the convention is to use 'main.tf' as the primary configuration file. However, you can name your files anything as long as they have the .tf extension."
    },
    {
        id: 27,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What happens when you use for_each with this configuration?",
        code: `variable "users" {
  default = ["alice", "bob", "charlie"]
}

resource "aws_iam_user" "users" {
  for_each = toset(var.users)
  name     = each.value
}`,
        options: [
            "Creates one user with all three names",
            "Creates three separate IAM users",
            "Creates a group with three users",
            "Results in an error because for_each requires a map"
        ],
        correctAnswer: 1,
        explanation: "The for_each meta-argument creates multiple instances of a resource based on a set or map. Using toset() converts the list to a set, and for_each creates three separate IAM users: alice, bob, and charlie. The each.value provides the current item being iterated over."
    },
    {
        id: 28,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the purpose of the provider block?",
        code: `provider "aws" {
  region = "us-west-2"

  default_tags {
    tags = {
      Environment = "Production"
      ManagedBy   = "Terraform"
    }
  }
}`,
        options: [
            "Defines a new resource type",
            "Configures the AWS provider with specific settings",
            "Creates AWS credentials",
            "Defines output values"
        ],
        correctAnswer: 1,
        explanation: "Provider blocks configure the specified provider (in this case, AWS). This block sets the region to us-west-2 and configures default tags that will be applied to all resources created by this provider."
    },
    {
        id: 29,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which command would you use to import existing infrastructure into Terraform?",
        options: [
            "terraform add",
            "terraform import",
            "terraform include",
            "terraform attach"
        ],
        correctAnswer: 1,
        explanation: "The 'terraform import' command is used to bring existing infrastructure under Terraform management. It imports the current state of the infrastructure resource into your Terraform state file."
    },
    {
        id: 30,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will be the result of this conditional expression?",
        code: `variable "environment" {
  default = "development"
}

locals {
  instance_type = var.environment == "production" ? "t3.large" : "t2.micro"
}`,
        options: [
            "t3.large",
            "t2.micro",
            "development",
            "An error will occur"
        ],
        correctAnswer: 1,
        explanation: "This is a conditional expression using the ternary operator. Since var.environment is 'development' (not 'production'), the condition is false, so it returns the second value: 't2.micro'."
    },
    {
        id: 31,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What does terraform refresh do?",
        options: [
            "Updates the configuration files",
            "Reinstalls provider plugins",
            "Updates the state file with real infrastructure",
            "Restarts Terraform processes"
        ],
        correctAnswer: 2,
        explanation: "The 'terraform refresh' command updates the state file with the current real-world state of the managed infrastructure. It doesn't modify infrastructure, just updates Terraform's understanding of it."
    },
    {
        id: 32,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Where does Terraform store downloaded provider plugins?",
        options: [
            ".terraform/providers/",
            ".terraform/plugins/",
            "~/.terraform/",
            "/usr/local/terraform/"
        ],
        correctAnswer: 0,
        explanation: "Terraform stores downloaded provider plugins in the .terraform/providers/ directory within your working directory. This directory is created when you run 'terraform init'."
    },
    {
        id: 33,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What is the purpose of this terraform block?",
        code: `terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket = "my-terraform-state"
    key    = "infrastructure/terraform.tfstate"
    region = "us-west-2"
  }
}`,
        options: [
            "Defines resource requirements",
            "Configures Terraform settings and requirements",
            "Creates an S3 bucket for storage",
            "Defines variable constraints"
        ],
        correctAnswer: 1,
        explanation: "The terraform block configures Terraform itself. It specifies the required Terraform version, required providers with version constraints, and configures remote state storage in an S3 backend."
    },
    {
        id: 34,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the difference between these two references?",
        code: `# Reference A
aws_instance.web.id

# Reference B
aws_instance.web[0].id`,
        options: [
            "Both reference the same instance",
            "Reference A is for single instances, Reference B is for counted instances",
            "Reference A is invalid syntax",
            "Reference B is invalid syntax"
        ],
        correctAnswer: 1,
        explanation: "Reference A is used when the resource doesn't use count or for_each (single instance). Reference B is used when the resource uses count meta-argument, where [0] refers to the first instance in the count."
    },
    {
        id: 35,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which file should you add to .gitignore when using Terraform?",
        options: [
            "main.tf",
            "variables.tf",
            "terraform.tfstate",
            "outputs.tf"
        ],
        correctAnswer: 2,
        explanation: "The terraform.tfstate file should be added to .gitignore because it contains sensitive information about your infrastructure and should not be stored in version control. Instead, use remote state backends for team collaboration."
    },
    {
        id: 36,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will this dynamic block create?",
        code: `variable "ingress_rules" {
  default = [
    { from_port = 80, to_port = 80, protocol = "tcp" },
    { from_port = 443, to_port = 443, protocol = "tcp" },
    { from_port = 22, to_port = 22, protocol = "tcp" }
  ]
}

resource "aws_security_group" "web" {
  name = "web-sg"

  dynamic "ingress" {
    for_each = var.ingress_rules
    content {
      from_port   = ingress.value.from_port
      to_port     = ingress.value.to_port
      protocol    = ingress.value.protocol
      cidr_blocks = ["0.0.0.0/0"]
    }
  }
}`,
        options: [
            "One ingress rule with multiple ports",
            "Three separate ingress rules",
            "A dynamic security group name",
            "An error due to invalid syntax"
        ],
        correctAnswer: 1,
        explanation: "The dynamic block creates three separate ingress rules in the security group, one for each item in the var.ingress_rules list. Dynamic blocks allow you to dynamically construct repeatable nested blocks."
    },
    {
        id: 37,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the purpose of terraform workspace?",
        options: [
            "To manage multiple environments with the same configuration",
            "To store Terraform modules",
            "To configure provider settings",
            "To validate configuration syntax"
        ],
        correctAnswer: 0,
        explanation: "Terraform workspaces allow you to manage multiple distinct sets of infrastructure resources with the same configuration. Each workspace has its own state file, enabling you to manage different environments (dev, staging, prod) with the same code."
    },
    {
        id: 38,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which command shows the current workspace?",
        options: [
            "terraform workspace show",
            "terraform workspace current",
            "terraform workspace list",
            "terraform show workspace"
        ],
        correctAnswer: 0,
        explanation: "The 'terraform workspace show' command displays the name of the current workspace. This is useful when working with multiple workspaces to confirm which one you're currently using."
    },
    {
        id: 39,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What is the result of this expression?",
        code: `variable "tags" {
  default = {
    Environment = "production"
    Team        = "devops"
  }
}

locals {
  all_tags = merge(var.tags, {
    Project   = "webapp"
    ManagedBy = "terraform"
  })
}`,
        options: [
            "An error because you can't merge maps",
            "A map with 2 key-value pairs",
            "A map with 4 key-value pairs",
            "Only the second map will be used"
        ],
        correctAnswer: 2,
        explanation: "The merge() function combines multiple maps into a single map. The result will be a map with 4 key-value pairs: Environment, Team, Project, and ManagedBy. If there were duplicate keys, the rightmost map would take precedence."
    },
    {
        id: 40,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What does the lifecycle block prevent in this configuration?",
        code: `resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"

  lifecycle {
    prevent_destroy = true
  }
}`,
        options: [
            "Prevents the instance from starting",
            "Prevents Terraform from destroying the resource",
            "Prevents changes to the instance",
            "Prevents the resource from being created"
        ],
        correctAnswer: 1,
        explanation: "The prevent_destroy lifecycle rule prevents Terraform from destroying the resource. If you try to run 'terraform destroy' or remove this resource from configuration, Terraform will refuse to destroy it and show an error."
    },
    {
        id: 41,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "What is HCL in the context of Terraform?",
        options: [
            "HashiCorp Command Line",
            "HashiCorp Configuration Language",
            "HashiCorp Cloud License",
            "HashiCorp Container Language"
        ],
        correctAnswer: 1,
        explanation: "HCL stands for HashiCorp Configuration Language. It's the domain-specific language used to write Terraform configuration files. HCL is designed to be both human and machine readable."
    },
    {
        id: 42,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What happens when you use this provisioner?",
        code: `resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t2.micro"

  provisioner "local-exec" {
    command = "echo 'Instance created: \${self.id}' >> instances.log"
  }
}`,
        options: [
            "Runs the command on the remote instance",
            "Runs the command on the local machine where Terraform is executed",
            "Creates a log file on the instance",
            "Results in an error because provisioners are deprecated"
        ],
        correctAnswer: 1,
        explanation: "The local-exec provisioner runs commands on the local machine where Terraform is being executed, not on the resource being created. In this case, it appends a log entry to a local file whenever the instance is created."
    },
    {
        id: 43,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the purpose of the sensitive argument in this output?",
        code: `output "database_password" {
  description = "The password for the database"
  value       = aws_db_instance.main.password
  sensitive   = true
}`,
        options: [
            "Encrypts the output value",
            "Hides the output value from Terraform's UI",
            "Marks the output as required",
            "Validates the output format"
        ],
        correctAnswer: 1,
        explanation: "The sensitive argument marks an output value as containing sensitive data. Terraform will hide the actual value in its UI, CLI output, and logs, showing only that the value is marked as sensitive."
    },
    {
        id: 44,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which command would you use to see what changes Terraform will make without applying them?",
        options: [
            "terraform preview",
            "terraform plan",
            "terraform show",
            "terraform diff"
        ],
        correctAnswer: 1,
        explanation: "The 'terraform plan' command creates an execution plan, showing you what actions Terraform will take to reach the desired state defined in your configuration files without actually applying those changes."
    },
    {
        id: 45,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will be the value of local.subnet_ids?",
        code: `variable "availability_zones" {
  default = ["us-west-2a", "us-west-2b", "us-west-2c"]
}

resource "aws_subnet" "private" {
  count             = length(var.availability_zones)
  availability_zone = var.availability_zones[count.index]
  cidr_block        = "10.0.\${count.index + 1}.0/24"
  vpc_id           = aws_vpc.main.id
}

locals {
  subnet_ids = aws_subnet.private[*].id
}`,
        options: [
            "A single subnet ID",
            "A list of all private subnet IDs",
            "An error because of invalid syntax",
            "The count value (3)"
        ],
        correctAnswer: 1,
        explanation: "The [*] splat expression extracts the 'id' attribute from all instances of the aws_subnet.private resource created by count. This results in a list containing all the subnet IDs."
    },
    {
        id: 46,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the difference between a resource and a data source?",
        options: [
            "Resources create infrastructure, data sources read existing infrastructure",
            "Resources are for AWS, data sources are for other providers",
            "Resources are required, data sources are optional",
            "There is no difference"
        ],
        correctAnswer: 0,
        explanation: "Resources are used to create, update, and delete infrastructure objects. Data sources are used to fetch information about existing infrastructure that is managed outside of Terraform or by a different Terraform configuration."
    },
    {
        id: 47,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "What does the .terraform.lock.hcl file contain?",
        options: [
            "Terraform state information",
            "Provider version constraints and checksums",
            "Variable definitions",
            "Resource configurations"
        ],
        correctAnswer: 1,
        explanation: "The .terraform.lock.hcl file contains provider dependency lock information, including exact provider versions and checksums. This ensures that all team members use the same provider versions."
    },
    {
        id: 48,
        type: "Multiple Choice",
        difficulty: "Hard",
        question: "What will happen when this null_resource is applied?",
        code: `resource "null_resource" "example" {
  triggers = {
    always_run = timestamp()
  }

  provisioner "local-exec" {
    command = "echo 'Hello, World!' > hello.txt"
  }
}`,
        options: [
            "Creates a file once and never runs again",
            "Creates a file every time terraform apply is run",
            "Results in an error because null_resource is invalid",
            "Only runs when other resources change"
        ],
        correctAnswer: 1,
        explanation: "The null_resource with a timestamp() trigger will run every time 'terraform apply' is executed because timestamp() always returns a different value, causing the triggers to change and forcing the provisioner to run."
    },
    {
        id: 49,
        type: "Multiple Choice",
        difficulty: "Medium",
        question: "What is the purpose of terraform taint command?",
        options: [
            "Marks a resource for recreation on the next apply",
            "Removes a resource from state",
            "Validates resource configuration",
            "Imports existing resources"
        ],
        correctAnswer: 0,
        explanation: "The 'terraform taint' command marks a resource as degraded or damaged, forcing it to be destroyed and recreated on the next 'terraform apply'. This is useful when a resource is in a bad state."
    },
    {
        id: 50,
        type: "Multiple Choice",
        difficulty: "Easy",
        question: "Which of the following is true about Terraform modules?",
        options: [
            "Modules can only be used locally",
            "Modules promote code reusability and organization",
            "Modules are only available in Terraform Cloud",
            "Modules cannot have input variables"
        ],
        correctAnswer: 1,
        explanation: "Modules are a key feature of Terraform that promote code reusability, organization, and maintainability. They allow you to package and reuse configurations, making your infrastructure code more modular and easier to manage."
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = examQuestions;
}
