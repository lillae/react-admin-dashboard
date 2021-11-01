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
     margin:0;
     @media (max-width:1024px) {
        font-size: 1.8rem;
    }
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
    padding:25px 20px;
    position:fixed;
    display:flex;
    flex-direction:column;
}

.active {
    left:0;
    top: 0px;
    transition: all 800ms ease-in-out;
}

.hidden {
left: -100%;
top:0px;
transition: all 900ms ease-out;
}

`;

 export default GlobalStyles;


