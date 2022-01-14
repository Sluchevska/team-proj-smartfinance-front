import styled from '@emotion/styled'

export const Container = styled.div`
  //display:flex;
  //justify-content:space-between;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom:12px;
  width: 320px;
  border-bottom: solid 1px #F5F6FB;
  
  @media screen and (min-width: 768px) {
    padding-left: 81px;
    padding-right: 81px;
    padding-bottom:0;
    width: 768px;
    border-bottom: none;
    
  }

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
    width: 1280px;
  }
  `

export const Header = styled.div`
width:606px;
height:38px;
  background-color: #F5F6FB;
  border-radius: 20px 20px 0 0;
  `
  
  