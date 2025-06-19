export default class Contact {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    createdAt: Date;
    preferredContactMethod: string;
    notes: string;
    isArchived: boolean;

    constructor(
        userId: string,
        firstName: string,
        lastName: string,
        email: string,
        phone: string,
        preferredContactMethod: string,
        notes: string,
        isArchived: boolean,
        createdAt: Date,
    ) {
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.preferredContactMethod = preferredContactMethod;
        this.email = email;
        this.phone = phone;
        this.notes = notes;
        this.isArchived = isArchived;
        this.createdAt = createdAt;
    }

    static fromRow(row: any): Contact {
        return new Contact(
            row.user_id,
            row.first_name,
            row.last_name,
            row.preferred_contact_method,
            row.email,
            row.phone,
            row.notes,
            row.is_archived,
            row.created_at
        );
    }
}