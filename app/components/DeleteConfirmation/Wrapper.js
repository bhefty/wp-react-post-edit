import styled from 'styled-components'

export default styled.div`
  button {
    width: 100%;
    border: none;
    font-size: 1.25em;
    font-weight: 200;
    color: white;
    padding: 0.5em;
  }

  .btn-confirm {
    background: rgba(34, 139, 34, 0.65);

    &:hover, &:active {
      background: rgba(34, 139, 34, 0.95);
    }
  }

  .btn-cancel {
    background: rgba(220, 20, 60, 0.65);

    &:hover, &:active {
      background: rgba(220, 20, 60, 0.95);
    }
  }
`
