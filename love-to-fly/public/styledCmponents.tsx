import styled from "styled-components"
import { createGlobalStyle } from "styled-components"

export const GlobalPage = createGlobalStyle`
margin:0px;
padding:0px;
box-sizing: border-box;
`
export const Container = styled.div `
margin: auto;
max-width: 1400px;
`
export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
background-color: rgb(239,239,239);
`
export const Button = styled.button<{bg:string,color:string}>`
    background-color:${({bg})=>bg};
    color: ${({color})=>color};
    height: 39px;
    padding: 0px 14px;
    border-radius: 5px;
    margin: 0px 18px;
    border: 1px solid rgb(11,150,251);
`
export const Img = styled.img`
height:100%;
width: 100%;
object-fit: cover;
`
export const BigHeading = styled.h1`
    color: rgb(11,150,251);
`