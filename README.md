# Bem-vindo ao projeto Recipes App

Recipes App é uma aplicação web em React.js produzida em grupo, que acessa a base de dados de duas APIs de receitas, uma de comidas e outra de bebidas, criando uma interface de busca por receitas culinárias intuitiva e amigável, permitindo a visualização dos detalhes das receitas, a favoritação e o compartilhamento com outras pessoas. Além disso, oferece um sistema de exploração, aonde é possível visualizar receitas por nacionalidade, por ingrediente e encontrar sugestões aleatórias de pratos e bebidas.
> Acesse o [deeploy da aplicação aqui](https://project-recipes-app-jet.vercel.app/)

## Sumário
- [Bem-vindo ao projeto Trivia](#bem-vindo-ao-projeto-recipes-app)
- [Preview](#preview)
- [Contexto](#contexto)
- [Tecnologias e Ferramentas Utilizadas](#tecnologias-e-ferramentas-utilizadas)
- [Instalação e Execução](#instalação-e-execução)
- [Notas](#notas)
 - [Git, GitHub e Histórico de Commits](#git-github-e-histórico-de-commits)
 - [Lint](#lint)
 
## Preview
### Visualização para dispositivos móveis
A aplicação foi desenvolvida com design responsivo e pensada para ser utilizada em dispositivos móveis. Sugerimos a vizualiação em resolução `360x640` pixels para a melhor experiência possível.

**Visualização para mobile e mac:**

[![Preview for mobile and mac](https://img.youtube.com/vi/2uGFmFM2zy8/0.jpg)](https://www.youtube.com/watch?v=2uGFmFM2zy8)

**Visualização para linux:**

https://user-images.githubusercontent.com/98184355/220933597-d4c7dc2e-fa7f-4a91-8702-89d9be2d3f0c.mp4

## Contexto
A aplicação Trivia é uma implementação do famoso jogo de perguntas e respostas, em que o usuário pode:
- Fazer login;
- Responder a uma sequência de 5 perguntas;
- Ter o tempo de resposta contabilizado, visto que um cronômetro de 30 segundos é iniciado em cada nova pergunta;
- Verificar o score total referente à sequência respondida;
- Consultar o ranking com os demais scores, que fica armazenado no Local Storage.

## Tecnologias e Ferramentas Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- [React.js com classes](https://reactjs.org/docs/getting-started.html) | Biblioteca para criar interfaces de usuário.
- [Tailwind CSS](https://tailwindcss.com/) | Biblioteca para estilização do CSS.
- [API de Trivia](https://opentdb.com/api_config.php) | API utilizada para obter perguntas e respostas atualizadas para o jogo..
- [Redux](https://redux.js.org/) | Biblioteca de gerenciamento de estado.
- [Trello](https://trello.com/) | Ferramenta de gerenciamento de tarefas.

O React.js foi escolhido por ser uma das bibliotecas mais populares e amplamente utilizadas para criar interfaces de usuário. Além disso, ele oferece suporte a programação orientada a objetos, o que é importante para o desenvolvimento de projetos maiores. O Tailwind CSS foi escolhido por ser uma biblioteca que permite estilização mais fácil e rápida dos componentes, facilitando o processo de desenvolvimento. A API do Trivia foi utilizada para obter perguntas e respostas atualizadas para o jogo, fornecendo informações precisas e detalhadas. O Redux foi utilizado para gerenciar o estado global da aplicação, tornando mais fácil a comunicação entre diferentes componentes e permitindo uma melhor organização do código. O Trello foi utilizado para gerenciamento de tarefas, seguindo metodologias ágeis durante o desenvolvimento.

## Instalação e Execução
### Download do projeto
```
git clone git@github.com:imsamuelcovalero/Project-Trivia.git
```
### Install dependencies
```
cd Project-Trivia
npm install
```
### Run the application
```
cd Project-Trivia
npm start
```

## Notas
### Git, GitHub e Histórico de Commits
Este projeto utilizou a [Especificação de Commits Convencionais](https://www.conventionalcommits.org/en/v1.0.0/), com alguns tipos da [convenção Angular](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines). Além disso, foi utilizado o pacote [conventional-commit-cli](https://www.npmjs.com/package/conventional-commit-cli) para ajudar a seguir a convenção de commits. É importante utilizar a convenção de commits em projetos para manter o histórico de commits organizado e facilitar a leitura e o entendimento do que foi desenvolvido.

### Metodologias Ágeis
Durante o desenvolvimento deste projeto, foram utilizadas metodologias ágeis, que são práticas que valorizam a interação e colaboração entre os membros de uma equipe de desenvolvimento, visando uma entrega mais rápida e eficiente do projeto. A utilização dessas práticas é especialmente importante em projetos em grupo, pois ajuda a manter a equipe alinhada e a evitar atrasos e retrabalhos desnecessários. Para saber mais sobre as metodologias ágeis, confira o [Manifesto Ágil](https://agilemanifesto.org/).

### Lint
- O projeto foi desenvolvido seguindo os padrões de Clean Code especificados pelo [Lint da Trybe](https://github.com/betrybe/eslint-config-trybe).

# Design gráfico desenvolvido para celulares, melhor visualizado em 360 x 640 pixels.
