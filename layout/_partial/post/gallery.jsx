const { Component } = require('inferno');

module.exports = class extends Component {
    render() {
        const { photos, _id } = this.props.post;
        if (!(photos && photos.length)) {
            return null;
        }
        return <div className="article-gallery">
            <div className="article-gallery-photos">
                {photos.map((photo, i) => {
                    return <a className="article-gallery-img fancybox" href={url_for(photo)} rel={'gallery_' + _id}>
                        <img src={url_for(photo)} itemprop="image" />
                    </a>
                })}
            </div>
        </div>;
    }
}