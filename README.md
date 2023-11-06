# estagio

Meu trabalho precisa do Node.js e as pendencias necessarias Express, mysql2, Sequelize, Nodemon. Usei o Workbench para fazer o banco de dados.

Comecei o trabalho fazendo o Frontend usando o HTML e CSS dentro do Visual.Code. Depois passei para o Backend usando o Node.js e fazendo os APIS necessarios.

Primeiramente teria que abrir o HTML e CSS no Visual Studio Code (index.html e style.css), logo em seguida abre o Vue(vue.js) também noVisual Studio Code . O HTML e CSS são os códigos que criam o site(frontend) e depois abrir o Vue.js que define a logíca do aplicativo, sendo que é um codigo no JavaScript que possiblita adicionar um novo veículo,. Sendo que o código HTML está interlaçado com o código Vue.js. Como por exemplo, o <veiculo-form> é um componente do Vue.js, já a tag <script> é definida para ser usada com a biblioteca Vue.js, já o <veiculo-form> vincular os campos de entrada às propriedades locadora, modelo, marca, ano, motor, portas, cambio e arCondicionado.

Segundamente, Teria que abrir os APIS, junto com os codígos do JavaScript e para executar corretamente esse código tem que baixar o Node.js no navegador e depois baixar as dependências dentro do cmd, primeiramente baixar o sequelize dentro do cmd com o comando <npm install sequelize express>, depois baixar <npm install nodemon>, depois baixar o <npm install express> e por fim o <npm install mysql2>. Desse modo com todos os pacotes instalados, abre o API com o comando index2.js.

Para executar os códigos do JavaScript teria que primeiro criar um arquivo no banco de notas chamado .env e nele expecificar as suas credenciais do MYQLS:
osDB_HOST=localhost
DB_USERNAME=username
DB_PASSWORD=password
DB_NAME=database
Posterioramente nomear esse arquivo como oculto e depois abrir os códigos dentro do Visual Studio Code.

Por fim teria que abrir o arquivo MYQSL e executar no WorkBench.
