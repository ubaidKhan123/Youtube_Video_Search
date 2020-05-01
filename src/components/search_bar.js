import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }
    render() {
        return (
            <div className="search-bar">
                <img src={'./Img/search-logo.png'} />
                <input
                    // value = {this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value)} placeholder="  Search" />
                {/* Value of input : {this.state.term} */}
            </div>
        );
        
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}
export default SearchBar;