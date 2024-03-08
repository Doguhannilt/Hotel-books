
<h1 align="center">FULL STACK MERN - HOTEL BOOKS PROJECT</h1>

<p><b>Description: </b> The "<u>LunaHotel</u>" project is a full-stack web application built using the MERN stack, which stands for MongoDB, Express.js, React.js, and Node.js. </p> 
<p><b>Purpose: </b>The main goal of the "Hotel Books" project is to provide users with a user-friendly platform to browse, book, and manage hotel reservations. Whether planning a vacation or a business trip, users can easily find suitable accommodations and make secure bookings.

This project was developed as a demonstration of building a modern, feature-rich web application using the MERN stack. It showcases best practices in frontend and backend development, including user authentication and CRUD operations.

Feel free to explore the "Hotel Books" project and experience the seamless booking process it offers.</p> <br><br>




<div align="center">
  <img src="https://github.com/Doguhannilt/Hotel-books/assets/77373443/1d8ca0f8-36f8-4786-851c-4a93bf0144c1" alt="Image 1" width="400"/>
  <img src="https://github.com/Doguhannilt/Hotel-books/assets/77373443/71eecdb0-5223-40c4-991c-b2f5f046c7cd" alt="Image 2" width="400"/>
  <img src="https://github.com/Doguhannilt/Hotel-books/assets/77373443/d47a058b-daa1-49fe-9a4a-bd06a80ac9b3" alt="Image 3" width="400"/>
</div>


### Project Features

- User account management, including features for signing in, registering, and editing profiles.
- Automatic logout for logged-in users.
- Validation processes for sign-in and registration forms.
- Ability for users to search for hotels without logging in.
- Booking functionality for users to make and view reservations.
- Admin panel for adding, editing, and deleting hotels.

### Security Measures

- Encryption of user passwords using the bcrypt algorithm for secure storage.
- Use of JWT (JSON Web Tokens) for session management and security.
- Proper configuration of Cors (Cross-Origin Resource Sharing) policies.
- Use of express-validator for user input and form validation.


### Contributors

