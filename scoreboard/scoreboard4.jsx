//The app works but it's huge! This is no different than if we pasted this in ourselves
// If it get sany bigger, it will be difficult to manage
//Let's break it up into pieces.
//The app in components is:
	// 1. header-Check!
	// 2. several teams
	// 3. Each team has a counter


function Header(props){
	return(
		<div className="header">
				<h1>{props.title}</h1>
			</div>
	)
}

//Create a team component to use twice!
//Bring in props, os we can fill out the score and the name dynamically each time
function Team(props){
	return(
		<div className="team">
			{/* Call in each name with the right props */}
			<div className="team-name">{props.name}</div>
			<div className="counter">
				<button className="counter-change minus">-</button>
				<div className="team-score">{props.score}</div>
				<button className="counter-change plus">+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title}/>
			<div className="teams">
				<Team name="Alabama" score="0"/>
				<Team name="Clemson" score="0"/>
				
			</div>
		</div>
	)
}

ReactDOM.render(
	<Application title="National Championship Scoreboard"/>,
	document.getElementById('container')
)