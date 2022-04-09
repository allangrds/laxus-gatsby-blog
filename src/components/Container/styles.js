import styled from 'styled-components'

import * as Widths from '../../assets/styles/widths'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 30px 30px;
`

export const Container = styled.div`
  width: 100%;
  max-width: ${Widths.CONTAINER_MAX_WIDTH};
`
