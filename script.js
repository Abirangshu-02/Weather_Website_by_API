// weather apikey = e7ca8dbc8b0d4f8e3cb4c587a8f5f538

function show_weather_sb() //works using searchbar
{
    var city = document.getElementById("cityname").value;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        method: "get",
        data: {"q":city,"units":"metric","appid":"e7ca8dbc8b0d4f8e3cb4c587a8f5f538"},
        success: function(result)
        {
            var pic = result.weather[0].main;
            document.getElementById('temp').innerHTML = result.main.temp+"° C";
            document.getElementById('cty').innerHTML = result.name+ " ("+pic+")";
            document.getElementById('col2').innerHTML = result.main.humidity+" %";
            document.getElementById('col4').innerHTML = result.wind.speed;
            
            if(pic=="Clear")
                document.getElementById('image').src = "./images/clear.png";
            else if(pic=="Clouds")
                document.getElementById('image').src = "./images/clouds.png";
            else if(pic=="Drizzle")
                document.getElementById('image').src = "./images/drizzle.png";
            else if(pic=="Mist")
                document.getElementById('image').src = "./images/mist.png";
            else if(pic=="Rain")
                document.getElementById('image').src = "./images/rain.png";
            else if(pic=="Snow")
                document.getElementById('image').src = "./images/snow.png";
            else if(pic=="Windy")
                document.getElementById('image').src = "./images/wind.png";
            else if(pic=="Haze" || pic=="Smoke" || pic=="Fog")
                document.getElementById('image').src = "./images/haze.png";
            else
                document.getElementById('image').innerHTML = pic;
        }
    })
}

//works using geolocation
function show_weather()
{
    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(getlocation);
    }
    else
    {
        alert("An ERROR occured");
    }
}
function getlocation(position)
{
    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather",
        method: "get",
        data: {"lat":lat,"lon":long,"units":"metric","appid":"e7ca8dbc8b0d4f8e3cb4c587a8f5f538"},
        success: function(result)
        {
            var pic = result.weather[0].main;
            document.getElementById('temp').innerHTML = result.main.temp+"° C";
            document.getElementById('cty').innerHTML = result.name+ " ("+pic+")";
            document.getElementById('col2').innerHTML = result.main.humidity+" %";
            document.getElementById('col4').innerHTML = result.wind.speed;
            
            if(pic=="Clear")
                document.getElementById('image').src = "./images/clear.png";
            else if(pic=="Clouds")
                document.getElementById('image').src = "./images/clouds.png";
            else if(pic=="Drizzle")
                document.getElementById('image').src = "./images/drizzle.png";
            else if(pic=="Mist")
                document.getElementById('image').src = "./images/mist.png";
            else if(pic=="Rain")
                document.getElementById('image').src = "./images/rain.png";
            else if(pic=="Snow")
                document.getElementById('image').src = "./images/snow.png";
            else if(pic=="Windy")
                document.getElementById('image').src = "./images/wind.png";
            else if(pic=="Haze" || pic=="Smoke" || pic=="Fog")
                document.getElementById('image').src = "./images/haze.png";
            else
                document.getElementById('image').innerHTML = pic;
        }
    })
    
}