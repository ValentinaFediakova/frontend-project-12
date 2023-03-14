import React, { useState } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux' 

import { wsRemoveChannel } from '../../../redux/actions/websocket.action'
// import { changeChannel } from '../../../redux/actions/currentChannel'
import { DEFAULT_CHANNEL } from '../../../utils'
import { channelSetActive } from '../../../redux/actions/channels.action'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import './ModalDeleteChannel.css'

const ModalDeleteChannel = ({ show, deletedChannelId, onClose, onFocus }) => {
  const dispatch = useDispatch()
  const currentChannelId = useSelector(state => state.channels.currentChannelId)

  const handleRemoveChannelClick = () => {
    dispatch(wsRemoveChannel(deletedChannelId))
    onClose()
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Удалить канал</Modal.Title>
      </Modal.Header>
      <Modal.Body>Уверены?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отменить
        </Button>
        <Button variant="danger" onClick={handleRemoveChannelClick}>
          Удалить
        </Button>
      </Modal.Footer>
    </Modal>
  )

}

export default ModalDeleteChannel;