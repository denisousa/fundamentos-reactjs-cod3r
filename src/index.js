import React from 'react' // Objeto obrigatório p/ o funcionamento do JSX
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(
    <div> 
        <App/>
        {/* <Card title="titulo">
            Conteudo
        </Card>
        <Primeiro />
        <ComParametro title="Hello Guys" />
        <ComFilhos>
            <ul>
                <li>Denis</li>
                <li>Maria</li>
                <li>Antonio</li>
            </ul>
        </ComFilhos> */}
    </div>,
    document.getElementById('root')
)

/* ANOTAÇÔES:
Sem o objeto React não é possível possuir o código HTML misturado com javascript.
Arquivo que responsável por exibir todo conteúdo na div com id 'root'.
JSX é sintaxe de HTML com JS.
*/