import { v4 as uuidv4 } from 'uuid'

const exampleData = {
  personalInfo: {
    fullName: 'Naruto Uzumaki',
    email: 'naruto.uzumaki@hiddenleaf.com',
    phoneNumber: '+91 0310 2002 2007',
    address: 'Konohagakure',
  },

  sections: {
    educations: [
      {
        degree: 'Shadow Clone Jutsu',
        schoolName: 'Konoha Ninja Academy',
        location: 'Konohagakure, JP',
        startDate: '10/2002',
        endDate: 'present',
        id: uuidv4(),
      },
      {
        degree: 'Wind Release: Rasenshuriken',
        schoolName: 'Konoha Ninja Academy',
        location: 'Konohagakure, JP',
        startDate: '10/2002',
        endDate: 'present',
        id: uuidv4(),
      },
    ],

    experiences: [
      {
        company: 'Mount Myōboku.',
        title: 'Pain Assault',
        place: 'Konohagakure, JP',
        description:
          'Using my newly learned senjutsu techniques and a perfected Wind Release: Rasenshuriken, I saved Tsunade and handily defeated the Asura, Human, Animal, and Naraka Paths, before the Deva Path regained enough strength to fight on its own again.',
        start: '03/2010',
        end: '04/2010',
        id: uuidv4(),
      },
      {
        company: 'Land of Ancestors',
        title: 'Fourth Great Ninja War',
        place: 'Kaguya icy dimension',
        description:
          'Using the seal given to me by Hagoromo Ōtsutsuki, the Sage of Six Paths. The tailed beasts are removed from Kaguya body, she is made to spit out Madara, and she and Black Zetsu are trapped in the Six Paths — Chibaku Tensei that is, itself, stuck in another dimension.',
        start: '05/2012',
        end: '09/2016',
        id: uuidv4(),
      },
    ],
  },
}

export default exampleData
