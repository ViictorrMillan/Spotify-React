# Clone do Spotify Antigo (Versão React)

Este é um projeto de um site clone do Spotify, agora refeito utilizando **React.js**. Ele simula a busca por artistas, exibe suas informações e imagens através de uma API de artistas, gerenciada com **json-server**.

---

## 📌 Funcionalidades
- 🔍 Pesquisa de artistas por nome.
- 🎤 Exibe o nome, gênero e imagem do artista.
- ⚡ Utiliza o **json-server** para fornecer os dados de artistas a partir de um arquivo JSON.

---

## 🛠 Tecnologias Utilizadas
- ⚛ **React.js**: Framework para construção da interface do usuário.
- 🎨 **CSS**: Estilização da página.
- 📜 **JavaScript (ES6+)**: Lógica de busca e exibição de resultados.
- 💾 **json-server**: Fake REST API para fornecer dados.

---

## ✅ Pré-requisitos
Para rodar este projeto, você precisará ter o **json-server** instalado. Caso ainda não tenha, siga as instruções abaixo:

### 📥 Instalação do json-server
Instale o json-server globalmente usando o npm:
```sh
npm install -g json-server
```

---

## 🚀 Como Rodar o Projeto
1. **Clone o repositório** ou baixe os arquivos do projeto:
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. **Instale as dependências do projeto**:
```sh
npm install
```

3. **Inicie o json-server** para fornecer os dados da API:
```sh
json-server --watch api-artists/artists.json --port 3000
```

4. **Inicie o projeto React**:
```sh
npm start
```
Isso iniciará a aplicação no navegador em `http://localhost:3000`.

---

## 🎶 Artistas Disponíveis
Os artistas disponíveis no arquivo `artists.json` são:
- **🎸 Foo Fighters** (Gênero: Rock)
- **🎤 Michael Jackson** (Gênero: Pop)
- **🎧 Emicida** (Gênero: Hip Hop)
- **🎻 Chitãozinho e Xororó** (Gênero: Sertanejo)
- **🎶 Mc Coringa** (Gênero: Funk)
- **🥁 Arlindo Cruz** (Gênero: Samba)
- **🎼 Caetano Veloso** (Gênero: MPB)

---

## ⚙️ Como Funciona
1. O usuário digita o nome de um artista no campo de pesquisa.
2. O React faz uma requisição para a API do json-server na URL `http://localhost:3000/artists`.
3. A API retorna os dados dos artistas que correspondem à pesquisa.
4. As informações do artista, como nome, gênero e imagem, são exibidas na tela.

---

## 🏗 Contribuição
Sinta-se à vontade para fazer um fork deste repositório, contribuir com melhorias ou corrigir problemas. Para contribuir, siga os seguintes passos:

1. **Faça um fork do repositório.**
2. **Crie uma nova branch:**
```sh
git checkout -b minha-contribuicao
```
3. **Faça suas mudanças e adicione-as:**
```sh
git add .
```
4. **Faça o commit das suas alterações:**
```sh
git commit -m 'Minha contribuição'
```
5. **Envie a branch para o seu repositório remoto:**
```sh
git push origin minha-contribuicao
```
6. **Abra um Pull Request.**

---

## 📜 Licença
Este projeto está sob a licença **MIT**. Sinta-se livre para utilizá-lo e modificá-lo como quiser.

