//Render is run during initial state and when called in React.createClass
//With button: Looking into THIS particular object for its flipCoin object
//getInitalState is special to React
//To make it look like it flipped, you need to change out this.state.image with the image of other side of the coin. When the image is changed, render is fired again
//React is beneficial for scaling and management
//To make random flip, make a checkState variable in flipCoin and use JS to generate random num. Use if/else to determine which image to show. Math.round(Math.random())
//render function's return must have only ONE wrapper tag for all its items. 

const image1 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-head.jpg'
const image2 = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'

var Application = React.createClass({
	getInitialState: function(){
		return{
			image: image1,
			flipped: false
		}
	},

	flipCoin: function(){
		

		this.setState({
			image: image2
		});
	},

	render: function(){
		return(
			<div className="application">
				<button onClick = {this.flipCoin}>Click to Flip </button>
				<div><img src={this.state.image} /></div> 
			</div>
		)
	}
});

ReactDOM.render(
	<Application />,
	document.getElementById('container')
);