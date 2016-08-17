var React = require('react');
var Prompt = require('../components/prompt');


var PromptContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function(){
    return {
        userName:""
    }
  },
  handleUpdateUser: function(e){
    this.setState({
      userName: e.target.value
    });
  },
  handleSubmitUser: function(e){
    e.preventDefault();
    var username = this.state.userName;
    this.setState({
      userName:''
    });

    if (this.props.routeParams.playerOne) {
        this.context.router.push({
          pathname: '/battle',
          query: {
            playerOne: this.props.routeParams.playerOne,
            playerTwo: username
          }
        });
    } else {
        this.context.router.push('/playerTwo/' + username)
    }
  },
  render: function(){
    return (
      <Prompt
      submitUser = {this.handleSubmitUser}
      updateUser = {this.handleUpdateUser}
      header = {this.props.route.header}
      userName = {this.state.userName}
      />
    )
  }
});

module.exports = PromptContainer;
