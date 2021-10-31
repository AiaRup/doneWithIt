<div id="top"></div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AiaRup/doneWithIt">
    <img src="https://user-images.githubusercontent.com/35365209/139590338-80bdbe33-8f4e-44b6-9ac5-d9f53fa75936.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Done With It</h3>

  <p align="center">
    Mobile app to sell stuff you don't need anymore
  <br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Screenshots</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<div align="center">
    <img src="https://user-images.githubusercontent.com/35365209/139590339-160e19aa-e96d-49a3-a861-a4cd6cec0934.png" alt="Logo" width="200" height="400">
</div>
<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [Dayjs](https://day.js.org/)
- [Yup](https://github.com/jquense/yup)
- [Formik](https://formik.org/)
- [Bugsnag](https://www.bugsnag.com/)
- [Lottie](https://lottiefiles.com/)
- [Firebase](https://firebase.google.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy of the project and run it follow these simple steps:

### Prerequisites

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Create a project on [firebase](https://firebase.google.com/) with firestore support.
2. Clone the repo
   ```sh
   git clone https://github.com/AiaRup/doneWithIt.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Get the following variables from the new created firebase project and put them in an `.env` file in the root of the project:

   ```js
   API_KEY = 'API_KEY';
   AUTH_DOMAIN = 'AUTH_DOMAIN';
   DATABASE_URL = 'DATABASE_URL';
   PROJECT_ID = 'PROJECT_ID';
   STORAGE_BUCKET = 'STORAGE_BUCKET';
   SENDER_ID = 'SENDER_ID';
   APP_ID = 'APP_ID';
   MEASUREMENT_ID = 'MEASUREMENT_ID';
   ```

5. Start the project
   ```sh
   npm start
   ```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

In the app you can do several actions:

- Auth: register, login and logout.
- Content: see a list of items for sale and add a new item.
- Messages: send a message to the listing's owner.

```
The app asks the user for permissions to use the location, media and notifications.
```

<div align="center">
    <img src="https://user-images.githubusercontent.com/35365209/139592643-ccb89775-a08b-4be8-b2d3-b8a9d5add2c4.png" alt="Logo" width="200" height="400">
    <img src="https://user-images.githubusercontent.com/35365209/139590345-2af13744-b725-4985-8ca9-0a289b6d37cc.png" alt="Logo" width="200" height="400">
    <img src="https://user-images.githubusercontent.com/35365209/139590352-471f0b67-dd2c-44eb-85e4-63cc53059088.png" alt="Logo" width="200" height="400">
    <img src="https://user-images.githubusercontent.com/35365209/139590347-f59bce70-b6c6-41ec-a47a-b853a79fec34.png" alt="Logo" width="200" height="400">
    <img src="https://user-images.githubusercontent.com/35365209/139592827-b32dc4c3-d974-4820-91a8-e88ae94cc4f5.png" alt="Logo" width="200" height="400">
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [] Add My Listing screen
- [] Add support for messaging - add, edit and delete
- [] Add notifications

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Aia Rupsom - [LinkedIn](https://www.linkedin.com/in/aia-rupsom)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

I started the project as part of the [ultimate react native course](https://codewithmosh.com/p/the-ultimate-react-native-course) by Mosh Hamedani and made some upgrades on my own.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/AiaRup/doneWithIt.svg?style=for-the-badge
[contributors-url]: https://github.com/AiaRup/doneWithIt/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AiaRup/doneWithIt.svg?style=for-the-badge
[forks-url]: https://github.com/AiaRup/doneWithIt/network/members
[stars-shield]: https://img.shields.io/github/stars/AiaRup/doneWithIt.svg?style=for-the-badge
[stars-url]: https://github.com/AiaRup/doneWithIt/stargazers
[issues-shield]: https://img.shields.io/github/issues/AiaRup/doneWithIt.svg?style=for-the-badge
[issues-url]: https://github.com/AiaRup/doneWithIt/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/aia-rupsom/
