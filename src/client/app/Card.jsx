
import React from 'react';
import {render} from 'react-dom';
import Draggable from 'react-draggable';

export default class extends React.Component{

  drag(e){
    
    e.dataTransfer.setData("content",e.target.id);
  }

  render(){
    return(
        <div className="demo-card-square mdl-card mdl-shadow--2dp override-card" id={this.props.title} draggable="true" onDragStart={this.drag} >
                  <div className="mdl-card__title ">
                      <h1 className="pro-title">{this.props.title}</h1> 
                  </div>
                  <div className="assignee">
                      <h2 className="assignee-name">{this.props.name}</h2> 
                  </div>
                  <img src={this.props.image}></img>
                  <div className="assignee-desc">{this.props.desc}</div>
                  <div className="mdl-card__supporting-text">
                      Created on : <span className="date">{this.props.date}</span>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                      <span>{this.props.version}</span>
                      <span className="priority">{this.props.priority}</span> 
                  </div>
        </div>
      );
    }
  }