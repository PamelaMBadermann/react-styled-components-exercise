import styled from 'styled-components';

export const RootCard = styled.div`
    display: inline-block;
    width: 50%;
    max-height: 500px;
    min-height: 500px;
    margin: 0;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Arial';
    margin: 0;
    max-height: 500px;
    min-height: 500px;
    padding-right: 50px;
    padding-left: 50px;
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 10px;
`;