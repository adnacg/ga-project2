var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Profile extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

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
                          <div id="my-card" class="card-panel center"><i class="material-icons"> location_on </i>{this.props.post[0].location}<span id="my-badge" class="new badge" data-badge-caption={this.props.post[0].status}></span><br/><br/>
                            <form id="my-action-btn" class="btn-small" method="post" action={"/request/" + this.props.post[0].id}><input type="submit" value="Requests"/></form>&nbsp;&nbsp;&nbsp;
                            <form id="my-action-btn" class="btn-small" method="post" action={"/request/" + this.props.post[0].id}><input type="submit" value="Delete" /></form>
                          </div>

                          <div id="my-card" class="card-panel center"><i class="material-icons"> location_on </i>{this.props.post[1].location}<span id="my-badge" class="new badge" data-badge-caption={this.props.post[1].status}></span><br/><br/>
                          <a id="my-action-btn" class="btn-small">Repost</a></div>
                        </td>
                      </tr>
                      <tr>
                        <td id="my-top-text">My Requests</td>
                        <td>
                          <div id="my-card" class="card-panel center"><i class="material-icons"> location_on </i>{this.props.request[0].location}<br/><br/><a id="my-music-card" class="btn-small">{this.props.request[0].name}</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">{this.props.request[0].status}</a></div>
                          <div id="my-card" class="card-panel center"><i class="material-icons"> location_on </i>{this.props.request[0].location}<br/><br/><a id="my-music-card" class="btn-small">{this.props.request[0].name}</a>&nbsp;&nbsp;&nbsp;<a id="my-music-card" class="btn-small">{this.props.request[0].status}</a></div>
                        </td>
                      </tr>

                    </tbody>
              </table>


            </LayoutContainer>

        );
    }
}

module.exports = Profile;