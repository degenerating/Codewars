// return the total number of photos.
// it should return an integer

//PREP
//parameters: road. our only input, showing camera locations, car locations, and car directions

//result: a number, the number of pictures taken

//examples: ">>." = 2

//pseudocode:
//find how many cameras there are total on the road. then, starting from the left side of the road, iterate to the right. Keep track of how many cams
//are to the left and right of where we are in the iteration. When we reach a '>', add the number of cams right of us to the total pics. When we reach a
//'<', add the number of cams left of us to the total pics.

function countPhotos(road){
  let totPics = 0
  let totCams = 0
  let leftCams = 0
  let rightCams = 0

  for (i = 0; i < road.length; i++) {
    if (road[i] === '.') {
        totCams ++
    }
  }
  rightCams = totCams

  for (i = 0; i < road.length; i++) {
    if (road[i] === '.') {
        rightCams --
        leftCams ++
    }
    else if (road[i] === '>') {
        totPics += rightCams
    }
    else if (road[i] === '<') {
        totPics += leftCams
    }
  }

  console.log(totPics)
  return(totPics)

  
  }