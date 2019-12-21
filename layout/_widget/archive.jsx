const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, theme, list_archives } = this.props;
        const { posts } = site;

        if (!posts.length) {
            return null;
        }
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">{this.props.__('archive_a')}</h3>
                <div className="widget" dangerouslySetInnerHTML={{ __html: list_archives({ show_count: theme.show_count, type: theme.archive_type }) }}>
                </div>
            </div>
        );
    }
}