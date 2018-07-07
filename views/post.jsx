var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class List extends React.Component {

    render() {

        return (

            <LayoutContainer user_id={this.props.user_id}>

                <table id="my-yellow-text" class="container s12 highlight centered">
                    <thead>
                      <tr>
                          <th>Post By</th>
                          <th></th>
                          <th>Requirement</th>
                          <th>Read More</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td >Agatha</td>
                        <td id="td-to-left"><i class="material-icons"> location_on </i>Orchard</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a id="my-action-btn" class="waves-effect waves-light btn-small" href="http://localhost:3000/post/1">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Henckels</td>
                        <td id="td-to-left"><i class="material-icons"> location_on </i>Bugis</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a id="my-action-btn" class="waves-effect waves-light btn-small">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Clotilde</td>
                        <td id="td-to-left"><i class="material-icons"> location_on </i>Holland</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a id="my-action-btn" class="waves-effect waves-light btn-small">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Dmitri</td>
                        <td id="td-to-left"><i class="material-icons"> location_on </i>Hougang</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a id="my-action-btn" class="waves-effect waves-light btn-small">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Gustave</td>
                        <td id="td-to-left"><i class="material-icons"> location_on </i>East Coast</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a id="my-action-btn" class="waves-effect waves-light btn-small">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Kovacs</td>
                        <td id="td-to-left"><i class="material-icons"> location_on </i>Changi</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a id="my-action-btn" class="waves-effect waves-light btn-small">Read More</a></td>
                      </tr>

                    </tbody>
              </table>

              <div class="container col s12 right-align">
              <ul class="pagination">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li id="my-yellow-background" class="active"><a href="#!">1</a></li>
                <li class="waves-effect"><a href="#!">2</a></li>
                <li class="waves-effect"><a href="#!">3</a></li>
                <li class="waves-effect"><a href="#!">4</a></li>
                <li class="waves-effect"><a href="#!">5</a></li>
                <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
              </ul>
              </div>





            </LayoutContainer>

        );
    }
}

module.exports = List;