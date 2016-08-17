var React = require('react');
var Battle = require('../components/Battle');
var GitHubHelper = require('../utils/githubHelper');

var BattleContainer = React.createClass({
    contextTypes:{
        router : React.PropTypes.object.isRequired
    },
    getInitialState : function(){
      return {
        isLoading : true,
        players : []
      }
    },
    componentDidMount : function(){
        var query = this.props.location.query;
        GitHubHelper.getPlayersInfo([query.playerOne, query.playerTwo]).then(
            function(playersInfo){
                this.setState({
                    isLoading:false,
                    players:[playersInfo[0], playersInfo[1]]
                });
            }.bind(this)
        );
    },
    handleInitiateBattle : function(){
        this.context.router.push({
            pathname: "/result",
            state:{
                players: this.state.players
            }
        });
    },
    render : function() {
      return (
        <Battle isLoading = {this.state.isLoading}
                players = {this.state.players}
                onInitiateBattle = {this.handleInitiateBattle}/>
      )
    }

});

module.exports = BattleContainer;
