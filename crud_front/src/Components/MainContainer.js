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
    axios.get(process.env.REACT_APP_SERVER_URL+'/characters')
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
    axios.post(process.env.REACT_APP_SERVER_URL+'/characters',{name: textSubmit})
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
    axios.patch(process.env.REACT_APP_SERVER_URL+'/characters/' + id,{name: textChange})
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
    axios.delete(process.env.REACT_APP_SERVER_URL+'/characters/'+id)
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
//"build": "cd crud_front && npm run install && npm run build && cd ..",
//const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 3000; in start.js 44
// development->production 2 in startjs
//"heroku-postbuild": "cd crud_front && npm install && npm run build && cd .." in package.json rpggme2