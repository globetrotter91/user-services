import React, { Component } from 'react' ;
import classnames from 'classnames';

export default class FormField extends Component{

    render(){
        if(this.props.type=='button'){
            const btnClass = 'btn '+ this.props.btnClass ;
            const linksWithButton = (this.props.links)?this.props.links:'' ;
            return(
                
                <div className="form-group">
                    <button disabled={this.props.disabledItems} className={btnClass}>
                        <i className={classnames('hide',{ "fa fa-spinner fa-pulse fa-fw" : this.props.loading} )}></i> {this.props.label}</button>
                    {linksWithButton}
                </div>                   
                
            );        
        }
        else if(this.props.type=='select'){
            return(
                <div className="form-group">
                    <label>{this.props.label}</label>
                    <select 
                        className='form-control'
                        name={this.props.name} 
                        onChange={this.props.onChange}
                        value={this.props.value}
                        required>
                        <option value="" disabled>Choose</option>
                        {this.props.options}
                    </select>
                </div>
            );        
        }else{
            return(
                <div className={classnames("form-group", { 'has-error': this.props.errors})}>
                    <label>{this.props.label}</label>
                    <input 
                        type={this.props.type} 
                        className="form-control" 
                        name={this.props.name} 
                        value={this.props.value} 
                        onChange={this.props.onChange}
                        onBlur= {this.props.checkUserExists}
                        placeholder= {this.props.placeholder}
                        autoFocus={this.props.autofocus}
                        required={this.props.required}/>
                        {this.props.errors && <span className="help-block">{this.props.errors}</span>}
                </div>
            );
        }
        
        
    }
}