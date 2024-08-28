"use server"

import { signUpSchema, SignUpValues } from "@/lib/validations"

export function signUp(
    credentials: SignUpValues
) : Promise<{error: string}> {

    try {
        const {} = signUpSchema.parse(credentials);
    } catch (error) {
        console.error(error)
        return {
            error:  "Something went wrong. Please try again"
        }
    }
}