import React, { useState } from "react";
import axios from "axios";
import withGA4Tracking from "../GA4/withGA4Tracking";
const Post = () => {

// form data collecting 
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      gender: e.target.gender.value,
      color: e.target.color.value,
    };
    console.log(formData);

// data posting with axios

    // axios
    //   .post("https://mock7api.onrender.com/dogs", formData)
    //   .then((res) => console.log(res))
    //   .catch((er) => console.log(er));

// post with fetch method 
   
        fetch('https://mock7api.onrender.com/dogs', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
      
          },
          body: JSON.stringify(formData),
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
          })
          .catch(error => {
               console.log(error);
          });
    


}

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name="name" />

          <input type="email" name="email" />

          <input type="password" name="password" />
        </div>

        <div></div>

        <div>
          <input type="radio" name="gender" id="male" value="male" />
          <label htmlFor="male">male</label>

          <input type="radio" name="gender" id="female" value="female" />
          <label htmlFor="female">female</label>
        </div>

        <input type="color" name="color" />

        <div>
          <input type="reset" />
          <button type="submit"> Submit </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
