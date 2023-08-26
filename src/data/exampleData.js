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
        degree: 'Bachelors in Economics',
        schoolName: 'London City University',
        location: 'New York City, US',
        startDate: '09/2021',
        endDate: 'present',
        id: uuidv4(),
      },
      {
        degree: "Master's Degree in Math",
        schoolName: 'Hidden University',
        location: 'New York City, US',
        startDate: '08/2020',
        endDate: 'present',
        id: uuidv4(),
      },
    ],

    experiences: [
      {
        company: 'Umbrella Inc.',
        title: 'UX & UI Designer',
        place: 'New York City, US',
        description:
          'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        start: '08/2020',
        end: 'present',
        id: uuidv4(),
      },
      {
        company: 'Black Mesa Labs',
        title: 'UX Research Assistant',
        place: 'Berlin, Germany',
        description:
          'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
        start: '04/2018',
        end: '02/2019',
        id: uuidv4(),
      },
    ],
  },
}

export default exampleData
