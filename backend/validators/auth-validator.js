// schemas/signupSchema.js
import { z } from 'zod';

const signupSchema = z.object({
    username: z.string()
        .trim()
        .min(2, 'Username is required at lest 2 char')
        .max(100, 'Username is too long'),
    email: z.string()
        .trim()
        .email('Invalid email address')
        .min(5, 'Email is too short at lest 5 char')
        .max(255, 'Email is too long'),
    phone: z.string()
        .trim()
        .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number')
        .min(10, 'Phone number is too short at lest 10 digit')
        .max(15, 'Phone number is too long'),
    password: z.string()
        .trim()
        .min(6, 'Password must be at least 6 characters long')
        .max(100, 'Password is too long'),
});

export default signupSchema;
