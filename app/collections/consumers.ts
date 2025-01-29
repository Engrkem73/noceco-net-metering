import { Consumer } from '../components/types'

export const consumers: Consumer[] = [
    {
        id: 1,
        name: "Maria Santos",
        account: "05-128-00025",
        address: {
            purok: "Nabukiran",
            barangay: "Tapi",
            city: "Kabankalan"
        },
        capacity: 12,
        installer: "John Doe",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: false,
            specialPowerOfAttorney: true,
            letterOfAuthorization: false,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: false,
            pictures: false,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    },
    {
        id: 2,
        name: "Pedro Reyes",
        account: "05-128-00026",
        address: {
            purok: "Mainuswagon",
            barangay: "Talubangi",
            city: "Kabankalan"
        },
        capacity: 8,
        installer: "John Doe",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: false,
            letterOfAuthorization: true,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: true,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: false,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    },
    {
        id: 3,
        name: "Juan dela Cruz",
        account: "05-128-00027",
        address: {
            purok: "Masinadyahon",
            barangay: "Hilamonan",
            city: "Kabankalan"
        },
        capacity: 15,
        installer: "Jane Smith",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: true,
            letterOfAuthorization: false,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: false,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: false,
            impactAssessmentInfo: true
        }
    },
    {
        id: 4,
        name: "Ana Gonzales",
        account: "05-128-00028",
        address: {
            purok: "San Jose",
            barangay: "Tabugon",
            city: "Kabankalan"
        },
        capacity: 10,
        installer: "Jane Smith",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: true,
            letterOfAuthorization: true,
            electricalPermit: false,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: true,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: false,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    },
    {
        id: 5,
        name: "Ricardo Luna",
        account: "05-128-00029",
        address: {
            purok: "Mabinuligon",
            barangay: "Orong",
            city: "Kabankalan"
        },
        capacity: 0,
        installer: "Alice Johnson",
        requirements: {
            letterOfIntent: false,
            validIdOfApplicant: false,
            specialPowerOfAttorney: false,
            letterOfAuthorization: false,
            electricalPermit: false,
            singleLineDiagram: false,
            electricalPlan: false,
            specificationsAndCertifications: false,
            pictures: false,
            nameAndAddressOfApplicant: false,
            addressOfServicePoint: false,
            nameAndAddressOfPreparer: false,
            powerGeneratingFacilityInfo: false,
            distributionImpactStudyRequest: false,
            impactAssessmentInfo: false
        }
    },
    {
        id: 6,
        name: "Elena Torres",
        account: "05-128-00030",
        address: {
            purok: "",
            barangay: "",
            city: ""
        },
        capacity: 5,
        installer: "Alice Johnson",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: true,
            letterOfAuthorization: true,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: true,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    },
    {
        id: 7,
        name: "Manuel Garcia",
        account: "05-128-00031",
        address: {
            purok: "Kasilingan",
            barangay: "Camingawan",
            city: "Kabankalan"
        },
        capacity: 20,
        installer: "Bob Brown",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: true,
            letterOfAuthorization: true,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: true,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    },
    {
        id: 8,
        name: "Carmen Villanueva",
        account: "05-128-00032",
        address: {
            purok: "Matahum",
            barangay: "Tabugon",
            city: "Kabankalan"
        },
        capacity: 0,
        installer: "Bob Brown",
        requirements: {
            letterOfIntent: false,
            validIdOfApplicant: false,
            specialPowerOfAttorney: false,
            letterOfAuthorization: false,
            electricalPermit: false,
            singleLineDiagram: false,
            electricalPlan: false,
            specificationsAndCertifications: false,
            pictures: false,
            nameAndAddressOfApplicant: false,
            addressOfServicePoint: false,
            nameAndAddressOfPreparer: false,
            powerGeneratingFacilityInfo: false,
            distributionImpactStudyRequest: false,
            impactAssessmentInfo: false
        }
    },
    {
        id: 9,
        name: "Roberto Tan",
        account: "05-128-00033",
        address: {
            purok: "",
            barangay: "",
            city: ""
        },
        capacity: 6,
        installer: "John Doe",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: true,
            letterOfAuthorization: true,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: true,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    },
    {
        id: 10,
        name: "Lucia Mendoza",
        account: "05-128-00034",
        address: {
            purok: "Malipayon",
            barangay: "Binicuil",
            city: "Kabankalan"
        },
        capacity: 18,
        installer: "Alice Johnson",
        requirements: {
            letterOfIntent: true,
            validIdOfApplicant: true,
            specialPowerOfAttorney: true,
            letterOfAuthorization: true,
            electricalPermit: true,
            singleLineDiagram: true,
            electricalPlan: true,
            specificationsAndCertifications: true,
            pictures: true,
            nameAndAddressOfApplicant: true,
            addressOfServicePoint: true,
            nameAndAddressOfPreparer: true,
            powerGeneratingFacilityInfo: true,
            distributionImpactStudyRequest: true,
            impactAssessmentInfo: true
        }
    }
];
