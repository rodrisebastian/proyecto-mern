import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'El nombre de usuario es obligatorio',
    }), 
    email: z.string({
        required_error: 'Se requiere correo electrónico',
    }).email({
        message: 'Correo electrónico no válido',
    }),  
    password: z.string({
        required_error: 'Se requiere contraseña',
    }).min(6, {
        message: 'La contraseña debe tener al menos 6 caracteres.',
}),
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Se requiere correo electrónico",
    }).email({
        message: "Correo electrónico no válido",
    }),  
    password: z.string({
        required_error: "Se requiere contraseña",
    }).min(6, {
        message: "La contraseña debe tener al menos 6 caracteres.",
    }),
});