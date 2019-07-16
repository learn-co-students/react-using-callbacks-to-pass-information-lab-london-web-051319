import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      palete: "#000"
    }
  }

  changePaleteColor = (color) => {
    this.setState({
      palete: color
    })
  }

  currentPaleteColor = () => this.state.palete;

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.currentPaleteColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  
  render() {
    return (
      <div id="app">
        <ColorSelector setPaleteColor={(newColor) => this.changePaleteColor(newColor)}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: chromeBoi
}
