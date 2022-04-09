import React, { useState } from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'
import useIntersectionObserver from './hooks'

const getHrefValue = heading => (
  heading
    .value
    .replace(/\s+/g, '-')
    .replace(/\?/g, '')
    .replace(/\)/g, '')
    .replace(/\(/g, '')
    .replace(/\:/g, '')
    .toLowerCase()
)

const Toc = ({ fixedPosition, headings }) => {
  const [activeId, setActiveId] = useState()
  useIntersectionObserver(setActiveId)

  return (
    <S.Toc>
      <S.Container fixedPosition={fixedPosition}>
        <S.Title>
          Sumário
        </S.Title>
        <S.InnerScroll>
          {
            headings.map(heading => (
              <S.Link
                href={`#${getHrefValue(heading)}`}
                depth={heading.depth}
                active={getHrefValue(heading) === activeId}
              >
                {heading.value}
              </S.Link>
            ))
          }
        </S.InnerScroll>
      </S.Container>
    </S.Toc>
  )
}

Toc.propTypes = {
  fixedPosition: PropTypes.bool,
  headings: PropTypes.arrayOf({
    depth: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
  }),
}

Toc.defaultProps = {
  fixedPosition: false,
  headings: [],
}

export default Toc
