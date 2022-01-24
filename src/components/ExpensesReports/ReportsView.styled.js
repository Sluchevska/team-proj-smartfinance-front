import styled from '@emotion/styled';

export const ReportsContainer = styled.div`
  display: grid;
  padding: 20px 20px 0;
  
  @media (min-width: 768px) {
    display: flex;
    padding: 40px 50px 0;
    justify-content: space-between;
    align-items: center;
    /* padding: 40px 40px 20px; */
    padding-top: 40px;
    /* padding-left: 50px;
      padding-right: 50px; */
    /* width: 1280px; */

    @media screen and (min-width: 1280px){
    padding-left: 110px;
    padding-right: 110px
  }
`;

export const MainContainer = styled.div`
  /* padding-left: 50px;
    padding-right: 50px; */

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
  }
`;
