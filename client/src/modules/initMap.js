export default (appData) => {
    const { location } = appData;
    const myLoc = {
        lat: Number(location.loc[0]),
        lng: Number(location.loc[1])
    };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 9,
        center: myLoc
    });
    const marker = new google.maps.Marker({
        position: myLoc,
        map: map
    });
}