const { Component, Fragment } = require('inferno');

const Article = require('./article');
const ArchivePost = require('./archive-post');

module.exports = class extends Component {
    render() {
        const { pagination, page, url_for, config, __, paginator } = this.props;

        let content = [];
        if (pagination === 2) {
            content = page.posts.map(post => {
                return <Article {...this.props} post={post} index={true} />
            });
        } else {
            let last = null;
            let posts = [];
            page.posts.each((post, i) => {
                const year = post.date.year();
                if (i === page.posts.length - 1 || (last !== year && last !== null)) {
                    if (i === page.posts.length - 1) {
                        posts.push(<ArchivePost {...this.props} post={post} even={i % 2 === 0} />);
                    }
                    content.push(<section className="archives-wrap">
                        <div className="archive-year-wrap">
                            <a href={url_for(config.archive_dir + '/' + year)} className="archive-year">{year}</a>
                        </div>
                        <div className="archives">{posts}</div>
                    </section>);
                    posts = [];
                }
                last = year;
                if (i < page.posts.length - 1) {
                    posts.push(<ArchivePost {...this.props} post={post} even={i % 2 === 0} />);
                }
            });
        }

        let nav;
        if (page.total > 1) {
            const prev_text = '<i class="fas fa-angle-left"></i>&nbsp;' + __('prev');
            const next_text = __('next') + '&nbsp;<i class="fas fa-angle-right"></i>';
            nav = <nav id="page-nav" dangerouslySetInnerHTML={{
                __html: paginator({
                    prev_text: prev_text,
                    next_text: next_text,
                    end_size: 1,
                    mid_size: 2,
                    escape: false
                })
            }}></nav>
        }
        return <Fragment>
            {content}
            {nav}
        </Fragment>;
    }
}