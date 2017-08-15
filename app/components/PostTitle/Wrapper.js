import styled from 'styled-components'

export default styled.div`
  button {
    margin: auto;
    width: 100%;
    height: 3em;
    cursor: pointer;
    border: none;
  }

  .btn-edit {
    background: rgba(135, 206, 250, 0.65);

    &:hover, &:active {
      background: rgba(135, 206, 250, 0.95);
    }
  }

  .btn-save {
    background: rgba(34, 139, 34, 0.65);

    &:hover, &:active {
      background: rgba(34, 139, 34, 0.95);
    }
  }

  .btn-delete {
    background: rgba(220, 20, 60, 0.65);

    &:hover, &:active {
      background: rgba(220, 20, 60, 0.95);
    }
  }
`
