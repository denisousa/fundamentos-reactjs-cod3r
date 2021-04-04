import React from 'react'
import './App.css'
import './index.css'
import Card from './components/layout/Card'
import ConditionalComIf from './components/basic/ConditionalComIf'
import Conditional from './components/basic/Conditional'
import Repeticao from './components/basic/Repeticao'
import ComParametro from './components/basic/ComParametro'
import ComFilhos from './components/basic/ComFilhos'
import Primeiro from './components/basic/Primeiro'
import Father from './components/communication/direct/Father'
import Super from './components/communication/indirect/Super'
import Input from './components/form/Input'
import Counter from './components/counter/Counter'
import Mega from './components/mega/Mega'

export default props =>
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="cards">

            <Card title="#11 - Mega" color="#35404F">
                <Mega qtdNumbers={6}></Mega>
            </Card>

            <Card title="#10 - Counter" color="#00A03E">
                <Counter step={10} value={100}></Counter>
            </Card>

            <Card title="#09 - Input" color="#5BB12F">
                <Input></Input>
            </Card>

            <Card title="#08 - Comunicação indireta" color="#73C5FF">
                <Super></Super>
            </Card>

            <Card title="#07 - Comunicação direta" color="#9B539C">
                <Father lastname="Freitas"></Father>
            </Card>

            <Card title="#06 - Componente com condição (v2)" color="#FA6900">
                <ConditionalComIf number={2}></ConditionalComIf>
            </Card>

            <Card title="#05 - Componente com condição (v1)" color="#FFC33C">
                <Conditional number={1}></Conditional>
            </Card>

            <Card title="#04 - Componente com filhos" color="#59C4C5">
                <Repeticao></Repeticao>
            </Card>

            <Card title="#03 - Componente com filhos" color="#00C8F8">
                <ComFilhos>
                    <ul>
                        <li>Denis</li>
                        <li>Sara</li>
                        <li>Lucas</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card title="#02 - Componente com parâmetro" color="#53BBF4">
                <ComParametro title="This is the title"></ComParametro>
            </Card>
        
            <Card title="#01 - Primeiro Componente" color="#5E412F">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
    