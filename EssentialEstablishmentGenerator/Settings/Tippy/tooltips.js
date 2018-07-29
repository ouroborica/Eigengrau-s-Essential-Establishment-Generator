setup.profileTooltip = function (id, ch) {
  var char = ch
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = 'A ' + char.weight + ' ' + char.malefemale + ' ' + char.raceAdjective + ' ' + char.dndclass + ' with ' + char.physicalTrait + ' called ' + char.name
      tippy('#' + span.id)
    }
  })
}

setup.buildingTooltip = function (id, ch) {
  var char = ch
  jQuery(function () {
    var span = document.getElementById(id)
    if (span) {
      span.title = 'A ' + building.size + ', ' + building.cleanliness + ' building.'
      tippy('#' + span.id)
    }
  })
}
