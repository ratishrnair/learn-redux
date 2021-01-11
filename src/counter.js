import React from "react";

import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

import { increment, decrement, reset, getApiUsers } from "./actions";

const mapStateToProps = (state) => ({
    count: state.count,
    userList: state.users
});

const mapDispatchToProps = {
    increment,
    decrement,
    reset,
    getApiUsers
};

const UserAvatar = (props) => {
    return <img  alt={props.avatar} src={props.avatar} />
};

const UserList = (props) => {
    const userList = props.userList;
    //const userList = useSelector((state) => [...state.users]);
    console.log('UserList userList 2 :: ', userList);
    const userListEls = userList.map((user, index) => {
        return <li key={user.id}> <UserAvatar avatar={user.avatar} /> {user.last_name}, {user.first_name}</li>
    });

    return (
        <ul>{userListEls}</ul>
    )
};



class Counter extends React.Component {
    
    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    reset = () => {
        this.props.reset();
    }

    fetchUsers = () => {
        this.props.getApiUsers();
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}> - </button>
                    <span style={{margin:'10px'}}>{ this.props.count /*this.state.count*/}</span>
                    <button onClick={this.increment}> + </button>
                    <br />
                    <button style={{marginTop:'10px'}} onClick={this.reset}>RESET</button>
                    <br />
                    <button style={{marginTop:'10px'}} onClick={this.fetchUsers}>GET USERS</button>
                </div>
                <div>
                    <UserList userList={this.props.userList} />
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);