function twiceAsOld(dadYearsOld, sonYearsOld) {

    let birthAge = dadYearsOld - sonYearsOld
    if (sonYearsOld > birthAge) {
        return sonYearsOld - birthAge
    }
    else if (sonYearsOld <= birthAge) {
        return birthAge - sonYearsOld
    }

  }

  console.log(twiceAsOld(55, 30))