var	UserName = React.createClass({displayName: "UserName",
	render:function(){
		return React.createElement("div", null, React.createElement("input", {type: "text", name: "uid"}));
	}
});

//Test mount; Uncomment when testing
ReactDOM.render(React.createElement(UserName, null),document.querySelector('body'));
