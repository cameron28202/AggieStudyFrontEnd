import CountdownTimer from '../Utils/Timer';
import '../../pages/Exam.css';
import formatTime from '../Utils/Timer';

const QuestionTimer = ({ timeLeft }) => {
    return (
      <div className="exam-container">
        <h1>Countdown Timer</h1>
        <p>Time Left: {formatQuestionTimer(timeLeft)}</p>
      </div>
    );
  };

const formatQuestionTimer = (ms) => {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / (1000 * 60)) % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

export default QuestionTimer;
  