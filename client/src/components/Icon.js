import React from 'react';
import styled from 'styled-components';

const Icon = props => {
    const { type } = props;
    
    return (
        <StyledIcon className={`fas fa-${type} fa-3x`}></StyledIcon>
    );
};

export default Icon;

const StyledIcon = styled.i`
    color: ${({ theme }) => theme.background};
    margin: 1rem;
`;
