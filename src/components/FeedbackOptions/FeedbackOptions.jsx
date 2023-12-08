import { FeedbackBtn } from '../FeedbackBtn/FeedbackBtn';
import { ButtonsWrapper } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

export function FeedbackOptions({options, onClick}) {
  return (
    <ButtonsWrapper>
      {options.map(buttonType => <FeedbackBtn onClick={onClick} key={buttonType} feedbackType={buttonType} />)}
    </ButtonsWrapper>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
