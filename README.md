# Project "Interactive Survey" 📋🔍

View the project: ([https://interactive-survey.com](https://find-the-agent.vercel.app/))

## Used Technologies ⚙️:
- React.js
- TypeScript
- Scss
- Redux Toolkit
- Redux Persist
- Google Places API

## About the Project 💻
The 'Interactive Survey' project is a dynamic multi-step survey that allows users to answer questions in a sequential format. It includes location search functionality powered by the Google Places API and ensures a smooth and responsive user experience.

## Functionality:

- **Survey Navigation**:
    - Created a multi-step survey where each page follows the previous one, with the ability to navigate back to the previous page.
    - Each page allows selection of only one option, except the first page which includes a clickable switch.
  
- **Location Search**:
    - Implemented Google Places API on the "Step 2" page for location search functionality.
    - Displayed the first 5 results in a dropdown list.
    - Introduced a 1-second delay before sending the request to the API after the user stops typing to optimize performance and reduce unnecessary API calls.

- **Button State Management**:
    - The "Next" button is disabled and gray if no option is chosen, ensuring that users make a selection before proceeding.
    - Once an option is selected, the "Next" button becomes green and clickable, enhancing the user interaction experience.

- **Progress Bar**:
    - Added a dynamic progress bar that fills based on user progress through the survey steps
