import axios from 'axios';

class Veiculo {
  constructor(locadora, modelo, marca, ano, motor, portas, cambio, arCondicionado) {
    this.locadora = locadora;
    this.modelo = modelo;
    this.marca = marca;
    this.ano = ano;
    this.motor = motor;
    this.portas = portas;
    this.cambio = cambio;
    this.arCondicionado = arCondicionado;
  }
}
function saveVeiculo(veiculo) {
  axios.post('/veiculos', veiculo)
    .then(response => {
      console.log('Veículo salvo com sucesso!');
    })
    .catch(error => {
      console.error('Erro ao salvar veículo:', error);
    });
}

function fetchVeiculos() {
  axios.get('/veiculos')
    .then(response => {
      const veiculos = response.data;
      console.log('Veículos recuperados com sucesso!');
      console.log(veiculos);
    })
    .catch(error => {
      console.error('Erro ao buscar veículos:', error);
    });
}

const veiculo = new Veiculo('Locadora XYZ', 'Modelo ABC', 'Marca 123', 2023, '1.0L', 4, 'Automático', true);
saveVeiculo(veiculo);

// Usage example
fetchVeiculos();
