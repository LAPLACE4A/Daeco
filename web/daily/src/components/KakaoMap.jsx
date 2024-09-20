import { useEffect } from "react"
const { kakao } = window

function kakaoMap(){
    var lat = 37.365264512305174
    var lng = 127.10676860117488
    
    useEffect(() => {
        const container = document.getElementById("feed-map");
        const options = {
          center: new kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new kakao.maps.Map(container, options);
      }, [])

    return(
        <div id='feed-map' className="w-full h-full z-0 rounded-xl"/>

    )
}

export default kakaoMap