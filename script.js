
// let cities = ["London", "SA", "Berlin"];
// alert ("There are 3 cities.")
// console.log(cities)

// function showCity(city){
//     console.log(city)
// }

// forEach is a function that will call every city in the array

// cities.forEach(showCity);

// function showCity(cityElement){
    // Cities are element in the html file
    // console.log(cityElement.innerHTML);
// }
// select all the Li
// let cities = document.querySelectorAll("li");

// go through each city and call the function showCity
// cities.forEach(showCity);



let weather={
    "paris":{
        temp: 19.7,
        humidity:80
    },
    "tokyo":{
        temp: 17.3,
        humidity:50
    },
    "lisbon":{
        temp: 30.2,
        humidity:20
    },
    "san francisco":{
        temp: 20.9,
        humidity:100
    },
    "moscow":{
        temp: -5,
        humidity:20
    },
};

let askCity = prompt ("Enter a City"); 
for ( let entry of Object.entries(weather)) {
    alert("It is currently " + weather[[0]] + " in " + entry[0] +" with a humidity of " + weather[[0]] + ".")
};
// if (weather === paris){
//     alert("It's beautiful today!")
    // alert("It is currently" + weather.temp + "in" + "paris with a humidity of" + weather.humidity);
// }

