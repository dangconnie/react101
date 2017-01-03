
var Application = React.createClass({
	getInitialStat: function(){
		return{
			image: 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg'
		}
	},

	render: function(){
		return(
			<div className="application">
				<button onClick = {flipCoin}>Click to Flip </button>
				<div><img src={this.state.image}></div> 
			</div>
		)
	}
})

ReactDOM.render(
	<Application imgSrc = 'http://www.marshu.com/articles/images-website/articles/presidents-on-coins/quarter-coin-head.jpg'/>,
	document.getElementById('container')
);