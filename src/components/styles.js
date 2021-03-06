import styled from "styled-components";

const AppStyles = styled.div`
  @media (min-width: 1024px) {
    width: 50vw;
    margin: 0 auto;
  }
`;

const SectionStyles = styled.section`
  padding: 1em 1em 24vh 1em;
`;

const ButtonStyles = styled.button`
  padding: 0.5em 1em;
  background: rgb(39, 34, 126);
  background: linear-gradient(
    0deg,
    rgba(39, 34, 126, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  text-shadow: rgba(56, 56, 126, 0.5);
  box-shadow: inset 0px 0px 4px 1px rgba(39, 34, 126, 0.7),
    2px 2px 2px rgba(99, 173, 59, 1);
  border-radius: 10px;
  border: none;
  cursor: pointer;
  margin: 0.2em;
`;

const MainInputStyles = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 20vh;
  background: rgb(99, 173, 59);
  background: linear-gradient(
    0deg,
    rgba(99, 173, 59, 1) 0%,
    rgba(158, 251, 96, 1) 100%
  );
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
  box-shadow: 2px 2px 2px rgba(99, 173, 59, 0.5);
  display: block;
  border-radius: 10px;
  text-align: center;

  h1 {
    margin-top: 0.5em;
  }
`;

const ColumnContainerStyles = styled.div`
  display: flex;
`;
const ColumnStyles = styled.div`
  flex: 50%;
  font-size: 0.5em;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1em;
  }
`;

export {
  AppStyles,
  MainInputStyles,
  ButtonStyles,
  ButtonContainerStyles,
  ValueStyles,
  SectionStyles,
  ColumnContainerStyles,
  ColumnStyles,
};
