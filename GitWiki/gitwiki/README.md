# 🔍 GitHub Wiki - Search Repos (DIO Project)

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
2. **Insstale as dependências:**
   ```bash
   npm install
   ```
3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm start
   ```
## 📝 Lógica Implementada
O arquivo principal App.js gerencia o fluxo de dados através de duas funções principais:
- **`handleSearchRepo`**: Realiza uma chamada assíncrona (`async/await`) para API. Antes de adicionar o novo repositório ao array `repos`, ela utiliza o método `.find()` para verificar se o ID já existe no estado atual.
- **`handleRemoveRepo`**: Utiliza a função `.filter()` para criar um novo array sem o item selecionado, mantendo a imutabilidade do estado do React.

## 👩‍💻 Desenvolvedora
**Sabrina F. Castilho** - *Desenvolvedora Jr. | Estudante de Análise e Desenvolvimento de Sistemas*
   
