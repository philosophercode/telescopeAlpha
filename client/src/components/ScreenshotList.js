import React, { Component } from 'react';
import Screenshot from './Screenshot.js';

class ScreenshotList extends Component {
    render() {
        return (
            <div classID="screenshot-list">
                {this.props.urls.map((url, i) => {
                    return (
                        <Screenshot
                            windowTitle={url.window_title}
                            screenshotPath={url.screenshot_path}
                            urlPath={url.url_path}
                            id={url.id}
                            key = {i}/>
                    )
                })}
            </div>
        );
    }
}

export default ScreenshotList;