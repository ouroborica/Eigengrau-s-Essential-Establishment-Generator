setup.createNPC = function (base) {
  // Tables used later
  var index = State.variables.npcs.size

  var beard
  var beardRoll = random(1, 99)
  var currentproject
  var vocalPattern
  var descriptor
  var availableLanguages
  var allLanguages = npcJSON.standardLanguages + npcJSON.exoticLanguages
  var inventory
  var mundane
  var isVillain
  var title
  var hasClass
  var partnerID
  var id
  var wealth = random(60, 260)
  var isThrowaway
  var firstName
  var lastName
  var name
  var note
  var owner
  var pubRumour = setup.createPubRumour()
  var race = npcJSON.race.random()
  var age

  // Base random variables first - those that don't depend on others
  var npc = Object.assign({
    gender: npcJSON.gender.random(),
    race: race,
    firstName: firstName,
    lastName: lastName,
    age: age,
    /* currentmood: ["annoyed", "scared", "relaxed", "concerned", "bemused", "stressed", "amused", "content", "distracted"], */
    demeanour: npcJSON.demeanour.random(),
    calmTrait: npcJSON.calmTrait.random(),
    stressTrait: npcJSON.stressTrait.random(),
    vocalPattern: vocalPattern,
    adventure: npcJSON.adventure.random(),
    hairColour: npcJSON.hairColour.random(),
    hairType: npcJSON.hairType.random(),
    dndclass: npcJSON.dndClass.random(),
    background: npcJSON.background.random(),
    pockets: npcJSON.pockets.random(),
    value: npcJSON.value.random(),
    drive: npcJSON.drive.random(),
    belief: npcJSON.belief.random(),
    profession: npcJSON.profession.random(),
    trait: npcJSON.trait.random(),
    currentMood: npcJSON.currentMood.random(),
    idle: npcJSON.idle,
    eyes: npcJSON.raceTraits[race].eyes.random(),
    racePlural: npcJSON.raceTraits[race].racePlural,
    raceAdjective: npcJSON.raceTraits[race].raceAdjective,
    raceLanguage: npcJSON.raceTraits[race].raceLanguage,
    currentproject: currentproject,
    mundane: mundane,
    hasClass: hasClass,
    isVillain: isVillain,
    isThrowaway: isThrowaway,
    partnerID: partnerID,
    availableLanguages: availableLanguages,
    knownLanguages: npcJSON.raceTraits[race].knownLanguages,
    descriptor: descriptor,
    owner: owner,
    title: title,
    wealth: wealth,
    reading: npcJSON.reading.random(),
    id: id,
    skinColours: npcJSON.skinColours.random(),
    pubRumour: pubRumour
  }, base)
  npc.hair = npc.hairType + ' ' + npc.hairColour + ' hair'

  if (npc.hasClass === false) {
    npc.dndclass = npc.profession
  }

  if (random(1, 100) >= 60) {
    npc.vocalPattern = ['is incoherent except for a few key words', 'stutters', 'says ‘um’ a lot', 'says ‘like’ a lot', 'swears', "uses thee's and thou's", 'never stops to breathe', 'uses short, clipped sentences', 'talks in third person', "doesn't conjugate well (‘me make good soup’)", 'rolls R’s', 'never uses contractions', 'is whiny', 'obviously has a stuffy nose', 'tongue stuck to back of teeth', 'does so through clenched teeth', 'speaks in a sing-song voice', 'likes to rhyme', "spits on every 's' sound", 'makes all Th-sounds become Z-sounds', 'repeats the last few words of a sentence/thought (‘nice to meet you, meet you’)', 'uses full titles or descriptions of how he knows you (‘ellen-farmers-daughter is pretty’)', 'strings together adjectives/adverbs for more impact (‘wow, your dress is pretty-pretty!’ ‘I am short-short-short.’)', 'all non-proper nouns end with ‘en’/’sen’ (‘may I have some applesen?’ ‘I saw a big moosen!’)', 'all L-sounds become w-sounds', 'repeats the last word you say before responding', 'sings everything', 'does the wrong emphasis on the wrong syllables', 'pauses often', 'has a clipped pattern of speech', 'is rather monotonous', 'whistles on S-sounds', 'spits on Th-sounds and S-sounds (think Sylvester the cat from Looney toons)', 'has a light lisp', 'makes all r-sounds become w-sounds', 'has a severe underbite', 'has a severe overbite', 'speaks out of the corner of his mouth', 'is always pouting', 'makes ‘ar/er’ sounds become ‘aye’ sounds (fart will sound like fight, water will sound like watay)', 'makes soft letters elongated (‘ssssso, hhhhhhow are you?’)', 'slurs words', 'always has a full mouth while talking', 'sighs after each sentence', 'never uses am/is/are/was/were (‘I big.’ ‘She pretty.’)', 'responds in the form of questions', 'mutters'].random()
  }

  setup.createName(npc)

  setup.createAge(npc)

  setup.createRace(npc)

  switch (npc.gender) {
    case 'man':
      Object.assign(npc, {
        heshe: 'he',
        himher: 'him',
        himherself: 'himself',
        hisher: 'his',
        hisherself: 'hisself',
        boygirl: 'boy',
        manwoman: 'man',
        menwomen: 'men',
        malefemale: 'male',
        guygirl: 'guy'
      })
      break
    case 'woman':
      Object.assign(npc, {
        heshe: 'she',
        himher: 'her',
        himherself: 'herself',
        hisher: 'her',
        hisherself: 'herself',
        boygirl: 'girl',
        manwoman: 'woman',
        menwomen: 'women',
        malefemale: 'female',
        guygirl: 'girl'
      })
      break
    default:
      Object.assign(npc, {
        heshe: 'they',
        himher: 'their',
        himherself: 'themself',
        hisher: 'their',
        hisherself: 'theirself',
        boygirl: 'child',
        manwoman: 'person',
        menwomen: 'people',
        malefemale: 'person',
        guygirl: 'child'
      })
      break
  }

  var physicalTraitRoll = Math.floor(Math.random() * 10) + 1
  if (physicalTraitRoll > 8) {
    npc.physicalTrait = npcJSON.scar.random()
  } else if (physicalTraitRoll > 6) {
    npc.physicalTrait = npcJSON.tattoo.random()
  } else if (physicalTraitRoll <= 6) {
    npc.physicalTrait = npc.hair
  }

  setup.createHistory(npc)

  setup.createLifeEvents(npc)

  setup.createClass(npc)

  npc.availableLanguages = [allLanguages - npc.knownLanguages]

  setup.createBackground(npc)
  npc.descriptor = [npc.age + ' ' + npc.racesingular, npc.height + ' ' + npc.racesingular, npc.weight + ' ' + npc.racesingular, npc.height + ' ' + npc.gender + ' with ' + npc.physicalTrait]
  if (typeof beard !== 'undefined') {
    npc.descriptor.push(npc.racesingular + ' with a ' + npc.beard)
  }

  if (npc.hasClass === true) {
    npc.descriptor.push(npc.dndclass)
  }

  if (npc.isThrowaway === undefined) {
    State.variables.npcs.set(++index, npc)
  }

  npc.id = State.variables.npcs[State.variables.npcs.length - 1]

  if (npc.partnerID) {
    setup.setAsPartners(npc, State.variables.npcs[npc.partnerID])
  }

  return npc
}
