import styled from "@emotion/styled";
import arrow from '../ReturnHome/svg/cursor.svg'



export const Container = styled.div`
display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 0px;
  cursor: pointer;
//   @media screen and (max-width: 768px) {
//   margin-right: auto;  
}

`
export const ReturnText = styled.p`
width: 135px;
height: 14px;
font-family: Roboto, sant-serif;
font-weight: 400;
font-size: 12px;
color: rgba(82, 85, 95, 0.7);
text-decoration: none;
margin-right: auto;
margin-top: 10px;
float:left;

// @media screen and (max-width: 768px) {
// display: flex;
// }

`


export const ReturnSvg = styled.svg`
background-image: url(${arrow});
background-repeat: no-repeat;
margin-top: 10px;
width: 24px;
height: 24px;
border: 0px solid transparent;
border: none;
float: left;


`
export const ReturnNav = styled.div`
display: flex;
  font-size: 12px;
  line-height: 10px;
  letter-spacing: 0.04em;
  color: rgba(82, 85, 95, 0.7);
  padding: 0px;
`