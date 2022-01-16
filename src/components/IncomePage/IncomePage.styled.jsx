import styled from '@emotion/styled'

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom:12px;
  width: 320px;
  //border-bottom: solid 1px #F5F6FB;
  
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
export const Box = styled.div`
    
    padding-top:50px;
  @media screen and (min-width: 768px) {
    width:665px;
    height:626px;
    background-color: #dfdbdb;
    box-shadow: 0px 10px 60px rgba(170, 178, 197, 0.2);
    border-radius: 0px 30px 30px 30px;
    }
  
   @media screen and (min-width: 1280px) {
    width:1060px;
    height:579px;
  }
  `
export const Wrapper = styled.div`
  margin-top:10px;
  @media screen and (min-width: 1280px) {
    display:flex;
  }
  `
  export const OperationsWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    /* padding-left: 20px;
    padding-right: 20px; */
    padding-bottom:12px;
    /* width: 320px; */
    //border-bottom: solid 1px #F5F6FB;
  
  @media screen and (min-width: 768px) {
    margin-left: 30px;
    margin-right: 30px;
    padding:0;
    /* padding-top:100px; */
    width: 665px;
    border-bottom: none;
  }

  @media screen and (min-width: 1280px) {
    margin:0;
    margin-right:30px;
    padding-left: 20px;
    /* padding-top:100px; */
    width: 780px;
  }
  `
export const Header = styled.div`
  margin:0;
  display:inline-flex;
  padding-top:10px;
  padding-bottom:10px;
  width:606px;
  height:38px;
  background-color: #F5F6FB;
  border-radius: 20px 20px 0 0;
  color: #000000;

  font-size: 12px;
  line-height: 1.167;
  font-weight:700;
  letter-spacing: 0.04em;

  @media screen and (min-width: 1280px) {
    width:760px;
    height:40px;
  }
  `
  export const Date = styled.span`
    @media screen and (min-width: 768px) {
      margin-left:22px;
      margin-bottom:0;
      width:105px;
    }
    @media screen and (min-width: 1280px) {
      width:100px;
      margin-left:23px;
    }
  `
  export const Name = styled.span`
    @media screen and (min-width: 768px) {
      margin-bottom:0;
      width:200px;
    }

    @media screen and (min-width: 1280px) {
      width:275px;
    }
    `
  export const Type = styled.span`
    @media screen and (min-width: 768px) {
      margin-bottom:0;
      width:70px;
    }
    `
  export const Sum = styled.span`
    @media screen and (min-width: 768px) {
      margin-left:3px;
      width:130px;
      text-align:right;
    }

    @media screen and (min-width: 1280px) {
      width:179px;
    }
  `
  
  