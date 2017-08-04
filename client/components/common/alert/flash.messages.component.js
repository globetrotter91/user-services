import React, { Component } from 'react' ;
import { connect } from 'react-redux' ;
import FlashMessageComponent from './flash.message.component'; 
import { deleteFlashMessage } from './../../../actions/flash.messages.actions';

class FlashMessagesComponent extends Component {
    
    render(){
        console.log(this.props); 
        const messages = this.props.messages.map(message=>
            <FlashMessageComponent 
                key={message.id} 
                message={message} 
                deleteFlashMessage={this.props.deleteFlashMessage} />
        )
        console.log(messages);
        return(
            <div>{messages}</div>
        );
    }
}

FlashMessagesComponent.propTypes = {
    messages: React.PropTypes.array.isRequired, 
    deleteFlashMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        messages: state.flashMessages 
    }
}
export default connect(mapStateToProps, { deleteFlashMessage } )(FlashMessagesComponent); 