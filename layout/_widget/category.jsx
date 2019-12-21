const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, theme, list_categories } = this.props;
        const { categories } = site;

        if (!categories.length) {
            return null;
        }
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">{this.props.__('categories')}</h3>
                <div className="widget" dangerouslySetInnerHTML={{ __html: list_categories({ show_count: theme.show_count }) }}>
                </div>
            </div>
        );
    }
}