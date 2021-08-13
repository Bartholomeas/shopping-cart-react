import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

html {
    box-sizing: border-box;
    font-size: 62.5%;
    margin: 0;

}

*, *::after, *::before {
    box-sizing: inherit;
    font-family: 'Poppins', sans-serif;
}

body {
    margin: 0;
    padding: 0;
    font-size: 1.6rem;

}

a, button {
    font-family: 'Poppins', sans-serif;
}
`;
