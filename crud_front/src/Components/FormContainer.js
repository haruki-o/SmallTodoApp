import React from 'react';
 
class FormContainer extends React.Component {
  constructor(props){
    super(props);
    this.state={
      updateText: ''
    };
  }
  handleChange = (e)=>{
    this.setState({
      updateText: e.target.value
    });
  }
  handleSubmit = ()=>{
    this.props.textSubmit(this.state.updateText)
    this.setState({updateText: ''});
  }

  render(){
    return(
      <div>
        <form>
          <span>投稿</span>
          <input type="text" value={this.state.updateText} onChange={e=>this.handleChange(e)}/>
          <input type="button" value="+" onClick={this.handleSubmit}/>
        </form>
      </div>
    )
  }
}
export default FormContainer;
