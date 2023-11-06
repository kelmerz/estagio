# estagio

Meu trabalho precisa do Node.js e as pendencias necessarias Express, mysql2, Sequelize, Nodemon. Usei o Workbench para fazer o banco de dados.

O código do frontend foi escrito em HTML, CSS e Vue.js. O HTML e CSS que são usados para criar uma interface do usuário do aplicativo. Já o Vue.js é usado para definir a lógica do aplicativo. O código do backend é escrito em Node.js e Express. O Node.js é usado para criar um servidor web. O Express é usado para lidar com solicitações da API. O código do banco de dados é escrito em MySQL e Sequelize. O MySQL é usado para armazenar os dados do aplicativo. O Sequelize é usado para interagir com o banco de dados.O aplicativo foi desenvolvido permitindo que os usuários aluguem carros de uma variedade de locadoras.



Intruções para executar o aplicativo:

Primeiramente teria que abrir o HTML e CSS no Visual Studio Code (index.html e style.css), logo em seguida abre o Vue(vue.js) também noVisual Studio Code . O HTML e CSS são os códigos que criam o site(frontend) e depois abrir o Vue.js que define a logíca do aplicativo, sendo que é um codigo no JavaScript que possiblita adicionar um novo veículo,. Sendo que o código HTML está interlaçado com o código Vue.js. Como por exemplo, o <veiculo-form> é um componente do Vue.js, já a tag <script> é definida para ser usada com a biblioteca Vue.js, já o <veiculo-form> vincular os campos de entrada às propriedades locadora, modelo, marca, ano, motor, portas, cambio e arCondicionado.

Segundamente, Teria que abrir os APIS, junto com os codígos do JavaScript e para executar corretamente esse código tem que baixar o Node.js no navegador e depois baixar as dependências dentro do cmd, primeiramente baixar o sequelize dentro do cmd com o comando <npm install sequelize express>, depois baixar <npm install nodemon>, depois baixar o <npm install express> e por fim o <npm install mysql2>. Desse modo com todos os pacotes instalados, abre o API com o comando index2.js.E depois conecte o código JavaScript ao servidor Express, importando a biblioteca axios no arquivo JavaScript para conectar com o HTML,abrindo um terminal e abra o código do servidor Express (index.js). Depois abra o arquivo dentro do Visual Studio Code, executando o código executando-o no terminal do Node.js.
Use a função saveVeiculo() para adicionar novos veículos ao banco de dados e a função fetchVeiculos() para recuperar a lista de veículos do banco de dados por meio do servidor Express conectado.

Por fim teria que abrir o arquivo MYQSL e executar no WorkBench.
