const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { __, url_for } = this.props;
        const { prev, next } = this.props.post;
        if (!(prev || next)) {
            return null;
        }
        return <nav id="article-nav">
            {prev ? <a href={url_for(prev.path)} id="article-nav-newer" className="article-nav-link-wrap">
                <strong className="article-nav-caption">{__('newer')}</strong>
                <div className="article-nav-title">
                    {prev.title ? prev.title : '(no title)'}
                </div>
            </a> : <span id="article-nav-newer" className="article-nav-link-wrap" />}
            {next ? <a href={url_for(next.path)} id="article-nav-older" className="article-nav-link-wrap">
                <strong className="article-nav-caption">{__('older')}</strong>
                <div className="article-nav-title">{next.title}</div>
            </a> : <span id="article-nav-older" className="article-nav-link-wrap" />}
        </nav>;
    }
}