- [Doguhan I.](https://github.com/doguhannilt)



# ENV FILE
```
// Back-End .env
MONGODB_CONNECTION = 
PORT = 
JWT_SECRET_KEY = 
FRONTEND_URL = 

#Cloudinary Variables
CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 

NODE_ENV =

// Front-End .env 
VITE_API_BASE_URL =
```

### Backend Libraries - Required:

<details>
<summary>Libraries</summary>

- **bcryptjs**: 2.4.3
- **cloudinary**: 2.0.1
- **cookie**: 0.5.0
- **cookie-parser**: 1.4.6
- **cookie-signature**: 1.0.6
- **cors**: 2.8.5
- **dotenv**: 16.4.1
- **express**: 4.18.2
- **express-validator**: 7.0.1
- **winston**: 3.12.0

</details>

### Frontend Libraries - Required:

<details>
<summary>Libraries</summary>

- **@chakra-ui/react**: 2.8.2
- **@emotion/react**: 11.11.3
- **@emotion/styled**: 11.11.0
- **@reduxjs/toolkit**: 2.2.1
- **axios**: 1.6.7
- **framer-motion**: 11.0.5
- **immer**: 10.0.3
- **js-cookie**: 3.0.5
- **react**: 18.2.0
- **react-datepicker**: 6.2.0
- **react-hook-form**: 7.50.1
- **react-icons**: 5.0.1
- **react-loading**: 2.0.3
- **react-query**: 3.39.3
- **react-redux**: 9.1.0
- **react-router-dom**: 6.21.3
- **react-toastify**: 10.0.4
- **redux**: 5.0.1
- **redux-thunk**: 3.1.0
- **winston**: 3.12.0

</details>


### Project Structure

<details>
<summary>Backend Project Structure</summary>

```plaintext
backend/
│   ├── loggers/
│   │   ├── e_logger.log
│   │   ├── logger.log
│   ├── Schemas/
│   │   ├── auth-schema.png
│   │   ├── CreateHotel.drawio.html
│   │   ├── logout.png
│   │   ├── signup.html
├── src/
│   ├── middleware/
│   │   ├── auth.js
│   ├── models/
│   │   ├── hotel.js
│   │   └── model.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── hotel.js
│   │   └── logout.js
│   │   └── myhotel.js
│   │   └── users.js
│   │   └── view.js
│   ├── utils/
│   │   ├── errorlogger.js
│   │   ├── infologger.js
│   ├── index.js
│   ├── env
└── .env.example
```

</details>

<details>
<summary>Frontend Project Structure</summary>

```plaintext
frontend/
├── public/
└── src/
    ├── app/
    │   ├── store.jsx
    ├── components/
    │   ├── Header.js
    │   ├── Footer.js
    │   └── Hero.js
    ├── config/
    │   ├── hotel-options-congif.jsx
    ├── forms/ManagaHotelForm/
    │   ├── DetailsSection.jsx
    │   ├── FacilitiesSection.jsx
    │   └── GuestsSection.jsx
    │   └── ImagesSection.jsx
    │   └── ManageHotelForm.jsx
    │   └── TypeSection.jsx
    ├── Hooks/
    │   ├── Hooks.jsx
    ├── Images/
    │   ├── About Us/...
    ├── layouts/
    │   ├── Layout.jsx
    ├── pages/
    │   ├── AddHotel.jsx
    │   ├── ContactUs.jsx
    │   └── Details.jsx
    │   └── EditHotel.jsx
    │   └── Info_Prefer.jsx
    │   └── Info.jsx
    │   └── Loading.jsx
    │   └── Login.jsx
    │   └── MainInfo.jsx
    │   └── MainPage.jsx
    │   └── MyHotels.jsx
    │   └── Register.js
    │   └── SearchBar.jsx
    ├── redux/
    │   ├── features/counter/
    │   │   ├── isLogged.jsx
    │   │   ├── viewData.jsx
    │   ├── toast/
    │   │   ├── toast.js
    ├── App.jsx
    └── main.jsx
    └── App.css
    └── index.css
    └── api-validateToken.jsx
    └── .env
```
</details>




### Usage Guide

```
Clone the repository:
git clone https://github.com/Doguhannilt/Hotel-books.git

Install required dependencies:
cd Hotel-books
npm install

3. Fill in the necessary environment variables in the `.env` files.

4. Run the development server for both backend and frontend:
npm run dev

5. Visit `http://localhost:5173` or `http://localhost:5174` in your browser to view the application.
```

### Endpoint Schemas
<p><bold><a href = "https://github.com/Doguhannilt/Hotel-books/tree/master/backend/Schemas">Schema folder</bold></a> is a collection of algorithms that are used in the back-end of LunaHotel.com Full Stack MERN Project</p>

### FAQ

1. I installed all the required libraries but still doesn't work. <br>
   A: Sometimes additional libraries may be added to the project but not displayed in the Readme file or new versions of the libraries may create new errors that we are not aware of yet. If you have any time, you can check <a href = "https://github.com/Doguhannilt/Hotel-books/tree/master/backend/src/utils">utils folder</a> and solve the problem or you can send me an email: doguhannilt@gmail.com about it.

2. I want to help fix bugs, how? <br>
   A: If you want to spend your valuable time to fix the project's problems, you can open an issue or send me an email about it.


### Acknowledgements

I would like to extend my heartfelt gratitude to the following individuals whose invaluable tutorials significantly expedited the completion of this project. Without their guidance, the process would have taken at least three months to finalize.

<lu>
<li><a href = "https://www.youtube.com/@ChrisBlakely">Chris Blakely</a></li>
<li><a href = "https://www.youtube.com/@DaveGrayTeachesCode">Dave Gray </a></li>
<li><a href = "https://www.youtube.com/@HiteshChoudharydotcom">Hitesh Choudhary</li>
</lu>
<br>
and the valuable Turkish community of <a href = "https://discord.gg/kampus">Kamp.us</a>
