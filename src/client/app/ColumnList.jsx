import React from 'react';
import {render} from 'react-dom';
import Card from './Card.jsx';
import IScroll from 'iscroll';

export default class extends React.Component{
	constructor(props) {
				super(props);

				this.node = undefined;
				this.iscroll = undefined;
			}

			componentDidMount(){
				this.iscroll = new IScroll(this.node, {
				mouseWheel: true,
				scrollbars: true,
				disableMouse: true
				})
			}

			componentWillUnmount() {
				this.iscroll.destroy();
			}

			componentDidUpdate(){
				this.iscroll.refresh();
			}
					
			dragover(e){
				e.preventDefault();
			}

			drop(e){
				e.preventDefault();
				var data = e.dataTransfer.getData("content");
				e.target.appendChild(document.getElementById(data));
			}

	render(){
		var val=this.props.details;
		return(
				<section className="columns" onDrop={this.drop} onDragOver={this.dragover}>
					<h1 className="col-head">{this.props.name}</h1>
					<section className="card-wrapper" ref={node => this.node = node }>
					<div>
						{val.map(todo => (<Card title={todo.title} name={todo.name} date={todo.date}
		 				version={todo.version} image={todo.image} desc={todo.desc} priority={todo.priority}/> ))}
					</div>
					</section>
				</section>
			);
		
	}
}
