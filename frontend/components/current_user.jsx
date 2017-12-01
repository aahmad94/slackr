import React from 'react';

// CurrentUser
export default (props) => (
  <div className="sb-current-user-div">
    {console.log("-------PROPS---------")}
    {console.log(props.currentUser.displayname)}
    {console.log("-------ENDPROPS---------")}
    <p className="sb-current-user">{props.currentUser.displayname}</p>
  </div>
);
