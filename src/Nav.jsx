var React = require('react');

var Nav = React.createClass({
	render: function () {
		return (
			<div className="nav">
			hhhhhhhhhh

				<button onClick={this.handleClick} style="color: blue"; class='button button-blue'>
				  <b>
				  	{this.state.isToggleOn ? 'ON' : 'OFF'}
				  </b>
				</button>

			</div>
		);
	}
});

module.exports = Nav;
