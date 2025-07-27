
import LoadingIcons from 'react-loading-icons'


export default function LoadingPage() {
  return (
    <div style={styles.container}>
              <LoadingIcons.Bars />
    </div>
  );
}   

 const styles = {
  container: {
    background: 'linear-gradient(135deg, #9fc0e1ff 0%, #026468ff 100%)',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  }
}