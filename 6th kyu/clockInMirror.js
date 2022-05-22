// Peter can see a clock in the mirror from the place he sits in the office. When he saw the clock shows 12:22


// He knows that the time is 11:38


// in the same manner:

// 05:25 --> 06:35

// 01:50 --> 10:10

// 11:58 --> 12:02

// 12:01 --> 11:59

// Please complete the function WhatIsTheTime(timeInMirror), where timeInMirror is the mirrored time (what Peter sees) as string.

// Return the real time as a string.

// Consider hours to be between 1 <= hour < 13.

// So there is no 00:20, instead it is 12:20.

// There is no 13:20, instead it is 01:20.



function WhatIsTheTime(timeInMirror) {
    console.log(`og${timeInMirror}`)

    mHours = Number(timeInMirror.slice(0, 2))
    console.log(mHours)
    mMins = Number(timeInMirror.slice(3, 5))
    console.log(mMins)

    if (mHours == 12) {
        hours = 11
    }
    else if (mHours == 11) {
        hours = 12
    }
    else if (mHours < 6) {
        hours = 11 - mHours
    }
    else if (mHours < 12) {
        hours = mHours - ((2* (mHours - 6)) + 1)
    }

    if (mMins == 0) {
        mins = mMins
    }
    else {
        mins = 60 - mMins
    }

    if (mins == 0) {
        hours = hours + 1
    }

    sHours = hours.toString()
    sMins = mins.toString()

    if (sHours.length < 2) {
        sHours = `0${sHours}`
    }
    if (sMins.length < 2) {
        sMins = `0${sMins}`
    }

    result = `${sHours}:${sMins}`
    console.log(result)
    return(result)
}