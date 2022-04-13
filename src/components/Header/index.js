import React, { useState } from 'react'
import PropTypes from 'prop-types'

import WaveBackground from '../../../static/assets/images/wave.svg'
import Logo from '../Logo'
import * as Colors from '../../assets/styles/colors'
import * as S from './styles'

const makeLinks = (categoriesGroup, tagsGroup, seriesGroup) => {
  const { group: groupCategories } = categoriesGroup
  const { group: groupTags } = tagsGroup
  const { group: groupSeries } = seriesGroup

  const latestPosts = {
    label: 'Latest',
    to: '/',
  }
  const search = {
    label: 'Search',
    to: '/search',
  }
  const others = [{
    label: 'About',
    to: '/about',
  }]
  const categories = (
    groupCategories && groupCategories[0].fieldValue.length > 0
  )
    ? groupCategories.map(postType => ({
      label: postType.fieldValue,
      to: `/categorias/${postType.fieldValue}`,
    }))
    : []
  const tags = (groupTags && groupTags[0].fieldValue.length > 0)
    ? groupTags.map(tag => ({
      label: tag.fieldValue,
      to: `/tags/${tag.fieldValue}`,
    }))
    : []

  const series = (groupSeries && groupSeries[0].fieldValue.length > 0)
    ? groupSeries.map(serie => ({
      label: serie.fieldValue.replaceAll('-', ' '),
      to: `/series/${serie.fieldValue}`,
    }))
    : []

  const hasCategories = categories && categories.length > 0
  const hasTags = tags && tags.length > 0
  const hasSeries = series && series.length > 0

  let finalLinks = [latestPosts]

  if (hasCategories) {
    finalLinks = [
      ...finalLinks,
      {
        children: categories,
        label: 'Categorias',
      },
    ]
  }

  if (hasSeries) {
    finalLinks = [
      ...finalLinks,
      {
        children: series,
        label: 'Series',
      },
    ]
  }

  if (hasTags) {
    finalLinks = [
      ...finalLinks,
      {
        children: tags,
        label: 'Tags',
      },
    ]
  }

  finalLinks = [
    ...finalLinks,
    search,
    ...others,
  ]

  return finalLinks
}

const Header = ({
  categoriesGroup, seriesGroup, siteMetaData, tagsGroup,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const links = makeLinks(categoriesGroup, tagsGroup, seriesGroup)

  function handleToggle () {
    setIsOpen(!isOpen)
  }

  return (
    <S.Header>
      <WaveBackground fill={Colors.GRAY_4} width="100%" />
      <S.Container>
        <Logo
          title={siteMetaData.title}
          description={siteMetaData.description}
        />
        <S.Navigation isOpen={isOpen}>
          <S.List>
            {
              links.map(({ children, label, to }) => (
                <S.ListItem key={label}>
                  <S.StyledLink
                    onClick={handleToggle}
                    to={to}
                    key={label}
                    isOpen={isOpen}
                  >
                    {label}
                    {
                      children && (
                        <S.CardWrapper>
                          <S.Card isSingle={children.length}>
                            {
                              children.map(child => (
                                <S.SimpleLink
                                  to={child.to}
                                  key={child.label}
                                >
                                  {child.label}
                                </S.SimpleLink>
                              ))
                            }
                          </S.Card>
                        </S.CardWrapper>
                      )
                    }
                  </S.StyledLink>
                </S.ListItem>
              ))
            }
          </S.List>
        </S.Navigation>
        <S.HamburguerBt onClick={handleToggle}>
          <S.HamburguerTop isOpen={isOpen} />
          <S.HamburguerMiddle isOpen={isOpen} />
          <S.HamburguerBottom isOpen={isOpen} />
        </S.HamburguerBt>
      </S.Container>
    </S.Header>
  )
}

Header.propTypes = {
  categoriesGroup: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({
      fieldValue: PropTypes.string,
    })),
  }).isRequired,
  seriesGroup: PropTypes.shape({}).isRequired,
  siteMetaData: PropTypes.shape({}).isRequired,
  tagsGroup: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({
      fieldValue: PropTypes.string,
    })),
  }).isRequired,
}

export default Header
