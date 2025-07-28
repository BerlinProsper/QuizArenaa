import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useMyContext } from '../../context/Mycontexts';    

export default function CircularTimer({ limit, resetKey }) {
  const { setNextTimer , nextTimer} = useMyContext();

  return (
    <div>

{nextTimer?

    <CountdownCircleTimer
      isPlaying
      key={resetKey}
      duration={limit}
      size={100}
      strokeWidth={8}
      colors={['#004777', '#A30000']}
      colorsTime={[10, 0]}
      onComplete={() => {
        setNextTimer(false); 
        return { shouldRepeat: false };
      }}
    >
      {({ remainingTime, color }) => (
        <div style={{ color }}>
          <div className="text-1xl font-bold">{remainingTime}</div>
          <div className="text-xs">seconds</div>
        </div>
      )}
    </CountdownCircleTimer>:
    <div> </div> }
        </div>
  );
}

