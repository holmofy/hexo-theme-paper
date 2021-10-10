const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { theme } = this.props;
        const ads_unit_html = `
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
        return (
            <div className="widget-wrap">
                <h3 className="widget-title">网站运营不易，帮点一下广告</h3>
                <div dangerouslySetInnerHTML={{ __html: ads_unit_html }}>
                </div>
            </div>
        );
    }
}