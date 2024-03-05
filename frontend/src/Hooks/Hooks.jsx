// src/hooks/Custom_hooks.js
import { useState } from 'react';


// src/pages/MainPage.jsx
export const useStatesForSearchBar = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [starRating, setStarRating] = useState(0);

  return {
    name,
    setName,
    city,
    setCity,
    country,
    setCountry,
    starRating,
    setStarRating,
  };
};

// src/pages/Login.jsx
export const useStatesForLogin = () => {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    return {
        email,
        setEmail,
        password,
        setPassword
    }

}


// src/pages/Login.jsx
export const useStatesForRegister = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        password,
        setPassword
    }

}

// src/pages/MainPage.jsx
export const useStatesForMainPage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({});

    return {
        posts, 
        setPosts,
        loading,
        setLoading,
        filters,
        setFilters
    }
}

// src/pages/EditHotel.jsx
export const useStatesForEditHotel = () => {
    const [hotel, setHotel] = useState(null);

    return {
        hotel,
        setHotel
    }
}