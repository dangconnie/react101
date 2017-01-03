// Make a component called Application. 
// Components are uppercase!
// Components return a virtual DOM element.

function Application(){
	// Components return a virtual DOM element
	return(
		{/* Wrapper div called scoreboard */}
		<div className="scoreboard">
			{/*Div for header*/}
			<div className="header">
				<h1>National Championship Scoreboard</h1>
			</div>
			{/* Teams Wrapper */}
			<div className="teams">
				{/* className is exclusively for styling in React. I.e. you'd never grab and element by class. This is how you comment in jsx, not slash-slash. Makes it look like we will write some JS */}
				<div className="team">
					<div className="team-name">Alabama</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score">0</div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
				<div className="team">
					<div className="team-name">Clemson</div>
					<div className="counter">
						<button className="counter-change minus">-</button>
						<div className="team-score">0</div>
						<button className="counter-change plus">+</button>
					</div>
				</div>
			</div>
		</div>
	)
}

// ReactDOM.render puts a compoent into the DOM
// It takes 2 parameters:
// 1. The component to render
// 2. Where to render it


ReactDOM.render(
	<Application />,
	document.getElementById('container')
)