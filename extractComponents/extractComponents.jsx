// From the snippet below extract the following components:
// - UserInfo
// - Avatar
// - Comment Body
// - Badges

// You may organize each however you want.
// I have not provided any data. Try and break it down without, and add in some dummy data when ready to test.

//What I know:
  //UserBadges is an array
  //Comment-body will have a heading, text and date
  //Name and avatarURL will be found in author object

//You actually don't need a render function for this b/c you're returning static data => make each of the components it's own function

function UserInfo(props){
  return(
    {/*JSX Here*/}
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
  )
},

function Avatar(props){
  return(
    {/*JSX Here*/}
    <img className="Avatar"
       src={props.author.avatarUrl}
       alt={props.author.name}
    />
  )
},

function CommentBody(props){
  return(
  {/*JSX Here*/}
    <div className="Comment-body">
      <h1>{props.commentHeading}</h1>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  )
},

var Badges = React.createClass({//this can use state while function Badges can't. this is longer but more verasatile than function Badges. only use function Badges if you won't need state.
  render:function(){
    return(
      <div className="badge">{props.userBadge[0]}</div>
    )
  }
})


// function Badges(props){
//   return(
//   {/*JSX Here*/}
//   )
// }

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo author="Something"/>
      <CommentBody />
      <div className="UserBadges">
        <Badge />
        
        <div className="badge">{props.userBadge[2]}</div>
      </div>
    </div>
  );
}

//What I was given:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-body">
//         <h1>{props.commentHeading}</h1>
//         <div className="Comment-text">{props.text}</div>
//         <div className="Comment-date">
//           {formatDate(props.date)}
//         </div>
//       </div>
//       <div className="UserBadges">
//         <div className="badge">{props.userBadge[0]}</div>
//         <div className="badge">{props.userBadge[1]}</div>
//         <div className="badge">{props.userBadge[2]}</div>
//       </div>
//     </div>
//   );
// }
