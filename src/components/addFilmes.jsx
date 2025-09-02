function AddFilmes(filme) {
    const lista = JSON.parse(localStorage.getItem('Lista')) || []

    lista.push(filme)

    localStorage.setItem('Lista', JSON.stringify(lista))
}

export default AddFilmes