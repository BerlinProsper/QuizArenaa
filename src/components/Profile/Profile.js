import { useMyContext } from "../../context/Mycontexts";
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../../firebase';
import QuizGameLogo from "../Logo";

export default function Profile() {
  const { username, setUser, setIsLogin, setUsername, setPassword, myScore } = useMyContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth);
    setUser(null);
    setIsLogin(false);
    setUsername('');
    setPassword('');
    navigate('/');
  };

  const getUserNameFromEmail = (email) => email.split('@')[0];

  return (
    <div style={styles.container}>
      {username ? (
        <div style={styles.card}>
          <h2 style={styles.title}>Welcome Back!</h2>

          <h5 style={styles.text}>Mail ID: <span style={styles.value}>{username}</span></h5>
          <h5 style={styles.text}>User: <span style={styles.value}>{getUserNameFromEmail(username)}</span></h5>
          <h5 style={styles.text}>Best Score: <span style={styles.value}>{myScore}</span></h5>

          <button style={styles.logoutButton} onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div style={styles.card}>
          <h2 style={styles.text}>No active session found. Please log in first.</h2>
        </div>
      )}

      <div style={{ height: '40px' }} /> {/* Spacer */}
      <QuizGameLogo />
    </div>
  );
}

const styles = {
  container: {
    background: 'linear-gradient(135deg, #9fc0e1ff 0%, #70c4c7ff 100%)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
  },
  card: {
    backgroundColor: '#ffffffdd',
    borderRadius: '16px',
    padding: '32px 24px',
    boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    marginBottom: '32px',
  },
  title: {
    color: '#074844ff',
    fontFamily: '"Montserrat", "Arial", sans-serif',
    fontSize: '1.6rem',
    marginBottom: '24px',
    fontWeight: '700',
  },
  text: {
    color: '#074844ff',
    fontFamily: '"Montserrat", "Arial", sans-serif',
    fontSize: '1.1rem',
    marginBottom: '12px',
    fontWeight: '500',
  },
  value: {
    fontWeight: '600',
    color: '#0b4238ff',
  },
  logoutButton: {
    marginTop: '24px',
    backgroundColor: '#0b4238ff',
    color: '#8ed1cdff',
    fontSize: '1.2rem',
    padding: '10px 24px',
    border: 'none',
    borderRadius: '12px',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    transition: 'background 0.2s ease-in-out',
  },
};
