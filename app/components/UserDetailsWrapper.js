var React = require('react');

function UserDeatilsWrapper(props){
  return (
    <div className='col-sm-6'>
      <p className='lead'>{props.header}</p>
      {props.children}
    </div>
  )

}
module.exports = UserDeatilsWrapper;
