import styled from 'styled-components'
import { Link } from 'gatsby'

import * as Colors from '../../assets/styles/colors'
import * as Widths from '../../assets/styles/widths'

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  position: relative;
  padding: 30px 35px;

  > svg {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${Widths.CONTAINER_MAX_WIDTH};
  align-items: center;
`

export const List = styled.ul`
  list-style: none;
  margin-left: 35px;
`

export const CardWrapper = styled.div`
  padding-top: 14px;

  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    visibility: hidden;
    transition: visibility 0s, opacity 0.5s linear;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 12px;
  }
`

export const Card = styled.div`
  width: 180px;
  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    display: flex;
    flex-direction: column;
    padding-top: 10px;
    padding-left: 20px;
  }

  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    background-color: ${Colors.WHITE};
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    display: grid;
    grid-template-columns: ${({ isSingle }) => (isSingle ? '1fr' : '1fr 1fr')};
    gap: 14px;
    width: 100%;
  }
`

export const ListItem = styled.li`
  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    display: inline;

    &:hover ${CardWrapper} {
      visibility: visible;
      opacity: 1;
    }

    &:not(:last-child) {
      margin-right: 14px;
    }
  }
`

export const StyledLink = styled(Link)`
  cursor: pointer;
  color: ${Colors.BLACK};
  text-decoration: none;
  position: relative;

  &:visited {
    color: ${Colors.BLACK};
    text-decoration: none;
  }

  &:hover {
    color: ${Colors.PRIMARY}
  }

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    ${props => !props.isOpen && `
      display: none;
    `}

    ${props => props.isOpen && `
      font-size: 1.2rem;
    `}
  }
`

export const SimpleLink = styled(Link)`
  display: inline;
  cursor: pointer;
  color: ${Colors.BLACK};
  text-decoration: none;
  position: relative;
  text-transform: capitalize;

  &:visited {
    color: ${Colors.BLACK};
    text-decoration: none;
  }

  &:hover {
    color: ${Colors.PRIMARY}
  }

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    font-size: 1rem;
  }
`

export const HamburguerBt = styled.div`
  cursor: pointer;
  height: 60px;
  position: absolute;
  width: 40px;
  top: 36px;
  right: 35px;
  transition: all .2s ease-out;
  z-index: 11;

  @media(min-width: ${Widths.DESKTOP_WIDTH}) {
    display: none;
  }
`

export const Navigation = styled.nav`
  width: 100%;
  transition: background-color 0.2s ease;

  @media(max-width: ${Widths.MOBILE_WIDTH}) {
    ${props => props.isOpen && `
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 18px;
      background-color: rgba(255, 255, 255, 1);
      z-index: 10;
      overflow: scroll;
    `}
  }
`

export const HamburguerStripe = styled.div`
  width: 100%;
  height: 5px;
  background: ${Colors.BLACK};
  margin: 4px auto;
  transition: all 0.3s;
  backface-visibility: hidden;
`

export const HamburguerTop = styled(HamburguerStripe)`
  ${props => props.isOpen && 'transform: rotate(45deg) translate(3px, 3px);'};
`

export const HamburguerMiddle = styled(HamburguerStripe)`
  ${props => props.isOpen && 'opacity: 0;'};
`

export const HamburguerBottom = styled(HamburguerStripe)`
  ${props => props.isOpen && 'transform: rotate(-45deg) translate(10px, -10px);'};
`
