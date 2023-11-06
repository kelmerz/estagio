const sequelize = require('sequelize');

const Veiculo = require('./models/veiculo');

const connection = new sequelize({
  dialect: 'mysql',
  host: 'localhost',
  port: 3306,
  database: 'veiculos',
  username: 'root',
  password: 'ANSKk08aPEDbFjDO',
});

Veiculo.init({
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  locadora: {
    type: sequelize.STRING,
  },
  modelo: {
    type: sequelize.STRING,
  },
  marca: {
    type: sequelize.STRING,
  },
  ano: {
    type: sequelize.INTEGER,
  },
  motor: {
    type: sequelize.STRING,
  },
  portas: {
    type: sequelize.INTEGER,
  },
  cambio: {
    type: sequelize.ENUM('manual', 'automático'),
  },
  arCondicionado: {
    type: sequelize.BOOLEAN,
  },
}, {
  tableName: 'veiculos',
  sequelize,
});

const veiculo = new Veiculo({
  locadora: 'Locadora XYZ',
  modelo: 'Modelo ABC',
  marca: 'Marca 123',
  ano: 2023,
  motor: '1.0L',
  portas: 4,
  cambio: 'automático',
  arCondicionado: true,
});

veiculo.save() /
  .then(() => {
    console.log('Veículo salvo com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao salvar veículo:', error);
  });

Veiculo.findAll()
  .then(veiculos => {
    console.log('Veículos recuperados com sucesso!');
    console.log(veiculos);
  })
  .catch(error => {
    console.error('Erro ao buscar veículos:', error);
  });
