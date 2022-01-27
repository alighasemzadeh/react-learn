import React from "react";
import { useState } from "react";


class Contact extends React.Component {
    render() {
        return (
            <>
                <form>
                    <label>Enter your name:
                        <input
                            type="text"
                            value={this.props.name}
                        />
                    </label>
                    {this.props.name}
                </form>
            </>
        );
    }
}

export default Contact;
