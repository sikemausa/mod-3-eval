import React from 'react';

const Answer = (props) => {
const { name, text, score } = props;

  return (
      <li>
        <input type="radio" name={name} value={score} />
          {text}
      </li>
  );
};

export default Answer;
