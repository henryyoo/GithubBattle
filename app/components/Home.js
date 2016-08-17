var React = require("react");
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var transparentBg = require('../styles/transparentBG.js').transparentBg;

var Home = React.createClass({
  render:function(){
    return (
      <div className = "jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
        <h1>Welcome to Github Battle! </h1>
        <p className='lead'>some fancy motto</p>
        <Link to="/playerOne">
          <button className='btn btn-block btn-success'>Continue</button>
        </Link>
      </div>
    );
  }
});
module.exports = Home;
