import React, { Component } from "react";
import { Link } from "react-router-dom";

//components
import Tag from "../tag";

//css
import "./styles.css";

class searchResultsRow extends Component {
	renderActiveTags = () => {
		const activeTags = this.props.activeTags;
		const results = [];
		for(let i = 0; i < activeTags.length; i++) {
			results.push(
				<Tag
					key={i}
					label={activeTags[i]}
				/>
			)
		}
		return results.length === 0 ? "No tags active..." : results;
	}

    render() {
    	const { 
            id,
            title,
            intro
        } = this.props;

        return(
            <div className="searchResultsRow">
				<div className="searchResultsRowId">{id}</div>
				<Link
					className="searchResultsRowTitle" 
					to={{
						pathname: "/report",
						state: {
							id: this.props.id
						}
					}}
				>
					<div className="searchResultsRowTitleText">{title}</div>
				</Link>
				<Link
					className="searchResultsRowTextContainer" 
					to={{
						pathname: "/report",
						state: {
							id: this.props.id
						}
					}}
				>
					<div className="searchResultsRowText">{intro}</div>
            	</Link>
            	<div className="searchResultsRowTags">
            		{this.renderActiveTags()}
            	</div>
            </div>
        );
    }
}

export default searchResultsRow;