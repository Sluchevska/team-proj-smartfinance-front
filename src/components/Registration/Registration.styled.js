import styled from '@emotion/styled';

export const Forma = styled.form`
 align-items: left;
    width: 265px;
`;

export const Label = styled.div`
 display: block;

  margin-bottom: 30px;
    cursor: pointer;
`;


export const Title = styled.p`
 font-family: Roboto, sant-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.176;
    letter-spacing: 0.04em;
    margin-bottom: 20px;
    color: #52555F;
     @media (max-width: 768px) {
        text-align: center;
      
    }
`;
export const NoticeText = styled.p`
  font-size: 13px;
  opacity: 0.7;
`;

export const Span = styled.span`
  display: block;

  /* margin-bottom: 13px; */

  color: #000000;

  @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const FormInput = styled.input`
   width: 265px;
    height: 52px;
    border: 0px solid transparent;
    border-radius: 30px;
    background-color: #f6f7fb;
    padding: 17px 20px;
    &::placeholder{
      font-size: 14px;
  line-height: 16px;

  color: #a6abb9;
    }
`;

export const InputDescr = styled.span`
   font-family: Roboto, sant-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.176;
    letter-spacing: 0.04em;
    color: #000;
    display: inline-block;
    text-align: left;
    margin-bottom: 10px;
    @media screen and (min-width: 768px) {
    font-size: 12px;
    line-height: 14px;
  }
`;

export const BtnContainer = styled.div`
   display: flex;
  justify-content: space-between;
  margin-top: 40px;
  align-items: center;
`;



export const Button = styled.button`
 width: 125px;
    height: 44px;
     background-color: #f5f6fb;
  border-radius: 16px;
  border: none;
  padding: 0;
  color: #52555f;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  box-shadow: #52555f;
  filter: drop-shadow(1px 3px 5px rgba(82, 85, 95, 0.15));
  cursor: pointer;

  &:hover,&:active, &:focus {
    background-color: #ff751d;
  color: #fff;
  filter: drop-shadow(1px 3px 5px rgba(255, 107, 8, 0.35));
  transition: 0.5s linear;
  
  }
  
`;
// export const PageWrapper = styled.div`
//    position: absolute;
//   left: 50%;
//   top: -84px;
//   transform: translate(-50%, 0);
//   z-index: 1;
//   display: flex;
//   flex-direction: column;
//   margin-left: auto;
//   margin-right: auto;
//   padding: 40px 18px 53px 18px;
//   width: 300px;
//   height: 525px;
//   background-color: #fff;
//   box-shadow: 5px 10px 20px rgba(170, 178, 197, 0.4);
//   border-radius: 30px;
// `;

export const Google = styled.a`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: #f6f7fb;
  border-radius: 26px;
  border: 0;
  width: 122px;
  height: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #000000;
  &::before{
    content: '';
  display: inline-block;
  width: 18px;
  height: 18px;

  margin-right: 10px;
  margin-left: 20px;
  background-image: url('../../icons/google-symbol.svg');
  background-size: contain;
  background-repeat: no-repeat;
  }
`;