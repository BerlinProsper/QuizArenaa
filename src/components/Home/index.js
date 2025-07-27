 import React, { useState } from 'react';
 import { useMyContext } from '../../context/Mycontexts';
 import "./style.css";
 import styled from "@emotion/styled";
import PopUpMsg from '../PopUpMsg';
import Categories from '../Categories';
import { useNavigate } from 'react-router-dom';


const Chip = styled.span`

  display: inline-block; 
  border-radius: 10px;
  background: #bee7e4ff;
  padding: 4px;
  margin: 4px;
  & > span {
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
    background: #47b9b2ff;
  }
`;

const SelectedChip = styled.span`

  display: inline-block; 
  border-radius: 10px;
  background: #136a64ff;
  padding: 4px;
  margin: 4px;
  & > span {
    margin-right: 8px;
  }
  &:hover {
    cursor: pointer;
    background: #22938cff;
  }
`;

 export default function Home() {
  const { alert, setAlert, isLogin, setIsLogin , categoriesData, setSelectedItems, selectedItems , setNoItems} = useMyContext();
    const onClickDeleteItem = (id) => {
    setSelectedItems(selectedItems.filter((item) => item.id !== id));
  };
console.log("selectedItems", selectedItems  );

  
          const navigate = useNavigate();
  return (
    <div style={styles.container}>
      {alert && <PopUpMsg />}
          <h2
        style={{
      color: '#074844ff',
      fontFamily: '"Montserrat", "Arial", sans-serif',
      fontSize: '1rem',
      marginBottom: '16px',
      textAlign: 'center',
      width: '100%',
        }}
      >
        Select three topics you love
      </h2>
      <Categories />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {categoriesData.map(({ id, name }) => {
        const isSelectedChip = selectedItems.some(item => item.id === id);
        if (isSelectedChip) {
          return (
          <SelectedChip
            className="selectedChip"
            key={id}
            onClick={e => {
            e.stopPropagation();
            onClickDeleteItem(id);
            }}
          >
            <span>{name}</span>
          </SelectedChip>
          );
        }
        return (
          <Chip
          className="chip"
          key={id}
          onClick={() => setSelectedItems([...selectedItems, { id, name }])}
          >
          <span>{name}</span>
          </Chip>
        );
        })}

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