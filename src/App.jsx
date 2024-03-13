import { useState } from "react";
import Container from "./components/Container/Container.jsx";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import { RESET, FEEDBACK_KEY } from "./consts.js";
import {
  addToLS,
  getFromLS,
  getPositiveFeedback,
  getTotalFeedback,
} from "./helpers";

const defaultValue = {
  good: 0,
  neutral: 0,
  bad: 0,
};

function App() {
  const [feedback, setFeedback] = useState(
    getFromLS(FEEDBACK_KEY) || defaultValue
  );

  const handleFeedback = (type) => {
    const updatedFeedback =
      type === RESET
        ? { ...defaultValue }
        : { ...feedback, [type]: feedback[type] + 1 };

    setFeedback(updatedFeedback);
    addToLS(FEEDBACK_KEY, updatedFeedback);
  };

  const totalFeedback = getTotalFeedback(feedback);
  const positiveFeedback = getPositiveFeedback(feedback, totalFeedback);

  console.log(totalFeedback);
  return (
    <Container>
      <Description />
      <Options handleFeedback={handleFeedback} />
      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </Container>
  );
}

export default App;
