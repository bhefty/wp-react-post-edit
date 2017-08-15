/**
*
* FeaturedImage
*
*/

import React from 'react'
import PropTypes from 'prop-types'

import Img from 'components/Img'
import EditButton from 'components/EditButton'
import Wrapper from './Wrapper'

function FeaturedImage ({ src, alt, openEditImage, className }) {
  return (
    <Wrapper className={className}>
      <Img src={src} alt={alt} />
      <EditButton handleClick={openEditImage} />
    </Wrapper>
  )
}

FeaturedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openEditImage: PropTypes.func.isRequired
}

export default FeaturedImage
