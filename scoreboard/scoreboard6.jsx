// State. V1.
// Props are immutable (they do not change!)
// State is a piece of data that does not change.
// State also has an initial value, that changes when X happens.
// In the case of the National Championship, it starts at 0...This is the initial state.
// Some kind of mutation or change occurs. 
// In order to use state, we have to make our functions, React classes.

var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}
]

function Header(props){
	return(
		<div className="header">
				<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			{/* Remove counter. Make it a component */}
			<Counter score={props.score} />
		</div>
	)
}

// React.createClass is a React component class that takes an object.
// The only REQUIRED property is a render method
// Every time state changes, render gets called. 

var Counter = React.createClass(
	{
		// We also need to add a getInitialState property that is part of React
		getInitialState: function(){
			// this function sets the initial state of a variable
			//it usually returns a single object
			return {
				score: 0
			}
		},

		losePoint: function(){
			console.log("You clicked on the down button!")
			//setState is a special React function that updates the state
			this.setState({
				score: (this.state.score - 1)
			})
		},
		gainPoint: function(){
			console.log("You clicked on the up button!")
			//setState is a special React function that updates the state
			this.setState({
				score: (this.state.score + 1)
			})
		},

		render: function(){
			// back to where we are used to!!
			return(
				<div className="counter">
					<button onClick={this.losePoint} className="counter-change minus">-</button>
					{/* Change the score from this.props.score to state! */}
					<div className="team-score"> {this.state.score} </div>
					<button onclick={this.gainPoint} className="counter-change plus">+</button>
				</div>
			)
		}
	}
);

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title}/>
			<div className="teams">

				{/* Using Map to loop thrugh our teams JSON. These are no longer necesary */}

				{props.teams.map((team, index) =>{
					return <Team key={index} name={team.name} score={team.score} />
				})}	

			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')
)