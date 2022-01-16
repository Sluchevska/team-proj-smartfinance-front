import styled from '@emotion/styled';
import cross from '../../icons/close.svg'


export const ModalOverlay = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `
  
  export const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
    border-radius: 30px;
    background-color: #FFF;
    min-height: 200px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  export const ModalTitle = styled.p`
  font-weight: bold;
  
  `
  

  export const ModalHeader = styled.div`
    min-height: 60px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 50px 20px 10px;
    margin: auto;
  `

  export const ModalFooter = styled.div`   
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    padding: 10px 20px;
  `

export const Icon = styled.svg`
position: absolute;
top: 20px;
right: 20px;
display: flex;
align-items: center;
justify-content: center;
width: 25px;
height: 25px;
padding: 0;
margin: 0;
border: none;
border-radius: 50%;
background-color: transparent;
color: black;
cursor: pointer;
outline: none;
background-image: url(${cross});
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
`

  export const Button = styled.button`
    position: relative;
    width: 120px;
    padding: 10px 15px;
    margin: 0 15px;
    background-color: ${props =>
      props.active ? '#FF751D' : 'white'};
    border: ${props => 
      props.active ? 'none' : '2px solid #F5F6FB;'};
    border-radius: 16px;
    color: ${props =>
      props.active ? '#FFF' : 'black'};
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    display: inline-block;
    text-decoration: none;
`
   export const BtnActive = styled.button`
  
        background-color: #FF751D;
        border: 1px solid #5EB2F2;
        box-shadow: 0px 0 2px 0px #C0C0C0;

  `
