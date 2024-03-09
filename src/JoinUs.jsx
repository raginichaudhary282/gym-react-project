import React, { useState } from 'react';
// import vg from "./styles/images3.jpeg"

const JoinUs = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleRegister = () => {
    // Handle registration logic (you can send a request to the server here)
    console.log('Registration logic here');
  };

  const handleLogin = () => {
    // Handle login logic (you can send a request to the server here)
    console.log('Login logic here');
    setLoggedIn(true);
  };

  return (
    <>
      <div className='main-div'>
         {/* <img src={vg} alt='image1'/> */}
        {loggedIn ? (
          <p>Welcome, {username}!</p>
        ) : (
          <div className='main-second-div'>
            <h2>Register Here </h2>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

             <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            /> 

            <button onClick={handleRegister}>Register</button>
          </div>
        )}

        <div className='main-third-div'>
          <h2>Login</h2>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default JoinUs;
