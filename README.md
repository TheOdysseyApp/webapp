# Odyssey Webapp
This repository will store the code for Odyssey's webapp. 

## Local Setup

If you have already installed the AWS Amplify CLI and configured it, skip to step 3

1. Install the AWS Amplify CLI by running the following command in your terminal or command prompt:
```
npm install -g @aws-amplify/cli
```

2. Once the installation is complete, configure the Amplify CLI by running the following command and following the prompts. This will ask you to log in to your AWS account, then it will prompt you to create a new IAM user for amplify. **IMPORTANT: For the region, make sure to choose us-west-2 (Oregon)**. Follow the instructions at this link for more detailed instructions on how to create a new profile https://docs.amplify.aws/cli/start/install/#configure-the-amplify-cli:
```
amplify configure
```


3. Clone the repository containing your Amplify project onto your new machine using this command This will create a folder called odyssey containing the repo.
```
git clone https://github.com/TheOdysseyApp/webapp.git odyssey
```

4. Navigate to the root directory of your project in your terminal or command prompt.

5. Run the following command to install the project dependencies:
```
npm install
```

6. Run the following command to initialize our Amplify app:
```
amplify pull --appId d2wk1df8nh4cn3 --envName main
```
This will prompt you to choose your default text editor, select the Amplify project to initialize, and configure the AWS profile to use.

7. Run the following command to deploy the backend services to AWS and create any necessary resources.
```
amplify push
```


## Deployment
AWS Amplify will automatically deploy changes from ```main```. So to deploy changes just commit and push to main.
As a result, features should be developed on separate branches and then merged into main through pull requests to ensure bad code isn't pushed to our live site.
Amplify allows us to change the branch it follows, so a ```prod``` branch in the future would be a good move.
