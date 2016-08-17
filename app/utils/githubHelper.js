var React = require('react');
var Axios = require('axios');

function getUserInfo(username){
  return Axios.get('https://api.github.com/users/' + username);
}

function getRepos(username){
  return Axios.get('https://api.github.com/users/' + username + '/repos');
}

function getTotalRepoStars(repos){
  return repos.data.reduce(function(prev,curr){
    return prev + curr.stargazers_count;
  }, 0);
}

function getPlayerData(player){
  return getRepos(player.login)
    .then(getTotalRepoStars)
    .then(function(totalStars){
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScore(players){
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars
  ];
}

var gitHubHelper = {
  getPlayersInfo: function(players){
    return  Axios.all(players.map(function(username){
        return getUserInfo(username);
    }))
    .then(function(infos){
      return infos.map(function(info){
        return info.data;
      })
    })
    .catch(function(err){
      console.warn("Error while calling Github API" , err);
    })
  },

  battle: function(players){
    var playerOneData = getPlayerData(players[0]);
    var playerTwoData = getPlayerData(players[1]);

    return Axios.all([playerOneData,playerTwoData])
    .then(calculateScore)
    .catch(function(err){
      console.log('error while battling', err);
    });
  }
}
module.exports = gitHubHelper;
