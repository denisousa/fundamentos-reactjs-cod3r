import React, { Component } from 'react'
import Display from './Display'
import StepForm from './StepForm'
import Button from './Button'

export default class Counter extends Component {

    state = {
        step: this.props.step || 1,
        value: this.props.value || 0,
    }

    increment = () => {
        this.setState({
            value: this.state.value + this.props.step,
        })
    }

    decrement = () => {
        this.setState({
            value: this.state.value - this.props.step,
        })
    }

    changeStep = (newStep) => {
        this.setState({
            step: newStep 
        })
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>

                <StepForm
                    step={this.state.step}
                    onStepChange={this.changeStep}
                ></StepForm>
                <Display value={this.state.value}></Display>

                <Button 
                    onIncrement={this.increment}
                    onDecrement={this.decrement}
                ></Button>
            </div>
        )
    }
}

// Diferentes formas de utilizar o props para receber o valor na classe
// render() {
//     return (
//         <div>
//             <h2>Counter</h2>
//             <h4>Step: {this.state.props}</h4>
//             <h4>Value: {this.state.value}</h4>
//             <div>+</div>
//             <div>-</div>
//         </div>
//     )
// }
// =================
// constructor(props) {
//     super(props)
//     this.state = {
//         step: props.step,
//         value: 0,
//     }
// }