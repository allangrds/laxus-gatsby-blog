/* eslint-disable react/no-array-index-key */
import React from 'react'
import PropTypes from 'prop-types'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/dracula'

const CodeBlock = ({ children }) => {
  const classNameToMatch = children.props.className || ''
  const matches = classNameToMatch.match(/language-(?<lang>.*)/)
  const language = matches && matches.groups && matches.groups.lang
    ? matches.groups.lang
    : ''

  return (
    <Highlight
      {...defaultProps}
      code={children.props.children.trim()}
      language={language}
      theme={theme}
    >
      {({
        className, getLineProps, getTokenProps, style, tokens,
      }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, index) => (
            <div key={index} {...getLineProps({ key: index, line })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ key, token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  )
}

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired,
}

export default CodeBlock
