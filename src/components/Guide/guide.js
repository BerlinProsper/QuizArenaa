
export default function Guide(){
    return(
    
        <div style={styles.overlay} >
          <div style={styles.container}>
            <h2 style={styles.header}>Game Guide!</h2>
          <p style={styles.text}>
    Welcome to the game! To start, please select at least three categories that you’d like to be quizzed on. The game consists of 10 exciting levels, each designed to challenge your knowledge and speed.
  </p>

  <p style={styles.text}>
    Level 1 lets you play without any time limit, allowing you to get comfortable with the questions.
  </p>

  <p style={styles.text}>
    Starting from Level 2, a timer kicks in, with decreasing time limits as you progress through the levels.
  </p>

  <p style={styles.text}>
    Each correct answer earns you points, but be careful—incorrect answers will deduct points starting from Level 2, with higher penalties in later levels.
  </p>

  <p style={styles.text}>
    The number of questions per level is fixed at 15.
  </p>  </div>
        </div>
     
    )
}

const styles = {
  overlay: {
    background: 'linear-gradient(135deg, #9fc0e1ff 0%, #70c4c7ff 100%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  container: {
    background: '#1c7174ff 100%',
    width: '530px',
    padding: '30px 25px',
    borderRadius: '16px',
    boxShadow: '0 16px 40px #114c4eff 100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'center',
  },
  header: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#cee0e7ff',
  },
  text: {
    margin: 0,
    fontSize: '16px',
    color: '#c9dce3ff',
  },
};







// Game Guide

