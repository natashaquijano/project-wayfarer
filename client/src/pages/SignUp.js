import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Loader from 'react-loader-spinner'


import axiosInstance from '../helper/apiConfig'

class SignUp extends Component {

    state = {}

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleClick = () => {
        this.setState({
            loading: true
        })
        axiosInstance.post("/signup", this.state)
            .then((response) => {
                const { token, userId } = response.data
                window.localStorage.setItem("token", token)
                this.props.history.push(`/profile/${userId}`)
            })
            .catch((error) => {
                this.setState({
                    loading: false
                })
                console.log("eerrror", error.message)
            })
    }
    render() {
        if (this.state.loading) {
            return (
                <Loader
                    type="Oval"
                    color="#00BFFF"
                    height="100"
                    width="100"
                />
            )
        }

        return (
            <div>
                <h1>Sign up page</h1>
                <Form>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input type="password" name="password" id="password" onChange={this.handleInputChange} placeholder="password placeholder" />
                    </FormGroup>

                    <Button onClick={this.handleClick}> Submit</Button>
                </Form>
            </div>
        );
    }
}

export default SignUp;