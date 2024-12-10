//FUNCION CONSUMO API DOLAR
function cargarDatos() {
    fetch('http://localhost:8080/api/dolar') 
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener el tipo de cambio del dólar');
            }
            return response.json();
        })
        .then(data => {
            mostrarDatos(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error al cargar los datos:', error);
            document.getElementById('dolarInfo').innerHTML = '<div class="alert alert-danger" role="alert">Error al obtener el tipo de cambio del dólar.</div>';
        });
}

function mostrarDatos(data) {
    document.getElementById('compra').textContent = data.compra.toFixed(2);
    document.getElementById('venta').textContent = data.venta.toFixed(2);
    document.getElementById('fechaActualizacion').textContent = moment(data.fechaActual).format('DD/MM/YYYY HH:mm:ss');
    // document.getElementById('fechaActualizacion').textContent = new Date(data.fechaActualizacion).toLocaleString();
}

window.onload = cargarDatos;