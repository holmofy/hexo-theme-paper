const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { site, tagcloud } = this.props;
        const { tags } = site;

        if (!tags.length) {
            return null;
        }
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">{this.props.__('tagcloud')}</h3>
                <div className="widget tagcloud" dangerouslySetInnerHTML={{ __html: tagcloud() }}>
                </div>
            </div>
        );
    }
}