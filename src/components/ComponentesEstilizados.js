import React from 'react';
import styled,{css,keyframes,ThemeProvider,
    createGlobalStyle} from  'styled-components'
//keyframes :animacion
//createGlobalStyle: estilos para toda la aplicacion
export default function ComponentesEstiblizados({titulo}){
    let mainColor = "#db7093";
    let mainAlphaColor89 = "#db709380";
    const setTransitionTime =(time) => `all ${time} ease-in-out`;
    const fadeIn = keyframes`0%{opacity:0}100%{opacity:1}`
    

    const Myh3 = styled.h3`
        padding:2rem;
        text-align:center;
        background-color: ${mainColor};
        color: ${(props) =>{return props.color || "#000"}};
        color: ${({color})=> color || "#000"}
        transition: ${setTransitionTime("1s")};
        animation: ${fadeIn} 10s ease-out;

        /*${({isButton}) => isButton && css`
            margin:auto;
            max-width:50%;
            border-radius:0.25rem;
            cursor:pointer;
        `}*/

        &:hover{
            background-color: ${mainAlphaColor89};}  
        `;
    const light = {
        color: "#222",
        bgColor:"#DDD",
    };
    const dark = {
        color: "#DDD",
        bgColor:"#222",
    };
    

    const Box = styled.div`
        padding:1rem;
        margin:1rem;
        color:${({theme})=> theme.color};
        background-color:${({theme})=> theme.bgColor};
    `;
    // Heredar en Css
    const BoxRounded = styled(Box)`
        border-radius:3rem;
    `
    const GlobalStyle = createGlobalStyle`
        h2{
            padding:2rem;
            background-color:#fff;
            color:#61dafb;
            text-transform:uppercase;
        }
    `
    ;

    return(
        <>
            <GlobalStyle/>
            <h2>{titulo}</h2>
            <Myh3>React Estilizado con Styled-Components</Myh3>
            <Myh3 color="#61dafb">React Estilizado con Styled-Components</Myh3>
            <Myh3 isButton>Soy un h3 estilizado como boton</Myh3>
            <ThemeProvider theme={light}><BoxRounded>Soy una Caja Ligth Redondeada</BoxRounded></ThemeProvider>
            <ThemeProvider theme={dark}><Box>Soy una Caja Dark</Box></ThemeProvider>

            
        </>
    )
}

ComponentesEstiblizados.defaultProps = {
    titulo : "Styled - Components"
}
