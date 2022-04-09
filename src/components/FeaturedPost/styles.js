import styled from 'styled-components'
import { Link } from 'gatsby'

import * as Colors from '../../assets/styles/colors'
import * as Widths from '../../assets/styles/widths'

export const Article = styled.article`
  margin-bottom: 60px;
`

export const StyledLink = styled(Link)`
  color: ${Colors.TITLE};
  text-decoration: none;

  &:hover > div > div > h1 {
    color: ${Colors.TITLE_HOVER};
  }
`

export const Grid = styled.div`
  display: grid;
  grid-gap: 20px;

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    grid-grid-template-rows: 1fr 1fr;
  }

  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    grid-template-columns: 1fr 350px;
  }
`

export const HeroImage = styled.div`
  height: 200px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    grid-row: 1;
  }
`

export const Title = styled.h1`
  color: ${Colors.TITLE};
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  transition: color 0.1s ease;
`

export const Subtitle = styled.h2`
  color: ${Colors.SUBTITLE};
  font-size: 1.7rem;
  margin-top: 5px;
  margin-bottom: 0;
  font-weight: 400;
`

export const Description = styled.p`
  font-size: 1.3rem;
  margin-top: 20px;
  margin-bottom: 0;
  line-height: 2;
`

export const ReadMore = styled.span`
  display: block;
  color: ${Colors.BUTTON};
  font-size: 1.2rem;
  background-color: ${Colors.BUTTON_BACKGROUND};
  max-width: 120px;
  text-align: center;
  padding: 15px 10px;
  border-radius: 4px;
  margin-top: 40px;
`
