import styled from 'styled-components'

export const Alert = styled.div`
  border-radius: 4px;
  padding: 15px;
  background-color: ${props => props.color.background};
  border-left: 6px solid ${props => props.color.border};
  margin-bottom: 14px;
  font-size: 1rem;

  & p {
    margin-top: 0;
    margin-bottom: 0;
  }
`

export const Message = styled.p`
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  font-size: 1rem;
  color: ${props => props.color.text_color};
`
