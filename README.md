# Laxus

Gatsby starter for creating a blog

## 🚀 Installing and running the project

1.  **Dependencies install**

```shell
  npm install
```

2.  **Change `gatsby-config.js` to config header and blog info**

    2.1  Open `gatsby-config.js`

    2.2  Change `siteMetadata` for your blog informations like blog name, author, description and url

3.  **Start project on development mode**

```shell
  npm start
```

4.  **Access your page**

```
  http://localhost:8000/
```

## 📝 Creating a post

1.  **How to create a post**

- The post file should be at `/posts`
- The name format should be `year-month-day-post-name.md`

2.  **Insert the basic post informations**

- Inside the file, create a information structure like this:

```markdown

---
title: <post_title>
subtitle: <optional_subtitle>
description: <post_description>
date: <year-month-day hour:minute:second>
author: <author_name>
category: <front-end|back-end|what_ever>
category: ['js', 'react', 'gatsby', 'redux']
series: how to do x
---
```

3.  **Write your post**

- Let's write!

### Inserting images inside the post

1.  **Where to put the images**

- Put the images in the following folder  `/static/assets/uploads`;
- The file name shoud be `file_name.extension`

2.  **How to import**

```markdown
  ![Gatsby Logo](/assets/uploads/light.jpeg)
```

## 📝 Schedule a post

1.  **In the description of the PR, put the date that the post should be merged following the example below:**

```
/schedule 2020-09-02
```

## Layout

<img width="1383" alt="Captura de Tela 2022-04-13 às 14 11 12" src="https://user-images.githubusercontent.com/4103305/163234077-f82158b3-0a8f-4c8a-aa29-40c97744b23b.png">

<img width="1338" alt="Captura de Tela 2022-04-13 às 14 11 21" src="https://user-images.githubusercontent.com/4103305/163234098-208c8f31-9b01-4215-9c8b-d5915b9c3ebc.png">

<img width="1345" alt="Captura de Tela 2022-04-13 às 14 11 31" src="https://user-images.githubusercontent.com/4103305/163234121-c0a05925-d898-416f-a4f3-7e1c5b593b29.png">

<img width="1358" alt="Captura de Tela 2022-04-13 às 14 11 45" src="https://user-images.githubusercontent.com/4103305/163234164-a443bf1b-b4f7-40f4-b331-4e0cb6f9a426.png">

<img width="1330" alt="Captura de Tela 2022-04-13 às 14 11 55" src="https://user-images.githubusercontent.com/4103305/163234185-23c1be1f-d47a-48a9-81d0-42ff2ee46d8c.png">

<img width="1340" alt="Captura de Tela 2022-04-13 às 14 12 08" src="https://user-images.githubusercontent.com/4103305/163234218-cb0ad7d1-a754-4a3e-a332-71c07eb4451b.png">
