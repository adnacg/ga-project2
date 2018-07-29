var React = require("react");
var LayoutContainer = require("./layout/main.jsx");
var ParallaxContainer = require("./layout/parallax.jsx");

class RequestContact extends React.Component {
  render() {
    return (
      <LayoutContainer
        user_id={this.props.user_id}
        messages={this.props.messages}
      >
        <br />
        <br />
        <br />

        <div class="container">
          <div class="row">
            <div class="col s12 m8 offset-m2 center">
              <div>
                <div id="my-card" class="card">
                  <div class="card-content">
                    <span class="card-title">
                      Here is the contact information for
                    </span>
                    <h4>{this.props.contactInfo[0].name}</h4>
                    <p id="my-badge">{this.props.contactInfo[0].bio}</p>
                    <br />
                    <p id="my-enclosure">{this.props.contactInfo[0].email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = RequestContact;
