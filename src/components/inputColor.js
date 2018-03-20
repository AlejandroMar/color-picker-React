import React from 'react';

class InputColor extends React.Component {

    handleClick = (e) => {
       e.preventDefault();
       console.log('color');
        // Explicitly focus the text input using the raw DOM API
        this.textInput.focus()
        this.props.setBgColor();
    }
    
    render() { 
        
        return ( 
            <div>
                <form action=""  onSubmit={this.handleClick}>
                <input 
                    value={this.props.value}
                    className="color-input"
                    type="text" 
                    onChange={this.props.color}  
                    ref={(input) => { this.textInput = input; }}
                    placeholder="write a color"/>
                <button 
                    className="set-color-btn" 
                    onClick={this.handleClick}
                    >select color
                    </button>
                </form>
               
            </div>
            
        )
    }
}
 
export default InputColor;