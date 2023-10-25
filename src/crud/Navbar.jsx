import React from "react";

const Navbar = () => {
//   const navdata = [
//     {
//       GET: "/",
//       POST: "/post",
//       DELETE: "/delete",
//       COUNTER: "/counter",
//     },
//   ];

 
  return (
    <div>
     
     <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/">Get</a></li>
        <li><a href="/post">Post</a></li>
        <li><a href="/delete">Delete</a></li>
        <li><a href="/counter">Counter</a></li>
      </ul>
    </nav>

    </div>
  );
};

export default Navbar;
