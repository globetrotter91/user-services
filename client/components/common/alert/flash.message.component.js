import React, { Component } from 'react' ;
import classnames from 'classnames' ; 

class FlashMessageComponent extends Component {
    
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    console.log(props); 
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    );
  }

}

FlashMessageComponent.propTypes = {
//    message: React.PropTypes.object.isRequired, 
  //  deleteFlashMessage: React.PropTypes.func.isRequired
}

export default FlashMessageComponent; 