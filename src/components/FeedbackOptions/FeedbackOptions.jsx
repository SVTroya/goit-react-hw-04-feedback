import { FeedbackBtn } from '../FeedbackBtn/FeedbackBtn';
import { ButtonsWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <ButtonsWrapper onClick={({target}) => onLeaveFeedback(target)}>
      {options.map(buttonType => <FeedbackBtn key={buttonType} feedbackType={buttonType} />)}
    </ButtonsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
