import styled from '@emotion/styled';

export const Form = styled.div`
  display: flex;
  width: 369px;
  height: 44px;
  text-align: center;
  margin: 0 auto;
  position: relative;


@media (max-width: 768px) {
  display: inline;
  justify-content: center;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%) };
  position: relative;
}
`

export const Title = styled.p`
width: 83px;
height: 20px;
font-family: Roboto, sant-serif;
font-weight: 500;
font-size: 12px;
color: rgba(82, 85, 95, 0.7);
line-height: 14,06px;
letter-spacing: 0.02em;
text-align: center;
// background-color: rgba(242, 245, 252, 1);
margin-right: 20px;

@media (max-width: 768px) {
  text-align: center;
  margin-left: 90px;
  
`

export const FormInput = styled.input`
width: 125px;
height: 44px;
border: 0px solid transparent;

font-size: 12px;
font-family: Roboto, sant-serif;
font-weight: 700;
line-height: 14,06px;
text-align: center;
border-radius: 16px;
margin-right: 20px;
// background-color: rgba(242, 245, 252, 1);
border: 2px solid #FFFFFF; 
color: #000000;


&:hover, &:active, &:focus {
  outline: 0;
  outline-offset: 0;
  
};

@media (max-width: 768px) {
  border-radius: none;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  margin-right: 0;
}


`

export const Button = styled.button`
width: 125px;
height: 44px;
border: none;
border-radius: 12px;
font-family: Roboto, sant-serif;
font-weight: 400;
font-size: 12px;
background-color: rgba(242, 245, 252, 1);
border: 2px solid #FFFFFF; 
color: rgba(82, 85, 95, 0.7);


@media (max-width: 768px) {
  border-radius: none;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  margin-right: 0;
  color: rgba(82, 85, 95, 0.7);
 
}
`
