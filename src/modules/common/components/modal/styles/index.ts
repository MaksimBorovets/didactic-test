import styled, { keyframes } from 'styled-components';

import { mobileBreakpoint } from '../../../constants';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Modal = styled.div`
  font-size: 12px;
  background-color: #7ed6df;
  position: relative;
  border-radius: 8px;
  animation: ${fadeIn} 0.3s ease-in-out;

  @media (max-width: ${mobileBreakpoint}) {
    width: 70%;
  }
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const Header = styled.div`
  width: 100%;
  border-bottom: 0.5px solid gray;
  font-size: 20px;
  text-align: start;
  padding: 5px;
  font-weight: 500;
  margin: 10px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 15px;
  }
`;

export const Content = styled.div<{ isBold?: boolean }>`
  width: 100%;
  padding: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: ${({ isBold }) => (isBold ? '600' : 'normal')};

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 13px;
  }
`;

export const Actions = styled.div`
  width: 100%;
  padding: 10px 5px;
  margin: auto;
  text-align: center;
`;

export const ConfirmButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 13px;
  }
`;

export const CancelButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #95afc0;
  color: black;
  border: none;
  border-radius: 5px;
  font-size: 18px;

  @media (max-width: ${mobileBreakpoint}) {
    font-size: 13px;
  }
`;
