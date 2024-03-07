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
    const [isOpen, setIsOpen] = useState(true);
    const [ hotel, setHotel] = useState()

    return {
        posts, 
        setPosts,
        loading,
        setLoading,
        filters,
        setFilters,
        isOpen,
        setIsOpen,
        hotel,
        setHotel
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

// src/pages/MyHotel.jsx
export const useStatesForMyHotel = () => {
    const [hotels, setHotels] = useState([]);
    
    return {
        hotels,
        setHotels
    }
}

// src/components/Header.jsx
export const useStatesHeader = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return {
        isLoggedIn,
        setIsLoggedIn
    }
}

export const useStateForViews = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showTooltip_2, setShowTooltip_2] = useState(false);
    const [showTooltip_3, setShowTooltip_3] = useState(false);
    const [loading, setLoading] = useState(true);
    const [openedDetail, isOpenedDetails] = useState(true);

    return {
        showTooltip,
        setShowTooltip,
        showTooltip_2,
        setShowTooltip_2,
        loading,
        setLoading,
        showTooltip_3,
        setShowTooltip_3,
        openedDetail,
        isOpenedDetails
    }
}