import React, { Component } from 'react';
import axiosInstance from '../helper/apiConfig';
import NavBar from '../components/NavBar';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Loader from 'react-loader-spinner';
import Footer from '../components/Footer/Footer';
import Photo from '../components/Images/SF.jpg';

class Profile extends Component {
    state = {
        loading: true
    }
    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    componentDidMount() {
        const token = window.localStorage.getItem("token");
        const { userId } = this.props.match.params
        axiosInstance.get(`/users/${userId}`, { headers: { "Authorization": token } })
            .then((response) => {
                const { user } = response.data
                this.setState({ ...user, loading: false })
            })
            .catch((error) => {
                this.setState({
                    loading: false
                })
                alert(error.message)
            })

    }

    handleClick = () => {
        this.setState({
            loading: true
        })
        const { userId } = this.props.match.params
        const token = window.localStorage.getItem("token");
        axiosInstance.put(`/users/${userId}`, this.state, { headers: { "Authorization": token } })
            .then(() => {
                this.setState({
                    loading: false
                })
                alert("your profile has been successfully updated")
            })
            .catch((error) => {
                this.setState({
                    loading: false
                })
                alert(error.message)
            })
    }
    render() {
        const { firstName, lastName, city, createdOn } = this.state
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
                <NavBar history={this.props.history} />
                <h1>User Profile</h1>
                <h1>{createdOn}</h1>
                <Form>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input type="text" name="firstName" id="firstName" value={firstName || ""} onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input type="text" name="lastName" id="lastName" value={lastName || ""} onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value={city || ""} onChange={this.handleInputChange} placeholder="with a placeholder" />
                    </FormGroup>
                    <Button onClick={this.handleClick}> Submit</Button>
                </Form>

                <img src={Photo} />

                <Footer />

            </div>
        );
    }
}

export default Profile;