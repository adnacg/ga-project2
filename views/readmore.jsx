var React = require('react');
var LayoutContainer = require('./layout/main.jsx');

class Readmore extends React.Component {

    render() {

        return (

            <LayoutContainer>
                <div class="container">
                  <form class="col s12" method="POST" action={"/post/" + this.props.id}>

                    <table id="my-yellow-text" class="highlight centered">
                      <tbody>
                        <tr>
                          <td class="right">Bio</td>
                          <td>A violinist who’s living the rock and roll. Coffee addict, day- dreamer, and nature lover.</td>
                        </tr>
                        <tr>
                          <td class="right">Location</td>
                          <td>Orchard</td>
                        </tr>
                        <tr>
                          <td class="right">Pax</td>
                          <td>2</td>
                        </tr>
                        <tr>
                          <td class="right">Skill</td>
                          <td>Advance</td>
                        </tr>
                        <tr>
                          <td class="right">Instrument</td>
                          <td>Piano</td>
                        </tr>
                        <tr>
                          <td class="right">Genre</td>
                          <td>Rock</td>
                        </tr>
                        <tr>
                          <td class="right">Message</td>
                          <td>Hey there, I know I’m being unconventional here (as a violinist), but I would like to look for the like-minded to jam together. Looking for pianist or guitarist, preferably in rock and metal music. Connect with me and we can arrange a session!</td>
                        </tr>
                      </tbody>
                    </table>

                    <input class="waves-effect waves-light btn s12 right" type="submit" value="Request To Join" />
                  </form>
                </div>



            </LayoutContainer>

        );
    }
}

module.exports = Readmore;