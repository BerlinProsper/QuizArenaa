 import React, { useEffect, useState } from 'react';
 import { useMyContext } from '../../context/Mycontexts';
 import "./style.css";
 import styled from "@emotion/styled";
import PopUpMsg from '../PopUpMsg';
import Categories from '../Categories';
import { useNavigate } from 'react-router-dom';


const Chip = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #bee7e4ff;
  padding: 10px;
  margin: 4px;
  width: 140px;
  height: 50px;
  text-align: center;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 500;
  color: #033330ff;

  & > span {
    margin: 0 auto;
  }

  &:hover {
    cursor: pointer;
    background: #47b9b2ff;
  }
`;

const SelectedChip = styled(Chip)`
  background: #136a64ff;

  &:hover {
    background: #22938cff;
  }
`;


 export default function Home() {
  const { alert, setAlert, isLogin, setIsLogin , categoriesData, setSelectedItems, selectedItems , setNoItems} = useMyContext();
    const onClickDeleteItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };
console.log("selectedItems", selectedItems  );
useEffect(() => {
setSelectedItems([]);
setNoItems(0);
}, []);
  
          const navigate = useNavigate();
  return (
    <div style={styles.container}>
      {alert && <PopUpMsg />}
          <h2
        style={{
      color: '#074844ff',
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '1.5rem',
      marginBottom: '16px',
      textAlign: 'center',
      fontWeight: '600',
      width: '100%',
        }}
      >
        Select three topics you love
      </h2>
      <Categories />
    <div className="category-grid">
  {categoriesData.map(({ id, name }) => {
    const isSelectedChip = selectedItems.some(item => item.id === id);
    const ChipComponent = isSelectedChip ? SelectedChip : Chip;

    return (
      <ChipComponent
        key={id}
        onClick={e => {
          e.stopPropagation();
          if (isSelectedChip) {
            onClickDeleteItem(id);
          } else {
            setSelectedItems([...selectedItems, { id, name }]);
          }
        }}
      >
        <span>{name}</span>
      </ChipComponent>
    );
  })}
</div>


<div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <button
            className="big-button"
            style={{
              backgroundColor: '#78cdbdff',
              color: '#074844ff',
              fontSize: '1.5rem',
              padding: '10px 30px',
              border: 'none',
              borderRadius: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              transition: 'background 0.2s',
            }}
            onClick={ () => {
              if (selectedItems.length < 3) {
                setAlert("Please select at least 3 topics");
              } else {
                setNoItems(selectedItems.length)
                setAlert("");
                navigate('/game');
                
              }
            }}
          >
        Start Quiz
          </button>
        </div>  


      </div>
  );
 }
 const styles = {

  container: {
    background: 'linear-gradient(135deg, #9fc0e1ff 0%, #026468ff 100%)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },  

}