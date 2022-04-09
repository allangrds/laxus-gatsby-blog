import styled from 'styled-components'

import * as Colors from '../../assets/styles/colors'

export const Paragraph = styled.span`
  cursor: pointer;
  color: ${Colors.VERSE_LINK};
  position: relative;

  &:active > div,
  &:hover > div {
    display: flex;
  }
`

export const Container = styled.div`
  display: none;
  background-color: ${Colors.VERSE_BACKGROUND};
  margin-bottom: 14px;
  box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow-x: scroll;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  width: 300px;
  flex-direction: column;
`

export const VerseHeader = styled.header`
  background-color: ${Colors.VERSE_HEADER_BACKGROUND};
  padding-bottom: 10px;
  padding-top: 10px;
`

export const Book = styled.span`
  display: block;
  font-size: 0.9rem !important;
  color: ${Colors.VERSE_BOOK};
  font-weight: normal;
  text-align: center;
`

export const VerseBody = styled.div`
  padding: 10px 14px;
`

export const Verse = styled.p`
  color: ${Colors.VERSE_VERSE};
  font-size: 0.85rem !important;
  margin-bottom: 10px !important;
  margin-top: 0 !important;
  line-height: 1.6em !important;
`
