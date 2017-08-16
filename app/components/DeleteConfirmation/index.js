/**
*
* DeleteConfirmation
*
*/

import React from 'react'
import Modal from 'react-modal'

import H2 from 'components/H2'
import Wrapper from './Wrapper'

const customStyles = {
  overlay: {
    'zIndex': '99999'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
}

function DeleteConfirmation (props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={() => props.closeModal(false, props.postId)}
      style={customStyles}
      contentLabel='Delete Confirmation'
    >
      <H2>Are you sure you want to delete the post?</H2>
      <Wrapper className='row'>
        <button className='btn-confirm col-md-offset-2 col-md-2' onClick={() => props.closeModal(true, props.postId)}>Yes</button>
        <button className='btn-cancel col-md-offset-4 col-md-2' onClick={() => props.closeModal(false, props.postId)}>Cancel</button>
      </Wrapper>
    </Modal>
  )
}

export default DeleteConfirmation
