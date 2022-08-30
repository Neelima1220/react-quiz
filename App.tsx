import * as React from 'react';
import './style.css';

const questions = [
  {
    id: 1,
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
];

export default function App() {
  const [questionNum, setQuestionNum] = React.useState(0);
  const [question, setQuestion] = React.useState(questions[questionNum]);
  const [correctAns, setCorrectAns] = React.useState(0);
  const [showCard, setShowCard] = React.useState(false);

  const handleButtonClick = (val) => {
    if (val === true) {
      let cnA;
      cnA = correctAns + 1;
      setCorrectAns(cnA);
    }
    let na = questionNum + 1;
    if (na < questions.length) {
      setQuestionNum(na);
      setQuestion(questions[na]);
    } else {
      setShowCard(true);
    }
  };

  return (
    <div style={{ display: 'flex', width: '100%' }}>
      {showCard ? (
        <h3>Correct Answers : {correctAns}</h3>
      ) : (
        <div>
          <div
            style={{
              width: '20%',
            }}
          >
            <h1>
              question {questionNum + 1}/{questions.length}
            </h1>
            <h3>{question.questionText} </h3>
          </div>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '5rem',
              justifyContent: 'left',
              marginRight: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'left',
                marginRight: '0.5rem',
                flexWrap: 'wrap',
              }}
            >
              {question?.answerOptions.map((answer, index) => {
                return (
                  <button
                    style={{
                      marginRight: '0.5rem',
                    }}
                    onClick={() => handleButtonClick(answer.isCorrect)}
                  >
                    {answer.answerText}
                  </button>
                );
              })}
            </div>
          </div>{' '}
        </div>
      )}
    </div>
  );
}
