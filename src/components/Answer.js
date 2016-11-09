import React from 'react';

const Answer = (props) => {
const { id, name, text } = props;

  return (
      <li>
        <input type="radio" name={name} />
          {text}
      </li>
  );
};

export default Answer;
