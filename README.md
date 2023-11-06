
# LifeCare
## Aplicativo de Gestão Médica 

![Logo](https://a.imagem.app/oxvmXv.png)


## Introdução:
 
A LABMedicine LTDA, empresa líder no segmento tecnológico de gestão hospitalar, foi
selecionada em edital e recebeu um aporte financeiro para aprimorar seu principal produto, o LABMedical. A expectativa é desenvolver um novo sistema no formato white-label, capaz de ser personalizado e comercializado para postos de saúde e clínicas particulares em todo o país.

O modelo white-label consiste em um software padrão que pode ser personalizado com as cores, tipografias, logotipos e demais elementos visuais da identidade do cliente, proporcionando um resultado personalizado.

O perfil de sua squad chamou a atenção dos gestores da empresa, e vocês foram designados para criar o novo produto, utilizando as tecnologias HTML, CSS, JavaScript, React, Node, PostgreSQL e Express. Para a elaboração do projeto, será necessário selecionar uma estrutura padrão de layout e um nome e identidade visual fictícios para a clínica, a fim de ilustrar o uso do software durante a apresentação aos gestores.

  

## Autores (SQUAD-5 "Fora de Script"):

- ***César Sant'anna Nahra*** (https://github.com/CesarNahra)
- ***Emanuel de Abreu Barbosa*** (https://github.com/emanuel-abreu)
- ***Glauton Osório*** (https://github.com/glautonOsorio)
- ***Ícaro Ferreira de Araújo Filho*** (https://github.com/icarofilho)
- ***Laércio Luiz Barbosa*** (https://www.github.com/LLBarbosa)

## Descrição:

**LifeCare** é um projeto avaliativo do curso de Desenvolvimento Fullstack do LAB365/SENAI-SC. É uma aplicação web completa, desenvolvida para operações gerenciais comuns aos ambientes de serviços da área da Saúde, permitindo todos os processos de cadastro de consultas, exames e outras informações atreladas ao escopo de um paciente. O software foi construído com validaçoes no login e campos de formulários, permissões especiais por níveis hieráquicos e registro das operações dos usuários do sistema (ADMINISTRADOR - MÉDICO - ENFERMEIRO). O presente repositório é destinado ao **back-end** da aplicação.

### Front-end do projeto:
  https://github.com/FullStack-Trindade/M3P-FrontEnd-Squad5
## Tecnologias Utilizadas:

 - Javascript 
 - Node.js + NPM
 - Express.js
 - Sequelize ORM
 - PostgreSQL
## Instalação:

Crie um banco de dados localmente no PostgreSQL.

Clone o projeto no seu editor de preferência:

```bash
 $ git clone https://github.com/FullStack-Trindade/M3P-BackEnd-Squad5.git
```


Instale as dependências:

```bash
 $ npm install
```

Inicie o servidor:

```bash
 $ npm run dev
```




## Variáveis de Ambiente:

Para rodar o projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu arquivo ```.env```:

```
APP_NAME = 
APP_VERSION =
APP_SECRET = 
APP_PORT = 

DB_DIALECT=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DATABASE=
DB_PORT=
JWT_SECRET=
```


## Melhorias:

O processo de desenvolvimento de um software nunca deve ser encarado como algo definitivo. Há sempre possibilidades de aprimoramento. Sugerimos, a seguir:
- Testes de perfomance/validação podem ser incorporados para aferir uma maior precisão no desempenho dos dados transacionados;
- Novas funcionalidades podem ser agregadas de acordo com o crescimento das demandas operacionais;
- Uma modelagem bem implementada no banco de dados pode fornecer uma maior segurança ao sistema.



## Documentação da API:

Para gerar a documentação ```SWAGGER```, rode o comando abaixo antes de iniciar o servidor:

```
$ npm run start:gendoc
```

Execute o projeto:

```
$ npm run dev
``` 
Acesse a documentação em:
```
http://localhost:3000/api/docs  ==> (3000 é um exemplo de porta escolhida para a variável de ambiente APP_PORT).
```
