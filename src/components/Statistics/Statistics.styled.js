import styled from 'styled-components';

export const StatsList = styled.ul`
  font-size: 18px;
  font-weight: 500;
  color: #ff6347;

  & li:first-child {
    color: #50c878;
  }
  & li:nth-child(2) {
    color: #ff8c00;
  }
  & li:nth-child(4) {
    color: purple;
  }
  & li:last-child {
    color: green;
  }
`;
