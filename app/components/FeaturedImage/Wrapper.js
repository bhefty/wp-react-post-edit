import styled from 'styled-components'

export default styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    cursor: pointer;
    background: rgba(135, 206, 250,0.65);
    border: none;

    &:hover, &:active {
      background: rgba(135, 206, 250,0.95);
    }
  }
`
