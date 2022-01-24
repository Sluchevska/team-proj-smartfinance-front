import styled from '@emotion/styled';

export const ReportsContainer = styled.div`
  display: grid;
  padding: 20px;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding: 40px 40px 20px; */
    padding-top: 40px;
    /* padding-left: 50px;
      padding-right: 50px; */
    /* width: 1280px; */

    //  padding-left: 140px;
    // padding-right: 140px;
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
