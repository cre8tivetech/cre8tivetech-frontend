const brandingServices = [
  'Logo Design', // - 0
  'Business Card Design', // - 1
  'Business Card Design X 100 Copies Print', // - 2
  'Letter Head Design', // - 3
  'Letter Head Design X 100 Copies Print', // - 4
  'ID Card Design', // - 5
  'ID Card Design X 2 Copies Print', // - 6
  'Calender Design X 5 Copies Print', // - 7
  'Rollup Banner Design X 1 Print', // - 8
  'Branded Shirt Design X 10 Pcs Print', // - 9
  'E-flyer Design' // - 10
]
const webServices = [
  'Hosting & Domain Registration', // - 0
  'User Interface & Prototype', // - 1
  'Website Development (5 pages max)', // - 2
  'Website Development (10 pages max)', // - 3
  'Website Development', // - 4
  'Content Creation', // - 5
  'Basic Search Engine Optimization (SEO)', // - 6
  'Advance Search Engine Optimization (SEO)', // - 7
  'Content Management System Integration', // - 8
  'Payment System Integration', // - 9
  '5 Months Free Maintenance', // - 10
  '8 Months Free Maintenance', // - 11
  '1 Year Free Maintenance' // - 12
]
const socialMediaServices = [
  'Logo Design', // - 0
  'Business Card Design', // - 1
  'Business Card Design X 100 Copies Print', // - 2
  'Letter Head Design', // - 3
  'Letter Head Design X 100 Copies Print', // - 4
  'ID Card Design', // - 5
  'ID Card Design X 2 Copies Print', // - 6
  'Calender Design X 5 Copies Print', // - 7
  'Rollup Banner Design X 1 Print', // - 8
  'Branded Shirt Design X 10 Pcs Print', // - 9
  'E-flyer Design' // - 10
]
const packages = {
  branding: {
    basic: {
      price: '29,999',
      services: [
        {
          name: brandingServices[0],
          cancelled: false
        },
        {
          name: brandingServices[1],
          cancelled: false
        },
        {
          name: brandingServices[3],
          cancelled: false
        },
        {
          name: brandingServices[5],
          cancelled: false
        },
        {
          name: brandingServices[7],
          cancelled: true
        },
        {
          name: brandingServices[8],
          cancelled: true
        },
        {
          name: brandingServices[9],
          cancelled: true
        },
        {
          name: brandingServices[10],
          cancelled: false
        },
      ]
    },
    standard: {
      price: '79,999',
      services: [
        {
          name: brandingServices[0],
          cancelled: false
        },
        {
          name: brandingServices[2],
          cancelled: false
        },
        {
          name: brandingServices[4],
          cancelled: false
        },
        {
          name: brandingServices[6],
          cancelled: false
        },
        {
          name: brandingServices[7],
          cancelled: true
        },
        {
          name: brandingServices[8],
          cancelled: true
        },
        {
          name: brandingServices[9],
          cancelled: true
        },
        {
          name: brandingServices[10],
          cancelled: false
        },
      ]
    },
    standard: {
      price: '79,999',
      services: [
        {
          name: brandingServices[0],
          cancelled: false
        },
        {
          name: brandingServices[2],
          cancelled: false
        },
        {
          name: brandingServices[4],
          cancelled: false
        },
        {
          name: brandingServices[6],
          cancelled: false
        },
        {
          name: brandingServices[7],
          cancelled: false
        },
        {
          name: brandingServices[8],
          cancelled: false
        },
        {
          name: brandingServices[9],
          cancelled: false
        },
        {
          name: brandingServices[10],
          cancelled: false
        },
      ]
    },
  },
  web: {
    basic: {
      price: '60,000',
      services: [
        {
          name: webServices[0],
          cancelled: false
        },
        {
          name: webServices[1],
          cancelled: true
        },
        {
          name: webServices[2],
          cancelled: false
        },
        {
          name: webServices[5],
          cancelled: false
        },
        {
          name: webServices[6],
          cancelled: false
        },
        {
          name: webServices[8],
          cancelled: false
        },
        {
          name: webServices[9],
          cancelled: false
        },
        {
          name: webServices[10],
          cancelled: false
        },
      ]
    },
    standard: {
      price: '120,000',
      services: [
        {
          name: webServices[0],
          cancelled: false
        },
        {
          name: webServices[1],
          cancelled: true
        },
        {
          name: webServices[3],
          cancelled: false
        },
        {
          name: webServices[5],
          cancelled: false
        },
        {
          name: webServices[7],
          cancelled: false
        },
        {
          name: webServices[8],
          cancelled: false
        },
        {
          name: webServices[9],
          cancelled: false
        },
        {
          name: webServices[11],
          cancelled: false
        },
      ]
    },
    standard: {
      price: '260,000',
      services: [
        {
          name: webServices[0],
          cancelled: false
        },
        {
          name: webServices[1],
          cancelled: false
        },
        {
          name: webServices[4],
          cancelled: false
        },
        {
          name: webServices[5],
          cancelled: false
        },
        {
          name: webServices[7],
          cancelled: false
        },
        {
          name: webServices[8],
          cancelled: false
        },
        {
          name: webServices[9],
          cancelled: false
        },
        {
          name: webServices[12],
          cancelled: false
        },
      ]
    },
  },
  socialMedia: {
    basic: {
      price: '60,000',
      services: [
        {
          name: webServices[0],
          cancelled: false
        },
        {
          name: webServices[1],
          cancelled: true
        },
        {
          name: webServices[2],
          cancelled: false
        },
        {
          name: webServices[5],
          cancelled: false
        },
        {
          name: webServices[6],
          cancelled: false
        },
        {
          name: webServices[8],
          cancelled: false
        },
        {
          name: webServices[9],
          cancelled: false
        },
        {
          name: webServices[10],
          cancelled: false
        },
      ]
    },
    standard: {
      price: '120,000',
      services: [
        {
          name: webServices[0],
          cancelled: false
        },
        {
          name: webServices[1],
          cancelled: true
        },
        {
          name: webServices[3],
          cancelled: false
        },
        {
          name: webServices[5],
          cancelled: false
        },
        {
          name: webServices[7],
          cancelled: false
        },
        {
          name: webServices[8],
          cancelled: false
        },
        {
          name: webServices[9],
          cancelled: false
        },
        {
          name: webServices[11],
          cancelled: false
        },
      ]
    },
    standard: {
      price: '260,000',
      services: [
        {
          name: webServices[0],
          cancelled: false
        },
        {
          name: webServices[1],
          cancelled: false
        },
        {
          name: webServices[4],
          cancelled: false
        },
        {
          name: webServices[5],
          cancelled: false
        },
        {
          name: webServices[7],
          cancelled: false
        },
        {
          name: webServices[8],
          cancelled: false
        },
        {
          name: webServices[9],
          cancelled: false
        },
        {
          name: webServices[12],
          cancelled: false
        },
      ]
    },
  }
}