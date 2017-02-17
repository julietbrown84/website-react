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
// Button component - put in new file?
var Button = React.createClass({
  getInitialState: function() {
    return {
      bgColor: 'red'
    }
  },
  
  handleClick: function() {
    this.setState({
      bgColor: 'blue'
    })
  },
  
  render : function() {
    return (
      <div>
        <button 
          onClick={this.handleClick} 
          style={{backgroundColor:this.state.bgColor}}>Button</button>
      </div>
    )
  }
});

module.exports = Nav;
module.exports = Button;
