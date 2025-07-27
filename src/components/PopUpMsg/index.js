


import React from 'react';


import { useMyContext } from '../../context/Mycontexts';
export default function PopUpMsg() {

  const cardStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "300px",
    padding: "20px",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
    color: "#fff",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
  };

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent overlay
    zIndex: 999,
  };

  const { alert , setAlert} = useMyContext();
  return (
 <div style={overlayStyle}        onClick={() => {
                   
                    setAlert('');
                }}>
        <div style={cardStyle}>
            
            <h5>{alert}</h5>
        </div>
    </div>
  );
}
