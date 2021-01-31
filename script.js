$(document).ready(() => {
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
    $("#search-button").on("click", (event) => { 

        buildQueryURL();

        $.ajax({
            url: queryURL,
            method: "GET"
        })
        // Store retrieved data in "response" object
        .then((response) => {
            // Log response
            console.log(response);

            // Transfer content to HTML
            // City - Date - Icon
            $("#current-city").html("<h1>" + response.name + " " + moment().format("MM/DD/YYYY") + "<img src='https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png'>" + "</h1>");
            // Current Temperature
            $("#current-temp").text("Temperature: " + response.main.temp + " F");
            $("#current-wind").text("Wind Speed: " + response.wind.speed + " mph");
            $("#current-humidity").text("Humidity: " + response.main.humidity + " %");
        
            // Calling buildCitySearchList function 
            buildCitySearchList();
            
            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/onecall?lat=" + response.coord.lat + "&lon=" +response.coord.lon + "&units=imperial&appid=166a433c57516f51dfab1f7edaed8413",
                method: "GET"
            })

            // Store retrieved data for five day forecast
            .then((fiveday) => {
                // log fiveday
                console.log(fiveday);

                $("#current-uvi").text("UV-Index: " + fiveday.current.uvi);

                var fiveDay = $("#five-day");
                for (var i =1; i < 6; i++) {

                    let forecastCards = $("<div class='card col-md-2'>");
                    forecastCards.append("<h5>"+ moment(fiveday.daily[i].dt * 1000).format("MM/DD/YYYY") + "</h5>");
                    forecastCards.append("<img src='https://openweathermap.org/img/wn/" + fiveday.daily[i].weather[0].icon + "@2x.png'>");
                    forecastCards.append("<p>Temp: " + fiveday.daily[i].temp.day + " F</p>");
                    forecastCards.append("<p>Humidity: " + fiveday.daily[i].humidity + " %</p>");

                    fiveDay.append(forecastCards);
                }

            })

        })


        // Append city to search-city-list div in an unordered list button
        function buildCitySearchList() {
            // DIV where seached cities will be appended
            var searchCityList = $("#search-city-list");
            // after city is searched, it will be stored as a button
            var citySearchedBtn = $("<li class='list-group-item' role='button'>" + citySearchInput + "</li>");
            // citySearched will be appended to searchCityList div
            searchCityList.prepend(citySearchedBtn);

        }
        

        // Empty search bar after click
        $("#city-search-input").val("");

        
    })

});