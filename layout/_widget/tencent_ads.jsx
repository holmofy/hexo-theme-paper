const { Component } = require('inferno');
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

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
        return (
            <div className="widget-wrap ads-banner">
                <div class="swiper-wrapper">
                    {ads.assets.map(ad => {
                        <a class="swiper-slide" href={ad.url} title={ad.title}>
                            <img src={ad.img} alt={ad.title} />
                            {ad.show_title ? <span>{ad.title}</span> : null}
                        </a>
                    })}
                </div>
                <div aria-label="Previous" class="swiper-button-prev"></div>
                <div aria-label="Next" class="swiper-button-next"></div>
                <div class="swiper-pagination"></div>
            </div>
        );
    }
}