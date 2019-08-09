import styled from 'styled-components';

const H2 = styled.h2`
  margin: 0;
  display: block;
  font-size: 10vw;
  color: white;
  animation: H2appear 1.3s ease both;
  transform-origin: 0%;
  text-align: left;
  width: 100%;
  padding-bottom: 10px;

  @keyframes H2appear {
    0% {
      opacity: 0;
      transform: rotate(-15deg);
    }

    100% {
      opacity: 1;
      transform: rotate(0);
    }
  }
`;

export default H2;
