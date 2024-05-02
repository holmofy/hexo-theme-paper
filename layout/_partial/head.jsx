const { Component } = require('inferno');

const OpenGraph = require('../util/open-graph');
const GoogleAnalytics = require('./google-analytics');

module.exports = class extends Component {
    _getTitle() {
        const { page, config, __, is_home, is_archive, is_month, is_year, is_category, is_tag } = this.props;
        let title = page.title;

        if (is_home()) {
            title = config.description;
        } else if (is_archive()) {
            title = __('archive_a');

            if (is_month()) {
                title += ': ' + page.year + '/' + page.month;
            } else if (is_year()) {
                title += ': ' + page.year;
            }
        } else if (is_category()) {
            title = __('category') + ': ' + page.category;
        } else if (is_tag()) {
            title = __('tag') + ': ' + page.tag;
        }

        return title;
    }

    render() {
        const title = this._getTitle();
        const { page, config, theme, open_graph, url_for, is_post, url } = this.props;

        const images = [];
        if (page.content && page.content.includes('<img')) {
            let img;
            const imgPattern = /<img [^>]*src=['"]([^'"]+)([^>]*>)/gi;
            while ((img = imgPattern.exec(page.content)) !== null) {
                images.push(img[1]);
            }
        }

        return <head>
            <meta charset="utf-8" />
            <GoogleAnalytics {...this.props} />
            <title>{(title ? title + ' | ' : '') + config.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <meta name="baidu_union_verify" content="b7d27ec946758934fcdf3c5c26386237" />
            <OpenGraph
                type={is_post() ? 'article' : 'website'}
                title={page.title || config.title}
                date={page.date}
                updated={page.updated}
                author={config.author}
                description={page.description || page.excerpt || page.content || config.description}
                tags={page.keywords || (page.tags && page.tags.length ? page.tags : undefined) || config.keywords}
                keywords={page.keywords}
                url={url}
                images={page.photos || images}
                siteName={config.title}
                language={page.lang || page.language || config.language}
                twitterCard={'summary'}
                twitterId={theme.twitter}
                twitterSite={false}
                googlePlus={theme.google_plus}
                facebookAdmins={theme.fb_admins}
                facebookAppId={theme.fb_app_id} />
            {theme.google_ads.enable ? <Fragment>
                <script data-ad-client={theme.google_ads.ad_client} async src={theme.google_ads.js} crossorigin="anonymous"></script>
                <script async custom-element="amp-auto-ads" src="https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js"></script>
                <script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js" async="async" defer="defer" ></script>
            </Fragment> : null}
            {theme.rss ? <link rel="alternate" href={url_for(theme.rss)} title={config.title} type="application/atom+xml" /> : null}
            {theme.favicon ? <link rel="icon" href={theme.favicon} /> : null}
            {config.highlight.enable ? <link href="//fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" type="text/css" /> : null}
            {theme.waline.enable ? <link src={theme.vendors.waline} rel="stylesheet" type="text/css" /> : null}
            {theme.vendors.other_css ? theme.vendors.other_css.map(url => <link href={url} rel="stylesheet" type="text/css" />) : null}
            <link rel="stylesheet" href={theme.vendors.fontawesome} rel="stylesheet" type="text/css" />
            <link rel="stylesheet" href={url_for('/css/style.css')} />
            <link rel="dns-prefetch" href="//static.zhimg.com"></link>
            <link rel="dns-prefetch" href="//at.alicdn.com"></link>
            <link rel="dns-prefetch" href="//cdn.jsdelivr.net"></link>
            <link rel="dns-prefetch" href="//img-blog.csdn.net"></link>
            <link rel="dns-prefetch" href="//img-blog.csdnimg.cn"></link>
        </head>;
    }
}
