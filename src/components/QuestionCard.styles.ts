import styled from 'styled-components';

export const QuestionWrapper = styled.div`
  max-width: 1100px;
  text-align: center;
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: background 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1em;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    font-family: inherit;
    border: none;
    background: ${({ correct, userClicked }) =>
      correct
        ? `linear-gradient(90deg, #56ffa4, #59bc86)`
        : !correct && userClicked
        ? `linear-gradient(90deg, #ff5656, #c16868)`
        : `linear-gradient(90deg, #56ccff, #6eafb4)`};
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #fff;
  }
`;
