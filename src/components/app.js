import React from 'react';
import CardContainer from './cardContainer';
import InputColor from './inputColor'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value:"#0d47a1",
            color:'#0d47a1'
        };
      }

    getInputValue = (e) => {
        //this function reads the input and conects it to state
        let value = {...this.state.value};
        value = e.target.value;
        this.setState({ value });    
    }

    setBgColor = (e) => {
        //this function sets value to color propertie 
        this.setState({ color: this.state.value }); 
        // resets the state value
        this.setState( {value : ''} ) 
    }

    render(){
        return (
            <div className="main-container">
                <CardContainer backgroundColor={this.state.color} />
                <InputColor 
                    value={this.state.value}
                    color={this.getInputValue} 
                    setBgColor={this.setBgColor}/>
            </div>
            
        )
    }
}

export default App;