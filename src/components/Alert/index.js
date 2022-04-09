import React from 'react'
import PropTypes from 'prop-types'

import * as Colors from '../../assets/styles/colors'
import * as S from './styles'

const types = {
  error: {
    background: Colors.ALERT_ERROR,
    border: Colors.ALERT_ERROR_BORDER,
    text_color: Colors.ALERT_TEXT,
  },
  info: {
    background: Colors.ALERT_INFO,
    border: Colors.ALERT_INFO_BORDER,
    text_color: Colors.ALERT_TEXT,
  },
  success: {
    background: Colors.ALERT_SUCCESS,
    border: Colors.ALERT_SUCCESS_BORDER,
    text_color: Colors.ALERT_TEXT,
  },
  warning: {
    background: Colors.ALERT_WARNING,
    border: Colors.ALERT_WARNING_BORDER,
    text_color: Colors.ALERT_TEXT,
  },
}

const Alert = ({ children, message, type }) => (
  <S.Alert color={types[type]}>
    {
      message && (
        <S.Message color={types[type]}>
          { message }
        </S.Message>
      )
    }
    { children }
  </S.Alert>
)

Alert.propTypes = {
  children: PropTypes.node,
  message: PropTypes.string,
  type: PropTypes.oneOf([
    'success',
    'info',
    'warning',
    'error',
  ]).isRequired,
}

Alert.defaultProps = {
  children: null,
  message: '',
}

export default Alert
