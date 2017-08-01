import React, { Component } from 'react';

class Screenshot extends Component {
    render () {
        return (
            
                <a href={this.props.urlPath}>
                        <img src={this.props.screenshotPath} className="screenshotImage" />
                        {/*
                        <form
                            className="delete-url"
                            onSubmit={this.props.handleURLDelete} 
                            onChange={false}>
                            <button onClick={() => { this.props.handleURLDelete(this.props.id) }}>
                            -
                            </button>
                        </form>
                        */}
                </a>

        );
    }
}

export default Screenshot;