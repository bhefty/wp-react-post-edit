/**
*
* ChangeFeaturedImage
*
*/

import React from 'react'
import Modal from 'react-modal'

import H2 from 'components/H2'
import CancelButton from 'components/CancelButton'
import HeadingWrapper from './HeadingWrapper'

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
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '80%'
  }
}

function ChangeFeaturedImage (props) {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel='Change Featured Image'
    >
      <HeadingWrapper>
        <H2>Change Featured Image</H2>
        <CancelButton handleClick={() => props.closeModal()} className='btn-cancel' />
      </HeadingWrapper>
      <iframe
        src={`http://localhost:8888/react-plugin-test/wp-admin/media-upload.php?post_id=${props.postId}&type=image&TB_iframe=1`}
        width='100%'
        height='90%'
      />
    </Modal>
  )
}

export default ChangeFeaturedImage
