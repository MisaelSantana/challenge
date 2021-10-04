// Functions JavaScripts;

// Get function onLoad for to bring all functions;
onLoad();

async function onLoad() {
    const url = 'http://localhost:9000/api/dados'
    try {
        const response = await axios.get(url);
        getAllData(response);
    }
    catch(error) {
        console.log(error);
    }
}

// Function that brings all the data;
function getAllData(response) {
    const dados = response.data;
    const list = document.getElementById('dados');
    dados.forEach(dado => {
        const item = document.createElement('li');
        item.setAttribute('data-id', dado.id);
        item.innerHTML = `${dado.id} - ${dado.partida} - ${dado.destino} - ${dado.km40} - ${dado.km60} - ${dado.km80} - ${dado.km100}`;
        list.appendChild(item);
    });
}

// Function that create new data;
function createData() {
    const url = 'http://localhost:9000/api/dado';
    
    const data = {
        partida: document.getElementById('partida').value,
        destino: document.getElementById('destino').value,
        km40: document.getElementById('km40').value,
        km60: document.getElementById('km60').value,
        km80: document.getElementById('km80').value,
        km100: document.getElementById('km100').value
    }

    axios.post(url, data, clearForm)
    .then((response) => {
        if(response.status === 200) {
            alert('Inserido com sucesso!');
        }
    }).catch((error) => {
        console.log(error);
    });
    
    // After post, this function clear field;
    with (document) {
        getElementById('partida').value = "";
        getElementById('destino').value = "";
        getElementById('km40').value = "";
        getElementById('km60').value = "";
        getElementById('km80').value = "";
        getElementById('km100').value = "";
    }
}

// Function clear field;
function clearForm() {
    with (document) {
        getElementById('partida').value = "";
        getElementById('destino').value = "";
        getElementById('km40').value = "";
        getElementById('km60').value = "";
        getElementById('km80').value = "";
        getElementById('km100').value = "";
    }
}
