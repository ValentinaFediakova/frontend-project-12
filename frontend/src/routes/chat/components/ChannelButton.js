import React, { useState, useEffect } from 'react';
import { useStore, useDispatch, useSelector } from 'react-redux' 
import cn from 'classnames';

import { channelSetActive } from '../../../redux/actions/channels.action'

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import './ChannelButton.css';

function ChannelButton({ onFocus, active, removable, text, id, onShowDeletedModal, onShowRenameModal }){
  const dispatch = useDispatch()

  const handleChangeCurrentChannelClick = (id) => {
    dispatch(channelSetActive(id))
    onFocus()
  }

  const isActive = active
  const classesButton = cn('Chat__button_withoutRadius', {
    'Chat__button_active': isActive,
  })

  return (
    <>
      {removable && (
        <Dropdown as={ButtonGroup} className={classesButton}>
          <Button variant="light" onClick = {()=> handleChangeCurrentChannelClick(id)}># {text}</Button>
    
          <Dropdown.Toggle 
            className={'Chat__button-dropdown-menu'} 
            split variant="light" 
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>    
            <Dropdown.Item eventKey="1" onClick={() => onShowDeletedModal(id)}>удалить</Dropdown.Item>
            <Dropdown.Item eventKey="2" onClick={() => onShowRenameModal(id)}>переименовать</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      )}

      {!removable && (
        <Button 
          variant="light" 
          className={classesButton} 
          onClick = {()=> handleChangeCurrentChannelClick(id)}
        ># {text}</Button>
      )}
    </>
  )
}

export default ChannelButton;

