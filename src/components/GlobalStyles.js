import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle `

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 html, body, #root {
     height:100%;
     width:100%;

 }

 body {
     font-family: 'Space Grotesk', sans-serif;
     overflow-x: hidden;
 }

`;

 export default GlobalStyles;


