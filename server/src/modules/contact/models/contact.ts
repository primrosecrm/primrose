export default class Contact {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    status: boolean;
    createdAt: Date;
    preferredContactMethod: string;
    notes?: string;
    industry?: string;

    constructor(
        firstName: string,
        lastName: string,
        email: string,
        phoneNumber: string,
        status: boolean,
        dateAdded: Date,
        preferredContactMethod: string,
        notes?: string,
        industry?: string,
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.status = status;
        this.createdAt = dateAdded;
        this.preferredContactMethod = preferredContactMethod;
        this.notes = notes;
        this.industry = industry;
    }
}