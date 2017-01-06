// Sporting goods and electronics will change. prices will change for both.
//Get value from search bar
//Items in the table will change depending on what the user searched
//If we have an AJAX request, we wnat the lowest possible ancestor/parent to have access to stuff. Send it in as early as possible.



var products = [
	{
		category: 'Sporting Goods',
		price: '$49.99',
		name: 'Football',
		inStock: true

	},
	{
		category: 'Sporting Goods',
		price: '$9.99',
		name: 'Baseball',
		inStock: true
	},
	{
		category: 'Sporting Goods',
		price: '$29.99',
		name: 'Basketball',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$99.99',
		name: 'iPod Touch',
		inStock: true
	},
	{
		category: 'Electronics',
		price: '$399.99',
		name: 'iPhone5',
		inStock: false
	},
	{
		category: 'Electronics',
		price: '$199.99',
		name: 'Nexus 7',
		inStock: true
	}
]



function ProductCategoryRow(props){
	return(
		<tr>
			<td>{props.category}</td>
		</tr>
	)
}

function ProductRow(props){
	console.log(props);
	if(props.product.inStock === true){
		var productClass = "text-success"
	}else{
		var productClass = "text-danger"
	}
	return(
		<tr>
			<td className={productClass}>{props.product.name}</td>
			<td>{props.product.price}</td>
		</tr>
	)
}

//You can only return one thing, but you can put it all into one div to satisfy this requirement. We used table instead of div because the data is listed in a table
function ProductTable(props){

	//Init a local var to hold all our rows
	var rows = [];

	//Key is for React to manage DOM effectively. That way, the same item doesn't constantly get rewritten. (if football has an index of 1 and then baseball has an index of 0, it will only get rewritten.). You don't need this for one item. However, you don't know how many items you will have. With key, you won't have to reassign/reproduce everything every time a change is made. Keys are unique. Best way to do this is key++ each time.
	var key = 0; 

	//Init a local var to keep track of what category we are on
	var lastCategory = "";
	products.forEach(function(product, index){
		if(product.category != lastCategory){
			//We need to add this to our rows array because it is a new category
			rows.push(<ProductCategoryRow key={key} category={product.category} />)
			lastCategory = product.category;
			key++;
		}
		//Need to push rows on no matter if it's a new category or not
		rows.push(<ProductRow  key={key} product={product} />)
		key++;
	});

	console.log(rows);



// What we made will look like this: 
// rows = [
// 	<ProductCategoryRow products={products} />
// 		<ProductRow products={products} />,
// 		<ProductRow products={products} />,
// 		<ProductRow products={products} />
// 	<ProductCategoryRow products={products} />
// 		<ProductRow products={products} />,
// 		<ProductRow products={products} />,
// 		<ProductRow products={products} />
// ]


	return(
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
				</tr>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>
	)
}



function SearchBar(props){
	return(
		<form class = "search-bar">
			<input type = "text" placeholder="Search..."/>
			<div>
				<input type = "checkbox" />&nbsp;Only show products in stock
			</div>
		</form>
	)
}



function FilterableProductTable(props){
	return(
		<div className = "filterable-product-table">
			<SearchBar />
			<ProductTable />
		</div>
	)
}


//We aren't using a class(yet). So we have to include props as a param because there is no "this"
function Application(props){
	//Must return a single virtualDOM element
	return(
		<FilterableProductTable />
	)
}


//2 args, what and where
ReactDOM.render(
	<Application />,
	document.getElementById('container')
)


