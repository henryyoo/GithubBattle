var React = require('react');
var PropTypes = React.PropTypes;
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var UserDetails = require("../components/UserDetails");
var styles =require('../styles/transparentBG');
var Link = require('react-router').Link;
var MainContainer = require('../components/MainContainer');
var Loading = require('../components/Loading');

function StartOver(props){
  return (
    <div className='col-sm-12' style={styles.space}>
      <Link to='/playerOne'>
        <button type='button' className='btn btn-lg btn-danger'>Start Over</button>
      </Link>
    </div>
  )
}

function Result(props){
  if (props.scores[0] === props.scores[1]) {
    return (
      <MainContainer>
        <h1>It is a Tie!</h1>
        <StartOver />
      </MainContainer>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return props.isLoading ?
  <Loading text='Calculating' speed={500}/> :
  <MainContainer>
        <h1>Results!</h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Winner'>
            <UserDetails score={props.scores[winningIndex]} info={props.players[winningIndex]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header='Loser'>
            <UserDetails score={props.scores[losingIndex]} info={props.players[losingIndex]} />
          </UserDetailsWrapper>
        </div>
        <div className='col-sm-8 col-sm-offset-2'>
          <StartOver />
        </div>
  </MainContainer>
}

Result.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  players: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
}


module.exports = Result;
