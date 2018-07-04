var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class List extends React.Component {

    render() {

        return (

            <LayoutContainer>

                <table class="container s12 highlight centered">
                    <thead>
                      <tr>
                          <th>By</th>
                          <th>Jam Type</th>
                          <th>Read More</th>
                      </tr>
                    </thead>

                    <tbody>

                      <tr>
                        <td>Agatha<br/>Orchard</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a class="waves-effect waves-light btn s12">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Henckels<br/>Bugis</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a class="waves-effect waves-light btn s12">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Clotilde<br/>Holland</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a class="waves-effect waves-light btn s12">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Dmitri<br/>Hougang</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a class="waves-effect waves-light btn s12">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Gustave<br/>East Coast</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a class="waves-effect waves-light btn s12">Read More</a></td>
                      </tr>
                      <tr>
                        <td>Kovacs<br/>Changi</td>
                        <td>Instrument<br/>Genre</td>
                        <td><a class="waves-effect waves-light btn s12">Read More</a></td>
                      </tr>

                    </tbody>
              </table>

              <div class="container col s12 right-align">
              <ul class="pagination">
                <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
                <li class="active"><a href="#!">1</a></li>
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