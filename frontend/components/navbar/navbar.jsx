import React from 'react';
import { Link } from 'react-router-dom';

// export default (props) => {
//
//   const display = props.currentUser ? (
//
//     // {
//     //   if (props.location.pathname === "/") {
//     //     props.history.push("/messages/channels/1/")
//     //   }
//     // }
//
//     <div>
//       <Link to="/messages/channels/1/" className="logo">Wookiee</Link>
//       <a className="btn" onClick={props.logout}>Log Out</a>
//     </div>
//   ) : (
//     <div>
//       <Link to="/" className="logo">Wookiee</Link>
//       <Link className="btn" to="/signup">Sign up</Link>
//       <Link className="btn" to="/login">Log in</Link>
//     </div>
//   );
//
//
//
//   return (
//     <header className="nav-bar">
//       <div>
//         {display}
//       </div>
//     </header>
//   );
//
// };
//-----------------------------class componrnt--------------------------
export default class NavBar extends React.Component {

  render() {

    // if (this.props.location.pathname === "/" && this.props.currentUser) {
    //   this.props.history.push("/messages/channels/1/");
    //   console.log(this.props);
    // }

  return (
    <header className="nav-bar">
      <div className="nav-btns">
        <Link to="/" className="logo">Slackr</Link>
        <Link className="btn" to="/signup">Sign up</Link>
        <Link className="btn" to="/login">Log in</Link>
      </div>
    </header>
  );
  }
}
