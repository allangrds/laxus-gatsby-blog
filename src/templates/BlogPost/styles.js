import styled from 'styled-components'

import * as Colors from '../../assets/styles/colors'
import * as Widths from '../../assets/styles/widths'

export const Grid = styled.div`
  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    display: grid;
    grid-template-columns: 1fr 250px;
    column-gap: 50px;
  }
`

export const HeroImage = styled.div`
  height: 200px;
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  margin-bottom: 30px;
`

// eslint-disable-next-line import/prefer-default-export
export const PostContent = styled.div`
  margin-top: 30px;

  code {
    background-color: ${Colors.POST_CODE_COLOR};
    font-weight: 500;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 40px;
    margin-bottom: 0;
  }

  h1 {
    font-size: 1.7rem;
  }

  h2 {
    font-size: 1.55rem;
  }

  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.35rem;
  }

  iframe,
  p {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  a {
    color: ${Colors.LINK};
  }

  pre {
    margin-bottom: 1.6rem;
    overflow-x: scroll;

    @media(max-width: ${Widths.MOBILE_WIDTH}) {
      max-width: 978px;
    }

    @media(min-width: ${Widths.DESKTOP_WIDTH}) {
      max-width: 678px;
    }
  }

  p,
  a,
  span,
  ol,
  ul,
  li,
  pre > code{
    font-size: 1rem;
    line-height: 2;
  }

  ul {
    padding-left: 2rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  blockquote {
    background-color: ${Colors.BLOCKQUOTE_BACKGROUND};
    color: ${Colors.BLOCKQUOTE};
    padding: 15px 30px;
    border-radius: 4px;
    position: relative;
    margin-top: 30px;

    > p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  blockquote::before {
    position: absolute;
    top: -10px;
    left: -45px;
    content: " ";
    width: 67px;
    height: 52px;
    background-image: url("/assets/images/left_quote.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }
`
