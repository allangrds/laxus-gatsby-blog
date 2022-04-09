import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Pagination = ({
  currentPage,
  isFirst,
  isLast,
  nextPage,
  numPages,
  prevPage,
}) => (
  <S.Wrapper>
    {
      !isFirst
      && (
        <S.StyledLink
          to={prevPage}
        >
          Anterior
        </S.StyledLink>
      )
    }
    <S.PageInfo>
      { currentPage } de { numPages }
    </S.PageInfo>
    {
      !isLast
      && (
        <S.StyledLink
          to={nextPage}
        >
          Próximo
        </S.StyledLink>
      )
    }
  </S.Wrapper>
)

Pagination.propTypes = {
  currentPage: PropTypes.string.isRequired,
  isFirst: PropTypes.bool.isRequired,
  isLast: PropTypes.bool.isRequired,
  nextPage: PropTypes.string.isRequired,
  numPages: PropTypes.string.isRequired,
  prevPage: PropTypes.string.isRequired,
}

export default Pagination
