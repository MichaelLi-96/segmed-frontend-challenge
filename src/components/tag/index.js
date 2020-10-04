import React, { Component } from "react";

//css
import "./styles.css";

class Tag extends Component {

    render() {
        return(
            <div id="tag">
				{this.props.label}
            </div>
        );
    }
}

export default Tag;