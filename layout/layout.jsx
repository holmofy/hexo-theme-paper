const { Component } = require('inferno');

const Head = require('./_partial/head');
const Header = require('./_partial/header');
const Sidebar = require('./_partial/sidebar');
const Footer = require('./_partial/footer');
const MobileNav = require('./_partial/mobile-nav');
const AfterFooter = require('./_partial/after-footer');

module.exports = class extends Component {
    render() {
        const { theme } = this.props;

        return (
            <html lang="en">
                <Head {...this.props} />
                <body>
                    <div id="container">
                        <div id="wrap">
                            <Header {...this.props} />
                            <div className="outer">
                                <section id="main" dangerouslySetInnerHTML={{ __html: this.props.body }}></section>
                                {theme.sidebar && theme.sidebar !== 'bottom' ? <Sidebar {...this.props} /> : null}
                            </div>
                            <Footer {...this.props} />
                        </div>
                        <MobileNav {...this.props} />
                        <AfterFooter {...this.props} />
                    </div>
                </body>
            </html>);
    }
}