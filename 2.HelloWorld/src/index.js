import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 1. First method

const data = (
  <h2>Hello World</h2>
);

// 2. Create Object that call in const

// var user = {
//   firstName: "Ali",
//   lastName: "Azaz"
// }

// const data = (
//   <h2>Hello World {user.firstName} {user.lastName}</h2>
// );

// 3. Create Function

// var user = {
//   firstName: "Ali",
//   lastName: "Azaz"
// }

// function name() {
//   return (<h2>Hello World {user.firstName} {user.lastName}</h2>);
// }

// var data = name();

// 4. Create Function with aurguments

// function name(firstName,lastName) {
//   return (<h2>Hello World {firstName} {lastName}</h2>);
// }

// var data = name("ali","azaz");

ReactDOM.render(
  data,
  document.getElementById('root')
);
