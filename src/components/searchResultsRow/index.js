import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Tag from "../tag";

//css
import "./styles.css";

class searchResultsRow extends Component {

	componentDidMount() {
		const searchResultsRow = document.getElementById(`searchResultsRow${this.props.id}`);
		if(this.props.odd === true) {
			searchResultsRow.style.backgroundColor = "#e6e6e6";
		}
	}

	renderTags = () => {
		const tags = this.props.tags;
		const results = [];
		for(let i = 0; i < tags.length; i++) {
			results.push(
				<Tag
					label="#good"
				/>
			)
		}
		return results;
	}

    render() {
    	const { 
            id,
            title,
            intro
        } = this.props;

        return(
            <div id={`searchResultsRow${this.props.id}`} className="searchResultsRow" >
				<div className="searchResultsRowId">{id}</div>
				<Link className="searchResultsRowTitle" to="/report">
					<div className="searchResultsRowTitleText">{title}</div>
				</Link>
				<Link className="searchResultsRowTextContainer" to="/report">
					<div className="searchResultsRowText">{intro}</div>
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