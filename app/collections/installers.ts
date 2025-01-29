import {Installer} from '../components/types'

export const installers: Installer[] = [
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-789",
      mobile: "123-456-789",
      email: "johndoe@fake.com",
      address: {
        purok: "Nowhere",
        barangay : "Somewhere",
        city: "Can't be found",
      },
      contactPerson: {
        name : "Random Dude",
        phone: "123-456-789",
        mobile: "123-456-789",
        email: "random@fake.com",
      },
      company: "random company"
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "987-654-321",
      mobile: "987-654-321",
      email: "janesmith@fake.com",
      address: {
        purok: "Someplace",
        barangay : "Anywhere",
        city: "Some City",
      },
      contactPerson: {
        name : "Contact Person 2",
        phone: "987-654-321",
        mobile: "987-654-321",
        email: "contact2@fake.com",
      },
    },
    {
      id: 3,
      name: "Alice Johnson",
      phone: "555-555-555",
      mobile: "555-555-555",
      email: "alicejohnson@fake.com",
      address: {
        purok: "Another Place",
        barangay : "Another Barangay",
        city: "Another City",
      },
      contactPerson: {
        name : "Contact Person 3",
        phone: "555-555-555",
        mobile: "555-555-555",
        email: "contact3@fake.com",
      },
    },
    {
      id: 4,
      name: "Bob Brown",
      phone: "444-444-444",
      mobile: "444-444-444",
      email: "bobbrown@fake.com",
      address: {
        purok: "Different Place",
        barangay : "Different Barangay",
        city: "Different City",
      },
      contactPerson: {
        name : "Contact Person 4",
        phone: "444-444-444",
        mobile: "444-444-444",
        email: "contact4@fake.com",
      },
    },
  ];