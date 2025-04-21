export default class User {
    readonly user_id: string | undefined
    readonly email: string
    readonly name: string
    readonly password_hash: string
    isActive: boolean
    failedLoginAttempts: number
    accountLockedUntil: Date | null
    emailIsVerified: boolean
    readonly createdAt: Date
    lastLogin: Date | null
    passwordLastChangedAt: Date | null

    constructor(
        user_id: string | undefined = undefined,
        email: string,
        name: string,
        password_hash: string,
        isActive: boolean = true,
        failedLoginAttempts: number = 0,
        accountLockedUntil: Date | null = null,
        emailIsVerified: boolean = false,
        createdAt: Date = new Date(),
        lastLogin: Date | null = null,
        passwordLastChangedAt: Date | null = null,
    ) {
        this.user_id = user_id;
        this.email = email;
        this.name = name;
        this.password_hash = password_hash;
        this.isActive = isActive;
        this.failedLoginAttempts = failedLoginAttempts;
        this.accountLockedUntil = accountLockedUntil;
        this.emailIsVerified = emailIsVerified;
        this.createdAt = createdAt;
        this.lastLogin = lastLogin;
        this.passwordLastChangedAt = passwordLastChangedAt;
    }

    static fromRow(row: any): User {
        return new User(
            row.user_id,
            row.email,
            row.name,
            row.password_hash,
            row.is_active,
            row.failed_login_attempts,
            row.account_locked_until,
            row.email_is_verified,
            row.created_at,
            row.last_login,
            row.password_last_changed_at
        );
    }
}