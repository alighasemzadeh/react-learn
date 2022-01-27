import React from "react";

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }


    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your name:
                        <input
                            value={this.state.value} onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                    {this.state.value}
                </form>
            </>
        );
    }
}

export default Contact;
