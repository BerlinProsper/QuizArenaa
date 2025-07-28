

import React from 'react';

const QuizGameLogo = () => {
  return (
    <div style={styles.logoContainer}>
      <span style={styles.logoText}>🧠 Quiz<span style={styles.highlight}>Arena</span></span>
    </div>
  );
};

const styles = {
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '15px',
    fontFamily: 'Arial, sans-serif',
  },
  logoText: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  highlight: {
    color: '#df2468',
  },
};

export default QuizGameLogo;


