/*
$('.button, .close').on('click', function(e) {
  e.preventDefault();
  $('.detail, html, body').toggleClass('open');
});
*/


// фильтрация ====================================================================================================
(function (document) {
    'use strict';
    var LightTableFilter = (function (Arr) {

        var _input;

        function _onInputEvent(e) {
            _input = e.target;
            var tables = document.getElementsByClassName(_input.getAttribute('data-table'));
            Arr.forEach.call(tables, function (table) {
                Arr.forEach.call(table.tBodies, function (tbody) {
                    Arr.forEach.call(tbody.rows, _filter);
                });
            });
        }

        function _filter(row) {
            var text = row.textContent.toLowerCase(), val = _input.value.toLowerCase();
            row.style.display = text.indexOf(val) === -1 ? 'none' : 'table-row';
        }

        return {
            init: function () {
                var inputs = document.getElementsByClassName('light-table-filter');
                Arr.forEach.call(inputs, function (input) {
                    input.oninput = _onInputEvent;
                });
            }
        };
    })(Array.prototype);

    document.addEventListener('readystatechange', function () {
        if (document.readyState === 'complete') {
            LightTableFilter.init();
        }
    });

})(document);
// ==============================================================================================================
let Heros = [];
let Planets = [];
let Vehicles = [];

class Person {
    constructor(name, height, mass, hair_color, skin_color,
                eye_color, birth_year, gender, homeworld, vehicles) {
        this.name = name;
        this.height = height;
        this.mass = mass;
        this.hair_color = hair_color;
        this.skin_color = skin_color;
        this.eye_color = eye_color;
        this.birth_year = birth_year;
        this.gender = gender;
        this.homeworld = homeworld;
        this.vehicles = vehicles;
    }
}

class Planet {
    constructor(name, url) {
        this.name = name;
        this.url = url;
    }
}

class Vehicle {
    constructor(name, model, manufacturer, cost_in_credits, length,
                max_atmosphering_speed, crew, passengers, cargo_capacity,
                consumables, vehicle_class, url) {
        this.name = name;
        this.model = model;
        this.manufacturer = manufacturer;
        this.cost_in_credits = cost_in_credits;
        this.length = length;
        this.max_atmosphering_speed = max_atmosphering_speed;
        this.crew = crew;
        this.passengers = passengers;
        this.cargo_capacity = cargo_capacity;
        this.consumables = consumables;
        this.vehicle_class = vehicle_class;
        this.url = url;
    }
}


$(document).ready(function () {
    update_table_heroes();
    //getAllMat();
});

function update_table_heroes() {
    /*getAllHeroes(function (data) {
        //console.log("1 : ++++  " + data);
        //fillTableMain(data);
        getDataMain(data);
    }, function () {
    })*/
    getAllPlanets();
    //getAllHeroes();

}

function fillTableMain(peopleData) // функция добавления данных в таблицу материалов
{
    var tbodyMain = $("#table-main"); // Получаем узел тела таблицы материалов
    tbodyMain.empty();  // отчистка таблицы
    $.each(peopleData, function (i, dat) // Перебираем
    {
        var tr = $('<tr>').append(
            $('<td>').text(i + 1),
            $('<td>').text(dat.name),
            $('<td>').text(dat.height),
            $('<td>').text(dat.mass),
            $('<td>').text(dat.hair_color),
            $('<td>').text(dat.skin_color),
            $('<td>').text(dat.eye_color),
            $('<td>').text(dat.birth_year),
            $('<td>').text(dat.gender),
            $('<td>').text(dat.homeworld),
            $('<td class="select">').append(
                $('<a class="button" href=\'#\'>').text("Show").attr("id", i)),
        );
        tbodyMain.append(tr);
    });
    OpenModal();
}
function fillTableVehicle(VehiclesData) // функция добавления данных в таблицу материалов
{
    let tbodyVehicles = $("#table-vehicles"); // Получаем узел тела таблицы материалов
    tbodyVehicles.empty();  // отчистка таблицы
    $.each(VehiclesData.vehicles, function (i, dat) // Перебираем
    {
        var tr = $('<tr>').append(
            $('<td>').text(i + 1),
            $('<td>').text(dat.name),
            $('<td>').text(dat.model),
            $('<td>').text(dat.manufacturer),
            $('<td>').text(dat.cost_in_credits),
            $('<td>').text(dat.length),
            $('<td>').text(dat.max_atmosphering_speed),
            $('<td>').text(dat.crew),
            $('<td>').text(dat.passengers),
            $('<td>').text(dat.cargo_capacity),
            $('<td>').text(dat.consumables),
            $('<td>').text(dat.vehicle_class),
        );
        tbodyVehicles.append(tr);
    });
    OpenModal();
}

function getAllHeroes() {
    $.ajax({
        type: "GET",
        url: "http://swapi.dev/api/people",
        success: getDataMain,
        //error: error
    })
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        //.then(getAllHomeWorld)
        //.then(aaaa)
        .then(function (result) {
            console.log(Heros);
            console.log('end');
        })
    //return q;
};

