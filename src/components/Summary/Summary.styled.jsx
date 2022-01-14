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
    padding-left: 52px;
    padding-right: 52px;
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
export const Title = styled.h3`
  margin:0;
  color: #000000;

  @media screen and (min-width: 1280px) {
    width:230px;
    height:38px;
    padding-top:11px;
    padding-bottom:13px;
    text-align:center;
    
    font-size: 12px;
    line-height: 1.167;
    font-weight:700;
    letter-spacing: 0.04em;

    border-bottom: solid 1px #FFFFFF;
    background-color: #F5F6FB;
    border-radius: 20px 20px 0 0;
    }
  `

export const List = styled.ul`
margin:0;
padding:0;
list-style:none;
width:230px;

  @media screen and (min-width: 1280px) {
    }
  `

export const ListItem = styled.li`
  display:flex;
  justify-content:space-between;
  border-bottom: solid 1px #FFFFFF;
  background-color: #F5F6FB;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 1.167;
    font-weight:400;
    letter-spacing: 0.04em;
  }

  @media screen and (min-width: 1280px) {
    padding-left:22px;
    padding-right:20px;
    height:38px;
    color: #52555F;

    &:last-child{
      border-radius: 0 0 20px 0;
    }
  }
  `
  export const Month = styled.p`
    
  @media screen and (min-width: 768px) {
    
  }
  @media screen and (min-width: 1280px) {
    
    
  }
  `

  export const Sum = styled.p`
    
  @media screen and (min-width: 768px) {
    
  }

  @media screen and (min-width: 1280px) {
   
  }
  `
  
  