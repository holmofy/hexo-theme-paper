const { Component } = require('inferno');

const Archive = require('./_partial/archive');

module.exports = class extends Component {
    render() {
        return <Archive {...this.props} pagination={2} index={true} />;
    }
}