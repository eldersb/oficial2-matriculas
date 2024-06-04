# oficial2-matriculas
Repositório criado para a prova oficial 2 da disciplina de Gerenciamento e Qualidade de Software ministrada pelo professor Paulo Reis do centro universitário UNIME.

## Tecnologias Utilizadas
* Teste automatizado utilizando Cypress

## API testada:
* https://github.com/PHPauloReis/oficial2-matriculas-api/
* https://dear-creature-6bf.notion.site/Avalia-o-Oficial-2-Gerenciamento-e-Qualidade-de-Softwares-e329b3e6e42c4998ac1eff689e670d6e (Link dos storys)

## É necessário para executar os testes em sua máquina:
* Clonar o repositório para seu gerenciador de arquivos, depois executar o comando *npx cypress open* pelo terminal dentro dessa pasta
* Abrir o projeto no VS CODE para melhor visualização
* Ter instalado previamente o framework de automatação de testes Cypress
* Ter previamente instalado o Intelij Idea Community para executar a api com o JDK instalado no projeto
* Ter previamente instalado o Postman para rodar as requisições
* É possível acessar o endpoint: http://localhost:8080/v1/matriculas/{numero_da_matricula} definindo o número da matrícula a ser buscada
* Utilizar o method: GET
* Configurar a ferramenta Postman com o header: X-API-KEY = unime-qualidade-oficial2, pois todas as chamadas à API devem informar o header *X-API-KEY* com o valor *unime-qualidade-oficial*

--- Configuração do header no Postman: 
![postman](https://github.com/eldersb/oficial2-matriculas/assets/122701368/b40a9fc2-0be5-49c5-adbb-500717701062)


