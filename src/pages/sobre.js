import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import * as Colors from '../assets/styles/colors'
import {
  Container, Layout, Seo,
} from '../components'

const S = {
  List: styled.ul`
    padding-left: 1rem;
  `,
  Text: styled.p`
    font-size: 1rem;
    color: ${Colors.ABOUT_TEXT_COLOR};
    line-height: 1.7rem;
  `,
  Title: styled.h1`
    color: ${Colors.ABOUT_TITLE_COLOR};
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    transition: color 0.1s ease;
  `,
}

const About = ({ data }) => {
  const { categoriesGroup, tagsGroup } = data

  return (
    <Layout categoriesGroup={categoriesGroup} tagsGroup={tagsGroup}>
      <Seo title="Sobre" />
      <Container>
        <S.Title>
          Sobre
        </S.Title>
        <S.Text>
          Oi, tudo bem?

          Sou Allan Ramos, desenvolvedor front-end e trabalhando atualmente na <a href="https://www.caju.com.br/" target="_blank" rel="noreferrer">Caju</a>.
        </S.Text>
        <S.Text>
          Comecei a programar em 2015 como front-end quando tiver a oportunidade de estagiar no que era uma startup chamada <a href="https://cargobr.com/" target="_blank" rel="noreferrer">CARGOBR</a>. Lá eu tive contato com HTML, CSS, jQuery e um pouquinho de React.
        </S.Text>
        <S.Text>
          A partir daí, foquei ainda mais em Javascript, entrando na  <a href="https://pagar.me/" target="_blank" rel="noreferrer">Pagar.me</a> em 2017. Onde pude melhorar meus conhecimentos como desenvolvedor, além de aprender Node e melhorar minhas habilidades com React.
        </S.Text>
        <S.Text>
          Hoje em 2022 estou na Caju, uma fintech do ramo de benefícios. Conhece? Além de mexer com Typescript e React, também acabo pegando uma coisinha ou outra de React Native
        </S.Text>
        <S.Text>
          Quando não estou programando no trabalho, também estou programando por diversão em algum projeto pessoal, lendo algum livro(ficção, tecnologia, teologia), vendo algum tipo de série ou filme, ou trabalhando em alguma coisa da minha igreja - sou da Igreja Adventista do Sétimo Dia.
        </S.Text>
        <S.Text>
          Espero que você goste do blog :).
        </S.Text>
        <S.Text>
          Se quiser me conhecer nas redes:
          <S.List>
            <li>
              <a href="https://github.com/allangrds" target="_blank" rel="noreferrer">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/allangabrielrds/" target="_blank" rel="noreferrer">
                Linkedin
              </a>
            </li>
          </S.List>
        </S.Text>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AboutList {
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
    categoriesGroup: allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
  }
`

About.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default About
