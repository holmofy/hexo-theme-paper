const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { theme } = this.props;
        const google_ads_html = `
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-7111912103882824"
            data-ad-slot="8429272980"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        `;
        const baidu_ads1_html = `
        <div class="_bn9kdav364r"></div>
        <script type="text/javascript">
            (window.slotbydup = window.slotbydup || []).push({
                id: "u6642600",
                container: "_bn9kdav364r",
                async: true
            });
        </script>
        `;
        const baidu_ads2_html = `
        <div class="_8on40jtwn76"></div>
        <script type="text/javascript">
            (window.slotbydup = window.slotbydup || []).push({
                id: "u6643251",
                container: "_8on40jtwn76",
                async: true
            });
        </script>
        `;
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">网站运营不易，帮点一下广告</h3>
                <div class="ads-wrapper">
                    <div class="google_ads" dangerouslySetInnerHTML={{ __html: google_ads_html }}></div>
                    <div class="baidu_ads">
                        <div dangerouslySetInnerHTML={{ __html: baidu_ads1_html }}></div>
                        <div dangerouslySetInnerHTML={{ __html: baidu_ads2_html }}></div>
                    </div>
                </div>
            </div>
        );
    }
}