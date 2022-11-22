import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    text-align: center;
    transition: all ease .3s;

    &:hover {
        background-color: #3d3f4F;
    }

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    label {
        font-size: 13px;
    }

    button {
        display: inline-block;
        background: linear-gradient(90deg, rgba(39,40,47,1) 18%, rgba(61,63,67,1) 100%);
        border: 0;
        color: #FFF;
        font-weight: bold;
        padding: 8px 16px;
        width: 70%;
        border-radius: 5px;
        margin: 10px 20px;
        cursor: pointer;
        transition: all ease .3s;

        &:hover {
            border-radius: 15px;
        }
    }
`