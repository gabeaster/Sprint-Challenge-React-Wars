import React from 'react';
import './StarCard.css';
import styled from 'styled-components';


const Container = styled.div`
    border: 2px solid black;
    width: 30%;
    margin: 22px 30px;
    border-radius: 5px;
`;

const Character = styled.h2`
    color: black
`;

const StarCard = props => {
    return (
        <Container className='starCard'>
            <Character>{props.name}</Character>
            <p>Birth Year: {props.birthYear}</p>
        </Container>
    )
}


export default StarCard;