$(document).ready(function() {
    // Need to build the query search
    function buildQueryURL() {
        // City Search Input
        citySearchInput = $("#city-search-input").val().trim();

        var APIKey = "166a433c57516f51dfab1f7edaed8413";

        queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearchInput + "&units=imperial&appid=" + APIKey;

        console.log();
    }

    var queryURL;

    var citySearchInput;

    // Search button to find city
    $("#search-button").on("click", function(event) { 

        buildQueryURL();

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // Store retrieved data in "response" object
        .then(function(response) {
            // Log response
            console.log(response);

        // Transfer content to HTML
        // City - Date - Icon
        $("#current-city").html("<h1>" + response.name + " " + moment().format("MM/DD/YYYY")+ "<img src='https://openweathermap.org/img/wn" + response.weather[0].icon + "@2x.png'>" + "</h1>");
        // Current Temperature
        $("#current-temp").text("Temperature: " + response.main.temp + " F");
        $("#current-wind").text("Wind Speed: " + response.wind.speed + " mph");
        $("#current-humidity").text("Humidity: " + response.main.humidity + " %");
        
    
        

        })


        // Append city to search-city-list div in an unordered list button
        function buildCitySearchList() {
            // DIV where seached cities will be appended
            var searchCityList = $("#search-city-list");
            // after city is searched, it will be stored as a button
            var citySearchedBtn = $("<button>" + citySearchInput + "</button>");
            // citySearched will be appended to searchCityList div
            searchCityList.append(citySearchedBtn);

        }
        // Calling buildCitySearchList function 
        buildCitySearchList();
    })
    var fiveDay = $("#five-day");
    for (var i =1; i < 6; i++) {
        let createForecastCards = $("<div class='card'>");
        createForecastCards.append("<h5>")
    }

    // 5 day forecast
    "#day1"

    "day2"

    "day3"

    "day4"

    "day5"

});