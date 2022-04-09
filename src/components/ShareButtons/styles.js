import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  margin-top: 50px;
`

export const ButtonContainer = styled.div`
  &:not(:first-child) {
    margin-left: 10px;
  }
`
