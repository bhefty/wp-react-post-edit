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
    <Wrapper className={props.className}>
      <Form onSubmit={props.handleSubmit}>
        {props.editingTitle
          ? <input value={props.editTitleText} onChange={props.handleChange} />
          : <input readOnly value={props.title} />
        }
      </Form>
      <button onClick={props.handleEdit}>Edit</button>
      <button onClick={props.handleDelete}>Delete</button>
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
