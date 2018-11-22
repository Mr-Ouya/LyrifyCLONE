
var albumArray = [];
//Search in Musixmatch api requires u to find the artist ID# to search instead of artist name
var artistID = '';
$('#getAlbums').on("click", getArtist)


function getArtist(e){
    e.preventDefault();

var artistSearch = $("#artist-name").val();
$.ajax({
    method: "GET",
    dataType: "jsonp",
    contentType: 'application/json',
    data: {
        apikey:"58bdb166636ac0d28780a0fbb30f6652",
        q_artist: "u2",
        format:"json",
        callback:"jsonp_callback"
    },
    url: "https://api.musixmatch.com/ws/1.1/artist.search",
    jsonpCallback: 'jsonp_callback'


})
.then(function(data){
console.log(data);

})

}

