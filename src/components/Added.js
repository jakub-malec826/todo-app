import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Added = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigation("/"), 1500);
    return () => {
      clearTimeout(timer);
    };
  });

  return <p>Dodano nowe Zadanie</p>;
};

export default Added;
