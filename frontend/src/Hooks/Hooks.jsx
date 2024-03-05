// src/hooks/Custom_hooks.js

import { useState } from 'react';

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
