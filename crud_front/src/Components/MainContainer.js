import React from 'react';
import update from 'react-addons-update'
import axios from 'axios';
import FormContainer from './FormContainer';
import ViewProduct from './ViewProduct';


class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      text: []
    }
  }
  componentDidMount(){ 
    axios.get('/characters')
    .then((response)=>{
      this.setState({
        text: response.data
      })
      console.log(response.data[0].name)
      console.log(this.state.text)
    })
    .catch((error)=>{
      console.log('error!');
    })
  }
  textSubmit=(textSubmit)=>{
    axios.post('/characters',{name: textSubmit})
    .then((res)=>{
      const addEndData = update(this.state.text,{$push:[res.data]});
      this.setState({text: addEndData});
    })
    .catch((error)=>{
      console.log(textSubmit);
      console.log('error!textSubmit');
    })
  }
  textChange = (id,textChange)=>{
    axios.patch('/characters/' + id,{name: textChange})
    .then((res)=>{
      const insertFiguer = this.state.text.findIndex(x=>x.id===id)
      const insertEndData = update(this.state.text,{[insertFiguer]: {$set: res.data}});
      this.setState({text: insertEndData});
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  textDelete = (id)=>{
    axios.delete('/characters/'+id)
    .then((res)=>{
      const deleteFigure = this.state.text.findIndex(x=>x.id===id);
      const deleteEndData = update(this.state.text,{$splice: [[deleteFigure, 1]]});     
      this.setState({text: deleteEndData});
    })
    .catch((error)=>{
      console.log(error);
    })
  }
  render() {
    return (
      <div>
        <FormContainer textSubmit={this.textSubmit}/>
        <ViewProduct textIndex={this.state.text} textChange={this.textChange} textDelete={this.textDelete}/>
      </div>
    );
  }
}

export default MainContainer;