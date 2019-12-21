const { Component } = require('inferno');

const Article = require('./_partial/article');

module.exports = class extends Component {
    render() {
        return <Article {...this.props} post={this.props.page} index={false} />;
    }
}