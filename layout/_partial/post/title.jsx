const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { post, index, className, url_for } = this.props;
        const { link, title, path } = post;
        if (link) {
            return <h1 itemprop="name">
                <a className={className} href={url_for(link)} target="_blank" itemprop="url">{title}</a>
            </h1>;
        } else if (title) {
            if (index) {
                return <h1 itemprop="name">
                    <a className={className} href={url_for(path)}>{title}</a>
                </h1>;
            } else {
                return <h1 className={className} itemprop="name">
                    {title}
                </h1>;
            }
        }
    }
}