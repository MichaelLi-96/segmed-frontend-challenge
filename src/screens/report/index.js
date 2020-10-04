import React, { Component } from "react";

//components
import Tag from "../../components/tag/index.js";

//css
import "./styles.css";


class Report extends Component {
    render() {
        return(
            <div id="report">
            	<div className="arrowContainer">
            		<div className="arrow">&#10094;</div>
            	</div>
            	<div id="reportContent">
            		<div id="reportTitle">Current Query:</div>
		            <div id="reportHeader">
		            	<div id="reportHeaderReportText">Report Text</div>
		            	<div id="reportHeaderTags">Tags</div>
		            </div>
	            	
	            	<div id="reportInfo">
		                <div id="reportInfoText">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
		                <div id="reportInfoTags">
	            			<div className="reportInfoTagsTitle">Active tags:</div>
	            			<div id="tagsContainer">
	            				<Tag label="#good" />
	            				<Tag label="#good" />
	            			</div>
	          				<div className="reportInfoTagsTitle">Unactive tags:</div>
	          				<div id="tagsContainer">
	          					<Tag label="#bad" />
	            				<Tag label="#bad" />
	            			</div>
		                </div>
	                </div>
                </div>
                <div className="arrowContainer">
            		<div className="arrow">&#10095;</div>
            	</div>
            </div>
        );
    }
}

export default Report;