import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentColor: '#fff'
    }
  }

  // event listener Color Selctors updates currentColor
  // click event on cell turns its bg into the current color

  updateColor = (e) => {
    let elStyles = window.getComputedStyle(e.target)
    let bgColor = elStyles.getPropertyValue('background-color')
    this.setState({currentColor: bgColor})
  }

  changeCellBg = (e) => {
    e.target.style.backgroundColor = this.state.currentColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} changeCellBg={this.changeCellBg} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector updateColor={this.updateColor}/>
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
