import React, { useState } from 'react';
import QuizGameLogo from '../Logo';
import { HandleSignIn } from './signIn';
import { HandleSignUp } from './signUp';
import { useMyContext } from '../../context/Mycontexts';
const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const { username, setUsername, password, setPassword, alert, setAlert, isLogin, setIsLogin } = useMyContext();
  const handleSign = async (e) => {
    setAlert('Please wait...');
    e.preventDefault();
    if (!username.includes('@')) {
      setAlert('Please enter a valid email address.');
      return;
    }

    if (isSignUp) {
      await HandleSignUp(username, password, setAlert, alert, setIsLogin , isLogin);
    } else {
      await HandleSignIn(username, password, setAlert, alert, setIsLogin, isLogin);
    }
  };

  const toggleMode = () => setIsSignUp((prev) => !prev);

  return (
    <div style={styles.container}>
      <form style={styles.form} onSubmit={handleSign}>
        <div style={{ textAlign: 'center' }}>
          <QuizGameLogo />
        </div>
<p style={{ color: '#800000', textAlign: 'center', fontSize: '0.6rem' }}>{alert}</p>

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
        <p onClick={toggleMode} style={styles.toggleText}>
          {isSignUp ? 'Already have an account? Sign In' : 'Dont have an account? Sign Up'}
        </p>
      </form>
    </div>
  );
};

const styles = {
  container: {
    background: 'linear-gradient(135deg, #026468ff 0%, #9fc0e1ff 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  form: {
   background: 'rgba(237, 239, 243, 0.3)', // 30% opacity, very transparent
  width: '330px',

    padding: '40px 35px',
    borderRadius: '24px',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.12)',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
     background: 'rgba(237, 239, 243, 0.3)', // 30% opacity, very transparent

    padding: '14px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '14px',
    fontSize: '1rem',
    borderRadius: '10px',
    backgroundColor: '#026468ff',
    color: '#fff',
    border: 'none',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  toggleText: {
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '0.8rem',
    color: '#026468ff',
    fontWeight: '400',
  },
};

export default LoginPage;
