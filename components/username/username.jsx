var	UserName = React.createClass({
	render:function(){
		return <div><input type="text" name="uid"/></div>;
	}
});

//Test mount; Uncomment when testing
React.render(<UserName/>,document.querySelector('body'));
