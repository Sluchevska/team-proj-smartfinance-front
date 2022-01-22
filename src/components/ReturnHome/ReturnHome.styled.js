import styled from "@emotion/styled";
import arrow from './svg/cursor.svg'
import { NavLink } from 'react-router-dom';


export const  Container = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  @media screen and (max-width: 1279px) {
  margin-right: auto;  
}

`
    export const  ReturnText = styled.p`
width: 135px;
height: 14px;
font-family: Roboto, sant-serif;
font-weight: 400;
font-size: 12px;
color: rgba(82, 85, 95, 0.7);
text-decoration: none;
margin: auto;
float:left;
display:none;
@media screen and (min-width: 768px) {
display: flex;
}

`
        
        
export const  ReturnSvg = styled.svg`
background-image: url(${arrow});
background-repeat: no-repeat;
width: 24px;
height: 24px;
border: 0px solid transparent;
border: none;
float: left;

`
export const  ReturnNav = styled.div`
display: flex;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);

`

