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
    padding-left: 50px;
    padding-right: 50px;
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    padding-left: 110px;
    padding-right: 110px;
    width: 1280px;
  }
  `

export const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  `

export const Name = styled.p`
  margin:0;
  margin-bottom:8px;
  width:100px;

  color: #52555F;

  font-size: 12px;
  font-weight:700;
  line-height: 1.167;
  letter-spacing: 0.04em;
  `

  export const NameInfo = styled.div`
  display:flex;
  `

export const Date = styled.p`
  margin:0;
  margin-right:20px;
  display:block;

  color: #52555F;
  font-size: 8px;
  line-height: 1.125;
  letter-spacing: 0.04em;
  `
export const Type = styled.p`
  margin:0;
  display:block;

  color: #52555F;
  font-size: 8px;
  line-height: 1.125;
  letter-spacing: 0.04em;
    `

export const Sum = styled.p`
  margin:0;
  margin-right:23px;
  color: #E7192E;

  font-size: 12px;
  font-weight:700;
  line-height: 1.167;
  letter-spacing: 0.04em;
    `