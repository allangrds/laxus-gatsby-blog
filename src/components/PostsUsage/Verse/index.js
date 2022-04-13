import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Verse = ({
  book,
  text,
  verses,
}) => (
  <S.Paragraph>
    {text}
    <S.Container>
      <S.VerseHeader>
        <S.Book>{book}</S.Book>
      </S.VerseHeader>
      <S.VerseBody>
        {
          verses.map(verse => (
            <S.Verse key={verse.number}>
              <b>{verse.number}</b>. {verse.text}
            </S.Verse>
          ))
        }
      </S.VerseBody>
    </S.Container>
  </S.Paragraph>
)

Verse.propTypes = {
  book: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  verses: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
}

export default Verse
