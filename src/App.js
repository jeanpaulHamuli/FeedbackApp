import { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setUserPassword] = useState('');
  const [message, setMessage] = useState(null);
  
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }


  const getPassword = (e) => {
    setUserPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    if(username.length > 0) { 
      setMessage('Welcome ' + username);
    } else {
      setMessage('Please enter a username');
    }
    // if(username === 'admin' && password === 'admin') {
    //   setMessage('Login Successful');
    // }else {
    //   setMessage('Login Failed');
    // }
  }

  return (
    <div className="App">
      <h1>TEST</h1>
      {message ? <p style={{color: 'red'}}>{message}</p> : null}

      <form style={{display: 'flex', flexDirection: 'column', width: '20%', margin: 'auto'}}>
        <input type="text" placeholder="Name" name='username' onChange={handleUsername} style={{marginBottom: '10px'}} />
        <input type="password" placeholder="Password"  name='password' onChange={getPassword} style={{marginBottom: '10px'}} />
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
