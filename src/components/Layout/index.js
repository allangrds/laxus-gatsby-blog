import * as React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import './reset.css'

const Layout = ({
  categoriesGroup, children, seriesGroup, siteMetaData, tagsGroup,
}) => (
  <>
    <Header
      categoriesGroup={categoriesGroup}
      siteMetaData={siteMetaData}
      seriesGroup={seriesGroup}
      tagsGroup={tagsGroup}
    />
    <main>
      {children}
    </main>
  </>
)

Layout.propTypes = {
  categoriesGroup: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({
      fieldValue: PropTypes.string,
    })),
  }).isRequired,
  children: PropTypes.node.isRequired,
  seriesGroup: PropTypes.shape({}).isRequired,
  siteMetaData: PropTypes.shape({}).isRequired,
  tagsGroup: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({
      fieldValue: PropTypes.string,
    })),
  }).isRequired,
}

export default Layout
