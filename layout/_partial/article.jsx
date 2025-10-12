const { Component, Fragment } = require('inferno');

const Date = require('./post/date');
const Category = require('./post/category');
const Gallery = require('./post/gallery');
const Title = require('./post/title');
const Tag = require('./post/tag');
const Nav = require('./post/nav');
const Waline = require('./waline');

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
                        <span class="waline-pageview-count" data-path={url_for(post.path)} ></span>
                    </div>
                </div>
                <div className="article-inner">
                    <Gallery {...this.props} />
                    {post.link || post.title ? <header className="article-header" style={index ? '' : 'text-align:center'}>
                        <Title {...this.props} className='article-title' />
                    </header> : null}
                    {index?<div className="article-entry" itemprop="articleBody" dangerouslySetInnerHTML={{ __html: excerpt || post.content }}></div>
                    :<div id='article-container'>
                        <div className="article-entry" itemprop="articleBody" dangerouslySetInnerHTML={{ __html: excerpt || post.content }}></div>
                    </div>}
                    {!index ? <div className="article-copyright">
                        <p>本作品采用 <a href="https://creativecommons.org/licenses/by/4.0/">知识共享署名 4.0 国际许可协议</a> 进行许可。 </p>
                        <p>转载时请注明<a href={config.url + url_for(post.path)}>原文链接</a>：{config.url + url_for(post.path)}</p>
                    </div> : null}
                    <footer className="article-footer">
                        <Tag {...this.props} />
                    </footer>
                </div>
                {!index && theme.reward.enable ? <div id="article-reward">
                    <i class="iconfont ic-money"></i>
                    <div>鼓励一下</div>
                    <table>
                        <thead>
                            <tr>
                                <th style="text-align:center">支付宝</th>
                                <th style="text-align:center">微信</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style="text-align:center"><img width="150" src={theme.reward.alipay} /></td>
                                <td style="text-align:center"><img width="135" src={theme.reward.wechat} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div> : null}
                {!index ? <Nav {...this.props} /> : null}
            </article>
            {!index && theme.waline.enable ? <Fragment>
                <div id="waline-comments"></div>
                <Waline {...this.props} index={false}/>
                </Fragment> : null}
        </Fragment>
    }
}
