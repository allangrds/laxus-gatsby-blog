import React from 'react'
import PropTypes from 'prop-types'

import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  PocketIcon,
  PocketShareButton,
  TelegramIcon,
  TelegramShareButton,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
} from 'react-share'

import * as S from './styles'

const list = [
  {
    Component: FacebookShareButton,
    Icon: FacebookIcon,
  },
  {
    Component: TwitterShareButton,
    Icon: TwitterIcon,
  },
  {
    Component: WhatsappShareButton,
    Icon: WhatsappIcon,
  },
  {
    Component: TelegramShareButton,
    Icon: TelegramIcon,
  },
  {
    Component: FacebookMessengerShareButton,
    Icon: FacebookMessengerIcon,
  },
  {
    Component: PocketShareButton,
    Icon: PocketIcon,
  },
]

const ShareButtons = ({ title, url }) => (
  <S.Container>
    {
      list.map(({ Component, Icon }) => (
        <S.ButtonContainer>
          <Component title={title} url={url}>
            <Icon size={40} round />
          </Component>
        </S.ButtonContainer>
      ))
    }
  </S.Container>
)

ShareButtons.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default ShareButtons
