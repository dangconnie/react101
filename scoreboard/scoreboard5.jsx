// This app sucks! There is no point in using React. Everything is hardcoded. So far..
//Let's make some JSON!
//Map() is a slower way of doing for loops


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

				{/* Using Map to loop thrugh our teams JSON. These are no longer necesary
				<Team name="Alabama" score="0"/>
				<Team name="Clemson" score="0"/>*/}
				{/*{props.teams[0].name}*/}


				{/*props.teams is an array of team objects */}
				{/*return a component with the current team name and score */}

				
				{/*same as {props.teams.map(function(team)) => and => is the ES6 way of writing funtion(){}*/}

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