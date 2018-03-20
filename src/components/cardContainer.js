import React from 'react';


class CardContainer extends React.Component {
    
    render(){
        const containerStyle = {
            backgroundColor: this.props.backgroundColor
        }

        return (
            <div style={containerStyle} className="card-container">
                <h1 className="header-title">Choose your color</h1>
            </div>
        )
    }
}

export default CardContainer;