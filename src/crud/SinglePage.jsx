import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
const SinglePage = () => {
  const { id } = useParams();

  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://mock7api.onrender.com/dogs/${id}`)
      .then((res) => res.json())
      .then((resData) => setData(resData))
      .catch((er) => console.log(er));
  }, [id]);
console.log(Data);
  if (!Data) {
    return <div>Loading...</div>;
  }

  return (
    <div>

      <Link to={`/delete/${id}`}>
        <p> {Data.name}  </p>
 
      </Link>
    </div>
  );
};

export default SinglePage;
