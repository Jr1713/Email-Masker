📧 Email Masker

A simple JavaScript project that masks the username part of an email address with asterisks while keeping the domain intact. This helps demonstrate masking techniques, often used to hide sensitive information.

For example:

apple.pie@example.com ➝ a*******e@example.com

🚀 Features

Masks email addresses by replacing characters between the first and last with *.

Keeps the domain name (@example.com) intact.

Lightweight and simple function written in vanilla JavaScript.

Includes a demo UI with HTML, CSS, and JavaScript for easy testing.

Fully responsive design for desktop and mobile.

🛠️ Technologies Used

HTML5

CSS3

JavaScript (ES6)

📂 Project Structure
email-masker/
│── index.html   # Main HTML file
│── style.css    # Styling file
│── script.js    # JavaScript logic

📖 How It Works

User inputs an email address.

The maskEmail() function masks the characters:

Keeps the first and last character of the username.

Replaces everything in between with *.

The masked result is displayed on screen.
