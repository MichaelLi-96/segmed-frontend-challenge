import React, { Component } from "react";
import { MdSearch } from "react-icons/md";
import { connect } from 'react-redux';
import { filterChanged } from '../../actions';

//components
import SearchResultsRow from "../../components/searchResultsRow";

//css
import "./styles.css";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			filterString: '',
		}
	}

	componentDidMount() {

	}

	renderResults = () => {
		const reports = this.props.reduxData.reports;
		const filter = this.props.reduxData.filter;
		const results = [];
		let count = 0;
		for(let i = 0; i < reports.length; i++) {
			const report = reports[i];
			if(report.content.toLowerCase().includes(filter.toLowerCase()) || report.title.toLowerCase().includes(filter.toLowerCase())) {
				results.push(
					<SearchResultsRow
						key={report.id}
						odd={count % 2 !== 0}
						id={report.id}
						title={report.title}
						intro={report.intro}
						tags={report.tags}
					/>
				)

				count++;
			}
		}
		return results;
	}

	handleChange = (event) => {
		this.props.filterChanged(event.target.value);
	}

    render() {
        return(
            <div id="search">
				<div id="searchBarContainer">
					<input type="text" id="searchBarInput" onChange={this.handleChange} placeholder="Search.." autoComplete="off" maxLength={50} />
					<MdSearch id="searchIcon" />
				</div>
				<div id="searchResultsContainer">
					<div id="searchResultsHeader">
						<div id="searchResultsId">ID</div>
						<div id="searchResultsReportText">Report Text</div>
					</div>
					<div className="searchResultsList">
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
	filterChanged
})(Search);
