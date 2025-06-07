import {
  pgTable,
  uuid,
  varchar,
  boolean,
  integer,
  timestamp,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  userId: uuid('user_id')
    .primaryKey()
    .defaultRandom(),
    
  email: varchar('email', { length: 255 })
    .notNull()
    .unique(),

  name: varchar('name', { length: 255 })
    .notNull(),

  passwordHash: varchar('password_hash', { length: 255 })
    .notNull(),

  isActive: boolean('is_active')
    .notNull()
    .default(true),

  failedLoginAttempts: integer('failed_login_attempts')
    .notNull()
    .default(0),

  accountLockedUntil: timestamp('account_locked_until', { withTimezone: true }),

  emailIsVerified: boolean('email_is_verified')
    .notNull()
    .default(false),

  createdAt: timestamp('created_at', { withTimezone: true })
    .notNull()
    .defaultNow(),

  lastLogin: timestamp('last_login', { withTimezone: true }),

  passwordLastChangedAt: timestamp('password_last_changed_at', { withTimezone: true }),
});