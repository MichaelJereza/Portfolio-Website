// Contains bootstrap for responsive iframe
function LazyVideo (props) {
    return(
        <div className="embed-responsive embed-responsive-16by9" >
            <iframe title="Embedded Youtube Demonstration" className="Embedded-youtube"
                src="https://youtube.com/embed/brfiW2lZ9N4">
            </iframe>
        </div>
    )
}

export default LazyVideo;