function getAllPlanets() {
    $.ajax({
        type: "GET",
        url: "http://swapi.dev/api/planets/",
        success: getDataPlanets,
        //error: error
    })
        .then(getPagePlanet)
        .then(getPagePlanet)
        .then(getPagePlanet)
        .then(getPagePlanet)
        .then(getPagePlanet)
        .then(getPageVehicles1)
        .then(getPageVehicles)
        .then(getPageVehicles)
        .then(getPageVehicles)
        .then(getPageHeroes1)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)
        .then(getPageHeroes)

        //.then(getAllHomeWorld)
        //.then(aaaa)
        .then(function (result) {
            console.log(Planets);
            console.log(Vehicles);
            console.log(Heros);
            console.log('end1111');
            fillTableMain(Heros);
        })
};

function getAllHomeWorld() {
    console.log('aaaaaa');
    for (let i = 0; i < Heros.length; i++) {
        $.ajax({
            type: "GET",
            url: Heros[i].homeworld,
            success: function (homeworld) {
                Heros[i].homeworld = homeworld.name;
                console.log('44444')
            },
        });
    }
    console.log(Heros);
    console.log('end');
    fillTableMain(Heros);
}


function getPageHeroes1(result) {
    console.log('fffff');
    return $.ajax({
        type: "GET",
        url: "http://swapi.dev/api/people",
        success: getDataMain,
        //error: error
    })
}

function getPageHeroes(result) {
    console.log('fffff');
    return $.ajax({
        type: "GET",
        url: result.next,
        success: getDataMain,
        //error: error
    })
}

function getPageVehicles1(result) {
    console.log('eeee');
    return $.ajax({
        type: "GET",
        url: "http://swapi.dev/api/vehicles",
        success: getDataVehicles,
        //error: error
    })
}

function getPageVehicles(result) {
    console.log('eeee');
    return $.ajax({
        type: "GET",
        url: result.next,
        success: getDataVehicles,
        //error: error
    })
}

function getPagePlanet(result) {
    console.log('sssss');
    return $.ajax({
        type: "GET",
        url: result.next,
        success: getDataPlanets,
        //error: error
    })
}

/*this.name = name;
this.model = model;
this.manufacturer = manufacturer;
this.cost_in_credits = cost_in_credits;
this.length = length;
this.max_atmosphering_speed = max_atmosphering_speed;
this.crew = crew;
this.passengers = passengers;
this.cargo_capacity = cargo_capacity;
this.consumables = consumables;
this.vehicle_class = vehicle_class;*/
function getDataVehicles(vehicles) {

    let vehiclesArray = vehicles.results
    $.each(vehiclesArray, function (key, val) {
        let vehicle = new Vehicle(val.name, val.model, val.manufacturer, val.cost_in_credits,
            val.length, val.max_atmosphering_speed, val.crew, val.passengers,
            val.cargo_capacity, val.consumables, val.vehicle_class, val.url)
        Vehicles.push(vehicle);
    });
}

function getDataMain(people) {

    let peopleArray = people.results
    $.each(peopleArray, function (key, val) {
        $.each(Planets, function (r, p) {
            if (p.url === val.homeworld) {
                let hero = new Person(val.name, val.height, val.mass, val.hair_color,
                    val.skin_color, val.eye_color, val.birth_year, val.gender, p.name, val.vehicles);
                let vhcls = [];
                $.each(hero.vehicles, function (gg, uu) {
                    $.each(Vehicles, function (d, s) {
                        if (s.url === uu) {
                            vhcls.push(s);
                        }
                    })
                })
                hero.vehicles = vhcls;

                Heros.push(hero);
            }
        })


        /*let hero = new Person(val.name, val.height, val.mass, val.hair_color,
            val.skin_color, val.eye_color, val.birth_year, val.gender, val.homeworld, val.vehicles)
        Heros.push(hero);*/
    });
}

function getDataPlanets(planets) {

    let planetsArray = planets.results
    $.each(planetsArray, function (key, val) {
        let planet = new Planet(val.name, val.url)
        Planets.push(planet);
    });
}

function getAllData(people) {
    let peopleArray = people.results
    $.each(peopleArray, function (key, val) {
        let hero = new Person(val.name, val.height, val.mass, val.hair_color,
            val.skin_color, val.eye_color, val.birth_year, val.gender, val.homeworld, val.vehicles)
        Heros.push(hero);
    });
}

function OpenModal() {
    $('.button, .close').on('click', function (e) {
        let dd = e.target;
        let ss = $(e.target).attr('id');
        console.log(dd);
        fillTableVehicle(Heros[ss]);
        //console.log(ss);
        e.preventDefault();
        $('.detail, html, body').toggleClass('open');
    });
}


//====================================================================================================================
