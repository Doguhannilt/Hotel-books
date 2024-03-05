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
