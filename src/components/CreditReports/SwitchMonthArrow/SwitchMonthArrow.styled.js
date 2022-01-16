
import styled from '@emotion/styled';
import arrowR from '../../../icons/arrow-right.svg'
import arrowL from '../../../icons/arrow-left.svg'


export const Container = styled.div`
display: grid;
justify-content: end;`

export const Title = styled.p`
margin: 40px 20px 10px;
font-weight: normal;
font-size: 12px;
line-height: 14px;
text-align: center;
letter-spacing: 0.04em;
color: rgba(82, 85, 95, 0.7);`

export const Month = styled.p`
margin: 0;
padding-left: 26px;
font-weight: bold;
font-size: 14px;
line-height: 16px;
letter-spacing: 0.02em;
text-transform: uppercase;
color: #000000;`

export const IconContainer = styled.div`
position: relative;
display:flex;
`

export const IconLeft = styled.svg`
position: absolute;
top: -4px;
right: 130px;
display: flex;
align-items: center;
justify-content: center;
width: 15px;
height: 25px;
padding: 0;
margin: 0;
border: none;
background-color: transparent;
outline: none;
background-image: url(${arrowL});
background-position: center;
background-size: 60%;
background-repeat: no-repeat;

&:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`



export const IconRigth = styled.svg`
position: absolute;
top: -4px;
right: 5px;
display: flex;
align-items: center;
justify-content: center;
width: 15px;
height: 25px;
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
&:hover{
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
`