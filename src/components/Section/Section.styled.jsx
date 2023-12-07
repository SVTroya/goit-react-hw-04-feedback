import styled from 'styled-components';

export const SectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Header = styled.h2`
  width: 700px;
  font-size: ${({$fontSize}) => $fontSize};
  text-align: center;
  color: #0E1818;
  font-weight: 500;
`;
