import React, { useState, useEffect, useRef } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux' 

import { addUser } from '../../redux/actions/user.action'

import { getDataForChannels } from '../../redux/asyncActions/getChannels'
import { wsConnect } from '../../redux/actions/websocket.action'
import ChannelPanel from './components/ChannelPanel'
import MessagesPanel from './components/MessagesPanel'
import ModalAddChannel from './components/ModalAddChannel'
import ModalDeleteChannel from './components/ModalDeleteChannel'
import ModalRenameChannel from './components/ModalRenameChannel'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Chat.css';

function Chat(){
  const dispatch = useDispatch()
  const username = localStorage.getItem('username');
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showRenameModal, setShowRenameModal] = useState(false);
  const [deletedChannel, setDeletedChannel] = useState(null);
  const [channelWillRenameName, setChannelWillRenameName] = useState('');
  const [channelWillRenameId, setChannelWillRenameId] = useState(null);

  const wsLoading = useSelector(state => state.loading.wsLoading)
  const channels = useSelector(state => state.channels.items)
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus()
  }

  const handleCloseAddChannelModal = () => {
    setShowModal(false)
  };

  const handleShowAddChannelModal = () => {
    setShowModal(true)
    handleFocus()
  };

  const handleCloseDeletedModal = () => {
    setShowDeleteModal(false);
  }

  const handleShowDeletedModal = (chanelId) => {
    setDeletedChannel(chanelId)
    setShowDeleteModal(true)
    handleFocus()
  };

  const handleShowRenameModal = (willRenameId) => {
    const nameById = channels.find(({id}) => id === willRenameId).name
    setChannelWillRenameName(nameById)
    setChannelWillRenameId(willRenameId)
    setShowRenameModal(true)
    handleFocus()
  }

  const handleCloseRenameModal = () => {
    setShowRenameModal(false)
  }

  useEffect(() => {
    dispatch(getDataForChannels())
    dispatch(wsConnect())
    dispatch(addUser(username))
  }, []);

  useEffect(() => {
    console.log('wsLoading', wsLoading)
    if (wsLoading === false) {
      handleFocus()
    }
  }, [wsLoading]);
 
  return (
    <>
      <div className="shadow-sm p-3 mb-5 bg-white rounded">
        <Container>
          <Navbar expand="lg" variant="light" bg="white">
            <Container>
              <Navbar.Brand >Hexlet Chat</Navbar.Brand>
              <Button variant="primary">Выйти</Button>
            </Container>
          </Navbar>
        </Container>
      </div>

      <Container className='Chat-container'>
        <ChannelPanel 
          onFocus={handleFocus} 
          onShowAddChannelModal={handleShowAddChannelModal} 
          onShowDeletedModal={handleShowDeletedModal}
          onShowRenameModal={handleShowRenameModal}
        />
        <MessagesPanel onFocus={handleFocus} onRef={inputRef} />
        <ModalAddChannel 
          show={showModal} 
          onClose={handleCloseAddChannelModal}
        />

        <ModalDeleteChannel 
          deletedChannelId={deletedChannel} 
          show={showDeleteModal} 
          onClose={handleCloseDeletedModal}
          onFocus={handleFocus}
        />
        <ModalRenameChannel 
          show={showRenameModal}
          nameChannel={channelWillRenameName}
          idChannel={channelWillRenameId}
          onChangeNameChannel={setChannelWillRenameName}
          onClose={handleCloseRenameModal}
        />
      </Container>
      
    </> 
  )
}


export default Chat;