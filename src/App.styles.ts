import styled from 'styled-components';

export const Container = styled.div`
    background-color: #27282F;
    color: #FFF;
    min-height: 100vh;
    padding: 1px 15px;
`

export const Header = styled.header`
    margin: auto;
    max-width: 980px;
    text-align: center;
    
    span {
        font-style: italic;
    }
`

export const H1 = styled.h1`
    text-align: center;
`

export const LoadWarning = styled.div`
    text-align: center;

    span {
        font-size: 50px;
        font-style: normal;
    }
`

export const PhotoList = styled.div`
    display: grid;
    gap: 10px;
    justify-content: space-evenly;
    grid-template-columns: repeat(auto-fit, minmax(200px, 24%));

`

export const UploadForm = styled.form`
    background-color: #3D3F43;
    padding: 15px;
    border-radius: 10px;
    margin-block: 30px;

    input[type=submit] {
        background-color: #756df4;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;
        transition: all ease .3s;

        &:hover {
            border-radius: 15px;
            background-color: #758FFF;
        }
    }
`