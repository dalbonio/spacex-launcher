# SpaceX Launcher

1 - O frontend foi feito em React, utilizando majoritariamente os pacotes react-table, materialUI e styled-components. 

2 - Os dados foram filtrados pois muita informação da API não é interessante para um usuário final.

3 - O backend foi uma simples aplicação utilizando o express. Ele atua basicamente como um intermediário entre o cliente e a API da SpaceX. Qualquer manipulação de dados seria feita aqui, mas o objetivo era apenas consumir a API, então são apenas requisições.

4 - Não foi possível implementar testes A/B utilizando o Google Optimize porque o Google Analytics 4 ainda não oferece suporte ao Google Optimize.

5 - A aplicação está no heroku através do link https://spacexlauncher-dev.herokuapp.com/

6 - Para rodar localmente, é preciso acessar a pasta client, executar o comando `npm run build` para gerar os arquivos estáticos, e depois executar o comando `npm start` na raiz do projeto.

7 - O Script do HotJar foi instalado

