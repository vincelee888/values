import styled from "styled-components";

const SectionStyles = styled.section`
  padding: 1em 1em 20vh 1em;
`;

const ButtonStyles = styled.button`
  padding: 0.5em 1em;
  font-size: 1.2em;
  background: rgb(39, 34, 126);
  background: linear-gradient(
    0deg,
    rgba(39, 34, 126, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  box-shadow: 2px 2px 2px green;
  text-shadow: 2px 2px 2px rgba(39, 34, 126, 0.5);
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const MainInputStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  background: greenyellow;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ButtonContainerStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const ValueStyles = styled.div`
  margin: 1em;
  padding: 1em;
  background: white;
  box-shadow: 2px 2px 2px green;
  display: block;
  border-radius: 10px;

  h1 {
    margin-top: 0.5em;
  }
`;

export {
  MainInputStyles,
  ButtonStyles,
  ButtonContainerStyles,
  ValueStyles,
  SectionStyles,
};
