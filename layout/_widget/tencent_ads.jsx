const { Component } = require('inferno');

module.exports = class extends Component {
    componentDidMount() {
        const { theme = { ads: {} } } = this.props;
        let opts = Object.assign({
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar"
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }, theme.ads.swiper_options);
        this.swiper = new Swiper('.ads-banner', opts);
    }

    render() {
        const { theme = { ads: {} } } = this.props;
        let { ads = { enabled: false, assets: [] } } = theme;
        if (!ads.enabled || ads.assets.length === 0) {
            return null;
        }
        let options = JSON.stringify(Object.assign({
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar"
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            }
        }, theme.ads.swiper_options));
        let scripts = `
            window.addEventListener('load', function () {
                var swiper = new Swiper(".ads-banner", ${options});
            }, false);
        `;
        return (
            <div className="widget-wrap ads-banner">
                <div className="swiper-wrapper">
                    {ads.assets.map(ad => (
                        <a className="swiper-slide" href={ad.url} title={ad.title}>
                            <img src={ad.img} alt={ad.title} />
                            {ad.show_title ? <span>{ad.title}</span> : null}
                        </a>
                    ))}
                </div>
                <div aria-label="Previous" className="swiper-button-prev"></div>
                <div aria-label="Next" className="swiper-button-next"></div>
                <div className="swiper-pagination"></div>
                <script dangerouslySetInnerHTML={{ __html: scripts }}></script>
            </div>
        );
    }
}
