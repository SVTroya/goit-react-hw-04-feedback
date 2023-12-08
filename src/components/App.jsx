import { FormWrapper } from './App.styled';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { GOOD, NEUTRAL, BAD } from '../assets/FeedbackType';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export function App() {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleFeedbackClick({ target }) {
    target.blur();

    switch (target.name) {
      case GOOD:
        setGood(good + 1)
        return
      case NEUTRAL:
        setNeutral(neutral + 1)
        return
      case BAD:
        setBad(bad + 1)
        return
      default: return;
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((good / countTotalFeedback() * 100) || 0);
  }

  return (
    <FormWrapper>
      <Section title={'Did you like our cafe? Please leave feedback.'} fontSize='50px'>
        <FeedbackOptions options={[GOOD, NEUTRAL, BAD]} onClick={handleFeedbackClick} />
      </Section>
      {
        countTotalFeedback()
          ? (
            <Section title={'Statistics'} fontSize='40px'>
              <Statistics good={good}
                          neutral={neutral}
                          bad={bad}
                          total={countTotalFeedback}
                          positivePercentage={countPositiveFeedbackPercentage} />
            </Section>
          )
          : <Notification message='We really wait for your feedback!' />
      }
    </FormWrapper>
  );
}
