//The app works but it's huge! This is no different than if we pasted this in ourselves
// If it get sany bigger, it will be difficult to manage
//Let's break it up into pieces.
//The app in components is:
	// 1. header
	// 2. several teams
	// 3. Each team has a counter


//capital Header means a new component!
function Header(props){
	return(
		<div className="header">
				<h1>{props.title}</h1>
			</div>
	)
}

{/* We're making it so that different pieces can be compartamentalized*/}
function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title}/>
			<div className="teams">
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

ReactDOM.render(
	<Application title="National Championship Scoreboard"/>,
	document.getElementById('container')
)