// schemas/signupSchema.js
import { z } from 'zod';

const signupSchema = z.object({
    username: z.string({ required_error: "Name is required" })
        .trim()
        .min(2, { message: 'Username is required at lest 2 char' })
        .max(100, { message: 'Username is too long' }),
    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: 'Invalid email address' })
        .min(5, { message: 'Email is too short at lest 5 char' })
        .max(255, { message: 'Email is too long' }),
    phone: z.string({ required_error: "Phone No is required" })
        .trim()
        .regex(/^\+?[1-9]\d{1,14}$/, { message: 'Invalid phone number' })
        .min(10, { message: 'Phone number is too short at lest 10 digit' })
        .max(15, { message: 'Phone number is too long' }),
    password: z.string({ required_error: "Password is required" })
        .trim()
        .min(4, { message: 'Password must be at least 4 characters long' })
        .max(100, { message: 'Password is too long' }),
});


const loginSchema = z.object({

    email: z.string({ required_error: "Email is required" })
        .trim()
        .email({ message: 'Invalid email address' })
        .min(5, { message: 'Email is too short at lest 5 char' })
        .max(255, { message: 'Email is too long' }),

    password: z.string({ required_error: "Password is required" })
        .trim()
        .min(4, { message: 'Password must be at least 4 characters long' })
        .max(100, { message: 'Password is too long' }),
});

export { signupSchema, loginSchema };
