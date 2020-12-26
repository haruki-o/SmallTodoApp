import React from 'react'

class ProductContainer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      changeText: ''
    }
  }
  handleInput = (e)=>{
    this.setState({
      changeText: e.target.value
    })
  }

  textChange = ()=>{
    this.props.textChange(this.props.id,this.state.changeText)
    this.setState({changeText: ''})
  }
  textDelete = ()=>{
    this.props.textDelete(this.props.id);
  }
  render(){
    return(
      <div>
        <p>{this.props.name}</p>
        <input type="button" value="変更" onClick={this.textChange}/>
        <input type="text" value={this.state.changeText} onChange={(e)=>this.handleInput(e)} />
        <input type="button" value="削除" onClick={this.textDelete}/>
      </div>
    )
  }
}
export default ProductContainer