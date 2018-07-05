var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Profile extends React.Component {

    render() {

        return (

            <LayoutContainer>

                <table id="my-yellow-text" class="container s12">
                    <thead>
                      <tr>
                          <th></th>
                          <th></th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>Bio</td>
                        <td><div id="my-card" class="card-panel">Amateur jazz vocalist with a quirky personality. Open to jamming together with anyone, preferably a saxophonist!</div></td>
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
                        <td>My Posts</td>
                        <td><div id="my-card" class="card-panel"><a id="my-music-card" class="btn-small">Active</a>&nbsp;&nbsp;&nbsp;<a id="my-action-btn" class="btn-small">Requests</a>&nbsp;&nbsp;&nbsp;<a id="my-action-btn" class="btn-small">Delete</a></div><br/><div id="my-card" class="card-panel"><a id="my-music-card" class="btn-small">Expired</a>&nbsp;&nbsp;&nbsp;<a id="my-action-btn" class="btn-small">Repost</a></div></td>
                      </tr>
                      <tr>
                        <td>My Requests</td>
                      </tr>

                    </tbody>
              </table>


            </LayoutContainer>

        );
    }
}

module.exports = Profile;