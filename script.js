$(document).ready(function() {
    // Need to build the query search
    function buildQueryURL() {
        // City Search Input
        var citySearchInput = $("#city-search-input").val().trim();

        var APIKey = "166a433c57516f51dfab1f7edaed8413";

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + citySearchInput + "&appid=" + APIKey;

        console.log();
    }

    buildQueryURL();

    // Search button to find city
    $("#search-button").on("click", function(event) { 

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // Store retrieved data in "response" object
        .then(function(response) {
            // Log queryURL
            console.log(queryURL);
            // Log response
            console.log(response);


            // Transfer content to HTML
        $("#current-city").html("<h1>" + response.name + " Weather Details</h1>");
        $("#current-wind").text("Wind Speed: " + response.wind.speed);
        $("#current-humidity").text("Humidity: " + response.main.humidity);
        
            // // Transfer content to HTML
            // var currentDayWeather = $("#current-day-weather");
            // //City, date, icon
            // var 
            // // Temperature F
            // var tempCurrent = $("'<p>Temperature: ' + ${} + '</p>");
            // // Humidity %
            // var humidityCurrent = $("'<p>Humidity: ' + ${} + '</p>'");
            // // Windspeed mph
            // var windspeedCurrent = $("'<p>Wind Speed: ' + ${} + '</p>'");
            // // UV index
            // var uvIndex = $("'<p>UV Index: ' + ${} + '</p>'");

            // currentDayWeather.append(tempCurrent);
            // currentDayWeather.append(humidityCurrent);
            // currentDayWeather.append(windspeedCurrent);
            // currentDayWeather.append(uvIndex);



        

        })


        // Append city to search-city-list div in an unordered list button
        function buildCitySearchList() {
            // DIV where seached cities will be appended
            var searchCityList = $("#search-city-list");
            // after city is searched, it will be stored as a button
            var citySearchedBtn = $("<button>");
            // citySearched will be appended to searchCityList div
            searchCityList.append(citySearchedBtn);

        }
        // Calling buildCitySearchList function 
        buildCitySearchList();
    })

    

    //DIV to dump current day info
    "#current-day-weather"

    // 5 day forecast
    "#day1"

    "day2"

    "day3"

    "day4"

    "day5"

});