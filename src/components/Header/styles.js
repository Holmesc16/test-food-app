import styled from "styled-components";
import {_grow, _opacity} from '../../ui/AppStyles'

const textColor = "#ffffff";
const primaryColor = "#43E895";

export const StyledHeader = styled.nav`
  background-color: ${primaryColor};
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;
  text-align: center;
  color: ${textColor};
  font-size: 17px;
  align-items: center;
  width:100%;
  position: fixed;
  z-index: 9999;
`;
export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size:${props => props.width > 767 ? '21px' : '15px'};;
`;
export const StyledIcon = styled.img`
  src: ${props => props.src};
  width: ${props => props.size === true || typeof(props.size) === 'string' ? props.type === 'map' ? '40px' : '15px' : "0px"};
  margin: 20px;
  vertical-align:bottom;
 ${_opacity}
 ${_grow}
`;