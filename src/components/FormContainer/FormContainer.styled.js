import styled from "@emotion/styled";

export const FormWrapper = styled.div`
 
    width: 300px;
    padding: 40px 18px 53px;
  
  display: flex;
  flex-direction: column;
   margin-top: 50px;
  background-color: #fff;
  box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
 
  border-radius: 30px;

  position: absolute;
  left: 50%;
  top: 199px;
  transform: translate(-50%, 0);
  z-index: 1;
   margin-left: auto;
  margin-right: auto;
  
  

  @media (min-width: 768px) {
     box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
     z-index: 4;
    width: 436px;
    top: 240.9px;
    padding: 50px 85px 53px 85px;
  }
  
  @media (min-width: 1280px) {
    margin: 0;
    width: 436px;
    /* height: 535px; */
    top: 140px;
    left: 75%;
  }
  
  
  
`;

