import styled from 'styled-components'

export default styled.div`
  position: relative;
  overflow: hidden;
  margin: auto;

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
