import { styled } from 'styled-components';

import { mobileBreakpoint } from '../../../constants';

export const YoutubeContainer = styled.iframe`
  width: 460px;
  height: 315px;
  margin: 10px;
  /* align-self: center; */

  @media (max-width: 1175px) {
    width: 410px;
    height: 265px;
  }

  @media (max-width: 1015px) {
    width: 310px;
    height: 185px;
  }

  @media (max-width: 815px) {
    width: 210px;
    height: 105px;
  }

  @media (max-width: 615px) {
    width: 165px;
    height: 75px;
  }

  @media (max-width: ${mobileBreakpoint}) {
    width: 310px;
    height: 205px;
  }

  @media (max-width: 455px) {
    width: 270px;
    height: 155px;
  }

  @media (max-width: 405px) {
    width: 240px;
    height: 155px;
  }

  @media (max-width: 405px) {
    width: 210px;
    height: 155px;
  }

  @media (max-width: 335px) {
    width: 190px;
    height: 155px;
  }
`;
