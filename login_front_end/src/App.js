import './App.css';
import React from 'react';
import axios from 'axios';

function App() {
  return (
    <div className="container">
      <form onSubmit={(e) => login(e)}>
        <div class="mb-3">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">Enter your email address to register.</div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

function login(e){
  e.preventDefault();
  let request = {
      email: document.getElementById('exampleInputEmail1').value,
      password: document.getElementById('exampleInputPassword1').value
  };
  axios.post('http://localhost:3000/login', request)
  .then(response => {
    alert(response.data.message);
  })
  .catch(err => {
    console.log(err);
  })
}
export default App;
