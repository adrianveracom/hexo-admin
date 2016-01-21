var React = require('react')
var api = require('./api')

var Publish = React.createClass({
  getInitialState: function() {
    return {
      message: '',
      loading: false
    };
  },

  generate: function(data) {
    return new Promise((resolve, reject) => {
      api.deploy().then(result => {
        resolve(data, result);
      });
    });
  },

  handlePublish: function(e) {
    e.preventDefault();
    this.setState({ loading: true, message: 'Packaging files (this will take a few min)'});
    this.generate().then(result => this.setState({
      message: 'Preview',
      loading: false
    }));
  },

  render: function () {

    var content = '';

    if (this.state.loading) {
      content = <div className="loading_bar"> {this.state.message} </div>
    } else {
      content = <div className="btn btn-main" onClick={this.handlePublish}> Publish </div>
    }

    return (
      <div>{content}</div>
    );
  }
})

module.exports = Publish
