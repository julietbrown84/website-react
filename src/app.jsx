var React = require('react');
var ReactDom = require('react-dom');
var Nav = require('./Nav');

var App = React.createClass({ 
	render: function () {
		return (
			<div className="app">
				<Nav />
			</div>
		);
	}
});


ReactDom.render(<App />, document.getElementById('app'));