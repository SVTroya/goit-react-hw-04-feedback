import styled from 'styled-components';

export const StatisticsWrapper = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;

  span {
  font-size: 30px;
  line-height: 35px;
    font-weight: 500;
}
`;

export const LabelsBlock = styled.div`
  width: calc((100% - 20px) / 2);
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ValuesBlock = styled.div`
  width: calc((100% - 20px) / 2);
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`;
