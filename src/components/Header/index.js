import React, { useState } from 'react'
import PropTypes from 'prop-types'

import WaveBackground from '../../../static/assets/images/wave.svg'
import Logo from '../Logo'
import * as Colors from '../../assets/styles/colors'
import * as S from './styles'

const makeLinks = (categoriesGroup, tagsGroup) => {
  const { group: groupCategories } = categoriesGroup
  const { group: groupTags } = tagsGroup
  const lastPosts = {
    label: 'Últimas publicações',
    to: '/',
  }
  const search = {
    label: 'Pesquisar',
    to: '/pesquisar',
  }
  const others = [{
    label: 'Sobre',
    to: '/sobre',
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

  const hasCategories = categories && categories.length > 0
  const hasTags = tags && tags.length > 0

  if (!hasCategories && !hasTags) {
    const finalLinks = [
      lastPosts,
      search,
      ...others,
    ]

    return finalLinks
  }

  if (!hasTags) {
    const finalLinks = [
      lastPosts,
      {
        children: categories,
        label: 'Categorias',
      },
      search,
      ...others,
    ]

    return finalLinks
  }

  if (!hasCategories) {
    const finalLinks = [
      lastPosts,
      {
        children: tags,
        label: 'Tags',
      },
      search,
      ...others,
    ]

    return finalLinks
  }

  const finalLinks = [
    lastPosts,
    {
      children: categories,
      label: 'Categorias',
    },
    {
      children: tags,
      label: 'Tags',
    },
    search,
    ...others,
  ]

  return finalLinks
}

const Header = ({ categoriesGroup, tagsGroup }) => {
  const [isOpen, setIsOpen] = useState(false)
  const links = makeLinks(categoriesGroup, tagsGroup)

  function handleToggle () {
    setIsOpen(!isOpen)
  }

  return (
    <S.Header>
      <WaveBackground fill={Colors.GRAY_4} width="100%" />
      <S.Container>
        <Logo />
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
                          <S.Card>
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
  tagsGroup: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({
      fieldValue: PropTypes.string,
    })),
  }).isRequired,
}

export default Header
