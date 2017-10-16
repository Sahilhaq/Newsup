import React, { Component } from 'react';
import { options1, options2 } from '../data/news_source';

class NewsBar extends Component {
    constructor(props) {
        super(props)
    }

    renderOptions1() {
    
        return options1.map((option) => {
            return (
                <option className="dropdown-item" 
                onClick={this.selectedOption.bind(this)}
                key={option.value} href="#" 
                value={option.value}>
                {option.name}</option>
            );
        })
    }

    renderOptions2() {
        
            return options2.map((option) => {
                return (
                    <option className="dropdown-item" 
                    onClick={this.selectedOption.bind(this)}
                    key={option.value} href="#" 
                    value={option.value}>
                    {option.name}</option>
                );
            })
        }

    selectedOption(ev) {
        this.props.selectedOption(ev.target.value);
    }
    
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand mr-auto" href="#">Newsup</a>
                    <div className="btn-group">
                        <button className="btn btn-danger btn--no-hover">Source</button>
                        <button type="button" className="btn btn-danger dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <div className="d-menu dropdown-menu">
                            <div className="row">
                                <div className="col-md-6">
                                    {this.renderOptions1()}
                                </div>
                                <div className="col-md-6">
                                    {this.renderOptions2()}
                                </div>
                            </div>
                        </div>
                  </div>
                </nav>
            </div>
        );
    }
}

export default NewsBar;