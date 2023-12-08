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

  const mapState = {
    good: setGood,
    neutral: setNeutral,
    bad: setBad,
  };

  function handleFeedbackClick({ target }) {
    target.blur();
    mapState[target.name](prev => prev + 1);
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
