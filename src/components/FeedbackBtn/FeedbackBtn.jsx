import { BAD, GOOD, NEUTRAL } from '../../assets/FeedbackType';
import { Button, IconBad, IconGood, IconNeutral } from './FeedbackBtn.styled';

const buttonSet = {
  [GOOD]: {
    icon: <IconGood />,
    color: '#96E061',
  },
  [NEUTRAL]: {
    icon: <IconNeutral />,
    color: '#fffc9d',
  },
  [BAD]: {
    icon: <IconBad />,
    color: '#F19389',
  },
};

export function FeedbackBtn({ feedbackType, onClick }) {
  return (
    <Button
      $color={buttonSet[feedbackType].color}
      type="button"
      aria-label={`${feedbackType} feedback`}
      name={feedbackType}
      onClick={onClick}
    >
      {buttonSet[feedbackType].icon}
    </Button>
  );
}
