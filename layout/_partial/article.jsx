const { Component, Fragment } = require('inferno');

const Date = require('./post/date');
const Category = require('./post/category');
const Gallery = require('./post/gallery');
const Title = require('./post/title');
const Tag = require('./post/tag');
const Nav = require('./post/nav');

module.exports = class extends Component {
    render() {
        const { post, index, theme, url_for, __, config } = this.props;
        let excerpt;
        if (post.excerpt && index) {
            excerpt = post.excerpt;
            if (theme.excerpt_link) {
                excerpt += `<p class="article-more-link"><a href="${url_for(post.path)}#more">${theme.excerpt_link}</a></p>`;
            }
        }

        return <Fragment>
            <article id={`${post.layout}-${post.slug}`} className={`article article-type-${post.layout}`} itemscope itemprop="blogPost">
                <div className="article-meta">
                    <Date {...this.props} className='article-date' date_format={null} />
                    <Category {...this.props} />
                    <div id={url_for(post.path)} class="article-views leancloud_visitors" data-flag-title={post.title} title={__('post.views')}>
                        <i class="fas fa-eye"></i>
                        <span class="leancloud-visitors-count"></span>
                    </div>
                </div>
                <div className="article-inner">
                    <Gallery {...this.props} />
                    {post.link || post.title ? <header className="article-header">
                        <Title {...this.props} className='article-title' />
                    </header> : null}
                    <div className="article-entry" itemprop="articleBody" dangerouslySetInnerHTML={{ __html: excerpt || post.content }}></div>
                    <footer className="article-footer">
                        <Tag {...this.props} />
                    </footer>
                </div>
                {!index ? <Nav {...this.props} /> : null}
            </article>
            {!index && theme.valine.enable ? <Fragment>
                <div id="valine-comments"></div>
            </Fragment> : null}
        </Fragment>
    }
}