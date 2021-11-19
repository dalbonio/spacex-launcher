# SpaceX Launcher

1 - O frontend foi feito em React, utilizando majoritariamente os pacotes react-table, materialUI e styled-components. 

2 - Os dados da API foram filtrados pois seria muita informação para o usuário final.

3 - Os componentes e as páginas estão em pastas separadas. As requisições estão na pasta "src/services".

4 - O backend foi uma simples aplicação utilizando o express. Ele atua basicamente como um intermediário entre o cliente e a API da SpaceX. Qualquer manipulação de dados seria feita aqui, mas o objetivo era apenas consumir a API, então são apenas requisições.

5 - Não foi possível implementar testes A/B utilizando o Google Optimize porque o Google Analytics 4 ainda não oferece suporte ao Google Optimize.

6 - A aplicação está no heroku através do link https://spacexlauncher-dev.herokuapp.com/

7 - Eu optei por fazer o servidor consumir os arquivos estaticos gerados pela build do frontend para que apenas um servidor ficasse hospedado no heroku, mas o frontend e o backend são independentes. 

8 - Antes de executar a aplicação é necessário rodar o comando `npm install` na raiz do projeto e também na pasta "client"

9 - Para rodar localmente, é preciso acessar a pasta client, executar o comando `npm run build` para gerar os arquivos estáticos, e depois executar o comando `npm start` na raiz do projeto.

10 - O Script do HotJar foi instalado

