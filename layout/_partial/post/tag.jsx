const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { post, list_tags } = this.props;
        if (!(post.tags && post.tags.length)) {
            return null;
        }
        return <div className="article-tag" dangerouslySetInnerHTML={{
            __html: list_tags(post.tags, {
                show_count: false,
                class: 'article-tag'
            })
        }}></div>;
    }
}