function Application(props){
	// Capital Letters in React, means component.
	// Components return a single virtual DOM element
	//{props.message} was "Hello, World" originally. Now,it looks for the message in the ReactDOM.render

	return(
		<div className="application">
			<h1>{props.title}</h1>
			{props.message}
		</div>
	)
}

ReactDOM.render(
	// Tell React to put this on the DOM. Put it inside container.

	<Application message="Hello, Class" title="React Day!"/>,
	document.getElementById('container')
)