import React, { useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import services1 from '../assets/services-1.jpg';
import portrait2 from '../assets/portrait-2.jpg';
import portrait3 from '../assets/portrait-3.jpg';
import portrait4 from '../assets/portrait-4.jpg';
import portrait5 from '../assets/portrait-5.jpg';




const Quiz = () => {
  const [questions] = useState([
    {
      question: "What is the main ingredient in a classic Margherita pizza?",
      options: ["Pepperoni", "Tomato Sauce", "Mushrooms", "Pineapple"],
      correctOption: "Tomato Sauce"
    },
    {
      question: "Which of the following is NOT a type of pasta?",
      options: ["Spaghetti", "Fusilli", "Sushi", "Penne"],
      correctOption: "Sushi"
    },
    {
      question: "What is the main ingredient in a traditional French omelette?",
      options: ["Cheese", "Mushrooms", "Eggs", "Spinach"],
      correctOption: "Eggs"
    },
    {
      question: "Which country is famous for its sushi?",
      options: ["China", "Japan", "Italy", "Thailand"],
      correctOption: "Japan"
    },
    {
      question: "What is the primary ingredient in guacamole?",
      options: ["Tomatoes", "Lettuce", "Avocado", "Onion"],
      correctOption: "Avocado"
    },
    {
      question: "What type of meat is used in a traditional Greek gyro?",
      options: ["Beef", "Lamb", "Chicken", "Pork"],
      correctOption: "Lamb"
    },
    {
      question: "What is the key ingredient in a classic Caesar salad dressing?",
      options: ["Lemon", "Mayonnaise", "Worcestershire Sauce", "Anchovies"],
      correctOption: "Anchovies"
    },
    {
      question: "Which spice gives Indian curry its yellow color?",
      options: ["Cumin", "Paprika", "Turmeric", "Coriander"],
      correctOption: "Turmeric"
    },
    {
      question: "What type of fish is typically used in fish and chips?",
      options: ["Cod", "Salmon", "Tuna", "Trout"],
      correctOption: "Cod"
    },
    {
      question: "What is the key ingredient in a traditional Greek salad?",
      options: ["Lettuce", "Feta Cheese", "Avocado", "Bacon"],
      correctOption: "Feta Cheese"
    }
  ]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextOrSubmit = () => {
    // Check if the selected option is correct
    if (selectedOption === questions[currentQuestion].correctOption) {
      setScore(score + 1);
    }

    // Move to the next question or finish the quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption('');
    } else {
      setQuizCompleted(true);
    }
  };
  return (
    <>
    <section className='about bg-dark-overlay'>
      <Col lg={12}>
      <h1 className='text-light hdabout text-center'>Food Quiz</h1>
      </Col>
    </section>
    <section className='description'>
      <Container>
        <Row className='my-5'>
          <Col lg={12}>
          <div>
      {quizCompleted ? (
        <div>
          <h1>Quiz Completed!</h1>
          <p>Your Score: {score}/{questions.length}</p>
          <button className='btn btn-success' onClick={() => window.location.reload()}>Restart Quiz</button>
        </div>
      ) : (
        <div>
          <h1 className='text-center'>Food Recipe Quiz</h1>
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion]?.question}</p>
          <div>
            {questions[currentQuestion]?.options.map((option, index) => (
              <div key={index} className="form-check mb-3">
                <input
                className="form-check-input"
                  type="radio"
                  id={option}
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          {currentQuestion === questions.length - 1 ? (
            <button className='btn btn-success' onClick={handleNextOrSubmit}>Submit</button>
            ) : (
          <button className='btn btn-success' onClick={handleNextOrSubmit}>Next</button>
          )}
        </div>
      )}
    </div>
  

          </Col>
            
         
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Quiz
