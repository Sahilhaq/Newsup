import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// import components
import NewsBar from './news_bar';

// actioin creator
import { fetchArticles } from '../actions/index';

class NewsMain extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    constructor(props) {
        super(props)
        
        this.src = JSON.parse(localStorage.getItem('src'));
    }
    componentWillMount() {
        if(!this.src){
            this.props.fetchArticles('ign');
        } else {
            this.props.fetchArticles(this.src);
        }
    }

    renderArticles() {
        return this.props.articles.map((article) => {
            // var fewLines;
            // let description = article.description.split(" ");
            // fewLines = description.slice(0, 15).join(" ") ;
            
            return (
                <div key={article.title} className="media border p-3">
                    <img className="d-flex mr-3 article-img" src={article.urlToImage} />
                    <div className="media-body">
                        <h5 className="mt-0">{article.title}</h5>
                        <p>{article.description} <br /><a className="btn btn-info mt-2" href={article.url} target="_blank">Learn more</a></p>
                    </div>
                </div>
            );
        })
    }

    setSrc(src) {
        localStorage.setItem('src', JSON.stringify(src))
        window.location.reload();
    }
    
    render() {
        console.log(this.props.articles)
        return (
            <div className="container">
                <NewsBar selectedOption={src => this.setSrc(src)} />
                <h1>Latest Stories</h1>
                <div>{this.renderArticles()}</div>
            </div>    
        );
    }
}

function  mapStateToProps({ news }) {
    return { articles: news.articles }
}

export default connect(mapStateToProps, { fetchArticles })(NewsMain);