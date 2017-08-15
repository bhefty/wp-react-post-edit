/**
*
* PostTitle
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import Form from './Form'
import Wrapper from './Wrapper'

function PostTitle (props) {
  return (
    <Wrapper className={`${props.className} row`}>
      <Form onSubmit={props.handleSubmit} className='col-md-10'>
        {props.editingTitle
          ? <input value={props.editTitleText} onChange={props.handleChange} />
          : <input readOnly value={props.title} />
        }
      </Form>
      <button onClick={props.handleEdit} className='col-md-1'>E</button>
      <button onClick={props.handleDelete} className='col-md-1'>X</button>
    </Wrapper>
  )
}

PostTitle.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editingTitle: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  editTitleText: PropTypes.string.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default PostTitle
