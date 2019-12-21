const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { post, list_categories } = this.props;
        if (!(post.categories && post.categories.length)) {
            return null;
        }
        return <div className="article-category" dangerouslySetInnerHTML={{
                __html: list_categories(post.categories, {
                    show_count: false,
                    class: 'article-category',
                    style: 'none',
                    separator: '►'
                })
            }}></div>;
    }
}