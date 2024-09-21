import { useEffect } from "react"

function KakaoMap({addr, index_id}){

    var lat = 37.365264512305174
    var lng = 127.10676860117488
    var geocoder = new kakao.maps.services.Geocoder();

    useEffect(()=>{
        var container = document.getElementById(index_id)
        var options = {
            center : new kakao.maps.LatLng(lat, lng),
            level : 4
        }
        var map = new kakao.maps.Map(container, options)

        geocoder.addressSearch(addr, (result, status) => {
            if (status == kakao.maps.services.Status.OK){
                var coords = new kakao.maps.LatLng(result[0].y, result[0].x)
                var marker = new kakao.maps.Marker({
                    map: map,
                    position: new kakao.maps.LatLng(result[0].y, result[0].x)
                })
                marker.setMap(map)
                map.setCenter(coords)
            }
        })
        }
    ,[addr])

    return(
        <div id={index_id} className="w-full h-32 object-cover rounded-t-lg"/>
    )
}

export default KakaoMap