import { GoHeartFill } from 'react-icons/go';
import PropTypes from 'prop-types';
import { Message } from './Notification.styled';

export function Notification({message}){
  return (
  <div>
    <Message>{message + ' '}</Message>
    <GoHeartFill color={'#d00d0d'} size={35}/>
  </div>
)}

Notification.propTypes = {
  message: PropTypes.string,
}
