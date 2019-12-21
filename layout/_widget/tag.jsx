const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, theme, list_tags } = this.props;
        const { tags } = site;

        if (!tags.length) {
            return null;
        }
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">{this.props.__('tags')}</h3>
                <div className="widget" dangerouslySetInnerHTML={{ __html: list_tags({ show_count: theme.show_count }) }}>
                </div>
            </div>
        );
    }
}