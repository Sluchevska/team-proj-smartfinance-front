import styled from '@emotion/styled';

export const ModalWindow = styled.div`
  position: absolute;
  z-index:1000000;
  top: 135%;
  left: 20%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
  width: 282px;
  height: 152px;
  background: linear-gradient(117.84deg, #1d346a 2.84%, #031634 67.28%);
  border-radius: 30px;

  text-align: left;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 292px;
    height: 152px;
    padding: 30px;
  }

  &::after {
    content: ''; 
    position: absolute;
    left: 46px;
    top: -30px;
    border: 15px solid transparent;
    border-bottom: 15px solid #162c5c;
 `;

export const ModalTitle = styled.p`
  font-size: 14px;
  line-height: 1.43;
`;
export const ModalText = styled.p`
  font-size: 12px;
  line-height: 16px;
`;
