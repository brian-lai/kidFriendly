var list = []
var manhattan = document.getElementsByClassName("menu__item menu-1253 menuparent  menu-path-nolink first odd")

var downtown = manhattan[0].getElementsByTagName("li")

var batteryPark = downtown[1].getElementsByTagName("a")

var batteryParkAddress = batteryPark[0].attributes.href.value


location.assign(batteryParkAddress)