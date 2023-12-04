import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 250px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  box-shadow: violet 0 0 5px;
  padding: 15px;

  & h2 {
    color: purple;
  }

  &:first-child {
    margin: 25px auto 15px;
  }
`;
