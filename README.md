# Read Journey App

This project was bootstrapped with [Vite + React](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react). To get acquainted and configure additional features [refer to documentation](https://vitejs.dev).

## Overview

Read Journey App is a web application that allows users to register/login to access the system, discover and filter recommended books by title and/or author, and add books to their personal library. Users can add books from the recommended list or manually input their own selections. The platform also offers the ability to filter books based on their reading status (unread, in progress, done, all). Additionally, users can track their reading progress, which is displayed in a journal format, providing detailed statistics on daily reading sessions and overall progress. The project incorporates a responsive design approach to ensure optimal viewing across different devices.

## Preview

Include demo GIF to visually showcase the application.

![Preview](/public/preview.gif)

## Features

- **User Authentication:** Register securely with unique credentials. Login easily to access your account.
- **Book Discovery:**
  Browse and filter recommended books by title and author to find your next great read.
- **Personal Library Management:**
  Add books to your personal library from the recommended list or manually input your own selections.
- **Reading Progress Tracking:**
  Track your reading progress with detailed statistics. View a journal that logs daily reading sessions and overall progress, including current reading position relative to the book’s end.
- **User-Friendly Interface:**
  Enjoy a seamless experience with an intuitive, attractive and responsive design.

## Tech Stack

- **Frontend:**
  - React: A popular JavaScript library for building user interfaces.
  - Styled Components: For styling and theming components in a dynamic and maintainable way.
  - React Router: Declarative routing in single-page applications.
  - Redux Toolkit: State management library for handling application-level state.
  - react-hook-form: A flexible and performant library for handling form state and validation in React.
  - react-hot-toast: React notifications library for displaying toast messages.
- **Backend:**
  - [Read Journey API](https://readjourney.b.goit.study/api-docs): External API
    as the backend for data operations.
- **Deployment:**
  - GitHub Pages: Hosting platform for deploying the frontend.
- **Version Control:**
  - Git: Distributed version control system for tracking changes in the codebase.
- **Development Tools:**
  - Visual Studio Code: An integrated development environment for efficient coding.
  - GitHub: Version control platform for collaborative development.

## Project Structure

```plaintext
read-journey/
|-- public/               # Public assets and files
|-- src/                  # Source code
|   |-- assets/           # Static assets such as images, fonts, etc.
|   |-- components/       # Reusable React components
|   |-- config/           # Configuration files
|   |-- hooks/            # Custom React hooks
|   |-- pages/            # React components representing pages of the app
|   |-- routes/           # App routes
|   |-- services/         # Services for handling API calls, etc.
|   |-- store/            # Redux store configuration, actions, reducers, etc.
|   |-- styles/           # Global and theme styles
|   |-- utils/            # General utility functions and helper modules
|   |-- App.jsx           # Main App component
|   |-- main.jsx          # Entry point for rendering the React app
|-- package.json          # Project configuration and dependencies
```

## Getting Started

These instructions will help you set up and run the Read Journey App on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/y-hrubskyi/read-journey.git

    cd read-journey
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

### Run the application:

1. Run app using following command:

   ```bash
   npm run dev
   ```
