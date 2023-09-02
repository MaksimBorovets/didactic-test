import { styled } from "styled-components";
import { mobileBreakpoint, tabletBreakpoint } from "../../../constants";

export const ButtonContainer = styled.button`
  padding: 8px 16px; /* Smaller padding for the button */
  background-color: ${(props) => (props.disabled ? 'gray' : '#3498db')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-left: 10px;

  @media (max-width: ${tabletBreakpoint}) {
    padding: 6px 12px; 
    font-size: 14px;
  }

  @media (max-width: 600px) {
    padding: 3px 6px; 
    font-size: 12px;
    margin-top: 10px;
  }
  
  @media (max-width: ${mobileBreakpoint}) {
    padding: 6px 12px; 
    font-size: 14px;
  }
`;
