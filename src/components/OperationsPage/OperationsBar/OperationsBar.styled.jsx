import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
    

    @media screen and (max-width: 767px) {
     display:absolute;
     top:100;
     left:0;
    }

   
    `

export const Container = styled.div`
    display:flex;
    margin-left: auto;
    margin-right: auto;
    
    width: 320px;

    @media screen and (min-width: 768px) {
      margin-top:58px;
      padding-left: 52px;
      padding-right: 52px;
      width: 768px;
    }

    @media screen and (min-width: 1280px) {
      margin-top:9px;
      padding-left: 110px;
      padding-right: 110px;
      width: 1280px;
    }
    `

export const StyledLink = styled(NavLink)`
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
    background-color: #F5F6FB;
    text-decoration:none;

    &.active {
     color: #FFFFFF;
     background-color: #FF751D;}
    
    @media screen and (min-width: 768px) {
    width: 138px;
    height:40px;

    border-radius: 20px 20px 0px 0px;
    background-color: #FAFBFD;
      &.active {
      color: #FF751D;
      background-color: #FEFEFE;
        }
  }
  `
  