import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters' ;
import tick from './practice/time' ;
class App extends Component {
  state = {counters:[{id:1,value:0},
    {id:2,value:3},
    {id:3,value:0},
    {id:4,value:0}]
 };
handleReset= ()=>{
    const counters=this.state.counters.map(c=>{c.value=0; return c;});
    this.setState({counters})};
handleDelete = counterId =>{const counters=this.state.counters.filter(c=>c.id!==counterId);this.setState({counters})};
handleIncrement = counter => {const counters=[...this.state.counters];
    const indx=counters.indexOf(counter);
counters[indx]={...counter};
counters[indx].value++;
this.setState({counters});
};
  render(){
  return (
    <React.Fragment>
    <NavBar count ={this.state.counters.filter(c=>c.value>0).length }/>
    <h1>{tick()}</h1>
    <main className="container">
      <Counters counters={this.state.counters} 
      onDelete={this.handleDelete}  
      onIncrement={this.handleIncrement} 
      onReset={this.handleReset}/>
    </main>
    </React.Fragment>
  );
}
}
export default App;
