class User {
    readonly id: String | undefined
    readonly email: String
    readonly name: String
    readonly password: String
    isActive: boolean
    failedLoginAttempts: number
    account_locked_until: Date | null
    email_is_verified: boolean
    readonly created_at: Date
    last_login: Date | null
    password_last_changed_at: Date | null

    constructor(
        email: String,
        name: String,
        password: String,
        isActive: boolean = true,
        id: String | undefined = undefined,
        failedLoginAttempts: number = 0,
        account_locked_until: Date | null = null,
        email_is_verified: boolean = false,
        created_at: Date = new Date(),
        last_login: Date | null = null,
        password_last_changed_at: Date | null = null,
    ) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
        this.isActive = isActive;
        this.failedLoginAttempts = failedLoginAttempts;
        this.account_locked_until = account_locked_until;
        this.email_is_verified = email_is_verified;
        this.created_at = created_at;
        this.last_login = last_login;
        this.password_last_changed_at = password_last_changed_at;
    }

    isAccountLocked(): boolean {
        if (this.account_locked_until == null) return false;
        return this.account_locked_until > new Date();
    }
}

export default User;