import styled from "@emotion/styled";
import gotobtn from "../../icons/gotoreportbtn.svg";
import { NavLink } from 'react-router-dom';

export const  GoToSvg = styled.svg`
background-image: url(${gotobtn});
width: 24px;
height: 24px;

`

export const  GoToText = styled.p`
font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.04em;
    margin-right: 20px;
    padding: 0;
    margin:0;
`



export const Container = styled.div`
@media screen and (min-width: 768px) {
display: flex;
    width: 154px;
    /* height: 24px; */
    align-items: center;

    /* margin-left: 111px;} */
    @media screen and (min-width: 1280px) {
     /* margin-left: 205px; */
  }}

`

