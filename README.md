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
2 | user | see how well i score | i can try and beat my previous
3 | user | see the correct answers | i can learn more 
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
website in which to play a game. The site was designed to be free from distracting elements from popping up on 
the screen and page links were used in the navigation bar to take the user straight to each section of the
page than needing to scroll. The website consists of four pages: the home page, the quiz game page which 
features a How To Play section which provides users with instructions and the play quiz section where the users
can partake in the quiz and test their knowledge as well as a scores section so that users can see how well they did.
There is also a contact page where users can leave feedback and a 404 error page.

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
* EmailJS 

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
<summary>CSS</summary>
<img src="documents/validation/validation-css.png" alt="CSS validation image">
</details>

#### JavaScript Validation
The Javascript code was validated using the linter JSHint Static Code Analysis Tool. 
There were no issues found with either .js files and only warnings relating to ES6 
version for using the 'let' variable declaration. JavaScript validation code was used
with creating the contact form to provide the user with feedback of incorrect data
entry or missed inputs.
<summary>quiz.js</summary>
<img src="documents/validation/jslint-quiz.png" alt="JSHint quiz.js validation image">
</details>

<summary>contact.js</summary>
<img src="documents/validation/validation-css.png" alt="JSHint contact.js validation image">
</details>

### Performance

### Accessibility

### Compatibility

### User Story Testing

## Bugs and Fixes

## Deployment and Version Control

## Credits and Acknowledgements
