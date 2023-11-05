const { Sequelize, DataTypes } = require('sequelize');
const connection = new Sequelize('database', 'username', 'password', {
  dialect: 'mysql',
  host: 'localhost',
  port: 3306
});

const Veiculo = connection.define('veiculo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  locadora: {
    type: DataTypes.STRING,
  },
  modelo: {
    type: DataTypes.STRING,
  },
  marca: {
    type: DataTypes.STRING,
  },
  ano: {
    type: DataTypes.INTEGER,
  },
  motor: {
    type: DataTypes.STRING,
  },
  portas: {
    type: DataTypes.INTEGER,
  },
  cambio: {
    type: DataTypes.ENUM('manual', 'automático'),
  },
  ar_condicionado: {
    type: DataTypes.BOOLEAN,
  },
});

Veiculo.findAll().then(veiculos => {
  console.log(veiculos);
});
