import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Added = () => {
  const navigation = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => navigation("/"), 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [navigation]);

  return <p>Dodano nowe Zadanie</p>;
};

export default Added;
