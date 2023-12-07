import { LabelsBlock, StatisticsWrapper, ValuesBlock } from './Statistics.styled';
import PropTypes from 'prop-types';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
  return (
    <StatisticsWrapper>
      <LabelsBlock>
        <span>Good:</span>
        <span>Neutral:</span>
        <span>Bad:</span>
        <span>Total:</span>
        <span>Positive feedbacks: </span>
      </LabelsBlock>

      <ValuesBlock>
        <span>{good}</span>
        <span>{neutral}</span>
        <span>{bad}</span>
        <span>{total()}</span>
        <span>{positivePercentage()}%</span>
      </ValuesBlock>
    </StatisticsWrapper>
  )
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.func,
  positivePercentage: PropTypes.func,
}
