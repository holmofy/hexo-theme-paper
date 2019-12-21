const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { post, className, date, date_xml, date_format, url_for } = this.props;
        return <a href={url_for(post.path)} className={className}>
            <time datetime={date_xml(post.date)} itemprop="datePublished">{date(post.date, date_format)}</time>
        </a>;
    }
}