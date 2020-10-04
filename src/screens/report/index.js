import React, { Component } from "react";
import { connect } from 'react-redux';
import { filterChanged, tagsChanged } from '../../actions';

//components
import Tag from "../../components/tag";

//css
import "./styles.css";

class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentReportId: this.props.location.state.id,
			currentDraggedTag: this.props.currentDraggedTag
		}
	}

	componentDidMount() {
		const report = document.getElementById("report");
		report.addEventListener("keydown", (e) => {
			switch (e.code) {
				case "Digit1":
					this.toggleTag("#badreport (1)");
					break;
				case "Digit2":
					this.toggleTag("#goodreport (2)");
					break;
				case "Digit3":
					this.toggleTag("#excellentreport (3)");
					break;
				default:
					break;
			}
		});

		const tags = document.getElementsByClassName("tag");
		for(let tag of tags) {
			tag.addEventListener('dragstart', this.dragStartEvent);
		}

		const reports = this.props.reduxData.reports;
		const droppableArea = document.getElementById("reportInfo");
		droppableArea.addEventListener('dragover',(e) => {
			e.preventDefault();
		});
		droppableArea.addEventListener('drop',(e) => {
			if(e.target.id === "reportInfoUnactiveTabContainer") {
				if(reports[this.state.currentReportId - 1].activeTags.includes(this.state.currentDraggedTag)) {
					this.toggleTag(this.state.currentDraggedTag);
				}
			}
			else if(e.target.id === "reportInfoActiveTabContainer" || e.target.id === "reportInfoText"){
				if(reports[this.state.currentReportId - 1].unactiveTags.includes(this.state.currentDraggedTag)) {
					this.toggleTag(this.state.currentDraggedTag);
				}
			}
		});
	}

	componentDidUpdate() {
		const tags = document.getElementsByClassName("tag");
		for(let tag of tags) {
			tag.addEventListener('dragstart', this.dragStartEvent);
		}
	}

	dragStartEvent = (e) => {
		this.setState({ currentDraggedTag: e.target.innerHTML });
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

	toggleTag = (tagLabel) => {
		const reports = this.props.reduxData.reports;
		
		if(reports[this.state.currentReportId - 1].activeTags.includes(tagLabel)) {
			const index = reports[this.state.currentReportId - 1].activeTags.indexOf(tagLabel);
			reports[this.state.currentReportId - 1].activeTags.splice(index, 1);
			reports[this.state.currentReportId - 1].unactiveTags.push(tagLabel);
			let arr = [];
			arr = reports[this.state.currentReportId - 1].unactiveTags;
			arr.sort((a, b) => a.charAt(a.length - 2) - b.charAt(b.length - 2));
			reports[this.state.currentReportId - 1].unactiveTags = arr;
		}
		else {
			const index = reports[this.state.currentReportId - 1].unactiveTags.indexOf(tagLabel);
			reports[this.state.currentReportId - 1].unactiveTags.splice(index, 1);
			reports[this.state.currentReportId - 1].activeTags.push(tagLabel)
			let arr = [];
			arr = reports[this.state.currentReportId - 1].activeTags;
			arr.sort((a, b) => a.charAt(a.length - 2) - b.charAt(b.length - 2));
			reports[this.state.currentReportId - 1].activeTags = arr;
		}
		this.props.tagsChanged(reports);
	}

	renderUnactiveTags = () => {
		const unactiveTags = this.props.reduxData.reports[this.state.currentReportId - 1].unactiveTags;
		const results = [];
		for(let i = 0; i < unactiveTags.length; i++) {
			const tagLabel = unactiveTags[i];
			results.push(
				<Tag
					key={i}
					label={tagLabel}
					toggleTag={() => this.toggleTag(tagLabel)}
				/>
			);
		}

		return results;
	}

	renderActiveTags = () => {
		const activeTags = this.props.reduxData.reports[this.state.currentReportId - 1].activeTags;
		const results = [];
		for(let i = 0; i < activeTags.length; i++) {
			const tagLabel = activeTags[i];
			results.push(
				<Tag
					key={i}
					label={tagLabel}
					toggleTag={() => this.toggleTag(tagLabel)}
				/>
			);
		}

		return results;
	}

    render() {
    	const report = this.props.reduxData.reports[this.state.currentReportId - 1];
    	const filter = this.props.reduxData.filter;

        return(
            <div id="report" tabIndex="0">
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
		                	<div id="reportInfoActiveTabContainer">
		            			<div className="reportInfoTagsTitle">Active tags:</div>
		            			<div id="tagsContainer">
		            				{this.renderActiveTags()}
		            			</div>
	            			</div>
	            			<div id="reportInfoUnactiveTabContainer">
		          				<div className="reportInfoTagsTitle">Unactive tags:</div>
		          				<div id="tagsContainer">
		          					{this.renderUnactiveTags()}
		            			</div>
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
	filterChanged,
	tagsChanged
})(Report);

