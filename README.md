# estagio

Meu trabalho precisa do Node.js e as pendencias necessarias Express, mysql2, Sequelize, Nodemon. Usei o Workbench para fazer o banco de dados.

O código do frontend foi escrito em HTML, CSS e Vue.js. O HTML e CSS que são usados para criar uma interface do usuário do aplicativo. Já o Vue.js é usado para definir a lógica do aplicativo. O código do backend é escrito em Node.js e Express. O Node.js é usado para criar um servidor web. O Express é usado para lidar com solicitações da API. O código do banco de dados é escrito em MySQL e Sequelize. O MySQL é usado para armazenar os dados do aplicativo. O Sequelize é usado para interagir com o banco de dados.O aplicativo foi desenvolvido permitindo que os usuários aluguem carros de uma variedade de locadoras.


Intruções para executar o aplicativo:

Primeiramente teria que abrir o HTML e CSS no Visual Studio Code (index.html e style.css), logo em seguida abre o Vue(vue.js) também noVisual Studio Code . O HTML e CSS são os códigos que criam o site(frontend) e depois abrir o Vue.js que define a logíca do aplicativo, sendo que é um codigo no JavaScript que possiblita adicionar um novo veículo,. Sendo que o código HTML está interlaçado com o código Vue.js.
Como por exemplo, o <veiculo-form> é um componente do Vue.js, já a tag <script> é definida para ser usada com a biblioteca Vue.js, já a linha de codígo VehicleForm é usado para criar o formulário para adicionar um novo veículo. Possuindo  campos para as propriedades do veículo, como locadora, modelo, marca, ano, motor, portas, cambio e arCondicionado.A função saveVehicle() é usada para adicionar um novo veículo ao banco de dados. A função usa o modelo de dados Vehicle para criar um novo registro no banco de dados., já o <veiculo-form> vincular os campos de entrada às propriedades locadora, modelo, marca, ano, motor, portas, cambio e arCondicionado.

Segundamente, Teria que abrir os APIS, junto com os codígos do JavaScript.
Sendo a primeira etapa para executar corretamente esse código é baixar o Node.js no navegador e depois baixar as dependências dentro do cmd,A primeira etapa para executar o código é instalar as dependências necessárias. Isso pode ser feito usando o seguinte comando no terminal<npm install sequelize express nodemon mysql2>, este comando irá baixar os seguintes pacotes:
sequelize: uma biblioteca que fornece acesso ao banco de dados MySQL
express: um framework web para criar servidores HTTP
nodemon: um utilitário que reinicia automaticamente o servidor quando o código é alterado
mysql2: uma biblioteca que fornece acesso ao banco de dados MySQL
Iniciando o servidor

Depois de instalar as dependecias necessárias,  o servidor poderá ser aberto usando o seguinte comando no cmd:
nodemon index.js(o comando iniciará um servidor na porta 3000)

Conectando o código JavaScript ao servidor:
Para conectar o código JavaScript no servidor, precisará importar a biblioteca axios no arquivo JavaScript. A biblioteca axios fornece uma API para fazer solicitações HTTP. Dentro do arquivo JavaScript, poderá ser importando a biblioteca axios usando o  código:
JavaScript
<import axios from "axios>
Após  importar a biblioteca axios, poderá ser usado o método get() para fazer uma solicitação HTTP ao servidor. O método get() retorna uma resposta do servidor.

Por exemplo, o seguinte código fará uma solicitação HTTP ao servidor para recuperar a lista de veículos:
JavaScript
<const response = await axios.get("/vehicles");
const vehicles = response.data;>


Para adicionar um novo veículo ao banco de dados, poderá ser usada a função saveVehicle().

O seguinte código adiciona um novo veículo ao banco de dados:
JavaScript
const vehicle = {
  locadora: "Locadora 1",
  modelo: "Carro 1",
  marca: "Marca 1",
  ano: 2023,
  motor: "Motor 1",
  portas: 4,
  cambio: "Câmbio 1",
  arCondicionado: true,
};
await Vehicle.save(vehicle);

Recuperando uma lista de veículos:

Para recuperar uma lista de veículos do banco de dados, deverá ser utilizado a função findAll().

O seguinte código recupera uma lista de veículos do banco de dados:
JavaScript
const vehicles = await Vehicle.findAll();

 Já a função saveVeiculo() adiciona novos veículos ao banco de dados e a função fetchVeiculos() recupera a lista de veículos do banco de dados por meio do servidor Express conectado.

Executando o arquivo MYQSL:

O arquivo MYQSL contém as instruções SQL para criar o banco de dados e a tabela de veículos. Para executar o arquivo MYQSL, deverá ser utilizado p seguinte comando dentro do terminal.
<mysql -u root -p < database.sql>

Por fim baixar o sequelize dentro do cmd com o comando <npm install sequelize express>, depois baixar <npm install nodemon>, depois baixar o <npm install express> e por fim o <npm install mysql2>. Desse modo tendo todos os pacotes instalados, executa o API com o comando index2.js.E depois conecte o código JavaScript ao servidor Express, importando a biblioteca axios no arquivo JavaScript para conectar com o HTML,abrindo um terminal e abra o código do servidor Express (index.js). Depois abra o arquivo dentro do Visual Studio Code, executando o código executando-o no terminal do Node.js.


