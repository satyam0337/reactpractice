import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Delete = () => {
  const [Data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://mock7api.onrender.com/dogs/${id}`)
      .then((res) => res.json())
      .then((resdata) => setData(resdata))
      .catch((er) => console.log(er));
  }, [id]);

  const Del = (eld) => {
    fetch(`https://mock7api.onrender.com/dogs/${eld}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
        }
      })

      .catch((er) => console.log(er));
  };

  if (!Data) {
    return <p> ....loading </p>;
  }
  return (
    <div>
      <div key={Data.id}>
        <p>{Data.name}</p>
        <button onClick={() => Del(Data.id)}> Delete </button>
      </div>
    </div>
  );
};

export default Delete;
