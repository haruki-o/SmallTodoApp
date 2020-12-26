import React from 'react'
import ProductContainer from './ProductsContainer'

class ViewProduct extends React.Component{
  constructor(props){
    super(props)
  }
  
  render(){
    return(
      <div>
        {this.props.textIndex.map((index)=>{
          return(
            <ProductContainer name={index.name} id={index.id} textChange={this.props.textChange} textDelete={this.props.textDelete}/>
          )
        })}
      </div>
    )
  }
}
export default ViewProduct;