var axios = require('axios');
var movieTitle = "black panther";
const key = '978bfcbd';
var url = ` http://www.omdbapi.com/?s=${movieTitle}&apikey=${key} `;
axios.get(url).then(function(response){
    movieList = response.data;
    console.log(movieList);
});