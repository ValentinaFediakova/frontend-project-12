import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function ChannelButton(props){

  return (
    <>
      {props.removable && (
        <DropdownButton
          variant="light"
          as={ButtonGroup}
          title={props.text}
          id="bg-vertical-dropdown-1"
          className="Chat__button_withoutRadius"
        >
          <Dropdown.Item eventKey="1">удалить</Dropdown.Item>
          <Dropdown.Item eventKey="2">переименовать</Dropdown.Item>
        </DropdownButton>
      )}

      {!props.removable && (
        <Button variant="light" className="Chat__button_withoutRadius"># {props.text}</Button>
      )}
    </>
  )
}

export default ChannelButton;

