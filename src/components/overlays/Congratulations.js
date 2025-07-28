import { useMyContext } from "../../context/Mycontexts";
import { useEffect, useState } from "react";

export default function Congratulations() {
  const { myNowScore, myScore, highScore, msgHeader, setMsgHeader } = useMyContext();

  const [message, setMessage] = useState("");
  const [personalBestShown, setPersonalBestShown] = useState(false);
  const [highScoreShown, setHighScoreShown] = useState(false);

  useEffect(() => {
    if (myNowScore > myScore && !personalBestShown) {
      setMsgHeader("Your Personal Best");
      setMessage("You've just beaten your personal best — amazing job! Keep going to lock it in by finishing the level!");
      setPersonalBestShown(true);

      setTimeout(() => {
        setMsgHeader("");
        setMessage("");
      }, 10000);
    }

    if (myNowScore > highScore && !highScoreShown) {
      setMsgHeader("New All-Time High Score!");
      setMessage("You’ve just topped the chart — amazing job! Keep going to lock it in by finishing the level!");
      setHighScoreShown(true);

      setTimeout(() => {
        setMsgHeader("");
        setMessage("");
      }, 10000);
    }
  }, [myNowScore, myScore, highScore, personalBestShown, highScoreShown]);

  return (
    <>
      {message !== "" && (
        <div style={styles.overlay}  onClick={() => {
                   setMsgHeader('');
                    setMessage('');
                }}>
          <div style={styles.container}>
            <h2 style={styles.header}>{msgHeader}</h2>
            <p style={styles.text}>{message}</p>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  container: {
    background: 'rgba(198, 221, 208, 0.95)',
    width: '330px',
    padding: '30px 25px',
    borderRadius: '16px',
    boxShadow: '0 16px 40px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'center',
  },
  header: {
    margin: 0,
    fontSize: '20px',
    fontWeight: '600',
    color: '#1a1a1a',
  },
  text: {
    margin: 0,
    fontSize: '16px',
    color: '#444',
  },
};
