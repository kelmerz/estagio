export default {
    name: 'VeiculoForm',
    data() {
      return {
        locadora: '',
        modelo: '',
        marca: '',
        ano: '',
        motor: '',
        portas: '',
        cambio: 'manual',
        arCondicionado: false,
      };
    },
    methods: {
      adicionar() {
        const formData = new FormData();
        formData.append('locadora', this.locadora);
        formData.append('modelo', this.modelo);
        formData.append('marca', this.marca);
        formData.append('ano', this.ano);
        formData.append('motor', this.motor);
        formData.append('portas', this.portas);
        formData.append('cambio', this.cambio);
        formData.append('arCondicionado', this.arCondicionado);
  
        const request = new Request('http://localhost:3000/veiculos', {
          method: 'POST',
          body: formData,
        });
  
        fetch(request)
          .then((response) => {
            if (response.status === 200) {
              alert('Veículo adicionado com sucesso!');
            } else {
              alert('Ocorreu um erro ao adicionar o veículo.');
            }
          })
          .catch((error) => {
            alert(error);
          });
      },
    },
  };
