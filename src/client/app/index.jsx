import React from 'react';
import {render} from 'react-dom';
import { Component } from 'react';
import $ from 'jquery';

import ColumnList from './ColumnList.jsx';
import Card from './Card.jsx';

export default class extends React.Component{

    constructor(props) {
        super(props);
    }

    componentWillMount(){
            this.setState({data:[],loading:true});
    }

    componentDidMount(){
        $.ajax({
                url: this.props.url,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({data: data,loading:false});
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
    }
	
	render () {
        if(this.state.loading){return <div>Loading..</div>};
    return(
        <section className="container">
                <div className="each-column"><ColumnList ref="todo" name="Todo" details={this.state.data.Todo}/></div>
                <div className="each-column"><ColumnList ref="input" name="Input" details={this.state.data.Inprogress}/></div>
                <div className="each-column"><ColumnList ref="qaready" name="QA Ready" details={this.state.data.QAFailed}/></div>
                <div className="each-column"><ColumnList ref="qafailed" name="QA Failed" details={this.state.data.QACompleted}/></div>
                <div className="each-column"><ColumnList ref="accepted" name="Accepted" details={this.state.data.Accepted}/></div>
                <div className="each-column"><ColumnList ref="closed" name="Closed" details={this.state.data.Closed}/></div>
        </section>
    );
  }
}
