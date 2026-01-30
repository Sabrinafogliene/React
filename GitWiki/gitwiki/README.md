# 🔍 GitHub Wiki - Search Repos (DIO Project)
> **Status do Projeto:** Concluído ✅

![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-%23db7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sabrina-castilho/)
![Screenshot do GitHub Wiki](./screenshot.png)

## 📖 Sobre o Projeto
Este projeto foi desenvolvido como parte do desafio de código do curso de React da **DIO (Digital Innovation One)**. A aplicação é uma interface de busca que consome a API do GitHub para listar e gerenciar repositórios favoritos.

## 🚀 Tecnologias Utilizadas
O projeto utiliza o ecossistema moderno do React para criar uma interface rápida e reativa:

- **React JS**: Biblioteca principal para construção da UI.
- **Styled Components**: Para estilização avançada e gerenciamento de CSS-in-JS.
- **Axios**: Para consumo da API REST do GitHub.
- **React Hooks (`useState`)**: Para controle de estado e ciclo de vida.

## 🛠️ Funcionalidades

- **Busca via API**: Permite localizar repositórios públicos informando o padrão `usuario/repositorio`.
- **Validação de Duplicados**: O sistema impede que o mesmo repositório seja adicionado mais de uma vez na listagem.
- **Gerenciamento de Lista**: Opção para remover repositórios da visualização em tempo real.
- **Tratamento de Erros**: Alertas para repositórios não encontrados ou erros de conexão.

## 📦 Como rodar o projeto

1. **Clone este repositório:**
   ```bash
   git clone [https://github.com/Sabrinafogliene/React.git](https://github.com/Sabrinafogliene/React.git)
   ```
2. **Entre na pasta do repositório:**
   ```bash
   cd React
   ```
3. **Entre na pasta específica desse projeto:**
   ```bash
   cd GitWiki/gitwiki
   ```
4. **Instale as dependências:**
   ```bash
   npm install
   ```
5. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
## 📝 Lógica Implementada
O arquivo principal App.js gerencia o fluxo de dados através de duas funções principais:
- **`handleSearchRepo`**: Realiza uma chamada assíncrona (`async/await`) para API. Antes de adicionar o novo repositório ao array `repos`, ela utiliza o método `.find()` para verificar se o ID já existe no estado atual.
- **`handleRemoveRepo`**: Utiliza a função `.filter()` para criar um novo array sem o item selecionado, mantendo a imutabilidade do estado do React.

## 👩‍💻 Desenvolvedora
**Sabrina F. Castilho** - *Desenvolvedora Jr. | Estudante de Análise e Desenvolvimento de Sistemas*
   
