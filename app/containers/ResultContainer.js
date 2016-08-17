var React = require('react');
var Result = require('../components/Result');
var GitHubHelper = require('../utils/githubHelper');

var ResultContainer = React.createClass({
  getInitialState : function(){
    return {
        isLoading: true,
        scores: []
    }
  },
  componentDidMount : function(){
      GitHubHelper.battle(this.props.location.state.players).then(function(scores){
        this.setState({
          isLoading:false,
          scores: scores
        });
      }.bind(this));
  },
  render: function(){
    return (
      <Result
      isLoading = {this.state.isLoading}
      players = {this.props.location.state.players}
      scores ={this.state.scores} />
    );
  }
});




module.exports = ResultContainer;
