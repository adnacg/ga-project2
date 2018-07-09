var React = require('react');
var LayoutContainer = require('./layout/main.jsx');
var ParallaxContainer = require('./layout/parallax.jsx');

class Profile extends React.Component {

    render() {

        const arrayOfMyPost = this.props.posts.map( function(currentPost) {
            return (
              <div key={currentPost.id} id="my-card" class="card-panel center"><i class="material-icons"> location_on </i>{currentPost.location}&nbsp;
              <span id="my-badge" class="new badge" data-badge-caption={currentPost.status}></span><br/><br/>
                <form class="waves-effect waves-light btn-small s12" method="post" action={"/request/" + currentPost.post_id}>
                  <input type="submit" value="See Requests"/>
                </form>&nbsp;&nbsp;&nbsp;
                <form class="waves-effect waves-light btn-small s12" method="post" action={"/post/" + currentPost.post_id + "/update"}>
                  <input type="submit" value="Update" />
                </form>&nbsp;&nbsp;&nbsp;
                <form class="waves-effect waves-light btn-small s12" method="get" action={"/post/" + currentPost.post_id + "/delete"}>
                  <input type="submit" value="Delete" />
                </form>
              </div>
            );
        });

        const arrayOfMyRequest = this.props.requests.map( function(currentRequest) {
            return (
              <div key={currentRequest.id} id="my-card" class="card-panel center"><i class="material-icons"> location_on </i>{currentRequest.location}&nbsp;
              <span id="my-badge" class="new badge" data-badge-caption={currentRequest.status}></span>
                <br/><br/>
                <a id="my-music-card" class="btn-small">{currentRequest.name}</a>&nbsp;&nbsp;&nbsp;
                {currentRequest.status === "accepted" ? (<a class="waves-effect waves-light btn-small s12">CONTACT</a>) : (<div></div>)}
                {currentRequest.status === "declined" ? (<p>Delete the request &nbsp;&nbsp;&nbsp;<a class="waves-effect waves-light btn-small s12" href={"/request/" + currentRequest.id + "/delete"}>DELETE</a></p>) : (<div></div>)}
              </div>
            );
        });

        return (

            <LayoutContainer user_id={this.props.user_id}>

                  <ParallaxContainer>
                    <div class="section no-pad-bot">
                      <div class="container">
                        <h3 class="header center text-lighten-2">{this.props.user[0].name}'s Profile</h3>
                        <div class="row center">
                          <div class="container update-profile-btn">
                            <form method="post" action={"/user/" + this.props.user_id}>
                              <input class="waves-effect waves-light btn s12 center" type="submit" value="Update Profile" />
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="parallax"><img src="/assets/images/profile.jpg" alt="img1" /></div>
                  </ParallaxContainer>

                  <br/>

                <table id="my-yellow-text" class="container">
                    <thead>
                      <tr>
                          <th></th>
                          <th></th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>Bio</td>
                        <td><div id="my-card" class="card-panel center">{this.props.user[0].bio}</div></td>
                      </tr>
                      <tr>
                        <td>Instrument</td>
                        <td><div id="my-card-borderless" class="card-panel"><a id="my-music-card" class="btn-small">Guitar</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">Other</a></div></td>
                      </tr>
                      <tr>
                        <td>Genre</td>
                        <td><div id="my-card-borderless" class="card-panel"><a id="my-music-card" class="btn-small">Jazz</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">Blues</a></div></td>
                      </tr>
                      <tr>
                        <td id="my-top-text">My Posts</td>
                        <td>

                          {arrayOfMyPost}

                        </td>
                      </tr>
                      <tr>
                        <td id="my-top-text">My Requests</td>
                        <td>

                          {arrayOfMyRequest}

                        </td>
                      </tr>
                    </tbody>
              </table>
              <br/><br/><br/><br/><br/>



            </LayoutContainer>

        );
    }
}

module.exports = Profile;