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

AWS Amplify will automatically deploy changes from ```main```. To ensure bad code isn't pushed to our live site, features should be developed on separate branches and then merged into main through pull requests.

## Code structure

Important directories and files:
- ```/public```: images + favicons
- ```/src/components```: reused React components
- ```/src/pages```: any pages referenced in ```App.js``` (currently, this is only ```Homepage.js```)
- ```/src/pages/Homepage/stages```: 4 separate content sections, each displaying a stage in the planning workflow
- ```/src/api.js```: API calls and their relevant functions
- ```/src/App.js```: page routing and AWS Amplify authenticator
- ```/src/index.css```: site-wide styling

The app's main content is located in ```Homepage.js``` and consists of three sections: the navbar component in ```Navbar.js```, the sidebar component in ```ItinerariesList.js```, and the main content. 

The main content of the page is divided into four sections, each handling a different stage in the planning process. The stages are:
1. ```CompareTrips```, which displays a traveler's information and their three AI-generated trips. The traveler is selected when the user clicks on one of the preview cards in ```ItinerariesList.js```
2. ```EditTrip```, which allows the planner to edit values for the selected itinerary.
3. ```Review```, which displays the finished itinerary before submission.
4. ```Confirmation```, to signal that the itinerary was successfully submitted.


