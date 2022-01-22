import styled from '@emotion/styled';

export const BalanceContainer = styled.div`
  

display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

@media (min-width: 768px) {
 flex-direction: row;
 
}
`
export const InputContainer = styled.div`
   display: flex;
    margin-top: 12px;


@media (min-width: 768px) {
 margin-top: 0px;
 
}
`
export const ViewContainer = styled.div`
  display: flex;
  flex-direction:column-reverse;
    text-align: center;
    align-items: center;
    justify-content: center;



@media (min-width: 768px) {
 display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    flex-direction: row;
  padding-top:40px;
    width: 100%;

    @media screen and (min-width: 1280px) {
  
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
   
    width: 1060px;
  }
 
}
`

export const FormContainer = styled.form`
 display: table-footer-group;
    font-size: 12px;
    color: rgba(82, 85, 95, 0.7);
    

@media (min-width: 768px) {
   margin-right: 90px;
    margin-bottom: 0;
}
`

export const Title = styled.label`
position: relative;
    display: block;
    text-align: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    padding-top: 30px;
    font-weight: 500;


@media (min-width: 768px) {
display: flex;
    align-items: baseline;
    justify-content: flex-start;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 0px;
    padding-top: 0px;
}
@media screen and (min-width: 1280px) {
   display: flex;
    align-items: baseline;
    justify-content: center;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
}
  
`

export const FormInput = styled.input`
display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    color: #000;
    width: 125px;
    height: 44px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 22px 0 0 22px;
    font-weight: 700;
    padding-left: 20px;
    padding-right: 20px;
    outline: none;


&:focus {
 outline: none;
  border: 1px solid #ff751d;
  
};
&::placeholder{
  font-weight: 700;

  text-align: right;
  letter-spacing: 0.02em;

  color: #000000;
}

@media (min-width: 768px) {
 height: 44px;
    margin-left: 21px;
    margin-top: 0px;
    width: 125px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 16px;
    text-align: center;
    font-size: 12px;
    line-height: 1.17;
    font-weight: bold;
    color: black;
}
@media screen and (min-width: 1280px) {
  height: 44px;
    margin-left: 40px;
    margin-right: 15px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 16px;
    text-align: center;
    font-size: 12px;
    line-height: 1.17;
    font-weight: bold;
    color: black;
}


`

export const Button = styled.button`
width: 125px;
    height: 44px;
    border: 2px solid #ffffff;
    border-left: 1px;
    background-color: transparent;
    border-radius: 0 22px 22px 0;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    cursor: pointer;
    &:hover,&:active, &:focus {
    background-color: #ff751d;
  color: #fff;}


@media (min-width: 768px) {
 width: 125px;
    height: 44px;
    border: 2px solid #ffffff;
    background-color: transparent;
    border-radius: 16px;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    margin-left: 15px;
}
@media screen and (min-width: 1280px) {
   width: 125px;
    height: 44px;
    background-color: transparent;
    border-radius: 16px;
    color: rgba(82, 85, 95, 0.7);
    font-size: 12px;
    line-height: 1.17;
    margin-left: 0px;
}
`
