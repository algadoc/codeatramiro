import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class FullheightIframe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            iFrameHeight: '0px',
            source: props.src
        }
    }

    render() {
        return ( <
            iframe style = {
                { width: '100%', height: this.state.iFrameHeight, overflow: 'auto', alignself: 'center' }
            }
            onLoad = {
                () => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight": obj.contentWindow.document.body.scrollHeight + 'px'
                    });
                }
            }
            ref = "iframe"
            src = { this.state.source }
            width = "100%"
            height = { this.state.iFrameHeight }
            scrolling = "no"
            frameBorder = "0"
            title = { this.state.source }
            / >
        );
    }

}