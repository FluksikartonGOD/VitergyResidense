export const buildingsData = [
  {
    id: 1,
    nameKey: 'Building 1',
    titleKey: 'Title for building 1',
    descriptionKey: 'Description for building 1',
    image: '/images/building-1.jpg',
    completed: 10, // this will be displayed as a percentage
    floors: 3,
    apartments: [
      {
        id: 1,
        pathId: 'Building1Floor1Apartment1',
        nameKey: 'Apartment 1',
        titleKey: 'Title for apartment 1',
        descriptionKey: 'Description for apartment 1',
        sketch: '/images/test-skica.jpg',
        floor: 1,
        main_features: [
          {
            nameKey: 'total_area',
            descriptionKey: '200.00 м²',
          },
          {
            nameKey: 'common_area',
            descriptionKey: '20.00 м²',
          },
          {
            nameKey: 'residential_area',
            descriptionKey: '220.00 м²',
          },
        ],
        additional_features: [
          {
            nameKey: 'Feature 1',
            descriptionKey: 'Description for feature 1',
          },
          {
            nameKey: 'Feature 2',
            descriptionKey: 'Description for feature 2',
          },
        ],
        details: [
          {
            nameKey: 'Detail 1',
            descriptionKey: 'Description for detail 1',
          },
          {
            nameKey: 'Detail 2',
            descriptionKey: 'Description for detail 2',
          },
        ],
      },
      {
        id: 2,
        pathId: 'Building1Floor1Apartment2',
        nameKey: 'Apartment 2',
        titleKey: 'Title for apartment 2',
        descriptionKey: 'Description for apartment 2',
        sketch: '/images/test-skica-2.jpg',
        floor: 1,
        main_features: [
          {
            nameKey: 'total_area',
            descriptionKey: '200.00 м²',
          },
          {
            nameKey: 'common_area',
            descriptionKey: '20.00 м²',
          },
          {
            nameKey: 'residential_area',
            descriptionKey: '220.00 м²',
          },
        ],
        additional_features: [
          {
            nameKey: 'Feature 1',
            descriptionKey: 'Description for feature 1',
          },
          {
            nameKey: 'Feature 2',
            descriptionKey: 'Description for feature 2',
          },
        ],
        details: [
          {
            nameKey: 'Detail 1',
            descriptionKey: 'Description for detail 1',
          },
          {
            nameKey: 'Detail 2',
            descriptionKey: 'Description for detail 2',
          },
        ],
      },
    ],
  },
]
