
import { useStore, useDispatch, useSelector } from 'react-redux' 

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const svgSendMessage = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="20" height="20" fill="currentColor"><path fillRule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"></path></svg>


const MessagesPanel = () => {
  const messages = useSelector(state => state.messages.items)
  const currentChannelId = useSelector(state => state.currentChannelId)
  const channels = useSelector(state => state.channels.items)

  const currentChannelInfo = channels.find(({id}) => id === currentChannelId)
  // console.log('currentChannelInfo', currentChannelInfo)
  // console.log('currentChannelId', currentChannelId)

  return(
    <Card
      style={{ width: '80%' }}
    >
      <Card.Header><strong># {currentChannelInfo.name}</strong> <br></br>{messages.length} сообщений</Card.Header>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Container className='Chat-container_btn-container'>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
            <Button variant="light">{svgSendMessage}</Button>
          </InputGroup>
        </Container>
    </Card>
  )
}

export default MessagesPanel;