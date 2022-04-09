import styled from 'styled-components'
import { Link } from 'gatsby'

import * as Colors from '../../assets/styles/colors'

export const Wrapper = styled.footer`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`

export const StyledLink = styled(Link)`
  color: ${Colors.PRIMARY};
  border: 1px solid ${Colors.PRIMARY};
  border-radius: 5px;
  font-size: 1rem;
  padding: 10px 20px;
  text-decoration: none;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${Colors.PRIMARY};
    color: ${Colors.WHITE};
  }
`

export const PageInfo = styled.span`
  color: ${Colors.PRIMARY};
`
