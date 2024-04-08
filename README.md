# Cinemix App ©️

💻 https://cinemix-a176f.web.app/

## Description

Cinemix is a dynamic, responsive and user-friendly web application built using React, Vite for faster development and better performance, TailwindCSS, Firebase Authentication, and Axios for API requests. It allows users to register and login securely using Firebase Authentication, browse movies fetched from an external API categorized by genres, view movie details, and add their favorite movies.

## Outcome

![cinemix-app](https://github.com/omrfrkcpr/cinemix/assets/77440899/3c6963d9-61a1-4e19-81dd-8acd8a48b845)

## Project Planning & Management

**Epic User Story:** As a cinemix application user, I must be able to authenticate to the application both with email and password and with Google. I should also be able to see the details of the movie I want by querying it. Then I should be able to add and remove my favorite movies.🎥

**User Stories:**

1️⃣ **Register for an Account:**

- 🥇 As a user, I want to be able to register for an account so that I can access the application securely.
- 🥈 As a user, I should be able to provide my email address and create a password to register.
- 🥉 As a user, I should also be able to authenticate with Google

  **_Task-1 =_** Create registration form UI.<br>
  **_Task-2 =_** Validate user input in the registration form (e.g., email format, password strength).<br>
  **_Task-3 =_** Implement Firebase Authentication (+ Google Auth) to create a new user account.<br>
  **_Task-4 =_** Handle registration success and failure cases.<br>
  **_Task-5 =_** Redirect the user to the home page after successful registration.<br>
  **_Task-6 =_** Display appropriate error messages with Toastify for registration failures.<br>

2️⃣ **Log in to Account:**

- 🥇 As a registered user, I want to be able to log in to my account using my email address, password and also my Google account.
- 🥈 Logging in should authenticate me securely and grant access to the application's features.

  **_Task-1 =_** Create login form UI.<br>
  **_Task-2 =_** Validate user input in the login form (e.g., email format).<br>
  **_Task-3 =_** Implement Firebase Authentication to log in with email and password.<br>
  **_Task-4 =_** Handle login success and failure cases.<br>
  **_Task-5 =_** Redirect the user to the home page after successful login.<br>
  **_Task-6 =_** Display appropriate error messages for login failures.<br>
  **_Task-7 =_** Implement "Forgot Password" functionality if required to redirect the user to the reset page.

3️⃣ **Browse Movies Categorized by Genres:**

- 🥇 As a user, I want to browse movies categorized by genres.
- 🥈 As a user, I should be able to click on a genre category to view movies belonging to that genre.

  **_Task-1 =_** Fetch movie genres from the external API.<br>
  **_Task-2 =_** Display movie genres as clickable categories.<br>
  **_Task-3 =_** Fetch movies based on selected genre using Axios.<br>
  **_Task-4 =_** Display fetched movies in a visually appealing manner.<br>
  **_Task-5 =_** Implement pagination if the number of movies is large.<br>
  **_Task-6 =_** Handle loading and error states during API requests with appropriate Toastify messages.

4️⃣ **Search for Movies:**

- 🥇 As a user, I want to be able to search for movies by their titles.
- 🥈 As a user, I should be able to enter keywords in a search bar and see relevant movie results.

  **_Task-1 =_** Implement Search Bar UI<br>
  **_Task-2 =_** Fetch Movie Results and display it in MovieDetail page based on Query

5️⃣ **View Movie Details:**

- 🥇 As a user, I want to be able to view detailed information about each movie.
- 🥈 Clicking on a movie should display its title, synopsis, release date, and other relevant details.

  **_Task-1 =_** Create a component to display detailed information about a movie.<br>
  **_Task-2 =_** Fetch additional details of a movie when the user clicks on it.<br>
  **_Task-3 =_** Display movie details such as title, total rate, release date, etc.<br>
  **_Task-4 =_** Ensure that the movie details page is visually appealing and user-friendly.<br>
  **_Task-5 =_** Implement a button or link to navigate back to the previous page.

6️⃣ **Add Movies to Favorites:**

- 🥇 As a user, I want to be able to add movies to my favorites list for easy access.
- 🥈 As a user, I should be able to mark movies as favorites and view them later in a dedicated favorites section.

  **_Task-1 =_** Implement functionality to add a movie to the user's favorites list.<br>
  **_Task-2 =_** Display a heart icon or similar to indicate whether a movie is in the user's favorites.<br>
  **_Task-3 =_** Store favorite movies in Firebase Firestore or Realtime Database.<br>
  **_Task-4 =_** Update UI to reflect changes when a movie is added or removed from favorites.<br>
  **_Task-5 =_** Ensure that users can easily manage their favorites list (add/remove).

7️⃣ **Responsive Design:**

- 🥇 As a user, I expect the application to be responsive and work seamlessly on various devices and screen sizes.
- 🥈 The UI should adapt to different screen sizes, ensuring a consistent and user-friendly experience.

  **_Task-1 =_** Use TailwindCSS for styling components and layouts.<br>
  **_Task-2 =_** Design UI components to be responsive and adapt to different screen sizes.<br>
  **_Task-3 =_** Implement responsive navigation for smaller screens (e.g., mobile devices).<br>
  **_Task-4 =_** Ensure that text, images, and other UI elements are legible and accessible on all devices.

## Project Skeleton 🩻

```
📖Cinemix (folder)
|
├── 📁.firebase
│
├── 📁src
│    ┣ 📂assets
│    ┃       ┗ [images, icons and font-families]
|    ┃
│    ┣ 📂auth
│    ┃     ┗ firebase.js
|    ┃
│    ┣ 📂components
│    ┃       ┣ Banner.jsx
│    ┃       ┣ ErrorPage.jsx
│    ┃       ┣ MovieCol.jsx
│    ┃       ┣ MovieRow.jsx
│    ┃       ┣ Navbar.jsx
│    ┃       ┣ SearchForm.jsx
│    ┃       ┣ Switch.jsx
│    ┃       ┗ VideoSection.jsx
|    ┃
│    ┣ 📂context
|    ┃    ┗ AuthContext.jsx
|    ┃
│    ┣ 📂helpers
|    ┃    ┗ toastNotify.js
|    ┃
│    ┣ 📂pages
│    ┃       ┣ Home.jsx
│    ┃       ┣ Login.jsx
│    ┃       ┣ MovieDetail.jsx
│    ┃       ┣ NotFound.jsx
│    ┃       ┣ Profile.jsx
│    ┃       ┣ Reset.jsx
│    ┃       ┗ Signup.jsx
│    ┃
│    ┣ 📂routers
|    ┃       ┣ AppRouter.jsx
│    ┃       ┗ ProtectedRouter.jsx
|    ┃
│    ┣ 📂services
│    ┃       ┗ movieServices.js
|    ┃
│    ┣ App.jsx
│    ┣ index.css
│    ┗ main.jsx
|
├── cinemix-app.gif
├── .firebaserc
├── .gitignore
├── example.env
├── firebase.json
├── index.html
├── LICENSE
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## Objective

With this project, a single-page Movie Application will be developed using ReactJS and TailwindCSS, and it is aimed to develop skills in subjects such as API usage, asynchronous data processing and dynamic content management and conditional rendering.

### Technologies Used 🎯

- React (React-Router & React-Context API)

- TailwindCSS

- Axios

- Firebase Authentication

- Toastify (For Error Messages)

- Vite

## Step-By-Step Project Guide

- Step 1: Clone the Repository to Your Local Machine:

  **_Copy the URL of the project repository from GitHub or a similar platform._**
  **_Open your terminal or command prompt and navigate to the directory where you want to store the project._**
  **_Use the following command to clone the repository:_**

  ```
  git clone <repository_url>
  ```

  **_Replace <repository_url> with the URL of the project repository you copied._**

- Step 2: Install Node Package Manager:

  **_Navigate to the root directory of the project in your terminal or command prompt._**
  **_Use the following command to install npm packages:_**

  ```
  npm install
  ```

  **_This command will install the project's dependencies based on the list in the package.json file._**

- Step 3: Signup `https://developer.themoviedb.org/docs/getting-started` and get api key, signup also `https://firebase.google.com/` to create a project and copy project configurations. After that, paste your personal api key and firebase configurations into your .env file (like example.env file) that you will create in your project root directory. You can check "example.env" file in project root directory.

  ```
  VITE_FIREBASE_API_KEY=[YOUR_VITE_FIREBASE_API_KEY]
  VITE_FIREBASE_AUTH_DOMAIN=[YOUR_VITE_FIREBASE_AUTH_DOMAIN]
  VITE_FIREBASE_PROJECT_ID=[YOUR_VITE_FIREBASE_PROJECT_ID]
  VITE_FIREBASE_STORAGE_BUCKET=[YOUR_VITE_FIREBASE_STORAGE_BUCKET]
  VITE_FIREBASE_MESSAGING_SENDER_ID=[YOUR_VITE_FIREBASE_MESSAGING_SENDER_ID]
  VITE_FIREBASE_APP_ID=[YOUR_VITE_FIREBASE_APP_ID]
  VITE_TMDB_KEY=[YOUR_VITE_TMDB_KEY]
  ```

  **_Replace [YOUR_...] with your personal firebase configurations and TMDB api key that you get from tmdb\_**

- Step 4 : Once all packages are successfully installed and api key is pasted, use the following command to start the project:

  ```
  pnpm dev
  ```

  **_This command will start the development server and open a live preview of the project in your default web browser._**
  **_If the browser doesn't open automatically, you can view the project by navigating to http://localhost:3000._**

## Additional Data 📦

- [Assets](./src/assets/)
- [FIREBASE](https://firebase.google.com/)
- [TMDB_API](https://developer.themoviedb.org/docs/getting-started)

## Contributing 🤝

Your insights and contributions greatly enrich my projects! Whether you're bursting with fresh project concepts or have ideas to enhance existing ones, your input is invaluable. Feel free to open an issue to initiate a dialogue about your thoughts, or submit a pull request with your proposed modifications. Every contribution plays a vital role in my growth and improvement, so thank you for being an integral part of my community!

## LICENSE 🪪

This repository is licensed under the MIT License. See the MIT licence file for details. For more information please visit [MIT License](https://tlo.mit.edu/understand-ip/exploring-mit-open-source-license-comprehensive-guide)

**<p align="center">&#9786; Happy Coding &#9997;</p>**
