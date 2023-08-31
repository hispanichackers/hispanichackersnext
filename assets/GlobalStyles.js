import { createGlobalStyle } from 'styled-components';

// https://jsramblings.com/how-to-use-media-queries-with-styled-components/
// @media (min-width: 320px) {}
// @media (min-width: 375px) {}
// @media (min-width: 425px) {}
// @media (min-width: 768px) {}
// @media (min-width: 1024px) {}
// @media (min-width: 1440px) {}
// @media (min-width: 2560px) {}

export const colors = {
  gallery: '#EEEEEE',
  alto: '#DDDDDD',
  silver: '#CCCCCC',
  mineShaft: '#252525',
  gray: '#3A3A3A',
  shark: '#1C1F21',
  mediumTurquoise: '#41cecf',
};

export const darkTheme = {
  fontColor: colors.gallery,
  backgroundColor: colors.mineShaft,
  backgroundContrast: colors.shark,
  linkUnderline: colors.mediumTurquoise,
};

export const lightTheme = {
  fontColor: colors.mineShaft,
  backgroundColor: colors.gallery,
  backgroundContrast: colors.silver,
  linkUnderline: colors.mediumTurquoise,
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.fontColor};
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    line-height: 1.6;
  }
  h5 {
    @media (min-width: 320px) {
      font-size: 2rem;
    }
  }
  h6 {
    @media (min-width: 320px) {
      font-size: 1.8rem;
    }
  }
  button {
    background: transparent;
    border-radius: 8px;
    margin: 1rem auto;
    padding: 1rem 2rem;
    font-size: 2rem;
    color: ${({ theme }) => theme.linkUnderline};
    border: 2px solid ${({ theme }) => theme.linkUnderline};
    &:hover {
      cursor: pointer;
      color: white;
      background-color: ${({ theme }) => theme.linkUnderline};
      border: 2px solid ${({ theme }) => theme.fontColor};
      a {
        color: white;
      }
    }
  }
`;
