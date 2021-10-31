import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle `

:root {
    --header-bg: #743e81;
    --header-ft: #f5f8fa;
    --menu-grey: #9b9b9b;
}

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

 h1 {
     font-size: 2.2rem;
     color: var(--header-bg);
     text-align:center;
 }

 h4 {
     font-size:1.1rem;
     color: #8d6492;
 }

 ul {
     list-style-type:none;
 }

.nav-wrapper {
    width: 236px;
    background: #f8f8f8;
    height: 100vh;
    padding: 50px 20px;
    position:fixed;
    display:flex;
    flex-direction:column;
}

.active {
    left:0;
    top: 0;
    transition: 350ms;
}

.hidden {
left: -100%;
top:0;
transition: 800ms;
}

`;

 export default GlobalStyles;


