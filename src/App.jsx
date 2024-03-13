import { useState } from "react";

import Container from "./components/Container/Container.jsx";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";

const defaultValue = {
  good: 0,
  neutral: 0,
  bad: 0,
};
function App() {
  const [feedback, setFeedback] = useState({ ...defaultValue });

  const handleFeedback = (type) => {
    if (type === "reset") {
      setFeedback({ ...defaultValue });
      return;
    }
    setFeedback({ ...feedback, [type]: feedback[type] + 1 });
  };

  const totalFeedback = Object.values(feedback).reduce((acc, i) => acc + i, 0);
  const positiveFeedback =
    feedback.good + feedback.neutral &&
    Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100);

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
