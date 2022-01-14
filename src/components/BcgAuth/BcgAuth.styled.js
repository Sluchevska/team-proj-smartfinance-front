import styled from "@emotion/styled";
import imgDesc from "../../icons/euro_symbol.svg";

export const BcgBottom = styled.svg`
@media screen and (min-width: 768px) {
z-index: -1;
position: fixed;
bottom: 56px;
right: 9%;
background-repeat: no-repeat;
background-image: url(${imgDesc});
width: 183px;
height: 142px;
}
@media screen and (min-width: 1280px) {
z-index: -1;
bottom: 0;
right: 0;
background-image: url(${imgDesc});
background-repeat: repeat;
width: 100%;
height: 23%;
}
`;