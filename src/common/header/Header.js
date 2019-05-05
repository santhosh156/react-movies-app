 import React, {Component} from 'react';
import './Header.css';
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg';
import Modal from 'react-modal';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import FormHelperText from '@material-ui/core/FormHelperText';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

const TabContainer = function(props) {
    return(
    <Typography component="div" style={{padding: 0, textAlign: 'center'}}>
        {props.children}
    </Typography>
    )
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired
};

class Header extends Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            value: 0,
            username: "",
            usernameRequired: "dispNone"
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
    };

    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    };

    tabChangeHandler = (event, value) => {
        this.setState({value});
    };

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
    }

    inputUsernameHandler = (e) => {
        this.setState({username: e.target.value});
    }
    
    render() {
        return(
            <div className="app-header"> 
                <img src={logo} className='app-logo' alt='logo' />
                <div className="login-btn">
                    <Button variant="contained" color="default" onClick={this.openModalHandler}>LOGIN</Button>
                </div>

                <Modal  ariaHideApp={false} 
                        isOpen={this.state.modalIsOpen} 
                        contentLabel='Login' 
                        onRequestClose={this.closeModalHandler}
                        style={customStyles}>
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler} variant="fullWidth">
                        <Tab label="Login" />
                        <Tab label="Register" />
                    </Tabs>
                    {this.state.value === 0 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input id="username" type="text" className={this.state.username} onChange={this.inputUsernameHandler}/>
                            <FormHelperText className={this.state.usernameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                        <br /> <br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">Firstname</InputLabel>
                            <Input id="firstname" type="text" />
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Lastname</InputLabel>
                            <Input id="lastname" type="text" />
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="email">Username</InputLabel>
                            <Input id="email" type="text" />
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" />
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                            <Input id="contactno" type="text" />
                        </FormControl>
                        <br /> <br />
                        <Button variant="contained" color="primary">REGISTER</Button>
                    </TabContainer>
                    }
                </Modal>
            </div>
        );
    }
}

export default Header;