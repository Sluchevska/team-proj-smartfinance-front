
import styled from '@emotion/styled';
import arrowR from '../../../icons/arrow-right.svg'
import arrowL from '../../../icons/arrow-left.svg'


export const ContainerMain = styled.div`
display: block;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
border-radius: 30px;
margin: 20px;
padding: 20px;
`

export const IconContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;

`

export const IconLeft = styled.svg`
width: 15px;
height: 20px;
padding: 0;
margin: 0;
border: none;
background-color: transparent;
cursor: pointer; 
outline: none;
background-image: url(${arrowL});
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
`

export const Title = styled.p`
padding: 0 30px;
font-weight: bold;
font-size: 14px;
line-height: 16px;
text-align: center;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #000000;`


export const IconRigth = styled.svg`
width: 15px;
height: 20px;
padding: 0;
margin: 0;
border: none;
background-color: transparent;
cursor: pointer;
outline: none;
background-image: url(${arrowR});
background-position: center;
background-size: 60%;
background-repeat: no-repeat;
`





export const IconList = styled.ul`
    display: flex;
    max-width: 700px;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    text-align: center;
    margin-left: auto;
    margin-right: auto; 


    @media screen and (max-width: 768px) {
    .iconList{
        margin-left: auto;
        margin-right: auto;
        }
      }

    @media screen and (max-width: 320px) {
        .iconList{
       max-width: 300px;
       padding: 0;
      }
  `


