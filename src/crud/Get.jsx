import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";

const Get = () => {
  const [Data, setData] = useState("");

  useEffect(() => {
    // Fetch with axios
    // axios
    //   .get("https://mock7api.onrender.com/dogs")
    //   .then((res) => setData(res.data.products))
    //   .catch((er) => console.log(er));

    // Fetch with Get method

    fetch("https://mock7api.onrender.com/dogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      
    })
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>

      <h1>Data Fetching by axios & Get method </h1>

      {Data &&
        Data.map((el) => (
          <div key={el.id}>
            <Link to={`/product/${el.id}`}>
             <p> {el.name} </p>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Get;
