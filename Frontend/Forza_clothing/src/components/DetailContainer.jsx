import "./DetailContainer.css"

function DetailContainer() {

    return (
        <div className="main-detail-container">
            <div className="detail-container__left-container">
                <div className="detail-container__image-container">
                </div>
            </div>
            <div className="detail-container__right-container">
                <div className="detail-container__title">
                    Maou No Shigen Situks
                </div>
                <div className="detail-container__details">
                    <div>Description</div>
                    <div>Hellow World</div>
                    <div>Genres</div>
                    <div className="detail-container__genres">
                        <div className="detail-container__genre">Shounen</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DetailContainer;