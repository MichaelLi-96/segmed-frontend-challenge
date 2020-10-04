import React, { Component } from "react";
import { connect } from 'react-redux';
import { filterChanged } from '../../actions';

//components
import Tag from "../../components/tag";

//css
import "./styles.css";

class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentReportId: this.props.location.state.id
		}
	}

	goBack = () => {
		this.props.history.goBack();
	}

	decodeHtml = (html) => {
	    let txt = document.createElement("textarea");
	    txt.innerHTML = html;
	    return txt.value;
	}

	prevReportClick = () => {
		const currentReports = this.props.reduxData.currentReports;
		let index = currentReports.indexOf(this.state.currentReportId);
		if(index > 0) {
			this.setState({ currentReportId: currentReports[index - 1] });
		}
	}

	nextReportClick = () => {
		const currentReports = this.props.reduxData.currentReports;
		let index = currentReports.indexOf(this.state.currentReportId);
		if(index < currentReports.length - 1) {
			this.setState({ currentReportId: currentReports[index + 1] });
		}
	}

    render() {
    	const report = this.props.reduxData.reports[this.state.currentReportId - 1];
    	const filter = this.props.reduxData.filter;

        return(
            <div id="report">
            	<div className="arrowContainer">
            		<div className="arrow" onClick={this.prevReportClick}>&#10094;</div>
            	</div>
            	<div id="reportContent">
            		<div id="reportBackButton" onClick={this.goBack}>Back</div> 
            		<div id="reportTitle">{filter === "" ? "All Documents Selected" : "Current Query: " + filter}</div>
		            <div id="reportHeader">
		            	<div id="reportHeaderReportText">{report.id}. {report.title}</div>
		            	<div id="reportHeaderTags">Tags</div>
		            </div>
	            	
	            	<div id="reportInfo">
		                <div id="reportInfoText">
		                	{this.decodeHtml(report.content)}
		                </div>
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
            		<div className="arrow" onClick={this.nextReportClick}>&#10095;</div>
            	</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
	reduxData: state.reduxData
});

export default connect(mapStateToProps, { 
	filterChanged
})(Report);

