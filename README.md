# Kaleemullah Portfolio

A responsive personal portfolio made with HTML5, Bootstrap 5, custom CSS, and a small amount of JavaScript. It introduces me as a Software Engineering student and links to two practice demos.

## Website sections

- Home with my profile photograph and introduction
- About and education
- Technical skills
- Three project cards with images and links
- Contact form
- Footer with a GitHub link and a Back to top link

## Live website

- [View the deployed portfolio](https://my-portfolio-ku490-rana.vercel.app/)
- [View the GitHub repository](https://github.com/KU490-rana/my-portfolio)

## Project demos

- **Student Planner** is a small task list that adds and removes tasks. It saves the list in the browser's local storage.
- **Weather Snapshot** is a responsive dashboard layout with clearly marked sample values. It does not connect to a weather service.
- **Personal Portfolio** is this website and its source code.

## Technologies

- HTML5 for page structure and forms
- Bootstrap 5.3.8 from the official CDN for the responsive navbar, grid, cards, buttons, badges, and alert
- Custom CSS in style.css for colors, spacing, transitions, and responsive adjustments
- JavaScript for the demo contact form message and Student Planner interactions

## Run locally

Open index.html in a browser. The Bootstrap stylesheet and JavaScript bundle are loaded from jsDelivr, so an internet connection is needed for those Bootstrap files.

## Git workflow

The project is tracked with Git. Common commands used to record and upload changes are:

~~~text
git status
git add .
git commit -m "Describe the change"
git push
~~~

The repository has separate commits for the site structure, styling and project demos, and project documentation.

## Explaining the structure

The header contains the Bootstrap navbar. The main element contains sections with matching IDs so the navigation links jump to them. Bootstrap's container, row, and col classes arrange content at different screen sizes. Cards hold project details, and badges list the current skills. style.css adds the personal colors and hover effects. script.js shows a confirmation in the sample contact form; it does not transmit messages. js/planner.js manages the Student Planner list and saves it in browser local storage.

