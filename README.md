# Quiz of Colombia!
A website where users can play a quiz answering questions on the country of Colombia.\
[Link to website](https://hardingrichard.github.io/ci-ms2-quiz)

![Responsive Mockup Design](documents/mockup.png)

## Table Of Contents

1. [Key Project Goals](#key-project-goals)
    1. [Site Owner Goals](#site-owner-goals)
    2. [User Goals](#user-goals)
2. [Information Gathering](#information-gathering)
    1. [Target Audience](#target-audience)
    2. [User Requirements](#user-requirements)
    3. [User Stories](#user-stories)
3. [Site Design](#site-design)
    1. [Wireframes](#wireframes)
    2. [Design choice](#design-choice)
4. [Site Features](#linkhere)
5. [Technology stack](#linkhere)
    1. [Languages](#linkhere)
    2. [Frameworks and Tools](#linkhere)
6. [Testing](#linkhere)
    1. [Validation](#linkhere)
    2. [Performance](#linkhere)
    3. [Accessibility](#linkhere)
    4. [Compatibility](#linkhere)
    5. [User Story testing](#linkhere)
7. [Bugs and Fixes](#linkhere)
9. [Deployment and Version Control](#linkhere)
10. [Credits and Acknowledgements](#linkhere)


## Key Project Goals

### Site Owner Goals
* Get people interested in the country and culture of Colombia
* Quiz to be played accross different devices
* To have and create a fun and challenging game for people to play
* Provide a way of giving feedback on the quiz

### User Goals
* Fun and challenging quiz to play
* Test General knowledge of colombia

## Information Gathering

### Target Audience
* People who like Trivia and testing their knowledge
* People who want to learn more about Colombia through trivia
* Web-browser gamers

### User Requirements
* Challenging and fun game to play
* Feedback on how scored with correct answers
* Intuitive site design to easily navigate
* Responsive to multiple devices
* Be Accessible
* Features to work as intended

### User Stories
No. | As a | I want to | so that
----|------|-----------|--------
1 | user | test my knowledge | i can see how much i know
2 | user | see how well i score | i can try and beat my previous score
3 | user | see the correct answers | i can learn more about Colombia
4 | user | be able to restart the quiz | i can play again easily
5 | user | be able to easily navigate site | to access the features without difficulty
6 | user | have feedback on my form submit | i know that the form had submitted successfully
7 | site owner | give users a way of retaking the quiz | to keep users engaged and increase replayability
8 | site owner | have a section detailing how to play | users can play without any confusion on what to do
9 | site owner | provide a contact form | users can give feedback on the quiz
10 | site owner | allow users to find us on social media | brand awareness can be increased

## Site Design

### Wireframes
<details>
<summary>Home page</summary>
<img src="documents/wireframes/wireframes-home.png" alt="Home page image">
</details>

<details>
<summary>Quiz page</summary>
<img src="documents/wireframes/wireframes-quiz.png" alt="Quiz page image">
</details>

<details>
<summary>Contact page</summary>
<img src="documents/wireframes/wireframes-contact.png" alt="Contact page image">
</details>

<details>
<summary>404 page</summary>
<img src="documents/wireframes/wireframes-404.png" alt="404 page image">
</details>

### Design Choice
The website was created in a way in which to to make it intuitive and convenient for the user to navigate.
Using the national colours of Colombia (Yellow, Blue, Red) to bring familiary and make it clear what the site
has to do with and is about. This colour theming was used throughout the site with design and features. 
The colours being bright and contrasting also provides an aspect of fun which compliments the purpose of the 
website in which to play a game. Blue background was used with white text for the game instructions as this
improves readability and is more dyslexia friendly. The site was designed to be free from distracting elements 
from popping up on the screen and page links were used in the navigation bar to take the user straight to each 
section of the page than needing to scroll. The website consists of four pages: the home page, the quiz game page 
which features a How To Play section which provides users with instructions and the play quiz section where the 
users can partake in the quiz and test their knowledge as well as a scores section so that users can see how well 
they did. There is also a contact page where users can leave feedback and a 404 error page.

## Site Features
The website is made up of four pages which consist of 8 features:

### Navigation Bar
* Navbar on all pages for ease of navigation
* User story referenced: 5

<img src="documents/features/navbar.png" alt="navigation bar screenshot">

### Footer 
* Copyright information
* Social media links
* User story referenced: 10

<img src="documents/features/footer.png" alt="footer screenshot">

### How to Play
* Instructions on how to play the quiz
* User story referenced: 8

<img src="documents/features/instructions.png" alt="How to play screenshot">

### Quiz game
* Quiz consisting of 10 questions
* Timer and progress bar
* Correct and incorrect answers shown when answering 
* User story referenced: 1,2,3,4,7

<img src="documents/features/correct.png" alt="quiz correct answer screenshot">

### Quiz results overlay
* Feedback post quiz to let user know how well they scored vs max score
* Button to prompt user back to quiz page where quiz can be replayed
* User story referenced: 2,4,7

<img src="documents/features/result.png" alt="quiz result screenshot">

### Contact form
* Allows for users to provide feedback on the quiz and site
* Provides 
* User story referenced: 9

<img src="documents/features/contact.png" alt="Contact form screenshot">

### Form submit confirmation
* Feedback to the user that the form has been submitted
* User story referenced: 6

<img src="documents/features/confirmation.png" alt="Contact form confirmation screenshot">

### 404 error page
* Feedback to the user that a non-existant link was navigated
* Allows user to return to home page
* User story referenced: 5

<img src="documents/features/404.png" alt="404 error message screenshot">

## Technology Stack

### Languages
* HTML
* CSS
* JavaScript

### Frameworks and Tools
* Git
* Github
* Gitpod
* Balsamiq wireframes
* Favicon.io
* Google fonts
* Bootstrap v5
* JSHint linter
* Google Lighthouse
* WAVE WebAIM accessibility evaluation
* W3C Jigsaw CSS Validation
* W3C Markup Validation
* EmailjS 

## Testing

### Validation

#### HTML Validation
The HTML was validated using the W3C Markup validation service. Each website page passed with
zero errors or warnings.
<details>
<summary>Home page</summary>
<img src="documents/validation/validation-home.png" alt="Home page validation image">
</details>
<details>
<summary>Quiz page</summary>
<img src="documents/validation/validation-quiz.png" alt="Quiz page validation image">
</details>
<details>
<summary>Contact page</summary>
<img src="documents/validation/validation-contact.png" alt="Contact page validation image">
</details>
<details>
<summary>404 page</summary>
<img src="documents/validation/validation-404.png" alt="404 page validation image">
</details>

#### CSS Validation
The CSS was validated using the W3C CSS Validation Service. The CSS had passed with zero 
errors or warnings
<details>
<summary>CSS</summary>
<img src="documents/validation/validation-css.png" alt="CSS validation image">
</details>

#### JavaScript Validation
The Javascript code was validated using the linter JSHint Static Code Analysis Tool. 
There were no issues found with either .js files and only warnings relating to ES6 
version for using the 'let' variable declaration. JavaScript validation code was used
with creating the contact form to provide the user with feedback of incorrect data
entry or missed inputs.
<details>
<summary>quiz.js</summary>
<img src="documents/validation/jslint-quiz.png" alt="JSHint quiz.js validation image">
</details>
<details>
<summary>contact.js</summary>
<img src="documents/validation/validation-css.png" alt="JSHint contact.js validation image">
</details>

### Performance
The google Lighthouse tool was used within the Google Chrome Developer tools to evaluate
and test the performance of the website pages.
<details>
<summary>Home Page</summary>
<img src="documents/validation/lighthouse-home.png" alt="Home page lighthouse performance image">
</details>
<details>
<summary>Quiz Page</summary>
<img src="documents/validation/lighthouse-quiz.png" alt="Quiz page lighthouse performanceimage">
</details>
<details>
<summary>Contact Page</summary>
<img src="documents/validation/lighthouse-contact.png" alt="Contact page lighthouse performance image">
</details>
<details>
<summary>404 Page</summary>
<img src="documents/validation/lighthouse-404.png" alt="404 page lighthouse performance image">
</details>

### Accessibility
The accessibility standards of the website was validated and evaluated using the WAVE WebAIM web
accessibility evaluation tool. All pages returned zero errors.
<details>
<summary>Home Page</summary>
<img src="documents/validation/accessibility-home.png" alt="Home page accessibility evaluation image">
</details>
<details>
<summary>Quiz Page</summary>
<img src="documents/validation/accessibility-quiz.png" alt="Quiz page accessibility evaluation image">
</details>
<details>
<summary>Contact Page</summary>
<img src="documents/validation/accessibility-contact.png" alt="Contact page accessibility evaluation image">
</details>
<details>
<summary>404 Page</summary>
<img src="documents/validation/accessibility-404.png" alt="404 page accessibility evaluation image">
</details>

### Compatibility
The website was tested using the following browsers:
* Google Chrome
* Mozilla Firefox

The website was tested using Chrome Developer Tools devices option as well as the following physical devices:
* iphone SE 2020
* iPad pro
* Macbook pro
* Huawei mate 20 pro

### User Story Testing
Testing of the User Stories identified towards the top of the README are as follows:

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 1 | user | test my knowledge | i can see how much i know

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Quiz Game | Navigate to quiz page and scroll down to begin quiz | Quiz displays ready for user selection, all selections work through to end of quiz | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 2 | user | see how well i score | i can try and beat my previous score

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Quiz Game | Navigate to quiz page and scroll down to begin quiz | Quiz displays and a score is shown increasing with every correct answer | Worked as intended
Quiz results overlay | Navigate to quiz and complete quiz | On completion of quiz the result page displays showing the score out of 100 | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 3 | user | see the correct answers | i can learn more about Colombia

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Quiz Game | Navigate to quiz page and scroll down to begin quiz | Everytime an answer was answered correctly, feedback was given to the user by the option colouring green | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 4 | user | be able to restart the quiz | i can play again easily

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Quiz results overlay | Navigate to quiz page and scroll down to begin quiz and answer questions until end | on completion of quiz a result overlay is displayed where the user can click a button to refresh page to start quiz again | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 5 | user | be able to easily navigate site | to access the features without difficulty

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Navigation bar | At the top of each page on every page the navbar is displayed | Navbar is always accessible due to being in a sticky position so when scrolling you can still easily access to navigate around the site | Worked as intended
404 error page | produced an incorrect navigation by causing a typo in the url | 404 error page presented where the user can click the return home button to easily navigate back to homepage or make use of the navbar at the top | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 6 | user | have feedback on my form submit | i know that the form had submitted successfully

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Form submit confirmation | Navigate to contact page and fill in contact form then clicking submit | On submitting contact form a message prompt is shown displaying "Thank you for submitting your feedback. We will get back to you shortly! An EmailjS form is then sent to the site owner | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 7 | site owner | give users a way of retaking the quiz | to keep users engaged and increase replayability

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Quiz results overlay | Navigate to quiz page and complete the quiz | On completion of quiz a results overlay is shown where the user can then click a button to return to the quiz page | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 8 | site owner | have a section detailing how to play | users can play without any confusion on what to do

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
How to Play | Navigate to the quiz page and scroll down to blue section of screen | On scrolling of the page a large blue section with a ? graphic is shown with step by step instructions displayed on the side that is easy to read and follow | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 9 | site owner | provide a contact form | users can give feedback on the quiz

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Contact form | Navigate to contact page | On navigation to the contact page a contact form is presented with JavaScript validation to ensure the correct entries are input. On submission of form, the data is sent to the site owner email inbox using EmailjS. | Worked as intended

>  No. | As a | I want to | so that
>  ----|------|-----------|--------
> 10 | site owner | allow users to find us on social media | brand awareness can be increased

Site Feature | Path of Action | Outcome | Testing Result
-------------|----------------|---------|----------------
Footer | Scroll to bottom of each webpage | footer is displayed showing three logo's that can be clicked and navigated to the relevant social media platform | worked as intended

## Bugs and Fixes
Throughout the duration of the project there were many bug issues faced. Some had taken so long trying to deal with and posed a lot of difficulty. I wasn't able to come up with a 
solution and the code had became messy and confusing. The decision was made to scrap and swipe the code to start fresh from another approach. There were also occasions where i hadn't made notes of the bugs and the fixes involved in order to document here. A lot of bugs faced were due to user error with type-in errors and missing off parenthesis where required.

The following bugs that were noted during the process can be seen below a long with their fix.

Google Dev Tools returning console error of Uncaught TypeError: document.getElementbyId is not a function
* Solved: This was due to a typo of not capitalising the 'b' amended to getElementById

Question choices were not being picked up when quiz was run and were just displaying the HTML text of 'Option 1', 'Option 2', 'Option 3', 'Option 4'.
* Solved: This ended up being due to the array being in a simplified form and the foreach function i had written wasn't set up to loop through the array in this manner. On changing the array to longhand form with Option1: " " Option2: " " Option3: " " Option4: " " the foreach was then able to loop through and add Option + 'number' to call the question options correctly.

Contact form validation resulted in the form fields disappearing after form submission but not displaying confirmation overlay message
* Solved: the element remove function was used in order to remove the 'hidden' class against the div where the submission confirmation message was written. In doing so displayed the overlay
message as originally intended.


## Deployment and Version Control

### Deployment
GitHub Pages was used in order to deploy the live version of the website. This was done by completing the following:
1. Locate and click on the Settings tab within the repository
2. From here on the left hand side go down and click Pages
3. The GitHub Pages page will be displayed, locate the Source and set the branch to main
4. If this has been completed successfully then a message will be displayed at the top with a green check "Your site is published at https://github.com/hardingrichard/ci-ms2-quiz"

[Click Here](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) for further guidance and instructions on how to deploy yours.

### Cloning
If you wish to clone the repository you can do so by [clicking here](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) or completing the following:
1. Locate and click on the Code button at the top of the directory within the GitHub repository
2. This will dropdown the option of HTTPS, SSH and GitHub CLI and the option to open with GitHub Desktop or Download ZIP. Choose the option you prefer and click the copy to clipboard button
3. Open the Git bash terminal
4. Choose the working directory location to where you wish to have the cloned directory.
5. Type "git clone" followed by pasting the URL you copied in step 2.
6. Press Enter to complete and create your local clone.

### Version Control
[Click here](https://github.com/hardingrichard/ci-ms2-quiz/commits/main) to explore the history of the creation process and see what the website looked at different points in time and what changes were made. Regular commits were made in order to make it easier to view the thought process during the creation of the website and readme and also have saved back up points to avoid loss of work in case of any serious malfunctions.

### EmailjS API
To set up the EmailjS API for the contact form submission the following steps are required:
1. Go to www.emailjs.com
2. Create an account
3. Add a new email service and making note of the contact_service id or using the default of 'contact_service' as the id
4. add a new email template and make a note of the contact_form id or using the default of 'contact form' as the id
5. Get the unique user id by going to the integration dashboard making a note of this
6. Load the EmailjS SDK within the head tags of the HTML file
7. In the .js file create a function that is an eventlistener for submit events to initialise the SDK with the unique user id obtained from the integration dashboard.

For more detailed instructions please read through the documentation and tutorial provided by EmailjS by [Clicking here](https://www.emailjs.com/docs/introduction/how-does-emailjs-work/)

## Credits and Acknowledgements

### Credits
* HTML code copied from the Bootstrap v5.0 documentation snippet for the Navbar and was amended as required and modified to be suitable to the website theme https://getbootstrap.com/docs/5.0/components/navbar
* Website used for guidance on form validation: https://www.codebrainer.com/blog/contact-form-in-javascript 
* EmailjS code taken and modified from emailJS.com tutorial: https://www.emailjs.com/docs/tutorial/creating-contact-form/
* The website was used for guidance with creating a progress bar: https://javascript.plainenglish.io/building-a-progress-bar-in-css-js-html-from-scratch-6449da06042
* The following Youtube Tutorials were used to get an idea and guidance for the JavaScript code for making a quiz app where detailed in the .js file. "How to Make a Quiz App using HTML CSS Javascript - Vanilla Javascript Project for Beginners" - Brian Design. "Build a quiz app with JavaScript" - Web Dev Simplified
* The website was used for guidance with Arrow function expressions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
* The website tutorial was also referred to for guidance with the JavaScript for the quiz app: https://simplestepscode.com/javascript-quiz-tutorial/
* The website was used for learning and refreshing memory with JavaScript and HTML DOM references:  https://www.w3schools.com/
* The website was used for further information and learning during the project: https://developer.mozilla.org/en-US/docs/Web/JavaScript 

### Acknowledgements
I would like to take a moment to give my thanks:

* My gratitude to Karen who has given me encouragement and support throughout and inspiration to create a Colombian themed website/quiz
* My parents for testing the site as first time users to see if they found it intuitive
* My mentor Mo Shami for his time, guidance and feedback during our meetings
* My dog Henry who had given me comfort and company sleeping next to me on the long nights coding who is sadly no longer with me and passed away suddenly during the creation of this project. I love you. May you rest in peace - 2/2/2022.