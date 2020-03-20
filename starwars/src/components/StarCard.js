import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border: 2px solid black;
    width: 45%;
    margin: 0 auto;
    border-radius: 5px;
`;

const Character = styled.h2`
    color: black
`;

const StarCard = props => {
    return (
        <Container>
            <Character>{props.name}</Character>
            <p>Birth Year: {props.birthYear}</p>
            <p>Homeworld: {props.homeworld}</p>
        </Container>
    )
}


export default StarCard;