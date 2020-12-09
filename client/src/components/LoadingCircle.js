import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
`;

const LoadingCircle = styled.div`
    border: 8px solid #f3f3f3;
    border-top: 8px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${spin} 1s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
`;

export default LoadingCircle;
