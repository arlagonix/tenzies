import { createGlobalStyle } from "styled-components";
import type { LightThemeProps, DarkThemeProps } from "./Themes";

const GlobalStyle = createGlobalStyle<LightThemeProps | DarkThemeProps>`

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: Karla, sans-serif;
    line-height: 125%;
  }

  body {
    background: ${({ theme }) => theme.pageBackground};
    color: ${({ theme }) => theme.text};
    overflow-x: hidden;
    transition: 0.3s;

    // https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
    // Hide scrollbar for Chrome, Safari and Opera
    &::-webkit-scrollbar {
      display: none;
    }

    // Hide scrollbar for IE, Edge and Firefox
    & {
      -ms-overflow-style: none;  // IE and Edge
      scrollbar-width: none;  // Firefox
    }
  }
  
  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    margin: 32px auto;
  }

`;

export default GlobalStyle;
