import { useState, useEffect } from "react";
import Container from "./components/Container/Container.jsx";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";
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
    getFromLS(FEEDBACK_KEY) ?? defaultValue
  );

  useEffect(() => {
    addToLS(FEEDBACK_KEY, feedback);
  }, [feedback]);

  const handleFeedback = (type) => {
    const updatedFeedback =
      type === RESET
        ? defaultValue
        : { ...feedback, [type]: feedback[type] + 1 };
    setFeedback(updatedFeedback);
  };

  const totalFeedback = getTotalFeedback(feedback);
  const positiveFeedback = getPositiveFeedback(feedback, totalFeedback);

  return (
    <Container>
      <Description />
      <Options handleFeedback={handleFeedback} total={totalFeedback} />
      {totalFeedback ? (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={totalFeedback}
          positive={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </Container>
  );
}

export default App;
