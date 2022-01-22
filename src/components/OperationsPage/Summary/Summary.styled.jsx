import styled from '@emotion/styled'

export const Wrapper = styled.div`
    
  @media screen and (min-width: 768px) {
    margin-top:435px;
    margin-left:30px;
  }

  @media screen and (min-width: 1280px) {
    margin-top:0;
    margin-left:0;
    /* padding-top:136px; */
  }
  `
export const Title = styled.h3`
  margin:0;
  color: #000000;

  @media screen and (min-width: 768px) {
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
    display:block;
    margin:0;
    padding:0;
    list-style:none;
    width:230px;
    min-height:233px;

    font-size: 12px;
    line-height: 1.167;
    font-weight:400;
    letter-spacing: 0.04em;

    background-color: #F5F6FB;
    border-radius: 0 0 20px 0;
  `

export const ListItem = styled.li`
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-bottom: solid 1px #FFFFFF;
  text-transform:uppercase;

  @media screen and (min-width: 768px) {
    padding-left:22px;
    padding-right:20px;
    height:38px;
    color: #52555F;

    &:last-child{
      border-bottom: none;
    }
  }
  `
 

  
  
  