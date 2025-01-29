export interface Installer {
    id: number,
    name: string,
    phone?: string
    mobile?: string,
    email?: string,
    address?: {
      purok?: string,
      barangay?: string,
      city?: string,
    }
    company?: string,
    contactPerson?: {
      name?: string,
      phone?: string,
      mobile?: string,
      email?: string,
    }
  }

export interface PageProps {
  params: Promise<{
      id: string;
  }>;
}

export interface Consumer {
  id: number,
  name: string,
  account?: string,
  address?: {
    purok?: string,
    barangay?: string,
    city?: string
  },
  capacity:number,
  installer?: string,
  requirements?: {
    letterOfIntent?: boolean,
    validIdOfApplicant?: boolean,
    specialPowerOfAttorney?: boolean,
    letterOfAuthorization?: boolean,
    electricalPermit?: boolean,
    singleLineDiagram?: boolean,
    electricalPlan?: boolean,
    specificationsAndCertifications?: boolean,
    pictures?: boolean,
    nameAndAddressOfApplicant?: boolean,
    addressOfServicePoint?: boolean,
    nameAndAddressOfPreparer?: boolean,
    powerGeneratingFacilityInfo?: boolean,
    distributionImpactStudyRequest?: boolean,
    impactAssessmentInfo?: boolean
  }
}