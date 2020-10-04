import React, { Component } from "react";

//css
import "./styles.css";

class Tag extends Component {
	getColor = () => {
		if(this.props.label === "#badreport (1)") {
			return "tagRedColor";
		}
		else if(this.props.label === "#goodreport (2)") {
			return "tagYellowColor";
		}
		else if(this.props.label === "#excellentreport (3)"){
			return "tagGreenColor";
		}
		else {
			return "tagDefaultColor";
		}
	}

    render() {
        return(
            <div className={`tag ${this.getColor()}`} onClick={this.props.toggleTag} draggable>
				{this.props.label}
            </div>
        );
    }
}

export default Tag;