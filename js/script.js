$(document).ready(function () {

    var apiKey = "e4db3ced"
    $("#movieForm").submit(function (event) {
        event.preventDefault()

        var movie = $("#movie").val()
        var result = ""
        var url = "http://www.omdbapi.com/?apikey=" + apiKey

        $.ajax({
            method: 'GET',
            url: url + "&t=" + movie,
            success: function (data) {
                console.log(data)

                result = `
                <img src="${data.Poster}" alt="Poster"/>
                <h3>${data.Runtime}</h3>
                <h3>${data.Director}</h3>
                <h3>${data.Actors}</h3>
                <h3>${data.imdbRating}</h3>
                `;

                $("#result").html(result)
            }
        })
    })
})
