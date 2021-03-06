const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        if (!this.props.theme.google_analytics) {
            return null;
        }
        const script = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-H58NSPXYPF');
        `;
        const baidu_script = `
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b3392fb5f6d65fb10354f590338d1ee4";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();`;
        const msScript = `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "95vxjpui4h");
        `;
        return <Fragment>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-H58NSPXYPF"></script>
            <script dangerouslySetInnerHTML={{ __html: script }}></script>
            <script dangerouslySetInnerHTML={{ __html: baidu_script }}></script>
            
            <script type="text/javascript"  dangerouslySetInnerHTML={{ __html: msScript }}></script>
        </Fragment>;
    }
}
