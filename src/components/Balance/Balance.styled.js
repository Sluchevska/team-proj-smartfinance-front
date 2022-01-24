import styled from '@emotion/styled';

export const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  order: 3;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    order: 0;
  }
`;

export const InputContainer = styled.div`
  /* display: flex; */
  margin-top: 12px;

  @media (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const FormContainer = styled.form`
  display: table-footer-group;
  font-size: 12px;
  color: rgba(82, 85, 95, 0.7);

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.label`
  position: relative;
  display: block;
  text-align: center;

  /* margin-left: auto;
  margin-right: auto; */
  // margin-bottom: 30px; - спрятала Марина
  // margin-top: 30px; - спрятала Марина
  /* font-weight: 500; */

  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;

  /* align-items: center;
  text-align: center; */
  letter-spacing: 0.02em;
  color: #52555fb3;

  @media (min-width: 768px) {
    display: flex;
    /* justify-content: flex-start; */
    align-items: baseline;
    margin: 0;
    /* margin-left: 0;
    margin-right: 0;
    margin-bottom: 0px;
    padding-top: 0px; */
  }

  @media screen and (min-width: 1280px) {
    /* justify-content: center; */
  }
`;

export const FormInput = styled.input`
  padding-left: 20px;
  padding-right: 20px;
  width: 125px;
  height: 44px;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  border: 2px solid #ffffff;
  background-color: transparent;
  border-radius: 22px 0 0 22px;

  &:focus {
    outline: none;
    border: 1px solid #ff751d;
  }
  &::placeholder {
    font-weight: bold;
    font-size: 12px;
    line-height: 1.17;
    text-align: right;
    letter-spacing: 0.02em;
    color: #000000;
  }

  &:focus::placeholder {
    color: transparent;
  }

  @media (min-width: 768px) {
    margin-top: 0px;
    margin-left: 21px;
    border-radius: 16px;
  }
`;

export const Button = styled.button`
  width: 125px;
  height: 44px;
  border: 2px solid #ffffff;
  border-left: 1px;
  background-color: transparent;
  border-radius: 0 22px 22px 0;
  color: rgba(82, 85, 95, 0.7);
  font-size: 12px;
  line-height: 1.17;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    background-color: #ff751d;
    color: #fff;
  }

  @media (min-width: 768px) {
    border-radius: 16px;
    margin-left: 15px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 0px;
  }
`;

export const BalanceDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 125px;
  height: 44px;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #000000;
  border: 2px solid #ffffff;
  background-color: transparent;
  border-radius: 16px;
  @media (min-width: 768px) {
    margin-top: 0px;
    margin-left: 21px;
  }
`;

export const ViewContainer = styled.div`
  display: grid;
  padding: 20px;
  // flex-direction: column-reverse;
  text-align: center;
  align-items: center;
  justify-content: center;
  // order: 3;

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    flex-direction: row;
    padding-top: 40px;
    width: 100%;

    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: flex-end;
      align-items: baseline;

      width: 1060px;
    }
  }
`;
