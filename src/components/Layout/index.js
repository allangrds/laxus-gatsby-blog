import * as React from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import './reset.css'

const Layout = ({ categoriesGroup, children, tagsGroup }) => (
  <>
    <Header categoriesGroup={categoriesGroup} tagsGroup={tagsGroup} />
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
  tagsGroup: PropTypes.shape({
    group: PropTypes.arrayOf(PropTypes.shape({
      fieldValue: PropTypes.string,
    })),
  }).isRequired,
}

export default Layout
