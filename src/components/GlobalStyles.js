import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

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
     min-height:100vh;
     width:100%;
     background-image: linear-gradient(rgb(37 39 38) 0%, rgb(26 10 106 / 41%) 100%);;

 }

 body {
     font-family: 'Space Grotesk', sans-serif;
     overflow-x: hidden;
  
 }

 h1 {
     font-size: 2.2rem;
     color: white;
     text-align:center;
     margin:0;
     @media (max-width:1024px) {
        font-size: 1.8rem;
    }
    @media (max-width:767px){ 
        font-size: 1.8rem;
        margin-top: 100px;
    }
 }

 h4 {
     font-size:1.1rem;
     color: white;
     padding-top: 25px;
 }

 ul {
     list-style-type:none;
 }

 a, button, .card {
    -webkit-tap-highlight-color: transparent;
 }

.nav-wrapper {
    width: 236px;
    background: transparent;
    height: fit-content;
    padding:0px 20px;
    margin-top:50px;
    position:absolute;
    display:flex;
    flex-direction:column;
    @media(max-width:767px) {
    width: 150px;
    padding: 25px 0px 0px 20px
}
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

table.bp3-html-table td {
    vertical-align: middle;
    
}

.btn {
    width: 100%;
    margin-bottom: 5px;
  }

  table.bp3-html-table.bp3-interactive tbody tr {
      &:hover td {
        background-color: #ffffff0d;
      }
    }
 
  .bp3-button.bp3-outlined {
      &:hover {
        background: #00000026;
        color: white;
        box-shadow: 0 0 0 1px #5638ec, 0 0 0 3px #5638ec5e, inset 0 1px 1px rgb(255 255 255 / 2%);
        outline: none;
      }

}


    
.bp3-card.bp3-interactive {
    &:hover {
      box-shadow:rgb(107 80 239) 0px 0px 0px 1px, rgb(116 88 255) 0px 2px 4px, rgb(103 86 189) 0px 8px 24px;
    }
  }

  table.bp3-html-table.bp3-html-table-bordered tbody tr td:not(:first-child), table.bp3-html-table.bp3-html-table-bordered tbody tr td, table.bp3-html-table.bp3-html-table-bordered {
      box-shadow: inset 1px 1px 0 0 #393358;
  }
  table.bp3-html-table.bp3-html-table-bordered th:not(:first-child) {
      box-shadow: inset 1px 0 0 0 #393358;
  }
`;

export default GlobalStyles;
