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
            usernameRequired: "dispNone",
            loginpassword: "",
            loginpasswordRequired: "dispNone",
            firstname: "",
            firstnameRequired: "dispNone",
            lastname: "",
            lastnameRequired: "dispNone",
            email: "",
            emailRequired: "dispNone",
            password: "",
            passwordRequired: "dispNone",
            contactno: "",
            contactnoRequired: "dispNone"
            
        };
    }

    openModalHandler = () => {
        this.setState({modalIsOpen: true});
        this.setState({usernameRequired: "dispNone"});
        this.setState({value: 0})
    };

    closeModalHandler = () => {
        this.setState({modalIsOpen: false});
    };

    tabChangeHandler = (event, value) => {
        this.setState({value});
    };

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({usernameRequired: "dispBlock"}) : this.setState({usernameRequired: "dispNone"});
        this.state.loginpassword === "" ? this.setState({loginpasswordRequired: "dispBlock"}) : this.setState({loginpasswordRequired: "dispNone"});
    }

    inputUsernameHandler = (e) => {
        this.setState({username: e.target.value});
    }

    inputLoginpasswordHandler = (e) => {
        this.setState({loginpassword: e.target.value});
    }

    registerClickHandler = () => {
        this.state.firstname === "" ? this.setState({firstnameRequired: "dispBlock"}) : this.setState({firstnameRequired: "dispNone"});
        this.state.lastname === "" ? this.setState({lastnameRequired: "dispBlock"}) : this.setState({lastnameRequired: "dispNone"});
        this.state.email === "" ? this.setState({emailRequired: "dispBlock"}) : this.setState({emailRequired: "dispNone"});
        this.state.password === "" ? this.setState({passwordRequired: "dispBlock"}) : this.setState({passwordRequired: "dispNone"});
        this.state.contactno === "" ? this.setState({contactnoRequired: "dispBlock"}) : this.setState({contactnoRequired: "dispNone"});
    }

    inputFirstnameHandler = (e) => {
        this.setState({firstname: e.target.value});
    }

    inputLastnameHandler = (e) => {
        this.setState({lastname: e.target.value});
    }

    inputEmailHandler = (e) => {
        this.setState({email: e.target.value});
    }

    inputPasswordHandler = (e) => {
        this.setState({password: e.target.value});
    }

    inputContactnoHandler = (e) => {
        this.setState({contactno: e.target.value});
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
                            <InputLabel htmlFor="loginpassword">Password</InputLabel>
                            <Input id="loginpassword" type="password" className={this.state.password} onChange={this.inputLoginpasswordHandler} />
                            <FormHelperText className={this.state.loginpasswordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <Button variant="contained" color="primary" onClick={this.loginClickHandler}>LOGIN</Button>
                    </TabContainer>}
                    {this.state.value === 1 &&
                    <TabContainer>
                        <FormControl required>
                            <InputLabel htmlFor="firstname">First Name</InputLabel>
                            <Input id="firstname" type="text" className={this.state.firstname} onChange={this.inputFirstnameHandler} />
                            <FormHelperText className={this.state.firstnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="lastname">Last Name</InputLabel>
                            <Input id="lastname" type="text" className={this.state.lastname} onChange={this.inputLastnameHandler} />
                            <FormHelperText className={this.state.lastnameRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input id="email" type="email" className={this.state.email} onChange={this.inputEmailHandler} />
                            <FormHelperText className={this.state.emailRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input id="password" type="password" className={this.state.password} onChange={this.inputPasswordHandler} />
                            <FormHelperText className={this.state.passwordRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <FormControl required>
                            <InputLabel htmlFor="contactno">Contact No.</InputLabel>
                            <Input id="contactno" type="text" className={this.state.contactno} onChange={this.inputContactnoHandler} />
                            <FormHelperText className={this.state.contactnoRequired}>
                                <span className="red">required</span>
                            </FormHelperText>
                        </FormControl>
                        <br /> <br />
                        <Button variant="contained" color="primary" onClick={this.registerClickHandler}>REGISTER</Button>
                    </TabContainer>
                    }
                </Modal>
            </div>
        );
    }
}

export default Header;