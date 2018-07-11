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
                {currentRequest.status === "pending" ? (<a id="my-music-card" class="btn-small">{currentRequest.name}</a>) : (<div></div>)}
                {currentRequest.status === "accepted" ? (<form><a class="waves-effect waves-light btn-small s12" href={"/request/" + currentRequest.user_id + "/contact"}>CONTACT {currentRequest.name}</a></form>) : (<div></div>)}
                {currentRequest.status === "declined" ? (<p>Delete your request &nbsp;&nbsp;&nbsp;<a class="waves-effect waves-light btn-small s12" href={"/request/" + currentRequest.id + "/delete"}>DELETE</a></p>) : (<div></div>)}
              </div>
            );
        });

        const arrayOfMyGenres = this.props.genres.map( function(currentGenre) {
            return (
              <a id="my-small-text-card" class="btn-small">{currentGenre.name}</a>
            );
        });

        const arrayOfMyInstruments = this.props.instruments.map( function(currentInstrument) {
            return (
              <a id="my-small-text-card" class="btn-small">{currentInstrument.name}</a>
            );
        });

        return (
            <LayoutContainer user_id={this.props.user_id} messages={this.props.messages}>

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


            <div class="container">
            <div class="row">
            <div class="col s12 m10 offset-m1 center">

              <table id="my-yellow-text">
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
                      <td><div id="my-card" class="card-panel center">{arrayOfMyInstruments}</div></td>
                    </tr>
                    <tr>
                      <td>Genre</td>
                      <td><div id="my-card" class="card-panel center">{arrayOfMyGenres}</div></td>
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

            </div>
            </div>
            </div>
            <br/><br/><br/><br/><br/>



            </LayoutContainer>
        );
    }
}

module.exports = Profile;