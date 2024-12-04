import "./Gallery.css"

export default function Gallery({images, pos, onBack, onNext}){

    pos = pos || 0;

    const backImage = images[pos -1];
    const curImage = images[pos];
    const NextImage = images[pos +1];

    return (
        <div className="Gallery" >
            <div className="Gallery-list">
               
            {backImage ? (
                    <img
                      
                        className="Gallery-photo"
                        src={backImage}
                        />
                ) : (
                    <div className="Gallery-photo"/>
                )}

              {curImage ? (
                <img
                        
                className="Gallery-photo"
                src={curImage}
                />
              ) : (
                <div className="Gallery-photo"/>
              )}

            {NextImage ? (
                <img
                        
                className="Gallery-photo"
                src={NextImage}
                />
              ) : (
                <div className="Gallery-photo"/>
              )}

            </div>

            <div className="Gallery-btn">
                <button onClick={onBack}>Back</button>
                <button onClick={onNext}>Next</button>
            </div>
        </div>
    )
}