import '../../App.css'
import './NoList.css'

function NoList() {

    return (
        <div id='noList-container'>
            <h3>Você ainda não tem filmes na sua lista</h3>
            <p>Que tal adicionar alguns?</p>
            <button>Adicionar Filme +</button>
        </div>
    )
}

export default NoList;