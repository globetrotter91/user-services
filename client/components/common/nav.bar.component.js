import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import { connect } from 'react-redux';
import { logout } from './../../actions/auth.actions'; 
import classnames from 'classnames'; 

class NavBarComponent extends Component{
    logout(e){
        e.preventDefault(); 
        this.props.logout(); 
    }

    render(){
        const { isAuthenticated } = this.props.auth ; 

        const userLinks = (
            <ul className="nav navbar-nav navbar-right" >
                <li><Link to="/profile">Profile</Link></li>
                <li><a href='#' onClick={this.logout.bind(this)}>Logout</a></li>
            </ul>
        );

        const guestLinks = (
            <ul className="nav navbar-nav navbar-right" >
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login" >Login</Link></li>
            </ul>
        );


        return (
            <div className={classnames('navbar navbar-fixed-top', {'navbar-default': !isAuthenticated,'navbar-inverse': isAuthenticated})}>
                <div className="container-custom">
                    <div className="navbar-header">
                        <Link to="/" className='navbar-brand'>User Services</Link>
                        
                        <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#navbar-main">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse" id="navbar-main">
                        
                        {isAuthenticated ? userLinks: guestLinks}
                    </div>
                </div>
            </div>
        );
    }
}

NavBarComponent.propTypes = {
    auth: React.PropTypes.object.isRequired , 
    logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, { logout })(NavBarComponent) ;