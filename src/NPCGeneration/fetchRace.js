
setup.fetchRace = function (town, saveLoc) {
  console.log('Fetching race...')

  // FIXME upon migration to React, reimplement getters and setters.
  const races = Object.keys(town.baseDemographics)

  // Calculate the sum of the raw demographic values.
  const sum = races
    .map(byRace => town.baseDemographics[byRace])
    .reduce((acc, cur) => acc + cur, 0)

  // Calculate the demographic percentages.
  races.forEach(byRace => {
    town._demographicPercentile[byRace] = town.baseDemographics[byRace] / sum * 100
  })
  const args = town._demographicPercentile
  console.log(args)
  const pool = []
  const namePool = Object.keys(args)
  let totalWeight = 0
  for (const arg in args) {
    pool.push(args[arg])
    totalWeight += args[arg]
  }
  saveLoc.raceRoll = saveLoc.raceRoll || Math.floor(randomFloat(1) * totalWeight)
  let random = saveLoc.raceRoll
  // console.log(random)
  for (let i = 0; i < pool.length; i++) {
    random -= pool[i]
    if (random < 0) {
      // eslint-disable-next-line no-var
      var index = i
      break
    }
  }
  // console.log(pool)
  // console.log(namePool)
  // console.log(selected)
  // console.log(namePool[index])
  return namePool[index]
}
