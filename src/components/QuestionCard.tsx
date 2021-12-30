import React from 'react';

// Types
import { AnswerObject } from '../App';

import { QuestionWrapper, ButtonWrapper } from './QuestionCard.styles';

type Prop = {
  question: string;
  asnwers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Prop> = ({
  question,
  asnwers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,
}) => (
  <QuestionWrapper>
    <p className="number">
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {asnwers.map((answer) => (
        <ButtonWrapper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button disabled={!!userAnswer} value={answer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </div>
  </QuestionWrapper>
);

export default QuestionCard;
