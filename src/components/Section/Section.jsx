import { Header, SectionStyled } from './Section.styled';
import PropTypes from 'prop-types';

export function Section({ title, fontSize, children }) {
  return (
    <SectionStyled>
      <Header $fontSize={fontSize}>{title}</Header>
      {children}
    </SectionStyled>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  fontSize: PropTypes.string,
};
