var body = document.querySelector (body)

var left = 0
var topValue = 0

for(var i = 0 ; i < 8 ; i++){
    for(var j = 0; j < 8 ; j++){
        var element = document.createElement("div")

        element.style.left = left + "px"
        element.style.top = topValue + "px"

        body.append(element)

        left = left + 50

        counter++
    }

    left = 0
    topValue = 0

}