$(document).ready(function() {
    // Need to build the query search
    function buildQueryURL() {
        // City Search Input
        var citySearchInput = $("#city-search-input").val().trim();

        var APIKey = "166a433c57516f51dfab1f7edaed8413";

        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + citySearchInput + APIKey;

        console.log()
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
            
        })

        // Append city to search-city-list div in an unordered list button
        function buildCitySearchList() {
            // DIV where seached cities will be appended
            var searchCityList = $("#search-city-list");
            // after city is searched, it will be stored as a button
            var citySearchedBtn = $("<button >");
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