/* global setup */
setup.createGuard = function (townName) {
  // console.log(townName + ' is the townName passed to the guard.')
  var guard = {
    captain: setup.createNPC({
      dndClass: 'fighter',
      background: 'soldier'
    }),
    passageName: 'GuardOutput',
    livery: setup.guardData.primaryColours.random() + ' and ' + setup.guardData.secondaryColours.random() + ' livery adorned with an image of ' + setup.guardData.insignia.random()
  }
  console.log(guard)

  var nameRoll = random(1, 8)
  console.log('nameRoll is ' + nameRoll)
  if (nameRoll === 1) {
    guard.name = 'The ' + setup.guardData.name.group.random() + ' of ' + townName
  } else if (nameRoll === 2) {
    guard.name = 'The ' + townName + ' ' + setup.guardData.name.group.random()
  } else if (nameRoll === 3) {
    guard.name = 'The ' + setup.guardData.name.group.random() + ' of ' + setup.guardData.name.alternateAdjective.random()
  } else if (nameRoll === 4) {
    guard.name = 'The ' + setup.guardData.name.adjective.random() + ' ' + setup.guardData.name.group.random()
  } else if (nameRoll === 5) {
    guard.name = 'The ' + setup.guardData.name.adjective.random() + ' ' + setup.guardData.name.noun.random()
  } else if (nameRoll === 6) {
    guard.name = 'The ' + setup.guardData.name.adjective.random() + ' ' + setup.guardData.name.noun.random() + ' of ' + setup.guardData.name.alternateAdjective.random()
  } else if (nameRoll === 7) {
    guard.name = 'The ' + setup.guardData.name.adjective.random() + ' ' + setup.guardData.name.noun.random() + ' of ' + townName
  } else if (nameRoll === 8) {
    guard.name = 'The ' + setup.guardData.name.group.random() + ' ' + setup.guardData.name.noun.random() + ' of ' + townName
  }
  console.log(guard.name + ' is the name of the guard.')
  console.groupEnd()
  return guard
}
