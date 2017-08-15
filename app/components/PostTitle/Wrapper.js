import styled from 'styled-components'

export default styled.div`
  button {
    margin: auto;
    width: 100%;
    height: 3em;
    cursor: pointer;
    background: rgba(135, 206, 250,0.65);
    border: none;

    &:hover, &:active {
      background: rgba(135, 206, 250,0.95);
    }
  }
`
