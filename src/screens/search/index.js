import React, { Component } from "react";
import { MdSearch } from "react-icons/md";

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
		return <div>test</div>
	}

	handleChange = (event) => {
		this.setState({ filterString: event.target.value });
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
						<SearchResultsRow />
						<SearchResultsRow even={true} />
						<SearchResultsRow />
						<SearchResultsRow even={true} />
					</div>
				</div>
            </div>
        );
    }
}

export default Search;