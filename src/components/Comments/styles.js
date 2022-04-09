import styled from 'styled-components'

import * as Colors from '../../assets/styles/colors'

// eslint-disable-next-line import/prefer-default-export
export const Wrapper = styled.div`
  margin: auto;
  padding: 30px 0 0 0;

  iframe[src="ads-iframe"] {
    display: none;
  }

  #disqus_thread {
    a {
      color: ${Colors.PRIMARY} !important;
    }
  }
`
