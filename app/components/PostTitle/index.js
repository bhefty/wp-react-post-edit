/**
*
* PostTitle
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import EditButton from 'components/EditButton'
import DeleteButton from 'components/DeleteButton'
import SaveButton from 'components/SaveButton'
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
      {props.editingTitle
        ? <SaveButton handleClick={props.handleSubmit} className='col-md-1 btn-save' />
        : <EditButton handleClick={props.handleEdit} className='col-md-1 btn-edit' />
      }
      <DeleteButton handleClick={props.handleDelete} className='col-md-1 btn-delete' />
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
