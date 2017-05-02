import React from 'react';
import ReactDOM from 'react-dom';

const Widget = (props) =>
 	<input type="text" onChange={props.update} />;

class State extends React.Component {
	constructor() {
		super();
		this.state = {
			txt: 'this is the txt'
		}
	}
	update (e) {
		this.setState({txt: e.target.value})
	}
	render() {
		return (
			<div>
				<h1>{this.state.txt}</h1>
				<Widget update={this.update.bind(this)} />
			</div>
		);
	}
}



class Events extends React.Component {
	constructor() {
		super();
		this.state = { currentEvent: "----" };
		this.update = this.update.bind(this);
	}
	update (e) {
		this.setState({currentEvent: e.type});
	}
	render() {
		return (
			<div>
				<textarea
					onKeyPress={this.update}
					onCopy={this.update}
					onCut={this.update}
					onPaste={this.update}
					onFocus={this.update}
					onBlur={this.update}
					onDoubleClick={this.update}
					onTouchStart={this.update}
					onTouchMove={this.update}
					onTouchEnd={this.update}
					cols= "30"
					rows= "10" />
				<h1>{this.state.currentEvent}</h1>
			</div>
		);
	}
}

class Refs extends React.Component {
	constructor() {
		super();
		this.state = { a: '' }
	}
	update() {
		this.setState({
			a: this.a.refs.input.value,
			b: this.refs.b.value
		})
	}
	render() {
		return (
			<div>
				<Input 
					ref={ component => this.a = component }
					update={this.update.bind(this)}
				/> { this.state.a }
				<hr />
				<input 
					ref="b"
					type="text"
					onChange={this.update.bind(this)}
				/> { this.state.b } 
			</div>
		);
	}
}

class Input extends React.Component {
	render() {
		return (
			<div><input ref="input" type="text" onChange={this.props.update} /></div>
		);
	}
}
export default Refs;