# Products API

Uma API para gerenciamento de produtos.

## Rotas

### `GET /`

Retorna todos os produtos.

### `GET /api/product/:id`

Retorna um produto pelo ID.

### `POST /api/create`

Cria um novo produto.

Parâmetros:

- `name` (string): Nome do produto (obrigatório).
- `description` (string): Descrição do produto.
- `price` (number): Preço do produto.

### `PUT /api/edit`

Edita um produto existente.

Parâmetros:

- `id` (string): ID do produto a ser editado (obrigatório).
- Campos que deseja editar, name, description ou price.

### `DELETE /api/delete`

Deleta um produto pelo ID.

Parâmetros:

- `id` (string): ID do produto a ser deletado (obrigatório).

## Configuração

Para executar a API, certifique-se de ter o Node.js e o npm instalados em sua máquina. Em seguida, siga as etapas abaixo:

1. Clone o repositório: `git clone git@github.com:claudiocassimiro/products-api-express-js.git`
2. Instale as dependências: `npm install`
3. Configure as variáveis de ambiente: Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
  DATABASE_URL="postgresql://productsapi:productsapi123@localhost:5432/products_api_db?schema=public"
  DB_USER="productsapi"
  DB_PASSWORD="productsapi123"
  DB_HOST="localhost:3000"
  PORT=3000
```

4. Inicie o servidor: `npm run dev`
5. Acesse a API em `http://localhost:3000`

## Dependências

- Node.js 18.16.0
- Docker: 23.0.5
- [@prisma/client](https://www.npmjs.com/package/@prisma/client): Cliente do Prisma para acesso ao banco de dados.
- [dotenv](https://www.npmjs.com/package/dotenv): Carrega as variáveis de ambiente a partir de um arquivo `.env`.
- [express](https://www.npmjs.com/package/express): Framework web para Node.js.
- [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc): Gera a documentação do Swagger com base nos comentários do código.
- [swagger-ui-express](https://www.npmjs.com/package/swagger-ui-express): Interface de usuário do Swagger para visualização da documentação da API.

## Scripts

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com reinício automático.
- `npm start`: Inicia o servidor em modo de produção.
- `npm run build`: Compila o código TypeScript para JavaScript.
- `npm run start:migrate:prod`: Implanta as migrações do banco de dados Prisma e inicia o servidor em modo de produção.
- `npm run docker:build`: Cria uma imagem Docker da aplicação.
- `npm run docker:push`: Envia a imagem Docker para um repositório remoto.
- `npm test`: Executa os testes (ainda não implementados).
- `npm run lint`: Executa a verificação de linting do código.

## SWAGGER

Acesse a roda `localhost:3000/api-docs/` para testar as rotas com o swagger.

## Deployment

O deploy foi feito utilizando terraform para provisionar o cluster com kubernetes no linode

- Para acessar em produção utilize `http://139.144.240.44:3000/`
- Para acessar o swagger em produção utilize `http://139.144.240.44:3000/api-docs/`

## Referencias:

Utilizei bastante da habilidade de pesquisa para concluir o desafio

- [Mini Curso Gratuito de Kubernetes para Devs Javascript || Erick Wendel](https://www.youtube.com/watch?v=eXKg9B5ooaY&t)
- [Terraforming Kubernetes on Linode | New Course Preview](https://www.youtube.com/watch?v=d-l-4nVuu10&t)
- [Kubernetes Tutorial | How to set environment variables in Pods](https://www.youtube.com/watch?v=kbN8nMDqkRM)
- [Linode documentation](https://www.linode.com/docs/)
- [Kubernetes documentation](https://kubernetes.io/docs/home/)
- [Terraform documentation](https://developer.hashicorp.com/terraform/docs)
