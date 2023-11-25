import { z } from 'zod';

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

export const registerSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    lastName: z.string({
        required_error: "Last name is required",
    }),
    email: z
        .string({
            required_error: "Email is required",
        })
        .refine((data) => emailRegex.test(data), {
            message: "Email is not valid",
        }),
    numberId: z.string({
        required_error: "RUT or DNI is required",
    }),
});