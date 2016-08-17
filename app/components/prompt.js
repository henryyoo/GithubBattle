var React = require('react');
var transparentBg = require('../styles/transparentBG').transparentBg
var PropTypes = React.PropTypes;
function Prompt(props){
  return (
    <div className='jumbotron col-sm-6 col-sm-offset-3 text-center' style={transparentBg}>
      <h1>{props.header}</h1>
      <div className = 'col-sm-12'>
        <form onSubmit={props.submitUser}>
          <div className='form-group'>
            <input className='form-control' type='text' placeholder='Github username'
             onChange={props.updateUser} value = {props.userName}/>
          </div>
          <div className='form-group col-sm-4 col-sm-offset-4'>
            <button className = 'btn btn-block btn-success' type='submit'>Continue</button>
          </div>
        </form>
      </div>
    </div>
  )
}

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  submitUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  userName: PropTypes.string.isRequired
}

module.exports= Prompt;
