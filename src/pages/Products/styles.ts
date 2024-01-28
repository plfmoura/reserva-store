import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  .card-container {
    img {
      pointer-events: none;
    }
  }
`

export default {
  Container,
}