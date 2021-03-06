import React, { Component } from "react";
import { MdSearch } from "react-icons/md";
import { connect } from 'react-redux';
import { filterChanged, reportsChanged } from '../../actions';

//components
import SearchResultsRow from "../../components/searchResultsRow";

//css
import "./styles.css";

class Search extends Component {
	renderResults = () => {
		const reports = this.props.reduxData.reports;
		const currentReports = this.props.reduxData.currentReports;
		const results = [];
		for(let i = 0; i < currentReports.length; i++) {
			const report = reports[currentReports[i] - 1];
			results.push(
				<SearchResultsRow
					key={report.id}
					id={report.id}
					title={report.title}
					intro={report.intro}
					activeTags={report.activeTags}
				/>
			);
		}

		return results;
	}

	handleChange = (event) => {
		const filter = event.target.value;
		this.props.filterChanged(filter);

		let trimmedFilter = filter.trim();
		if(trimmedFilter.charAt(trimmedFilter.length - 1) === "|") {
			trimmedFilter = trimmedFilter.substring(0, trimmedFilter.length - 1).trim();
		}
		const filterArr = trimmedFilter.split(" | ");
		const reports = this.props.reduxData.reports;
		const ids = [];
		for(let i = 0; i < reports.length; i++) {
			const report = reports[i];
			let match = true;
			for(let i = 0; i < filterArr.length; i++) {
				let str = filterArr[i].toLowerCase();
				if(str.startsWith("-")) {
					str = str.substring(1, str.length);
					if(report.content.toLowerCase().includes(str)) {
						match = false;
					}
				}
				else {
					if(!report.content.toLowerCase().includes(str) && !report.title.toLowerCase().includes(str)) {
						match = false;
					} 
				}
			}
			if(match) {
				ids.push(report.id);
			}
		}
		this.props.reportsChanged(ids);
	}

    render() {
        return(
            <div id="search">
				<div id="searchBarContainer">
					<input type="text" id="searchBarInput" onChange={this.handleChange} placeholder="Search.." autoComplete="off" maxLength={50} value={this.props.reduxData.filter} />
					<MdSearch id="searchIcon" />
				</div>
				<div id="searchResultsContainer">
					<div id="searchResultsHeader">
						<div id="searchResultsId">ID</div>
						<div id="searchResultsReportText">Report Info</div>
					</div>
					<div id="searchResultsList">
						{this.renderResults()}
					</div>
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
	reportsChanged
})(Search);
