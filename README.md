# React App

### Start project
npm start

### Conceitos
- Os valores passados pelos 'props' são imutáveis. Ele é somente leitura.
- Nos componentes é possível passar propriedades do pai p/ o filho.
- O filho renderiza as propriedades do pai com props.children
- O pai renderiza o filho importando-o
- É possível passar um propriedade pro filho de forma indireta, ou seja, no momento da criação do componente pai, repassar a propriedade pro filho.
- Comunicação direta é quando o Pai passa informações pro filho.
- Comunicação indireta é quando o Filho pega informações do pai.
- O pai sempre tem uma referência do filho. 
- Os componentes possuem um estado. Componentes baseados em classe e componentes baseados em funções.
- A comunicação indireta consiste em o Pai passar uma função pro filho, e este invocar a função. 
- Mudamos estados a partir de eventos
- Existem discussões sobre o uso de "this" no Javascript
- Podemos ter componentes baseados em classe ou componentes baseados em função
- Existem os componentes com estado e os sem estado
- Quanto mais componentes sem estado, melhor, pois é mais fácil de ser usado

### Links Uteis
http://everyknightshoulddesign.blogspot.com/2013/08/beautiful-color-palettes-their-hex-codes.html