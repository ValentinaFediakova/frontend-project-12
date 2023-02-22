import cn from 'classnames';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import './ChannelButton.css';


function ChannelButton(props){
  const isActive = props.active
  const classesButton = cn('Chat__button_withoutRadius', {
    'Chat__button_active': isActive,
  })
  return (
    <>
      {props.removable && (
        <DropdownButton
          variant="light"
          as={ButtonGroup}
          title={props.text}
          id="bg-vertical-dropdown-1"
          className={classesButton}
        >
          <Dropdown.Item eventKey="1">удалить</Dropdown.Item>
          <Dropdown.Item eventKey="2">переименовать</Dropdown.Item>
        </DropdownButton>
      )}

      {!props.removable && (
        <Button variant="light" className={classesButton}># {props.text}</Button>
      )}
    </>
  )
}

export default ChannelButton;

