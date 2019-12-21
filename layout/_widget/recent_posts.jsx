const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { posts } = this.props.site;

        if (!posts.length) {
            return null;
        }
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">{this.props.__('recent_posts')}</h3>
                <div className="widget">
                    <ul>
                        {posts.sort('date', -1).limit(5).map(post => {
                            return (<li>
                                <a href={this.props.url_for(post.path)}>{post.title || '(no title)'}</a>
                            </li>);
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}