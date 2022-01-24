import styled from '@emotion/styled'

export const List = styled.ul`
  margin:0;
  padding:0;
  list-style:none;
  //max-height:160px;
  
  @media screen and (min-width: 768px) {
  // max-width:606px;
  }

  @media screen and (min-width: 1280px) {
  }
  `
export const ListItem = styled.li`
  margin:0;
  padding:0;

  @media screen and (min-width: 1280px) {
    
  }
  `
  export const EmptyRow = styled.li`
  
    @media screen and (max-width: 767px) {
      display:none;
    }

  @media screen and (min-width: 768px) {
    height: 47px;
    border: solid 1px #F5F6FB
  }
  `

  


  
    