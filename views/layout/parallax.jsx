var React = require("react");

class ParallaxContainer extends React.Component {
  render() {
    return (
      <div id="index-banner" class="parallax-container">
        {this.props.children}
      </div>
    );
  }
}

module.exports = ParallaxContainer;
