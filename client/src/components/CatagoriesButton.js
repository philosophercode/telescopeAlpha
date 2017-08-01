import React, { Component } from 'react';
import Screenshot from './Screenshot.js';

class Categories extends Component {
    render() {
        return (
            <div classID="category-list">
            {/*
                {this.props.categories.map((category, i) => {
                    return (
                        <div className="">
                            <h1>{category.category}</h1>
                            <Screenshot
                                windowTitle={url.window_title}
                                screenshotPath={url.screenshot_path}
                                urlPath={url.url_path}
                                id={url.id}
                                key = {i}/>
                        </div>
                    );
                })}
            */}
            </div>
        );
    }
}

export default Categories;