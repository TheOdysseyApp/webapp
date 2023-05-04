# webapp
This repository will store the code for Odyssey's webapp. 

## Local Setup

If you have already installed the AWS Amplify CLI and configured it, skip to step 3

1. Install the AWS Amplify CLI by running the following command in your terminal or command prompt:
```
npm install -g @aws-amplify/cli
```

2. Once the installation is complete, configure the Amplify CLI by running the following command and following the prompts:
```
amplify configure
```
This will prompt you to provide your AWS access key ID, secret access key, default region, and default output format. You can obtain your AWS access keys from the AWS console. For more detailed instructions, follow the link at https://docs.amplify.aws/lib/client-configuration/configuring-amplify-categories/q/platform/js/.

3. Clone the repository containing your Amplify project onto your new machine.

4. Navigate to the root directory of your project in your terminal or command prompt.

5. Run the following command to install the project dependencies:
```
npm install
```

6. Run the following command to initialize Amplify:
```
amplify init
```
This will prompt you to choose your default text editor, select the Amplify project to initialize, and configure the AWS profile to use.

7. Run the following command to deploy the backend services to AWS and create any necessary resources.
```
amplify push
```


## Todo:

* Write down deployment steps
