import React, { useState, useEffect } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux' 

import { getDataForChannels } from '../../asyncActions/getChannels'
import ChannelPanel from './components/ChannelPanel'
import MessagesPanel from './components/MessagesPanel'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import './Chat.css';


function Chat(){
  const dispatch = useDispatch()
  
  const state = useSelector(state => state)
  console.log('state', state)

  useEffect(() => {
    dispatch(getDataForChannels())
  }, []);
 
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
        <ChannelPanel/>
        <MessagesPanel/>
      </Container>
      
    </> 
  )
}

export default Chat;