# Allan Ramos Blog

Blog criado com Gatsby :D.

## 🚀 Instalando e rodando o projeto

1.  **Instale as dependências**

    ```shell
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento.**

    ```shell
    npm start
    ```

3.  **Acesse sua página.**

    ```
    http://localhost:8000/
    ```

## 📝 Como criar um post

1.  **Crie o arquivo do post**

- O arquivo deverá ser colocado na pasta `/posts`
- O formato do arquivo deve ser `ano-mes-dia-nome-post-separado.md`

2.  **Coloque as informações básicas do post**

- Dentro do arquivo crie uma estrutura com o seguinte conteúdo:

```markdown

---
title: <nome_do_post>
subtitle: <subtitulo_opcional_do_post>
description: <descricao_do_post>
date: <ano-mes-ddi hora:minuto:segundo>
author: <nome_do_author>
category: <front-end|back-end>
category: ['js', 'react', 'gatsby', 'redux']
series: serie legal
---
```

3.  **Escreva o post**

- Após isso, escreva o conteúdo do seu post.

### Inserindo uma imagem no post

1.  **Coloque as imagens na pasta**

- Insira as imagens na pasta `/static/assets/uploads`;
- Tente não inserir imagens com mais de 1mb;
- O nome do arquivo deve seguir `nome_arquivo.extensao`

2.  **Inserindo a imagem no posto**

    Exemplo para inserir no post

    ```markdown
    ![Logo Gatsby](/assets/uploads/light.jpeg)
    ```

## 📝 Agendar um post

1.  **Na descrição do PR, coloque a data que deverá ser mergeado o post seguindo o exemplo abaixo:**

```
/schedule 2020-09-02
```
