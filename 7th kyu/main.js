//PREP
//
//



function snail(column, day, night) {
    remaining = column - day
    increment = day - night
    result = Math.ceil(remaining/increment) + 1
    console.log(result)
    return(result)
  }


  snail(10,3,1)