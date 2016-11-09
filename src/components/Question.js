import React from 'react';
import Answer from './Answer';

const Question = (props) => {
const { title, id, answers } = props;

  return (
    <section>
      <h3 id="question-title" key={id}>{title}</h3>
      <ul>
        { answers.map((answer, index) =>
          <Answer
              key={index}
              name={id}
              text={answer.title}
          />
        )}
      </ul>
    </section>
  );
};

export default Question;
