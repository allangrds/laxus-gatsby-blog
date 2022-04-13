import styled from 'styled-components'

import * as Colors from '../../assets/styles/colors'

export const Toc = styled.aside`
  position: relative
`

export const Container = styled.nav`
  position: ${props => props.fixedPosition && 'sticky'};
  top: ${props => props.fixedPosition && '14px'};
`

export const InnerScroll = styled.div`
  display: block;
  overflow: auto;
  max-height: 500px;
`

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  margin-bottom: 20px;
  margin-top: 0;
  font-weight: 500;
  f
`

const leftMargins = {
  1: '0',
  2: '10px',
  3: '20px',
  4: '30px',
  5: '40px',
}

const bottomMargins = {
  1: '10px',
  2: '5px',
  3: '10px',
  4: '0',
  5: '0',
}

export const Link = styled.a`
  color: ${props => (props.active ? Colors.PRIMARY : Colors.TITLE)};
  text-decoration: none;
  display: block;
  line-height: 1.7rem;
  font-size: 0.9rem;
  transition: color 0.1s ease;
  margin-left: ${props => leftMargins[props.depth]};
  margin-bottom: ${props => bottomMargins[props.depth]};

  &:hover {
    color: ${Colors.TITLE_HOVER};
  }
`
