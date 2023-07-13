const resultado = document.querySelector('#resultado')
const pb = document.querySelector('#pb')
const pl = document.querySelector('#pl')

const calcIPC = () => {
const ipc = (pb.value / pl.value) .toFixed(2)
resultado.innerHTML = `IPC: ${ipc} `

}


