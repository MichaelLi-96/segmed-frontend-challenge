import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Tag from "../tag/index.js";

//css
import "./styles.css";

class searchResultsRow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	componentDidMount() {

	}

    render() {
        return(
            <div className="searchResultsRow">
				<div className="searchResultsRowId">1</div>
				<Link className="searchResultsRowTitle" to="/report">
					<div className="searchResultsRowTitleText">TitleTitleTitleTitleTitle</div>
				</Link>
				<Link className="searchResultsRowTextContainer" to="/report">
					<div className="searchResultsRowText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
            	</Link>
            	<div className="searchResultsRowTags">
            		<Tag label="#good" />
            		<Tag label="#good" />
					<Tag label="#good" />
            	</div>
            </div>
        );
    }
}

export default searchResultsRow;