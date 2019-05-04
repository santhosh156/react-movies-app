 import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';

class Header extends Component {
    render() {
        return(
            <div className="app-header"> 
                <img src={logo} className='app-logo' alt='logo' />
                <div className="login-btn">
                    <Button variant="contained" color="default">Login</Button>
                </div>
            </div>
        );
    }
}

export default Header;