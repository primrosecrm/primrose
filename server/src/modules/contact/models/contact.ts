export default class Contact {
    fullName: string;
    email: string;
    phoneNumber: string;
    companyName?: string;
    jobTitle: string;
    status: ContactStatus
    leadSource: string;
    dateAdded: Date;
    preferredContactMethod: ContactMethodType;
    lastContactedDate?: Date;
    nextFollowUpDate?: Date;
    subgroup?: string;
    notes?: string;
    communicationLog?: string[];
    streetAddress?: string;
    city?: string;
    countyOrState?: string;
    postalCode?: string;
    country?: string;
    industry?: string;
    numberOfEmployees?: number;
    customerValue?: number;

    constructor(
        fullName: string,
        email: string,
        phoneNumber: string,
        jobTitle: string,
        status: ContactStatus,
        leadSource: string,
        dateAdded: Date,
        preferredContactMethod: ContactMethodType,
        companyName?: string,
        lastContactedDate?: Date,
        nextFollowUpDate?: Date,
        subgroup?: string,
        notes?: string,
        communicationLog?: string[],
        streetAddress?: string,
        city?: string,
        countyOrState?: string,
        postalCode?: string,
        country?: string,
        industry?: string,
        numberOfEmployees?: number,
        customerValue?: number
    ) {
        this.fullName = fullName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.companyName = companyName;
        this.jobTitle = jobTitle;
        this.status = status;
        this.leadSource = leadSource;
        this.dateAdded = dateAdded;
        this.preferredContactMethod = preferredContactMethod;
        this.lastContactedDate = lastContactedDate;
        this.nextFollowUpDate = nextFollowUpDate;
        this.subgroup = subgroup;
        this.notes = notes;
        this.communicationLog = communicationLog;
        this.streetAddress = streetAddress;
        this.city = city;
        this.countyOrState = countyOrState;
        this.postalCode = postalCode;
        this.country = country;
        this.industry = industry;
        this.numberOfEmployees = numberOfEmployees;
        this.customerValue = customerValue;
    }
}