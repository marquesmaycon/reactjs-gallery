import styled from 'styled-components';

export const Container = styled.div`
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    text-align: center;
    transition: all ease .3s;

    &:hover {
        background-color: #4e4f54;
        transform: scale(1.01);
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
`