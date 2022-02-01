import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 4px;
  flex-basis: calc((100% - 30px) / 3);
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: lightblue;
    color: teal;
  }
`;

export { Container, Button };
