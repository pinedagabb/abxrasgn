# Airboxr FTE Frontend Assignment

## Instructions

This is a sandbox environment created for you to attempt your assignment. Some libraries you'll need are already installed and you're free to install any additional libraries as you see fit. You may also refer to any resource to help you in your attempt. To get started, simply fork this sandbox and play around. If you have any questions, do not hesitate to reach out to your POC at Airboxr.

We suggest you turn off the "Preview on edit" setting in your codesandbox preferences so the preview only refreshes when you save your work instead of refreshing everytime you type something. If you find codesandbox to be sluggish, feel free to work on your local machine and put your code up in a publicly accessible repo.

## Environment

You are highly encouraged to stick to a React & Typescript setup. For UI, you should use the layout-components provided and any other [MUI](https://material-ui.com/) components you wish to use.

## Objectives

The central objective of this assignment is to create a page-based UI flow as per the following [design](https://drive.google.com/file/d/1-tAoyuS6cf3vzF76TqAOdaV8akIhvZxm/view). Detailed objectives as follows:

1. HomePage:

- - Clicking on "Import Data" or "Lookup Data" should take you to SelectSourcePage.

2. SelectSourcePage:

- - Upon loading the page, a GET request should be made at https://api.airboxr.com/data/dataStores, which will give you a list of sources available. NOTE: You will need an authorization token to access this API. Your POC at Airboxr will provide you this.
- - Each source will have a "name" and a list of "tables", each with a "title". These are the only relevant fields for you.
- - The heart icon button should let you mark/unmark a source as favourite. Favourite sources should appear before unmarked sources.
- - NOTE: the source logos are not returned by the API as of now. Instead, they're provided within this sandbox under the public folder.
- - Clicking on the "Next" at the bottom of the page doesn't need to do anything.
- - Clicking on any of the source tiles should take you to the SelectTablePage for that source.

3. SelectTablePage:

- - This page should list tables with radio buttons next to them.
- - If no table is selected, the "Next" button should be disabled.
- - You'll notice that some table titles are formatted as "<Title1>||<Title2>" instead of simply "<Title>". For example, the source "Mailchimp" has a list of tables like "Lists||Members #1" and "Lists||Members #2". This signifies indented tables. For such cases, you should show only <Title1> at first. Upon selecting such a table (with indented tables) and clicking "Next", you should navigate to a another SelectTablePage listing the indented tables. Referring back to the Mailchimp example, the first instance of SelectTablePage should show "Audience". "Lists", "Reports" tables. Upon selecting "Lists" and clicking next, a new instance of SelectTablePage should show "Members #1" and "Members #2".
- - On any instance SelectTablePage, selecting a table which has no indented tables and then clicking "Next" should simply console.log("TODO - Go to SelectColumnsPage").
- - The "Filter" text field right above the list of tables doesn't need to do anything.

4. Wherever relevant:

- - Clicking back arrow button should take you to the last page
- - Clicking home icon button should take you to HomePage
- - Clicking on the "CHAT" button doesn't need to do anything

### BONUS

1. Create some sort of a loading UI while waiting for the API to return a response.
2. The "Filter" text field in SelectTablePage should let you filter the list of tables as you type. For instance, If the list of tables is "Audience", "Acquisition" and "Goals", typing "au" or "ie" (case-insensitive) in the filter field should show only "Audience" and clearing the filter field should revert back to showing all the tables.

## Submission

Once you're done, reach out to your POC at Airboxr with a link to your forked sandbox.

curl -d '{"email":"applicant@airboxr.com", "password":"ZUSrS5jSZDvEPTyX"}' -H 'Content-Type: application/json' https://api.airboxr.com/auth/loginWithEmail
