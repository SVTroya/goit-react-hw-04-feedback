import styled from 'styled-components';
import { BsFire } from 'react-icons/bs';
import { LiaPooSolid } from 'react-icons/lia';
import { FaRegSmile } from 'react-icons/fa';

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 60px;
  border-radius: 60px;
  background-color: ${({ $color }) => $color};
  box-shadow: 0 2px 5px 2px #b3bac2;
  transform: scale(1);

  transition: transform .2s ease-in-out,
  box-shadow .2s ease-in-out;

  &:hover, &:focus {
    transform: scale(1.03);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 1px 3px 1px #b3bac2;
  }
`;

export const IconGood = styled(BsFire)`
  pointer-events: none;
  color: #171717;
  height: 30px;
  width: 30px;
`

export const IconNeutral = styled(FaRegSmile)`
  pointer-events: none;
  color: #171717;
  height: 30px;
  width: 30px;
`

export const IconBad = styled(LiaPooSolid)`
  pointer-events: none;
  color: #171717;
  height: 40px;
  width: 40px;
`
