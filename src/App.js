import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import ReactFragmentUse from'./ReactFragmentUse.js';
//import WithoutUseFragment from './WithoutUseFragment.js';




/***********====================In React 16========================****************/


//Create a new Context

const MyContext = React.createContext();

//Create a provider component

class MyProvider extends Component{
    state = {
        name: 'Nimmi',
        age: 23,
        cool: true
    }

    render(){
        return(
            <MyContext.Provider value={{
                state:this.state,
                growAYearOlder: ()=>this.setState({
                    age:this.state.age+1
                })
            }}>
            {this.props.children}
            </MyContext.Provider>
        );
    }
}
class Family extends Component{
    render() {
        return (
            <Person />
        );
    }
}

class Person extends Component{
    render() {
        return (
            <MyContext.Consumer>
            {(context)=>(
                <React.Fragment>
                    <p>I am {context.state.name}.</p>
                    <p>Age : {context.state.age}</p>
                    <button onClick={context.growAYearOlder}>Birthday</button>
                </React.Fragment>
            )}
            </MyContext.Consumer>
        );
    }
}

class App extends Component {
    render() {
        return (
            <MyProvider>  
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Family />
                   {/* <table>
                        <tbody>
                            <tr>
                                <ReactFragmentUse/>
                            </tr>
                            <tr>
                                <WithoutUseFragment/>
                            </tr>
                        </tbody>
                    </table>*/}
                    
                </div>
            </MyProvider>
        );
    }                                                                             
}

/***********===================Before react 16(without using redux)=========================****************/
//This how we pass data into depth eariler (Not using Redux)
/*class Family extends Component{
    render() {
        return (
            <Person name={this.props.name}/>
        );
    }
}

class Person extends Component{
    render() {
        return (
            <div>I am person {this.props.name}</div>
        );
    }
}

class App extends Component {
    state = {
        name: 'Nimmi',
        age: 23,
        cool: true
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    I am {this.state.name}

                {//Pass data to children So we can pass data on grand children can't pass data directly to grand children}
                    <Family name={this.state.name}/>
                </p>
            </div>
        );
    }                                                                             
}*/

export default App;
