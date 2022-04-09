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

  &:hover > div > div > div > h1,
  &:hover > div > div > h1 {
    color: ${Colors.TITLE_HOVER};
  }
`

export const Grid = styled.div`
  display: grid;

  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    grid-template-columns: ${props => !props.minimal && '1fr 350px'};
    grid-gap: ${props => !props.minimal && '20px'};
  }
`

export const HeroImage = styled.div`
  height: 120px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;

  ${props => props.minimal && `
    grid-row: 1;
  `};

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    grid-row: 1;
  }
`

export const PostInformations = styled.div`
  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    position: relative;
    top: -20px;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${props => props.minimal && `
    position: relative;
    top: -20px;
    padding-left: 20px;
    padding-right: 20px;
  `};
`

export const PostBox = styled.div`
  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    background-color: ${Colors.WHITE};
    border-radius: 4px;
    padding: 20px;
  }

  ${props => props.minimal && `
    background-color: ${Colors.WHITE};
    border-radius: 4px;
    padding: 20px;
  `};
`

export const Description = styled.p`
  font-size: 1rem;
  margin-top: 20px;
  margin-bottom: 0;
  line-height: 2;
`
