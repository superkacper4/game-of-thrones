import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  color: white;
  margin: 0;
  padding: 10px 0 0 0;
  text-decoration: none;
  text-align: center;
  animation: OpacityAppear 1.3s ease both;
`;

export default StyledLink;
