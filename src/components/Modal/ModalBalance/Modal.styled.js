import styled from '@emotion/styled';

  
  export const ModalWindow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 10px 10px 30px rgba(82, 85, 95, 0.4);
    border-radius: 30px;
    background: linear-gradient(117.84deg, #1D346A 2.84%, #031634 67.28%);
    min-height: 150px;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `

  // .box.arrow-top:after {
  //   content: " ";
  //   position: absolute;
  //   right: 30px;
  //   top: -15px;
  //   border-top: none;
  //   border-right: 15px solid transparent;
  //   border-left: 15px solid transparent;
  //   border-bottom: 15px solid black;
  // }

  export const ModalTitle = styled.p`
  margin: 0;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px; 
  padding-left: 30px;
  padding-bottom: 30px;
  `
  

  export const ModalHeader = styled.div`
    display: block;
    box-sizing: border-box;
    align-items: center;
    margin: auto;
    color: #fff;

  `

 

  export const ModalFooter = styled.div`   
    display: block;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
    padding: 0 30px;
  `


