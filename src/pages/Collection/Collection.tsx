import { useParams } from "react-router-dom";

const CollectionCover = require("../../assets/images/collections/iamm/collection_cover.png")

const Collection = () => {
    //get the collectio name given by the URL collection_name param
    let { collection_name: collectionName } = useParams()

    return (
        <>
            <div id="header">
                <div className="width:100vw" id="header-cover">
                    <img className="width: 100vw" src={CollectionCover} alt={`${collectionName}-collection-cover`} />
                </div>
                <div id="header-picture"></div>
            </div>

            <div>Collection: {collectionName}</div>
        </>    
    )
}

export default Collection;
