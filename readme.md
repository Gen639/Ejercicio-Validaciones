# User Registration Web Application

## Description

This web application is designed to allow users to register with their information and perform input validation using HTML, CSS, JavaScript, and Bootstrap. It checks four input fields to ensure they are filled, performs special validation for the email, verifies that passwords match, and validates password strength. Upon successful validation, a sound effect is played, and users are redirected to a page displaying all registered users.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Usage](#usage)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- Four input fields: Name, Email, Password, and Confirm Password.
- Input validation for all fields.
- Special email validation, including:
  - The email address cannot start or end with a dot.
  - The email address should not contain spaces.
  - The email address should not contain special characters (e.g., :, \*, etc).
  - The email address can have dots in the middle of the address before the @ symbol.
  - The email address can contain a double domain (e.g., '.de.org' or similar).
- Password and Confirm Password matching validation.
- Password strength validation, including:
  - Contains a minimum of 6 characters.
  - At least 1 uppercase letter.
  - At least 1 lowercase letter.
  - At least 1 number with no spaces.
- Interactive user interface with Bootstrap.
- Sound effect on successful registration.
- Display of all registered users on a separate page after successful validation.
- For convinience the navigation is added: main page with registration and page with all registered users.
- Throughout the application, you will encounter user messages that use colloquial language tone (for fun).

## Technologies

- HTML
- CSS
- JavaScript
- Bootstrap

## Usage

1. Clone the repository to your local machine.
2. Open the project in your preferred code editor.
3. Open the `index.html` file in your web browser.

## Installation

No special installation is required. Simply clone the repository and open the HTML file in a web browser.
