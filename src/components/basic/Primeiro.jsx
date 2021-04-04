import React from 'react'

function Primeiro() {
    return <div>
        <h1>Primeiro componente React</h1>
    </div>
}

export default Primeiro

/* ANOTAÇÔES:
Formas de ter um único elemento além do div no retorno da função
<>
    <h1>Primeiro componente React</h1>
</>
======================================
<React.Fragment>
    <h1>Primeiro componente React</h1>
</React.Fragment>


Minimizar ao máximo o método:

export default () => 
    <>
        <h1>Primeiro componente React</h1>
        <h2>Exemplo de componente React</h2>
    </>
}
*/