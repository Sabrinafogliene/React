# Calculadora React - Desafio DIO

> **Status do Projeto:** Concluído ✅

![React](https://img.shields.io/badge/react-%2320232d.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-%23db7093.svg?style=for-the-badge&logo=styled-components&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sabrina-castilho/)
![Screenshot da Calculadora](./screenshot.png)

## 📖 Sobre o Projeto
Este projeto foi desenvolvido como um desafio prático dentro da **Formação React Developer da DIO**. O objetivo foi construir uma calculadora funcional do zero, explorando a criação de componentes, gerenciamento de estados com Hooks e estilização moderna.



## 🚀 Funcionalidades
A calculadora conta com todas as operações essenciais para o dia a dia:

- **Operações Aritméticas**: Soma, Subtração, Multiplicação e Divisão.
- **Cálculo de Porcentagem**: Lógica contextualizada para descontos e juros.
- **Inversão de Sinal**: Alterna entre positivo e negativo através da tecla `+/-`.
- **Apagar Caractere**: Botão `ᵡ` para correções rápidas sem limpar todo o visor.
- **Reset (C)**: Limpa todos os estados e o histórico da operação.
- **Suporte a Decimais**: Inserção de vírgula para cálculos precisos.

## 🛠️ Desafios Técnicos Superados
Durante o desenvolvimento, foquei em resolver problemas comuns de lógica em calculadoras:
1. **Precisão de Ponto Flutuante**: Utilizei `toFixed(10)` e `parseFloat` para evitar erros matemáticos do JavaScript (como `0.1 + 0.2`).
2. **Lógica de Porcentagem**: Implementei um sistema que identifica se a porcentagem deve ser um valor isolado ou um percentual sobre o primeiro número digitado.
3. **Gestão de Estado**: Controle rigoroso do ciclo de vida do componente para evitar que o operador fosse perdido durante a digitação do segundo número.

## 💻 Como instalar e rodar

```bash
# Clone este repositório
$ git clone [https://github.com/](https://github.com/)Sabrinafogliene/React.git

# Acesse a pasta do projeto
$ cd React

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
📄 Licença
Este projeto está sob a licença MIT.

Desenvolvido por Sabrina Fogliene Castilho
