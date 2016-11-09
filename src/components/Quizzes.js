import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

export default class Quizzes extends Component {
  constructor(){
    super();
    this.state = {
    };
  }

  componentDidMount(){
    this.fetchQuizzes();
  }

fetchQuizzes() {
  axios.get('/quizzes')
  .then((response) => {
    this.setState({ quizzes: response.data.quizzes });
  })
  .catch(function (error) {
    console.log(error);
  });
}

render() {
  return(
    this.state.quizzes ?
    <div>
    <h1>{this.state.quizzes[0].title}</h1>
        {this.state.quizzes[0].questions.map(question =>
          <Question title={question.title}
                    key={question.id}
                    id={question.id}
                    answers={question.answers} />
      )}
    </div>
    :
    <h1>Loading Questions</h1>
  )
}
}
