import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const StyledLink = styled(NavLink)`
    /* position:absolute;
    top:100;
    left:0; */
    display:flex;
    justify-content:center;
    align-items: center;

    width: 189px;
    height:59px;

    font-family: Roboto;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.167;
    letter-spacing:0.02;
    text-transform: uppercase;


    color: #000000;
    background-color: #FF751D;
    text-decoration:none;

    &.active {
    color: #FFFFFF;
  }
  `

  export const Wrapper = styled.div`
   
  display:flex;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  width: 320px;

  @media screen and (min-width: 768px) {
    padding-left: 50px;
    padding-right: 50px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
    width: 1280px;
  }
    
  
  `
 

