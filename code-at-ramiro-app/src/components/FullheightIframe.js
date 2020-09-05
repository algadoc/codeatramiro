import React, { Component, PropTypes } from 'react'
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
        return (
            <iframe
                style={{width:'90%', height:this.state.iFrameHeight, overflow:'hidden', alignself:'center'}}
                onLoad={() => {
                    const obj = ReactDOM.findDOMNode(this);
                    this.setState({
                        "iFrameHeight":  obj.contentWindow.document.body.scrollHeight + 'px'
                    });
                }}
                ref="iframe"
                src={this.state.source}
                width="90%"
                height={this.state.iFrameHeight}
                scrolling="no"
                frameBorder="0"
            />
        );
    }
}
