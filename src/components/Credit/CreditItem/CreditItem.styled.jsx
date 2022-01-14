import styled from '@emotion/styled'

export const Container = styled.div`
  display:flex;
  justify-content:space-between;
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
export const Wrapper = styled.div`
width:606px;
display:flex;

padding-top:10px;
padding-bottom:10px;
  border: solid 1px #F5F6FB;
  `
export const WrapperInfo = styled.div`
  display:flex;
  flex-direction:column;
  `
export const Transaction = styled.p`
display:flex;
  
 
  `
  export const WrapperSum= styled.div`
  display:flex;
 
  `

export const Name = styled.span`
  margin:0;
  margin-bottom:8px;
  width:100px;

  color: #52555F;

  font-size: 12px;
  font-weight:700;
  line-height: 1.167;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
    margin-bottom:0;
     width:200px;
    font-size: 12px;
  line-height: 1.167;
  font-weight:400;
  
  }
  `

  export const NameInfo = styled.div`
  display:flex;
  `

export const Date = styled.span`
  margin:0;
  margin-right:20px;
  display:block;

  color: #52555F;
  font-size: 8px;
  line-height: 1.125;
  letter-spacing: 0.04em;

   @media screen and (min-width: 768px) {
     margin-right:0;
     margin-left:22px;
     width:105px;
    font-size: 12px;
  line-height: 1.167;
  
  }

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
    width: 1280px;
  }
  `
export const Type = styled.span`
  margin:0;
  display:block;

  color: #52555F;
  font-size: 8px;
  line-height: 1.125;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
     margin-right:0;
     width:70px;
     text-align:center;
    font-size: 12px;
  line-height: 1.167;
  
  }
    `

export const Sum = styled.span`
  margin:0;
  margin-right:23px;
  color: #E7192E;

  font-size: 12px;
  font-weight:700;
  line-height: 1.167;
  letter-spacing: 0.04em;

  @media screen and (min-width: 768px) {
     margin-right:40px;
     width:130px;
     text-align:right;
    
  
  }
    `