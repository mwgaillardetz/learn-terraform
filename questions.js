const examQuestions = [
    // --- PART 1 (Queries 1-35) ---
    {
        id: 1,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 1,
        objectiveName: "Terraform Configuration Management",
        question: "Terraform is currently being used by your organisation to create resources on AWS for the development of a web application. One of your coworkers wants to change the instance type to \"t2.large\" while keeping the default set values. What adjustments does the teammate make in order to meet his goal?",
        options: [
            "Issue Terraform plan instance.type”.t2.large” and it deploys the instance",
            "Modify the tf.variables with the instance type and issue terraform apply",
            "Create a new file my.tfvars and add the type of the instance and issue terraform plan and apply",
            "Modify the terraform.tfvars with the instance type and issue terraform plan and then terraform apply to deploy the instances"
        ],
        correctAnswer: 3,
        explanation: "Answer - D Option A is incorrect since the syntax is incorrect. Option B is incorrect, albeit it is recommended that instead of modifying the default values, you modify the terraform.tfvars variables, as there are no tf.variables in terraform. Terraform plan to check the instance type and then terraform apply for changes because it is always a good practise to check before applying. Option C is wrong because the suggested file type for Terraform is terraform.tfvars. Option D is accurate since it checks the values after altering the terraform.tfvars and then issues terraform apply."
    },
    {
        id: 2,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 2,
        objectiveName: "Terraform State and Security",
        question: "You are part of a security team that has noticed current terraform code outputs the password of the database after you issue the terraform apply command. You have been asked to ensure the safety of the passwords. How would you achieve it?",
        options: [
            "Encrypt the plain text values to show output as random values",
            "Password is encrypted in database",
            "Use sensitive Parameter",
            "Use terraform plan -var-file= “password=no” to hide output values"
        ],
        correctAnswer: 2,
        explanation: "Option C Make use of a delicate parameter. By running the terraform apply and plan command on the console, the value is not displayed."
    },
    {
        id: 3,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 3,
        objectiveName: "Terraform Workspaces",
        question: "One of your colleagues is new to Terraform and wants to add a new workspace named new-hire. What command he should execute from the following?",
        options: [
            "terraform workspace –new –new-hire",
            "terraform workspace new new-hire",
            "terraform workspace init new-hire",
            "terraform workspace new-hire"
        ],
        correctAnswer: 1,
        explanation: "Option B: The (correct) syntax to use anytime you wish to create a new workspace is terraform workspace new new-hire."
    },
    {
        id: 4,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 4,
        objectiveName: "Terraform Installation & Support",
        question: "You're preparing to install Terraform on client workstations and want to see which operating systems are supported. Which of the following operating systems is supported? Please select the appropriate option.",
        options: [
            "Windows",
            "Amazon Linux",
            "FreeBSD",
            "Solaris",
            "MacOS",
            "All of the above"
        ],
        correctAnswer: 5,
        explanation: "Answer - F Amazon Linux is just another flavor of Linux. Terraform works perfectly well on it."
    },
    {
        id: 5,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 5,
        objectiveName: "Terraform Logging & Debugging",
        question: "John is a newbie to Terraform and wants to enable detailed logging to find all the details Which environment variable does he need to set?",
        options: [
            "TF_help",
            "TF_LOG",
            "TF_Debug",
            "TF_var_log"
        ],
        correctAnswer: 1,
        explanation: "Option: B is correct Terraform does not give detailed logging by default. The environment variable TF LOG must be enabled to allow thorough logging. You can set the TRACE, INFO, WARN, or ERROR, DEBUG levels by enabling TF LOG."
    },
    {
        id: 6,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 6,
        objectiveName: "Terraform CLI Operations",
        question: "You have made changes to your tfvar files and would like to know the contents of the state file. What command can be used for the given requirement?",
        options: [
            "terraform state",
            "terraform current",
            "terraform show",
            "terraform inspect"
        ],
        correctAnswer: 2,
        explanation: "Option C is correct. The terraform show command displays comprehensible output from state or plain files. This is used to double-check the current state contents and inspect the plan to ensure that everything is in working order (right)."
    },
    {
        id: 7,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 7,
        objectiveName: "Terraform Security & State Files",
        question: "Your firm employs a version control system (for example, git) and has requested that you commit all terraform code to it. During the commit, you must be cautious with sensitive information. Which of the following files should be left out of the commit?",
        options: [
            "main.tf",
            "variables.tf",
            "provisioner.tf",
            "terraform.tfstate"
        ],
        correctAnswer: 3,
        explanation: "Option D is correct Usually, terraform.tfvars and terraform.tfstate files contain sensitive data like passwords, access keys, and DB passwords. It is best to avoid these files from committing."
    },
    {
        id: 8,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 8,
        objectiveName: "Terraform Import",
        question: "Your company's infrastructure is now hosted on Azure, and you intend to use Terraform for further development and migration of existing resources to Terraform. You've been tasked with planning and implementing it, as well as ensuring that the old infrastructure is correctly moved. You attempted to utilise the terraform import command but were unable to do so. What are the things that must be considered when importing?",
        options: [
            "Ensure the existing resources are in a shutdown state so that during import there are no issues.",
            "Ensure the resources of the existing infrastructure are updated in the configuration file.",
            "Add all the resource details to state files.",
            "Run terraform show and refresh to see updated state files and then terraform import."
        ],
        correctAnswer: 1,
        explanation: "Option B is the best solution. Terraform can import a resource into a state file, but not into a configuration file. Before terraform import, it's a good idea to manually add resource configuration."
    },
    {
        id: 9,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 9,
        objectiveName: "Terraform Variables",
        question: "Choose the best option from below to make Terraform code more user configuration-centric.",
        options: [
            "Variables",
            "Local values",
            "Input Variable",
            "Modules"
        ],
        correctAnswer: 2,
        explanation: "Correct Answer - C Input variables are used as parameters in Terraform modules, allowing them to be customised without modifying the module's source code and allowing modules to be shared across configurations,."
    },
    {
        id: 10,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 10,
        objectiveName: "Terraform Configuration Language",
        question: "Which of the following is a meta-argument defined in the configuration files of Terraform?",
        options: [
            "tfvar",
            "depends_on",
            "instance_aws",
            "var1"
        ],
        correctAnswer: 1,
        explanation: "Option B is correct depends_on is the meta-argument defined in the configuration files of Terraform. Option A is incorrect: tfvars refers to the file extension rather than a meta-argument for configurations within the files. Option C is incorrect: instance aws is the resource type that Terraform uses to create VMs in AWS. Option D is incorrect: var1 is a word used to define a variable, not a meta-argument."
    },
    {
        id: 11,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 11,
        objectiveName: "Terraform State Locking",
        question: "Your configuration file has been locked accidentally. What of the following command would you use to unlock?",
        options: [
            "terraform filename-unlock",
            "delete the file and create a new state file",
            "terraform force-unlock",
            "state.tf -unlock"
        ],
        correctAnswer: 2,
        explanation: "Option C is correct The terraform force-unlock command can be used to unlock the state configuration manually. It has no effect on the infrastructure."
    },
    {
        id: 12,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 12,
        objectiveName: "Terraform Initialization",
        question: "Where are all the configuration files (backend and plugins) saved when you run the terraform init command?",
        options: [
            "terraform.tfstate stores all the current configuration",
            ".terraform/home directory",
            ".terraform/plugins directory",
            "Config.tf where all the init configurations are saved."
        ],
        correctAnswer: 2,
        explanation: "Option C is correct .terraform/plugins Whenever terraform is initialized all the plugin related files are stored and downloaded under .terraform/plugins."
    },
    {
        id: 13,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 13,
        objectiveName: "Terraform Variables & Environment",
        question: "Suppose terraform code is taking up some values which are not defined inside the code files. In which of the following options issue might have occurred?",
        options: [
            "Issue in main.tf file",
            "Issue in vars.tf file",
            "Issue in terraform.tfvars",
            "Issue in Environment Variables"
        ],
        correctAnswer: 3,
        explanation: "Correct Answer - D Terraform is a term that refers to a set of environment variables that can be used to customise different aspects of its behaviour. They can be used to override some of Terraform's default behaviours in unusual circumstances or to increase output verbosity for debugging purposes."
    },
    {
        id: 14,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 14,
        objectiveName: "Terraform Console & Expressions",
        question: "You want to evaluate an expression in terraform before applying it. How can you perform this evaluation? Select from below.",
        options: [
            "Execute terraform Graph command or see the graph of the resources.",
            "Execute terraform validate.",
            "On terraform console, validate the expression.",
            "Push the code to the repository."
        ],
        correctAnswer: 2,
        explanation: "Option C is correct Use terraform console to execute & validate the expression."
    },
    {
        id: 15,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 15,
        objectiveName: "Terraform Workflow",
        question: "What is the series of steps used to execute terraform code? Choose the (right) option.",
        options: [
            "Plan -> Apply",
            "Write -> Apply -> Plan",
            "Write -> Plan -> Apply",
            "Plan -> Apply -> Write"
        ],
        correctAnswer: 2,
        explanation: "Answer: C Terraform's core workflow consists of three steps: Write - Create infrastructure in the form of code. Plan ahead of time to see how the changes will look before they are implemented. Apply - Create a repeatable infrastructure,."
    },
    {
        id: 16,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 16,
        objectiveName: "Terraform Provisioners",
        question: "Which option will you use to run provisioners that are not associated with any resources?",
        options: [
            "local-exec",
            "null_resource",
            "salt-masterless",
            "remote-exec"
        ],
        correctAnswer: 1,
        explanation: "Option B is correct You can associate provisioners that aren't directly associated with a resource with a null resource if you need to run them."
    },
    {
        id: 17,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 17,
        objectiveName: "Terraform Configuration Language",
        question: "Which language does terraform support from the below list?",
        options: [
            "xml",
            "javascript",
            "Hashicorp Language & JSON",
            "Plaintext"
        ],
        correctAnswer: 2,
        explanation: "Option C is correct Terraform supports Hashicorp Language & JSON, files ending in .tf and tf.json format,."
    },
    {
        id: 18,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 18,
        objectiveName: "Terraform Providers",
        question: "You have the following configuration and have received an error message stating that the 'provider' configuration is duplicated. Which of the following commands will you use to ensure that multiple configurations are permitted?",
        options: [
            "Alias",
            "Label",
            "Module",
            "Resource for each provider"
        ],
        correctAnswer: 0,
        explanation: "Option A is correct We can use the alias command to create multiple configurations for the same provider, each pointing to a different resource."
    },
    {
        id: 19,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Hard",
        objective: 19,
        objectiveName: "Terraform Version Constraints",
        question: "What is the provider version of Google Cloud being used in Terraform? Google = “~> 1.9.0”",
        options: [
            "1.9.1",
            "1.0.0",
            "1.8.0",
            "1.9.2"
        ],
        correctAnswer: 0, // A and D are correct, selecting A (0)
        explanation: "A and D are the correct answers. The operator ~> (Pessimistic Constraint Operator) means that only minor updates are accepted. As a result, ~> 1.9.0 denotes that the related module/provider requirement accepts 1.9.1 to 1.9.x, but not 1.10.0 or 1.0.0 or 1.8.0. Terraform is looking for any update that is higher than 1.9.0, which can be either 1.9.1 or 1.9.2. As a result, both options are correct."
    },
    {
        id: 20,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 20,
        objectiveName: "Terraform Backends",
        question: "Which of the following are supported backend types in Terraform? (Select more than one)",
        options: [
            "consul",
            "gcs",
            "manta",
            "bitbucket"
        ],
        correctAnswer: 0, // A, B, and C are correct, selecting A (0)
        explanation: "Options A, B, and C are correct."
    },
    {
        id: 21,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 21,
        objectiveName: "Terraform Plan",
        question: "On executing terraform plan, terraform scans the code and appends any missing argument before terraform apply.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Option: False Terraform scans the code for syntactical errors and missing arguments before executing the plan. Before the code can be successfully executed, users must fix these warnings."
    },
    {
        id: 22,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 22,
        objectiveName: "Terraform Workspaces & State",
        question: "Do terraform workspaces help in adding/allowing multiple state files for a single configuration?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True Terraform workspaces allow configuring multiple state files and associating with a single configuration file."
    },
    {
        id: 23,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 23,
        objectiveName: "Terraform Resources",
        question: "Resources in terraform can have same identifiers(Resource type + Block name).",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Option: False Unique identifiers should be assigned to Terraform Resources. Resource Type + Block name are the identifiers. We can't have resource identifiers that are the same."
    },
    {
        id: 24,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 24,
        objectiveName: "Terraform Import",
        question: "You have created a virtual machine manually on azure and would like to use terraform import to import it. Does terraform import work in this scenario?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True."
    },
    {
        id: 25,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 25,
        objectiveName: "Terraform Sensitive Data",
        question: "Will the password be shown as plain text in logs if you apply a sensitive flag for database password while running terraform plan & apply commands on the console?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False The output cannot be visible if the sensitive flag is used with terraform apply and plan. If you have access to state files, however, you can see the output as plaintext."
    },
    {
        id: 26,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 26,
        objectiveName: "Terraform Resource Destruction",
        question: "terraform state rm is the only command to delete all the resources configured using Terraform.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False terraform destroy and terraform state rm are the two commands to delete all the resources."
    },
    {
        id: 27,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 27,
        objectiveName: "Terraform State File Access",
        question: "Your team members can make changes to the statefile, once you have exeuted 'terraform plan'. True or False.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Yes, we can make changes to the statefile once terraform plan is executed."
    },
    {
        id: 28,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 28,
        objectiveName: "Terraform State Concepts",
        question: "Current state and desired state should be in same state all the time?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Option: NO Current Terraform: The current terraform represents the current state. tfstate Desired State: A desired state that must be achieved. When we run terraform plan, it compares the previous configuration from the terraform.tfstate file to the current configuration from the current code and verifies the differences."
    },
    {
        id: 29,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 29,
        objectiveName: "Terraform Destroy",
        question: "When using the auto-approve option with terraform destroy, it requests confirmation from user before destroying the resources.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Option: False When using the auto-approve option with terraform destroy, the user is not prompted for confirmation before the resources are destroyed,."
    },
    {
        id: 30,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 30,
        objectiveName: "Terraform Initialization",
        question: "Whenever you add a new provider, do you always required to issue terraform init before executing terraform plan & apply command?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True Whenever you add a new provider it is always required to issue a terraform init so that it will download the latest provider or specified version and initialization files to .[dot]terraform folder."
    },
    {
        id: 31,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 31,
        objectiveName: "Terraform Multi-Provider Configuration",
        question: "You've got an AWS provider, and you can add multiple resource blocks to it. An EC2 resource block, a Load Balancer resource block, and a GCP (Google cloud provider) resource block have all been added. Is this setup going to work?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Option: False For the same provider, we can create multiple resources. However, without using the alias command, we won't be able to create multiple resources for different providers."
    },
    {
        id: 32,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 32,
        objectiveName: "Terraform Dynamic Blocks",
        question: "Terraform dynamic blocks allow to have multiple nested blocks inside a resource.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True We can have multiple nested blocks using dynamic blocks. A dynamic block is similar to a for expression, but instead of producing a complex typed value, it produces nested blocks."
    },
    {
        id: 33,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 33,
        objectiveName: "Terraform Iterators/Dynamic Blocks",
        question: "Using terraform iterator we can set names to a temporary variable that matches an element.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True We can name temporary variables that represent the current element of the complex value using the iterator argument."
    },
    {
        id: 34,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 34,
        objectiveName: "Terraform Provider Versioning",
        question: "In Production Environment, it is always recommended to hardcode the provider version?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option:True It is a good option to have the latest version running, but in production, it is best to run on a known version that can help during outbreaks."
    },
    {
        id: 35,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 35,
        objectiveName: "Terraform Backends (Remote Operations)",
        question: "Does terraform standard backend type support remote management system",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Option:False The documentation distinguishes between two types of backends: enhanced and standard. Local, which is the default, and remote, which generally refers to Terraform Cloud, are the two enhanced backends. Support for remote operations is one of the most important features of an improved backend."
    },

    // --- PART 2 (Queries 36-60 / P2 Q1-P2 Q60) ---
    {
        id: 36,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 36,
        objectiveName: "Terraform Workspaces",
        question: "Is switching between Terraform Workspaces possible? Can we switch the workspace while working with the 'default workspace' to 'Workspace A' and vice versa if we have 'Workspace A' and a 'default workspace'?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True To switch between workspaces, use the terraform workspace select command."
    },
    {
        id: 37,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 37,
        objectiveName: "Terraform Backends (S3)",
        question: "Does terraform remote backend supports Amazon S3 for managing tfstate?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True As a Standard Backend, Terraform supports S3 as a remote backend."
    },
    {
        id: 38,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 38,
        objectiveName: "Terraform State Management",
        question: "Does terraform refresh command updates the state files?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True Yes, terraform refresh updates the state files to the latest unless there are any manual changes."
    },
    {
        id: 39,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 39,
        objectiveName: "Terraform State Management",
        question: "Does terraform state mv command create a backup copy of terraform state by default ?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option:True terraform state mv command creates a backup copy by default."
    },
    {
        id: 40,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 40,
        objectiveName: "Terraform Providers",
        question: "Is Mongodb Atlas a supported database provider approved by hashicorp?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Option: True,."
    },
    {
        id: 41,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 41,
        objectiveName: "Terraform Initialization",
        question: "You have run the terraform init command on the machine as a Terraform admin. On the same machine, another team member ran the same command. Do the plugins get downloaded twice and initialised in the backend when the command is double-executed?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer False Terraform will check for the provider and download the contents and save them in the [DOT].terraform folder when you use 'terraform init' for the first time. Following that, it looks at the local file and only downloads from the provider if there is a version check mentioned."
    },
    {
        id: 42,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 42,
        objectiveName: "Terraform Variables",
        question: "You have configured a variable and forgot to set a value for it. When you do 'terraform plan', does it ask for an input value?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer True Whenever there is a variable used and no value configured upon terraform plan or terraform apply, it will ask for variable value at Command Line Interface,."
    },
    {
        id: 43,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 43,
        objectiveName: "Terraform Refresh & Remote State",
        question: "You are a network administrator who manages terraform deployments in both the cloud and on-premises environments, and you use the terraform refresh command. Does this affect all content in both the cloud and local environments?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer False Terraform refresh command modifies the content on the local environment but doesn’t modify on the terraform cloud."
    },
    {
        id: 44,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 44,
        objectiveName: "Terraform Apply & Validation",
        question: "Does terraform apply validates the terraform configuration syntax?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False The terraform apply command is used to carry out the actions in a Terraform plan. It isn't used to check for syntax errors."
    },
    {
        id: 45,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 45,
        objectiveName: "Terraform Provisioners",
        question: "Using remote provisioner, changes can be made to existing instances like installing tools and configs?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False Provisioners are of two types: 1. Creation Time Provisioner 2. Destroy time provisioner. Provisioners are called when a resource is created or destroyed, not when it is updated."
    },
    {
        id: 46,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 46,
        objectiveName: "Terraform Initialization & Plugins",
        question: "Is terraform init -upgrade the (right) command to upgrade/download the latest providers?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True Terraform init-upgrade can be used to upgrade to the most recent terraform providers. All previously selected plugins are upgraded to the most recent version that meets the configuration's version constraints."
    },
    {
        id: 47,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 47,
        objectiveName: "Terraform CLI & State Locking",
        question: "Your team works on terraform heavily and noticed that on executing terraform fmt, the command execution fails due to state lock. is this correct?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False When a state file is locked, no changes can be made to it, but this does not prevent you from using terraform fmt. The state file is not modified by the terraform fmt command."
    },
    {
        id: 48,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 48,
        objectiveName: "Terraform Destroy & State",
        question: "Whenever you issue terraform destroy command, it removes the state files and moves the infrastructure to cold state.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False The terraform destroy command will empty the resources from state files and destroy the corresponding infrastructure whenever it is used."
    },
    {
        id: 49,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 49,
        objectiveName: "Terraform State Drift",
        question: "You have unintentionally deleted an AWS EC2 instance from your cloud resources. In the current configuration, you've added the terraform code for the same resource. Will the EC2 resource be created with the same configuration if I use terraform apply?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True Yes, the resource will be created and updated in the terraform state file,."
    },
    {
        id: 50,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 50,
        objectiveName: "Terraform Dynamic Blocks",
        question: "Dynamic blocks help to manage the complex configurations",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True A dynamic block is similar to a for expression, but instead of producing a complex typed value, it produces nested blocks."
    },
    {
        id: 51,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 51,
        objectiveName: "Terraform CLI Operations",
        question: "terraform fmt command is to be used whenever you want to destroy and create a new instance.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False The terraform fmt command is used to improve the look of the code in terraform files. When terraform taint is used to delete and recreate resources, it is the correct command to use."
    },
    {
        id: 52,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 52,
        objectiveName: "Terraform State Locking",
        question: "Does Consul help in locking the state file for remote backend",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer : True Yes, by using terraform consul we can lock the state files for remote backend."
    },
    {
        id: 53,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 53,
        objectiveName: "Sentinel Policy",
        question: "Sentinel Policy is only applied before terraform plan?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False Sentinel Policy is applied before terraform apply and after terraform plan."
    },
    {
        id: 54,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 54,
        objectiveName: "Terraform Graph Visualization",
        question: "Terraform graphviz is used to create terraform dot files ?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer : False Terraform graph is used to create the dot files and graphviz is used to create graphical representation of it."
    },
    {
        id: 55,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 55,
        objectiveName: "Terraform Plan Output",
        question: "You used terraform plan -out='test.file' to save the contents of terraform to a test.file as requested. Is the grammar correct?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True Using terraform plan and the -out='test' flag, you can save the contents of the file. File' It saves the generated plan in an opaque file format to the given filename."
    },
    {
        id: 56,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 56,
        objectiveName: "Terraform State Locking",
        question: "Terraform state file is locked and you issue terraform destroy command. Does the command delete all the resources?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False If the state file is locked, terraform commands that make changes to the terraform state file cannot be executed."
    },
    {
        id: 57,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 57,
        objectiveName: "Terraform State Locking",
        question: "Your state file is locked and one of your colleagues issues a terraform apply. Will the resources get created?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False When a state file is locked, terraform apply or any other terraform command that could potentially change the state is disabled."
    },
    {
        id: 58,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 58,
        objectiveName: "Terraform Collaboration",
        question: "You are the Terraform lead, and you wrote all of the Terraform code. If a member of your team wants to apply the Terraform configuration to real infrastructure, they must approach you and ask you to apply the code or run the terraform apply command. Is it true or false?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False It doesn't matter if you created the terraform plan; others can still apply to it."
    },
    {
        id: 59,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 59,
        objectiveName: "Terraform Provisioners",
        question: "null-exec is the provisioner that is applied on machine where terraform is running locally with null variable.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer :False local-exec is the (right) provisioner to be used whenever you want to run locally."
    },
    {
        id: 60,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 60,
        objectiveName: "Terraform Resource Duplication",
        question: "We've already manually created some resources. Now we want to use Terraform to duplicate resources. Is it possible to create duplicate resources in Terraform Apply?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False If we are creating duplicate resources, on terraform apply, terraform will give us an error that \"The resource already exists - to be managed via Terraform, this resource needs to be imported into the State\"."
    },
    {
        id: 61,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 61,
        objectiveName: "Terraform Variables & Types",
        question: "You've given the variable whizlabs a type string. What values does it accept (from the options below)? Select all that apply from the list below. variable “whizlabs\" { type = string }",
        options: [
            "100",
            "“100”",
            "whizlabs",
            "All of them"
        ],
        correctAnswer: 0, // A and B are correct, selecting A (0)
        explanation: "Answer: A , B Because the terraform converts the value from number to string when necessary, it will accept A, i.e. 100. Because it is written in quotes, the terraform will accept B, i.e. \"100.\"."
    },
    {
        id: 62,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 62,
        objectiveName: "Terraform Version Constraints",
        question: "You have noticed lot of commit errors due to terraform version issues and noticed that your remote team is still using 0.11 instead of 0.12 . How do you make sure all of them are updated?",
        options: [
            "Call for a meeting with remote team and ask to rewrite the code in 0.12 and merge it.",
            "Ask the remote team to use required_version >=0.12 function and use it whenever they write code.",
            "Make sure code works both in 0.11 and 0.12 and make changes as necessary.",
            "Ask the remote team to manually make changes to support 0.12."
        ],
        correctAnswer: 1,
        explanation: "Answer - B The required version setting takes a version constraint string that specifies which Terraform versions are compatible with your configuration. Terraform will generate an error and exit without taking any further actions if the current version of Terraform does not match the constraints specified."
    },
    {
        id: 63,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 63,
        objectiveName: "Terraform Backend Configuration",
        question: "You've used Terraform to provision your infrastructure, and now you need to save the state file to the remote backend. You don't want to include all of the backend information in the configuration file. What is the name of this configuration?",
        options: [
            "First time configuration",
            "Partial configuration",
            "Air gapped configuration",
            "Remote configuration"
        ],
        correctAnswer: 1,
        explanation: "Answer B A partial configuration is when some or all of the arguments are omitted. In the backend configuration, you don't have to specify every required argument."
    },
    {
        id: 64,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 64,
        objectiveName: "Terraform Backends & Locking",
        question: "Not all of the backend types support locking. Please select the backend types given below which support locking.",
        options: [
            "artifactory",
            "consul",
            "S3",
            "azurerm"
        ],
        correctAnswer: 1, // B, C, D are correct, selecting B (1)
        explanation: "Correct Answer - B, C, and D. Option B is the correct choice because it allows for state locking. Option C is correct because the S3 backend type uses Dynamo DB for state locking. Option D is correct because it uses Azure Blob Storage's native capabilities to support state locking and consistency checking."
    },
    {
        id: 65,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Easy",
        objective: 65,
        objectiveName: "Terraform Configuration Language",
        question: "Select the language or syntax supported by Terraform.",
        options: [
            "HCL(Hashicorp Configuration Language)",
            "XML",
            "JSON",
            "GO"
        ],
        correctAnswer: 0, // A and C are correct, selecting A (0)
        explanation: "Answer: A and C A Terraform configuration is a full document written in the Terraform language. The Terraform language's constructs can also be expressed in JSON syntax."
    },
    {
        id: 66,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 66,
        objectiveName: "Terraform Environment Variables",
        question: "How to define environment variables in Terraform? Select the correct syntax from the options given below.",
        options: [
            "TF_VAR",
            "TF_ENV_VAR",
            "TF_VAR_",
            "TF_ENV_"
        ],
        correctAnswer: 2,
        explanation: "Answer: C Terraform looks for environment variables with the name TF VAR_ followed by the name of a declared variable in its own process's environment."
    },
    {
        id: 67,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 67,
        objectiveName: "Terraform Workspaces vs Count/ForEach",
        question: "You have to configure 10 instances of a resource using single configuration in different environments. What is the best possible and most efficient way to create using terraform?",
        options: [
            "Workspaces",
            "Using count meta argument",
            "Using For Each meta argument",
            "By copying the same code in different environment directories and executing the codes one by one"
        ],
        correctAnswer: 0,
        explanation: "Correct Answer - A Within a single backend, named workspaces make it easy to switch between multiple instances of a single configuration,. Option B and C are incorrect because the Query asks for different environments."
    },
    {
        id: 68,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 68,
        objectiveName: "Terraform Backends",
        question: "Terraform supports different backend types. Select the default backend type from the options given below.",
        options: [
            "remote backend",
            "local backend",
            "Consul",
            "vault",
            "s3"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Local backend is the default backend."
    },
    {
        id: 69,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 69,
        objectiveName: "Terraform Workspace Internals",
        question: "Your colleague made some changes to the whiztest Terraform workspace and wants to check the state file, but can't find it. Select the appropriate option from the list below to save your changes.",
        options: [
            ".terraform.d",
            "terraform.tfstate.d",
            "tfstate.var",
            "terraform"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Terraform stores workspace states in a directory called terraform.tfstate.d for local state."
    },
    {
        id: 70,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 70,
        objectiveName: "Terraform Workflow",
        question: "You've recently joined a new terraform company and have been assigned the task of teaching developers the fundamentals of terraforming. What is the workflow that you will recommend to them?",
        options: [
            "Learn terrafrom write code and push to git and start deploying the infrastructure",
            "create a terrafrom state with all the requirements and do terrafrom apply every time you deploy",
            "write a code, do terraform plan and then terraform apply to properly deploy the infrastrucute",
            "Learn as you go, deploy get your hands on terraform"
        ],
        correctAnswer: 2,
        explanation: "Answer: C."
    },
    {
        id: 71,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 71,
        objectiveName: "IaC vs Configuration Management",
        question: "Which of the following is not a native Infrastructure as tool (IaC)?",
        options: [
            "Cloudformation",
            "Azure Resource Manager",
            "Terraform",
            "Puppet"
        ],
        correctAnswer: 3,
        explanation: "Answer: D Puppet is a configuration management tool, not a native IaC tool. Cloudformation, Azure Resource Manager, and Terraform are all native IaC tools."
    },
    {
        id: 72,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 72,
        objectiveName: "IaC Activities (Day 0/Day 1)",
        question: "Day 0 and Day 1 activities make up the infrastructure lifecycle, with Day 0 referring to provisioning and configuring your initial infrastructure. The OS and application configurations you apply after you've built your infrastructure on Day 1 are referred to as Day 1. Choose which IaC services IaC can provide from the list below.",
        options: [
            "IaC can only support Day 0 activities.",
            "IaC can support both Day 0 and Day 1 activities.",
            "IaC can only support Day 1 activities.",
            "IaC cannot support Day 0 and Day 1 activities."
        ],
        correctAnswer: 1,
        explanation: "Option B is the RIGHT choice because IaC can support both Day and Night activities. IaC can be used at any point in the infrastructure's lifecycle."
    },
    {
        id: 73,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 73,
        objectiveName: "Terraform Multi-Provider Configuration",
        question: "Terraform allows to define multiple providers resources in a single terraform configuration file?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: A Terraform makes it possible to specify multiple cloud infrastructure resources in a single file."
    },
    {
        id: 74,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 74,
        objectiveName: "Terraform Multi-Cloud Benefits",
        question: "What are the benefits of using Terraform compared to other infrastructure management tools with respect to multi-cloud scenario (Choose any THREE)",
        options: [
            "Terraform is cloud agnostic",
            "Terraform can handle cross-cloud dependencies",
            "Terraform simplifies management and orchestration, helping operators build large-scale multi-cloud infrastructures.",
            "We can define all cloud providers in a single provider block.",
            "Terraform cannot handle cross-cloud dependencies and should be handled manually."
        ],
        correctAnswer: 0, // A, B, and C are correct, selecting A (0)
        explanation: "Answers: A, B, and C. Terraform is cloud-agnostic, allowing you to manage multiple providers and even cross-cloud dependencies with a single configuration. This helps operators build large-scale multi-cloud infrastructures by simplifying management and orchestration."
    },
    {
        id: 75,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 75,
        objectiveName: "Terraform Plugins/Providers",
        question: "Terraform wants to talk to remote systems by using API calls. From which of the following options, the required scenario can be achieved?",
        options: [
            "terraform resources",
            "terraform state",
            "terraform plugin",
            "terraform REST API"
        ],
        correctAnswer: 2,
        explanation: "Option C is correct because the Terraform plugin includes all of the code required to communicate with remote systems via API interaction. To interact with remote systems, Terraform uses 'providers,' which are plugins."
    },
    {
        id: 76,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 76,
        objectiveName: "Terraform Providers & Alias",
        question: "The following snippet of code is written to use multi-region for AWS provider. The error \"Duplicate provider configuration\" is thrown when terraform init is run against this code snippet. What is the best way to fix this problem? ",
        options: [
            "By adding alias variable, alias = “west “ in one of the provider block and referencing to this provider in resource block as provider = aws.west",
            "By adding the alias variable, alias = “west “ in one of the provider blocks and referencing to this provider in the resource block as provider = alias.west.alias",
            "By defining provider block as provider2 “aws”{ region  =  \"us-east-2\" }",
            "We cannot have same provider but we can have 2 different providers."
        ],
        correctAnswer: 0,
        explanation: "Answer: A Option A is correct because we can refer to multiple providers using an alias variable in one of the blocks."
    },
    {
        id: 77,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Hard",
        objective: 77,
        objectiveName: "Terraform Version Constraints",
        question: "Which of the following are valid provider versions that satisfy the expression found in the following code snippet when using constraint expressions to signify a version of a provider: (choose two) terraform { required_providers { aws = \"~> 2.3.0\" } }",
        options: [
            "2.4.1",
            "2.3.3",
            "2.3.9",
            "3.4.0"
        ],
        correctAnswer: 1, // B and C are correct, selecting B (1)
        explanation: "Answer: B and C. The ~> operator is a convenient shorthand for allowing only patch releases within a specific minor release. ~> 2.3.0 will match version of the provider between >= 2.3.0 to < 2.4.0."
    },
    {
        id: 78,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 78,
        objectiveName: "Terraform Execution Environment",
        question: "Is it mandatory to have Go runtime to run terraform?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Terraform Core is a binary written in the Go programming language that is statically compiled. Terraform does not require Go runtime to function."
    },
    {
        id: 79,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 79,
        objectiveName: "Terraform Plugins Installation",
        question: "How HashiCorp distributed plugins are installed (Select Two)",
        options: [
            "During initializing working directory using terraform init",
            "During terraform apply stage",
            "During terraform plan stage",
            "Plugins can also be manually installed in the user plugins directory"
        ],
        correctAnswer: 0, // A and D are correct, selecting A (0)
        explanation: "Answers: A and D. Option A is CORRECT because during initialization plugins get installed. Option D is CORRECT because Plugins can be manually installed in the user plugins directory."
    },
    {
        id: 80,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 80,
        objectiveName: "Terraform Destroy Provisioners",
        question: "Below mentioned provisioner gets executed on destroy. What happens if provisioner fails to execute?",
        options: [
            "Resources get destroyed even though provisioner fails",
            "A new resource gets created and that provisioner gets executed during its destroy",
            "Terraform blocks this resource and should be deleted manually from cloud provider console.",
            "Terraform will error and rerun the provisioners again on the next terraform apply."
        ],
        correctAnswer: 3,
        explanation: "Option D is the correct choice because if the provisioner fails, it will become tainted and attempt to destroy the data in the next apply. If they fail, Terraform will throw an error and the provisioners will be rerun on the next Terraform apply."
    },
    {
        id: 81,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 81,
        objectiveName: "Terraform Formatting (fmt)",
        question: "How do you check whether the terraform code he wrote is in canonical format and style without modifying terraform configuration files now that a new intern has joined your team?",
        options: [
            "terraform fmt",
            "terraform fmt -check",
            "terraform fmt -diff",
            "terraform fmt –list=false"
        ],
        correctAnswer: 1,
        explanation: "Answer: B. If we only want to check if the configuration files are in canonical format and style without changing them, we can use the –check option in conjunction with terraform fmt."
    },
    {
        id: 82,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 82,
        objectiveName: "Terraform Taint/Replacement",
        question: "A newbie has been assigned to the project and has been tasked with configuring the application on the servers. Terraform is used to create all of the servers. He succeeds in configuring all servers except one, which is messed up due to application configuration. As a result, he intends to deactivate this server and replace it with a new one. How can terraform be used to accomplish this?",
        options: [
            "terraform destroy –target=resource_name.variable_name",
            "terraform plan -target=resource_name.variable_name and then terraform apply",
            "terraform taint resource_name.variable_name and then terraform apply",
            "terraform state rm resource_name.variable_name and then terraform apply"
        ],
        correctAnswer: 2,
        explanation: "Option C is the correct choice because taint marks a Terraform-managed resource as tainted, requiring it to be destroyed and recreated on the next apply."
    },
    {
        id: 83,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 83,
        objectiveName: "Terraform Taint Operation",
        question: "What happens when terraform taint is applied on a resource?",
        options: [
            "terraform will destroy the resource",
            "terraform will modify the state file with resource status marked as tainted.",
            "terraform will destroy and recreate a new resource with same configuration.",
            "terraform destroys and recreate all resources in the state file."
        ],
        correctAnswer: 1,
        explanation: "Option B is correct because the resource is marked for recreation in the state file by taint. In the state file, it marks the status as tainted. Terraform apply should be used to recreate a resource."
    },
    {
        id: 84,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 84,
        objectiveName: "Terraform Import",
        question: "The cloud team manager has asked team members to create all resources using Terraform and also asked to maintain existing resources using Terraform. How can this be implemented?",
        options: [
            "Resources that are created manually cannot be handled by terraform as terraform didn’t create those resources",
            "Using terraform import command resources can be imported and can be handled going forward.",
            "Take a down time and delete the existing resources and create a new resources with same configuration.",
            "Use the cloud provider native IaC tool to obtain that state and add that state in terraform state file."
        ],
        correctAnswer: 1,
        explanation: "Option B is the correct choice because terraform import can be used to import existing resource states as well as handle future changes. Existing resources can be imported into Terraform using the terraform import command."
    },
    {
        id: 85,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 85,
        objectiveName: "Terraform Import Configuration",
        question: "Does terraform import automatically creates the configuration file as well in version 0.13?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Terraform import updates the state file but does not create the configuration file. As a result, we'll have to write the configuration block for the resource we're importing by hand."
    },
    {
        id: 86,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 86,
        objectiveName: "Terraform Workspaces",
        question: "An organization has different environment like dev, UAT and prod. They want to use same configuration across all environments with different state files. How can this be efficiently achieved using terraform local backend?",
        options: [
            "Create an individual folder for each region and place the same configuration.",
            "Use the concept of terraform workspace to achieve this.",
            "Create 3 remote repositories and place same configuration file in each repositories.",
            "Use terraform apply -backup=path to backup the state file for each environment, so that we will have different state files for each region."
        ],
        correctAnswer: 1,
        explanation: "Option B is CORRECT because we can use same configuration to apply for different environments with different state files. Using workspace concepts, Terraform workspace for local backend can efficiently handle different environments with the same configuration."
    },
    {
        id: 87,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 87,
        objectiveName: "Terraform Workspaces CLI",
        question: "A user has created 3 different workspace which maps to each different regions like dev, staging and prod environments. Currently he is in default workspace how can he change his workspace to prod?",
        options: [
            "terraform workspace select prod",
            "terraform workspace switch prod",
            "terraform workspace select terraform.tfstate.d/prod",
            "terraform workspace switch terraform.tfstate.d/prod"
        ],
        correctAnswer: 0,
        explanation: "Option A is CORRECT because to switch to workspace we use select option. The terraform workspace select command is used to choose a different workspace to use for further operations."
    },
    {
        id: 88,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 88,
        objectiveName: "Terraform State Management (mv)",
        question: "A user wants to rename the resource variable from web to webapp, how can this be achieved in terraform efficiently. New name should also get reflected in configuration file?",
        options: [
            "Manually change the variable to webapp and then run terraform apply",
            "terraform state mv aws_instance.web aws_instance.webapp",
            "terraform state mv aws_instance.web aws_instance.webapp and then run terraform apply",
            "terraform state mv aws_instance.web aws_instance.webapp and changing variable name in configuration file"
        ],
        correctAnswer: 3,
        explanation: "Option D is CORRECT; this option will change the state file, but we will have to manually apply the change to the configuration file. To move items in a Terraform state, use the terraform state mv command."
    },
    {
        id: 89,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 89,
        objectiveName: "Terraform State Inspection",
        question: "A user wants to list all resources which are deployed using Terraform. How can this be done?",
        options: [
            "terraform state show",
            "terraform state list",
            "terraform show",
            "terraform show list"
        ],
        correctAnswer: 1,
        explanation: "Option B is CORRECT because the terraform state list command is used to list resources within a Terraform state. All resources are listed if no addresses are given."
    },
    {
        id: 90,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 90,
        objectiveName: "Terraform Logging",
        question: "Which among the following log command should be set to get Maximum verbosity of terraform logs?",
        options: [
            "set the TF_LOG=DEBUG in environment variable",
            "set the TF_LOG=INFO in environment variable",
            "set the TF_LOG=TRACE in environment variable",
            "set the TF_LOG=WARN in environment variable"
        ],
        correctAnswer: 2,
        explanation: "Option C is the correct choice because it provides more detailed information than the other options. To change the verbosity of the logs, set TF LOG to one of the log levels TRACE, DEBUG, INFO, WARN, or ERROR."
    },
    {
        id: 91,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 91,
        objectiveName: "Terraform Module Registry",
        question: "Which among the following, is the syntax for referencing a terraform public registry module, that is integrated with terraform by default?",
        options: [
            "source = \"<NAME>/<PROVIDER>\"",
            "source = /<NAME>/<PROVIDER>",
            "source = <HOSTNAME>/<ORGANIZATION>/<NAME>/<PROVIDER>",
            "source = app.terraform.io/<ORGANIZATION>/<NAME>/<PROVIDER>"
        ],
        correctAnswer: 0,
        explanation: "Option A is the correct syntax for referencing a Terraform public registry. Terraform includes the Terraform Registry as a built-in feature."
    },
    {
        id: 92,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Easy",
        objective: 92,
        objectiveName: "Terraform Modules Benefits",
        question: "What are the benefits of using module in terraform? (Choose THREE)",
        options: [
            "Module helps to organize configuration.",
            "Module helps to encapsulate configuration.",
            "Module helps to Re-use configuration.",
            "Module provides parallel execution of configuration.",
            "Module helps to enforce authentication and to maintain private code."
        ],
        correctAnswer: 0, // A, B, C are correct, selecting A (0)
        explanation: "Answers: A, B and C. Option A is the correct choice because modules make it easier to navigate, understand, and update your configuration by grouping together related elements. Option B is APPROPRIATE because it aids in the separation of configuration into logical components. Option C is the RIGHT CHOICE. It can be time-consuming and error-prone to write all of your configuration from scratch,."
    },
    {
        id: 93,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 93,
        objectiveName: "Terraform Modules (Overriding Variables)",
        question: "A user has made a reference to a child module. He wants to override one of the child module's attributes. The code for the child module is shown below. He wants to change the instance type from m5.micro to m5.small, so he passes it to the root module as an input variable. Will he succeed in doing that?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True If a value is already set in child module, then it can be overwritten by root module."
    },
    {
        id: 94,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 94,
        objectiveName: "Terraform Module Outputs",
        question: "Bob is using a module ec2_instance to create a server. He wants the IP address of that server, to use in the DNS module. How can this be achieved? Select one of the following options.",
        options: [
            "export the IP address from ec2_instance module using environment variables",
            "set the value of IP address generated using TF_VAR variables",
            "configure output value in ec2_instance module and access it in DNS module",
            "Assign a static IP address and pass it to ec2_instance and DNS module."
        ],
        correctAnswer: 2,
        explanation: "Option C is CORRECT; the value is output in the ec2 instance module and referred to in the DNS module. Output values are similar to the return values of a Terraform module, and a parent module can access a subset of a child module's resource attributes via outputs."
    },
    {
        id: 95,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 95,
        objectiveName: "Terraform Module Sources",
        question: "Which among the following is not module source options?",
        options: [
            "Local Path",
            "Terraform registry",
            "Bit bucket",
            "HTTP URLs",
            "BLOB storage"
        ],
        correctAnswer: 4,
        explanation: "Answer: E Option E is correct because BLOB storage cannot be used as a module source. Valid sources include Local Paths, Terraform Registry, GitHub, Bitbucket, Generic Git/Mercurial repositories, HTTP URLs, S3 buckets, and GCS buckets."
    },
    {
        id: 96,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 96,
        objectiveName: "Terraform Module Publishing",
        question: "Bob (a Terraform developer) wants to make a module available on the Terraform public registry. Which of the following conditions must be met in order for it to be published? (Choose TWO)",
        options: [
            "Module should be named in format terraform-<PROVIDER>-<NAME>",
            "Module must be on GitHub and can be public repo or private repo",
            "Must be PCI-DSS compliant",
            "To publish a module initially, at least one release tag must be present.",
            "Only HashiCorp verified modules can be present in registry, so the submitted module should be verified before it gets published to registry."
        ],
        correctAnswer: 0, // A and D are correct, selecting A (0)
        explanation: "Answers: A and D. Option A is correct because public repositories must use the terraform— naming convention. Option D is CORRECT because tags are used to identify module versions in the registry, so it must be present."
    },
    {
        id: 97,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 97,
        objectiveName: "Terraform Module Versioning",
        question: "Is it mandatory to specify the module version for the public registry? (defining/releasing a module without version)",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: B For public modules, specifying the module version is optional."
    },
    {
        id: 98,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Easy",
        objective: 98,
        objectiveName: "Terraform Configuration Language",
        question: "In which of the following languages, as per terraform version 0.12, terraform configuration can be written? (Select Two)",
        options: [
            "HashiCorp Configuration Language (HCL)",
            "XML",
            "YAML",
            "JSON",
            "Go"
        ],
        correctAnswer: 0, // A and D are correct, selecting A (0)
        explanation: "Answers: A and D. HCL is a valid configuration language, so Option A is correct. JSON is a valid configuration language, so Option D is correct,."
    },
    {
        id: 99,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 99,
        objectiveName: "Terraform Plugins Installation (CLI)",
        question: "Bob is employed by Fusion Corp. The internal IT team has downloaded and saved the plugins in a shared folder so that everyone on the team is using the same version. How can we tell Terraform to use these pre-installed plugins rather than downloading new ones?",
        options: [
            "terraform init –plugin-dir=PATH",
            "terraform init –plugin-path=PATH",
            "terraform init –get-plugins=PATH",
            "terraform init –plugin-file=PATH"
        ],
        correctAnswer: 0,
        explanation: "Answer: A The CORRECT plugin-dir option is option A. Installs no plugins and only loads plugins from the specified directory,."
    },
    {
        id: 100,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 100,
        objectiveName: "Terraform Plugins (Third Party)",
        question: "Which of the following is true about third party plugins? (SELECT TWO)",
        options: [
            "Third party plugins also gets downloaded automatically from terraform version 0.12",
            "Third-party plugins (both providers and provisioners) can be manually installed into the user plugins directory based on OS type.",
            "Third-party plugins should be installed only into user plugins directory, no other directories are supported for third party plugin.",
            "Third party plugins which are approved by HashiCorp are supported.",
            "Plugins can be written only in Go language."
        ],
        correctAnswer: 1, // B and E are correct, selecting B (1)
        explanation: "Answers: B and E. Option B is to manually install third-party plugins in the user's plugin directory. As of now, CORRECT plugins can only be written in the GO programming language."
    },
    {
        id: 101,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 101,
        objectiveName: "Terraform Validation",
        question: "Which of the following command can be used to syntactically check terraform configuration before using apply or plan command?",
        options: [
            "terraform fmt",
            "terraform validate",
            "terraform show",
            "terraform check"
        ],
        correctAnswer: 1,
        explanation: "Option B is CORRECT because it is used to validate the terraform configuration. The terraform validate command checks whether a configuration is syntactically valid and internally consistent."
    },
    {
        id: 102,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 102,
        objectiveName: "Terraform Formatting (fmt)",
        question: "When terraform fmt is applied, how many space indentation are applied for each nesting level?",
        options: [
            "3",
            "2",
            "1",
            "4"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Options A, C and D are INCORRECT because by default terraform fmt applies 2 space indentation at each level,."
    },
    {
        id: 103,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 103,
        objectiveName: "Terraform Plan Output",
        question: "How to save destroy plan to a file before destroying it?",
        options: [
            "terraform plan -destroy",
            "terraform plan",
            "terraform plan –out=PATH",
            "terraform plan –destroy –out=PATH"
        ],
        correctAnswer: 3,
        explanation: "Option D is CORRECT, and this plan will be generated to delete all resources managed by the given configuration and state and save them in the PATH specified. When you run terraform plan –destroy, a plan for destroying all resources managed by the given configuration and state is generated."
    },
    {
        id: 104,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 104,
        objectiveName: "Terraform Parallelism",
        question: "By default, how many parallel/concurrent operations are executed by terraform?",
        options: [
            "2",
            "10",
            "5",
            "1"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Option B is CORRECT because when you run the plan or apply command, you get 10 parallel execution by default. Terraform sets parallel execution to ten by default."
    },
    {
        id: 105,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 105,
        objectiveName: "Terraform Apply (Auto-Approve)",
        question: "How can we skip interactive approval for terraform apply command? (SELECT TWO)",
        options: [
            "terraform apply –auto-approve",
            "terraform apply -yes",
            "terraform plan –out=\"test.tfplan\" and terraform apply test.tfplan",
            "terraform apply –auto-approve=true"
        ],
        correctAnswer: 0, // A and C are correct, selecting A (0)
        explanation: "Answers: A and C. Option A is CORRECT, and it uses the auto-approve option to bypass interactive approval. Option C is CORRECT; if a plan is supplied as an argument, the application will not ask for approval,."
    },
    {
        id: 106,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 106,
        objectiveName: "Terraform State Drift & Refresh",
        question: "Terraform was used by Bob to launch a server. He wanted to increase the size of the server from 2GB to 4GB. He modifies the configuration and applies the Terraform plan before taking a break. However, another team member manually changes the size to 4GB from the cloud provider console. What happens when Bob applies terraform?",
        options: [
            "Terraform will destroy and create a new server with 4GB. Apply complete! Resources: 1 added, 0 changed, 1 destroyed.",
            "Terraform will create a new server with 4GB. Apply complete! Resources: 1 added, 0 changed, 0 destroyed.",
            "Terraform will not do any changes as already server is of size 4GB. Apply complete! Resources: 0 added, 0 changed, 0 destroyed.",
            "Terraform will try to change the server size again to 4GB. Apply complete! Resources: 0 added, 1 changed, 0 destroyed."
        ],
        correctAnswer: 2,
        explanation: "Option C is the correct choice because the server has already reached the desired state and Terraform will not make any changes. Terraform makes use of the terms \"desired state\" and \"current state.\" It refreshes the state whenever it tries to make any changes to see what the current state is."
    },
    {
        id: 107,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 107,
        objectiveName: "Terraform Destroy & Targeting (Count)",
        question: "Bob has created 2 servers using the following block for terraform configuration. He wants to destroy only the second server as he is not using, without user interaction. How we can achieve this?",
        options: [
            "terraform destroy –target=aws_instance.web",
            "terraform destroy –target=aws_instance.web –auto-approve",
            "terraform destroy –resource=aws_instance.web",
            "terraform destroy –resource=aws_instance.web –auto-approve"
        ],
        correctAnswer: 1,
        explanation: "Option B is correct because this command is used to destroy the target without requiring the user's involvement. Because the count is set to two, two servers will be created, and each resource will be stored in an array format, with indexes beginning at 0."
    },
    {
        id: 108,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 108,
        objectiveName: "Terraform Destroy Methods",
        question: "Is terraform destroy the only method to delete a resource provisioned by terraform?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Terraform destroy was the only command to destroy infrastructure until Terraform version 0.15, but in Terraform 0.15.2 and later versions, terraform apply -destroy is also used to destroy infrastructure."
    },
    {
        id: 109,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 109,
        objectiveName: "Terraform Plan Symbols",
        question: "On terraform plan/terraform apply logs, what is the meaning of tilde(~) sign? Please choose from below:",
        options: [
            "The resource will be created.",
            "resource will be destroyed",
            "resource will be updated in place.",
            "Due to error in provisioner this execution this symbol is placed. Resource will be recreated."
        ],
        correctAnswer: 2,
        explanation: "Option C is the correct choice because it indicates that the resource will be updated in place."
    },
    {
        id: 110,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 110,
        objectiveName: "Terraform Local Backend",
        question: "Which of the following is true about local backend? (SELECT TWO)",
        options: [
            "local backend stores state on the local file system",
            "locks that state using system APIs",
            "performs operations locally and remotely",
            "Data at rest is encrypted by terraform.",
            "locks that state using terraform prebuilt APIs"
        ],
        correctAnswer: 0, // A and B are correct, selecting A (0)
        explanation: "Answers: A and B. The local backend saves state to the local file system, locks it with system APIs, and executes operations locally."
    },
    {
        id: 111,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 111,
        objectiveName: "Terraform Force Unlock",
        question: "When multiple team members are working on same state file, state file gets locked. How to remove the lock?",
        options: [
            "terraform force-unlock LOCK_ID",
            "terraform force-unlock STATE_FILE",
            "terraform unlock LOCK_ID",
            "terraform force-unlock=true"
        ],
        correctAnswer: 0,
        explanation: "Option A is CORRECT force-unlock with LOCK_ID is used to remove lock on state file. Manually unlock the state for the defined configuration with force-unlock."
    },
    {
        id: 112,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 112,
        objectiveName: "Terraform Backends & Locking",
        question: "Which of the following backends support state storage with default locking?(SELECT TWO)",
        options: [
            "s3",
            "azurerm",
            "gcs",
            "http",
            "artifactory"
        ],
        correctAnswer: 1, // B and C are correct, selecting B (1)
        explanation: "Answers: B and C. Option A is incorrect because s3 does not have default locking and instead relies on DynomoDB. Because azurerm has default state locking, Option B is correct. Because gcs has default state locking, Option C is correct."
    },
    {
        id: 113,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 113,
        objectiveName: "Terraform Refresh",
        question: "Does terraform refresh modifies the existing infrastructure?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: B The terraform refresh command is used to reconcile Terraform's current state (as stored in its state file) with the real-world infrastructure. This does not change the infrastructure, but it changes the state file."
    },
    {
        id: 114,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 114,
        objectiveName: "Terraform Backend Configuration (Secrets)",
        question: "A user doesn’t want to store secrets for configuring remote backend. How can he pass the remaining configuration so that terraform can initialize and talk to backend? (SELECT THREE)",
        options: [
            "Command line key-value pairs.",
            "Interactively on command line.",
            "use the –backend-config=PATH to specify a separate config file",
            "Query for secrets directly from vault"
        ],
        correctAnswer: 0, // A, B, and C are correct, selecting A (0)
        explanation: "Answers: A, B and C. We can supply the remaining arguments using the methods listed below: Interactively, File - use the -backend-config=PATH option when running terraform init, and Command-line key/value pairs."
    },
    {
        id: 115,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 115,
        objectiveName: "Terraform Sensitive Outputs",
        question: "When the below configuration is applied using terraform apply, it outputs in format db_password=<sensitive>. Will the output value be saved as sensitive in state file as well?",
        options: [
            "Yes",
            "No"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Sensitive output values are still recorded in the state, and anyone with access to the state data will be able to see them."
    },
    {
        id: 116,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 116,
        objectiveName: "Terraform Output Inspection",
        question: "Bob wants to see all the terraform output values stored in terraform.tfstate file. Which of the below commands will do the task? (SELECT THREE)",
        options: [
            "terraform output",
            "terraform show",
            "terraform output -state=terraform.tfstate",
            "terraform state list",
            "terraform show terraform.tfstate"
        ],
        correctAnswer: 0, // A, B, and E are correct, selecting A (0)
        explanation: "Answers: A , B and E. The terraform output command is used to extract the value of an output variable from the state file. The terraform show command is used to display the entire tfstate file in human readable form."
    },
    {
        id: 117,
        type: "Multiple Choice",
        difficulty: "Hard",
        objective: 117,
        objectiveName: "Terraform Security & Vault",
        question: "When using the Terraform provider for Vault, the tight integration between the HashiCorp tools provides the ability to mask secrets in the terraform plan and state files.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Terraform currently lacks a direct integration with a vault provider for storing sensitive data securely. Secrets read through this provider will be persisted in the Terraform state, any plan files, and, in some cases, the console output."
    },
    {
        id: 118,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 118,
        objectiveName: "Terraform Variable Types (Object)",
        question: "A variable of type object({ name=string, age=number }) would match which of the following options:",
        options: [
            "{ name = \"John\" age = \"52\" }",
            "{ name = John, age = \"52\" }",
            "{ name = \"John\", age = 52 }",
            "{ name = \"John\" age = 52 }"
        ],
        correctAnswer: 3,
        explanation: "Answer: D Option D is the correct answer because the object is represented by a string and a number. Options A, B, and C contain incorrect syntax or type assignment (age is string in A and B, C has comma separators)."
    },
    {
        id: 119,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 119,
        objectiveName: "Terraform Data Sources",
        question: "Which of the following is not true about data sources?",
        options: [
            "data block can have local source.",
            "data sources are only given by providers.",
            "data sources allows a terraform configuration to make use of information defined by another separate Terraform configuration.",
            "We can use filters inside data block."
        ],
        correctAnswer: 1,
        explanation: "Answer: B Option B is RIGHT because data sources can come from anywhere. We also have the option of having our own source. Data sources allow a Terraform configuration to use information defined outside of Terraform or by another Terraform configuration."
    },
    {
        id: 120,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 120,
        objectiveName: "Terraform Dependencies",
        question: "In the following configuration snippet, depends_on argument signifies which dependency? resource \"aws_instance\" \"web\" { ami = ami-a123456789b instance_type = \"t3.micro\" depends_on = [aws_s3_bucket.web_bucket] }",
        options: [
            "explicit dependency",
            "direct dependency",
            "implicit dependency",
            "internal dependency"
        ],
        correctAnswer: 0,
        explanation: "Answer: A depends_on is an explicit dependency."
    },

    // --- PART 3 (Queries 121-180 / P3 Q1-P3 Q60) ---
    {
        id: 121,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 121,
        objectiveName: "Terraform Functions (Lookup)",
        question: "What would be output of the below? > lookup({a=\"test \", b=\"good morning\"}, \"call\", \"terraform?\")",
        options: [
            "test",
            "good morning",
            "terraform?",
            "call"
        ],
        correctAnswer: 2,
        explanation: "Answer - C If no key is specified (like \"call\" in the map), the default values (\"terraform?\") will be returned."
    },
    {
        id: 122,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 122,
        objectiveName: "Terraform Resources",
        question: "In the below-given code, what is the local name of the block? 1. resource \"aws_instance\" \"test\" { 2.   ami           = \"ami-test\" 3.   instance_type = \"t2.nano\" 4.   Vpc.id = “vpc-test1234” 5. }",
        options: [
            "test",
            "aws_instance",
            "Demo",
            "resource"
        ],
        correctAnswer: 0,
        explanation: "Answer - A We need a unique identifier for the resource block, which is resource type + local name. 'test' is the block's local name in this case,."
    },
    {
        id: 123,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 123,
        objectiveName: "Terraform CLI (Replace)",
        question: "Which command from the list below would be best suited to replace a specific object even if no configuration changes are made in the code?",
        options: [
            "terraform destroy",
            "terraform taint",
            "terraform replace",
            "terraform state rm"
        ],
        correctAnswer: 2,
        explanation: "Correct Answer: C If your intent is to force replacement of a particular object even though there are no configuration changes that would require it, we recommend instead to use the -replace option with terraform apply. Using the \"replace\" option when creating a plan is preferable to using terraform taint."
    },
    {
        id: 124,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 124,
        objectiveName: "Terraform CLI (Providers Schema)",
        question: "Which command is used to print detailed schemas for the providers used in the current configuration.",
        options: [
            "Terraform providers",
            "Terraform providers Schema",
            "Terraform providers mirror",
            "Terraform providers describe"
        ],
        correctAnswer: 1,
        explanation: "Correct Answer: B The terraform providers schema command prints detailed schemas for the providers that are currently being used in the configuration,."
    },
    {
        id: 125,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 125,
        objectiveName: "Terraform Functions (Index)",
        question: "What is the output of the below terraform function? > index([\"test\", \"dev\", \"prod\"], \"prod\")",
        options: [
            "-1",
            "2",
            "1",
            "3"
        ],
        correctAnswer: 1,
        explanation: "Answer - B Index outputs the values of the element index, for a given value in the list starting with 0. So here it is test =0, dev =1, prod =2,."
    },
    {
        id: 126,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 126,
        objectiveName: "Terraform Functions (Zipmap)",
        question: "What is the result of the following terraform function call? > zipmap([\"john\", \"Jim\"],)",
        options: [
            "[\"john\", \"jim\", \"0\", \"2\",]",
            "{\"Jim\" = 2, \"john\" = 0}",
            "(\"john\"=1,”jim”=2)",
            "{{ “john”=1 “jim”=2 }}"
        ],
        correctAnswer: 1,
        explanation: "Answer: B zipmap constructs a map from a list of keys and a corresponding list of values. The map is denoted by curly braces."
    },
    {
        id: 127,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 127,
        objectiveName: "Terraform Provisioners & Lifecycle",
        question: "After deploying an instance, your colleague wants to deploy some configurations. What are the steps he needs to take to install the configurations?",
        options: [
            "Use terraform remote provisoners to install.",
            "Logon to instance and manually install as it is one time install.",
            "Take the data backup, taint/replace the resource, add the provisioner code and create the resource again.",
            "Create an new instance with bootstrap configurations and clone it."
        ],
        correctAnswer: 2,
        explanation: "Answer - C We'll have to recreate the resource as provisioners, which can only run during the create or destroy phases and not in the middle. We must make a backup of the resource and then recreate it."
    },
    {
        id: 128,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 128,
        objectiveName: "Terraform CLI (Console)",
        question: "Which command is used to launch terraform console?",
        options: [
            "terraform apply -config",
            "terraform console",
            "terrafrom plan",
            "terrafrom consul"
        ],
        correctAnswer: 1,
        explanation: "Answer : B terraform console [options] [dir] This command allows you to evaluate and experiment with expressions using an interactive command-line console,."
    },
    {
        id: 129,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 129,
        objectiveName: "Sentinel Policy",
        question: "Which of the following below helps users to deploy policy as a code?",
        options: [
            "Resources",
            "Functions",
            "Sentinel",
            "Workspaces"
        ],
        correctAnswer: 2,
        explanation: "Answer: C The concept of writing code in a high-level language to manage and automate policies is known as policy as code. Sentinel is based on this concept."
    },
    {
        id: 130,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 130,
        objectiveName: "Terraform CLI (Providers)",
        question: "Which terraform command can be used to find the provider name being used in your code?",
        options: [
            "terraform state",
            "terraform apply",
            "terraform providers",
            "terraform plan"
        ],
        correctAnswer: 2,
        explanation: "Answer: C The terraform providers command is used to determine the name of the provider you're deploying."
    },
    {
        id: 131,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 131,
        objectiveName: "Terraform Initialization & Upgrade",
        question: "You have been asked to upgrade modules and plugins. Which command and flag, will you use for this purpose?",
        options: [
            "terraform init -upgrade",
            "terraform provider -upgrade",
            "terraform refresh",
            "terraform init"
        ],
        correctAnswer: 0,
        explanation: "Answer: A As part of their respective installation steps, terraform init -upgrade is used to upgrade modules and plugins,."
    },
    {
        id: 132,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 132,
        objectiveName: "Terraform Environment Variables",
        question: "Terraform's data directory is used to store data that must be preserved from one command to the next, so it's critical to have this variable set consistently across all Terraform workflow commands (beginning with terraform init), or Terraform may be unable to locate providers, modules, and other artefacts. Which ENVIRONMENT VARIABLE is used to 'set' per-working-directory data from the list below?",
        options: [
            "TF_DATA_DIR",
            "TF_WORKSPACE",
            "TF_DATA",
            "TF_DATA_WORKSPACE"
        ],
        correctAnswer: 0,
        explanation: "Correct Answer: A Terraform's per-working-directory data, such as the current remote backend configuration, is saved in the TF DATA DIR variable,."
    },
    {
        id: 133,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 133,
        objectiveName: "Terraform Apply",
        question: "What does the terraform apply command do?",
        options: [
            "It will check for canonical format and config errors in the configuration",
            "It will create a map of infrastructure to be deployed",
            "It will create a workspace and store all the configurations in the .terrafrom directory",
            "It will propose the plan and prompt the user to approve to actually implement the configurations."
        ],
        correctAnswer: 3,
        explanation: "Answer : D The terraform apply command puts a Terraform plan's actions into action. Unless you use the -auto-approve option, Terraform will present you with the plan and prompt you to approve it before proceeding with the described actions."
    },
    {
        id: 134,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 134,
        objectiveName: "Sentinel Policy",
        question: "What are the benefits of Policy as Code in Terraform?",
        options: [
            "Sandboxing",
            "Encryption",
            "Automation",
            "Clarification"
        ],
        correctAnswer: 0, // A and C are correct, selecting A (0)
        explanation: "Answer: A and C Policy as Code has the following benefits: Sandboxing, Codification, Version Control, Testing, and Automation."
    },
    {
        id: 135,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 135,
        objectiveName: "Terraform Taint",
        question: "You have been asked to manually taint a resource using terraform command. Which command from below you will use?",
        options: [
            "terraform taint -resource-name",
            "terraform taint type.name",
            "terraform taint = resource.id",
            "terraform taint resource.id – name"
        ],
        correctAnswer: 1,
        explanation: "Answer: B The name argument specifies the name of the tainted resource. This argument has the format TYPE.NAME, such as aws instance.foo. Note that terraform taint command is deprecated now in terraform version 0.15.2 and higher."
    },
    {
        id: 136,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 136,
        objectiveName: "Terraform CLI Configuration",
        question: "The Terraform Configuration File is used to set per-user CLI behaviour settings across all Terraform working directories. Is it true or false?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Correct Answer: A The Terraform configuration file specifies per-user CLI behaviour settings that are shared across all Terraform working directories."
    },
    {
        id: 137,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 137,
        objectiveName: "Terraform Variables",
        question: "You have been asked to stop using static values and make code more dynamic. How can you achieve it? Select the correct option from below.",
        options: [
            "Local values",
            "Input variables",
            "Depends_on",
            "Functions"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Input Variables: Function arguments are the same as input variables. (This is the correct answer)."
    },
    {
        id: 138,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 138,
        objectiveName: "Terraform Taint",
        question: "Please choose from the below command, which doesn’t destroy an instance, instead recreates?",
        options: [
            "terraform refresh",
            "terraform taint",
            "terraform state mv",
            "terraform plan -options"
        ],
        correctAnswer: 1,
        explanation: "Answer: B Terraform receives notification from the terraform taint command that a specific object has been degraded or damaged. This is represented by Terraform marking the object as \"tainted\" in the Terraform state, in which case Terraform will suggest replacing it in the next plan you create,."
    },
    {
        id: 139,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 139,
        objectiveName: "Terraform Import Syntax",
        question: "You have created an ec2 instance on AWS console with the name whiz-ec2 and instance id as i-123w8766. You are asked to import this instance. Which command would you choose to import?",
        options: [
            "terraform import aws_instance i-123w8766",
            "terraform import-whiz-ec2 i-123w8766",
            "terraform import i-123w8766 whiz-ec2",
            "terrafom import aws_instance.whiz-ec2 i-123w8766"
        ],
        correctAnswer: 3,
        explanation: "Answer - D To import a resource, create a resource block for it in your configuration and give it a name that Terraform will recognise. The command syntax is terraform import <RESOURCE_TYPE>.<RESOURCE_NAME> <ID>."
    },
    {
        id: 140,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 140,
        objectiveName: "Terraform Cloud CLI",
        question: "Which of the following commands can be used to logout from terraform cloud?",
        options: [
            "Terraform logout",
            "Terraform –logout",
            "Terraform log out",
            "Terraform –log-out"
        ],
        correctAnswer: 0,
        explanation: "Correct Answer: A The terraform logout command is used to remove terraform login's credentials. These credentials are API tokens for Terraform Cloud, Terraform Enterprise, or any other Terraform-compatible host."
    },
    {
        id: 141,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 141,
        objectiveName: "Terraform Apply Flags",
        question: "Which of the following flags can be used with terraform apply command?",
        options: [
            "auto-approve",
            "init",
            "get",
            "console"
        ],
        correctAnswer: 0,
        explanation: "Answer - A -auto-approve: Skips interactive approval of the plan before applying."
    },
    {
        id: 142,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 142,
        objectiveName: "Terraform Plan Behavior",
        question: "Your colleague has created a resource group in azure manually. What will happen once you execute the terraform plan command? Select the correct answer.",
        options: [
            "Terrafrom plan will throw errors in the resources",
            "Terraform plan shows ~ and updates everything",
            "Terraform plan will show output to remove the manually created one",
            "Terrafrom plan will only show what is going to be configured but not anything manually configured"
        ],
        correctAnswer: 3,
        explanation: "Answer : D Terraform plan just creates a plan about the resource to be configured. In case, we execute terraform apply command, then terraform throws an error."
    },
    {
        id: 143,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Easy",
        objective: 143,
        objectiveName: "Terraform Provisioners (Local-Exec)",
        question: "What is the use of local-exec in Terraform? Select all that apply.",
        options: [
            "to invoke commands locally on remote host",
            "usually to run commands on the machine where terraform is running",
            "use to invoke scripts locally",
            "locally create variables and run interrafrom"
        ],
        correctAnswer: 1, // B and C are correct, selecting B (1)
        explanation: "Answer B and C. After a resource is created, the local-exec provisioner calls a local executable. This starts a process on the Terraform-running machine, not on the resource."
    },
    {
        id: 144,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 144,
        objectiveName: "Terraform Initialization (When Required)",
        question: "You are making changes to terraform configuration. In which of the below cases do you need to execute terraform init everytime?",
        options: [
            "on any new environment that configures a backend",
            "on removing backend configuration completely",
            "when there is no change of backend configuration",
            "Every time you add some configs, you run init so that it makes sure everything is up to date"
        ],
        correctAnswer: 0, // A and B are correct, selecting A (0)
        explanation: "Answer : A,B. Terraform init sets up the backend. You need to run init when setting up the backend or changing the backend configuration."
    },
    {
        id: 145,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Easy",
        objective: 145,
        objectiveName: "Terraform Enterprise Support",
        question: "Please choose the operating systems which support terraform enterprise version.",
        options: [
            "Fedora",
            "Ubuntu 16.0.4.3",
            "CentOS – 7.7",
            "Windows 7",
            "Mac OS"
        ],
        correctAnswer: 1, // B and C are correct, selecting B (1)
        explanation: "Answer: B and C. Terraform Enterprise currently supports running under the following operating systems: Ubuntu 14.04.5 / 16.04 / 18.04 / 20.04 and CentOS 7.4 - 7.9, among others."
    },
    {
        id: 146,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 146,
        objectiveName: "Terraform Parallelism",
        question: "What is the default number of concurrent opeations supported by terraform apply command?",
        options: [
            "100",
            "10",
            "5",
            "1"
        ],
        correctAnswer: 1,
        explanation: "Answer - B Terraform apply supports a maximum of 10 concurrent operations by default. The default is 10."
    },
    {
        id: 147,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 147,
        objectiveName: "Terraform Cloud CLI",
        question: "You are trying to login into Terraform Enterprise. Which of the following command is used to save the API token?",
        options: [
            "terrafrom get",
            "terrafrom api-get",
            "terraform login",
            "terraform cloud – get api"
        ],
        correctAnswer: 2,
        explanation: "Answer - C Terraform Cloud, Terraform Enterprise, or any other host that offers Terraform services can use the terraform login command to automatically obtain and save an API token."
    },
    {
        id: 148,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 148,
        objectiveName: "Terraform Security & Secrets",
        question: "You have been asked to talk to your team about how to manage secrets in terraform. Please choose the correct statements from below.",
        options: [
            "Always store the secrets in tfstate file with sensitive parameter turned on and this will help to mask the parameters and doesn’t show the data unless you unmask it",
            "Never hardcode secrets like access keys, passwords in the configuration’s files",
            "Avoid saving the hardcoded secrets in state file or configuration files",
            "Make sure when commiting to git don’t add the files where the secrets are stored"
        ],
        correctAnswer: 1, // B, C, and D are correct, selecting B (1)
        explanation: "Answer B, C, and D. Access keys and passwords should never be hardcoded in configuration files. Hardcoded secrets should not be saved in state or configuration files. When committing to git, make sure you don't include the files containing the secrets."
    },
    {
        id: 149,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 149,
        objectiveName: "Terraform Backend Types",
        question: "What are the two supported backend types in Terraform?",
        options: [
            "Remote-backend",
            "Enhanced",
            "Local- backend",
            "Standard"
        ],
        correctAnswer: 1, // B and D are correct, selecting B (1)
        explanation: "Answer B, D. The backends of Terraform are divided into two categories based on how they handle state and operations: Enhanced backends and Standard backends,."
    },
    {
        id: 150,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 150,
        objectiveName: "Terraform Version Constraints",
        question: "You noticed this symbol = “~> 0.11” in your terraform provider version. What does this signify?",
        options: [
            "Version which is more than 0.11 and less than 0.10",
            "Version which is less than 0.11 and more than 0.10",
            "Versions which are less than 0.1 and more than 0.11",
            "Version which are more than 0.11 and less than 0.12"
        ],
        correctAnswer: 3,
        explanation: "Answer - D This is known as a Pessimistic Constraint Operator. ~> 0.11 signifies Version which are more than 0.11 and less than 0.12."
    },
    {
        id: 151,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Medium",
        objective: 151,
        objectiveName: "Terraform Private Registry Benefits",
        question: "What are the benefits of using a private registry in Terraform? Select all that apply.",
        options: [
            "Terraform cloud private registry is a paid feature.",
            "Using a private registry, all the modules can be shared within or across organizations.",
            "It supports module versioning, filtered list of available modules, and configuration designer to build new workspaces",
            "It is very similar to the public Terraform Registry."
        ],
        correctAnswer: 1, // B, C, and D are correct, selecting B (1)
        explanation: "Answer B, C, and D. The private module registry in Terraform Cloud allows you to share Terraform modules across your organisation. It features module versioning, a searchable and filterable list of available modules, and is designed to work similarly to the public Terraform Registry."
    },
    {
        id: 152,
        type: "Multiple Choice (Multi-Select)",
        difficulty: "Easy",
        objective: 152,
        objectiveName: "Terraform Provisioners Benefits",
        question: "Why should one use provisioners? Please pick the (right) choices from below",
        options: [
            "Remote-exec helps to run commands remotely on virtual machine",
            "Local-exec is a provisioner which helps to run scripts locally on machine where terraform is installed",
            "Local-exec is used to run things on remote virtual machines",
            "File provisioner is a provisioner which is used to run or execute configurable scripts on remote instances"
        ],
        correctAnswer: 0, // A and B are correct, selecting A (0)
        explanation: "Answer: A and B. Remote-exec helps to run commands remotely on virtual machine. Local-exec is a provisioner which helps to run scripts locally on machine where terraform is installed."
    },
    {
        id: 153,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 153,
        objectiveName: "Terraform Resources",
        question: "You are new to terraform and have been asked to find that what is created/target resource name for the below code? resource \"azurerm_resource_group\" \"rg\" { name = \"testrg\" location = \"eastus2\" }",
        options: [
            "rg",
            "testrg",
            "azurerm_resource_group.rg",
            "resource"
        ],
        correctAnswer: 1,
        explanation: "Answer B The name of the created resource group would be \"testrg\",."
    },
    {
        id: 154,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 154,
        objectiveName: "Sentinel Policy Enforcement",
        question: "You have been asked to use sentinel Policies. During which phase it needs to be checked?",
        options: [
            "During terraform init",
            "terraform apply",
            "Before terraform apply",
            "After terraform plan"
        ],
        correctAnswer: 3,
        explanation: "Answer – C (Note: The selection is D=After terraform plan). Sentinel Policy is applied before terraform apply and after terraform plan. The policies are checked when a run is performed."
    },
    {
        id: 155,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 155,
        objectiveName: "Terraform Variables Syntax",
        question: "One of your colleagues configured input variables wrongly please find the correct syntax one from below",
        options: [
            "variable “aws_customer_gateway\" { Description = “whizlabs-gateway” Type = string Default = “whizlab-customer-gateway” “aws_customer_gateway” { Ip_address =”172.19.124.10” Type = “ipsec.1” name = [“var.aws_customer_gateway”] }",
            "variable “aws_customer_gateway\" { Description = “whizlabs-gateway” Type = string Default = “whizlab-customer-gateway” “aws_customer_gateway” { Ip_address =”172.19.124.10” Type = “ipsec.1” name = “var.aws_customer_gateway” }",
            "variable “aws_customer_gateway\" { Description = “whizlabs-gateway” Type = string Default = “whizlab-customer-gateway” “aws_customer_gateway” { Ip_address =”172.19.124.10” Type = “ipsec.1” name = aws_customer_gateway.var_name }",
            "variable \"aws_customer_gateway\"&nbsp;{&nbsp; description = \"whizlabs-gateway\"&nbsp; type = string&nbsp; default = \"whizlab-customer-gateway\"&nbsp; \"aws_customer_gateway\"&nbsp; {&nbsp; ip_address =\"172.19.124.10\"&nbsp; type = \"ipsec.1\"&nbsp; name = var.aws_customer_gateway }&nbsp; }"
        ],
        correctAnswer: 3,
        explanation: "Answer : D Terraform variables allow you to write configuration that is flexible and easier to re-use."
    },
    {
        id: 156,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 156,
        objectiveName: "Terraform State Locking",
        question: "Your state file is locked, and terraform apply is run by one of your colleagues. Is it true that all of the content is provisioned? After the state file has been locked, one of your colleagues issues a terraform apply. Is there a way to get all of the content provisioned using the apply command?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer: False All commands that can change the terraform state file, such as terraform apply, destroy, and so on, are frozen when the state file is locked."
    },
    {
        id: 157,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 157,
        objectiveName: "Terraform State Inspection",
        question: "terraform state list command shows the list of resources in the state file.",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True \"terraform state list\" shows the resources within a terraform state."
    },
    {
        id: 158,
        type: "Multiple Choice",
        difficulty: "Medium",
        objective: 158,
        objectiveName: "Terraform State Data",
        question: "Do Terraform state store implicit and explicit dependencies?",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 0,
        explanation: "Answer: True Both Implicit and explicit dependencies data is stored in the state file."
    },
    {
        id: 159,
        type: "Multiple Choice",
        difficulty: "Easy",
        objective: 159,
        objectiveName: "Terraform Validate",
        question: "Does Terrafrom validate checks for the errors and upon terraform apply shows the debug output",
        options: [
            "True",
            "False"
        ],
        correctAnswer: 1,
        explanation: "Answer : False."
    }
];

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { examQuestions };
} else if (typeof window !== 'undefined') {
    window.examQuestions = examQuestions;
}
