/**
 * Fixed login implementation
 * Fixes:
 * - Rejects empty passwords
 * - Checks password properly
 * - Checks if user is active
 */

export function fixedLogin(username, password, userFromDb) {
    if (!username || !password) {
        return {
            success: false,
            message: "Username and password are required"
        };
    }

    if (!userFromDb) {
        return {
            success: false,
            message: "User not found"
        };
    }

    if (userFromDb.isActive !== true) {
        return {
            success: false,
            message: "Account is disabled"
        };
    }

    if (userFromDb.password !== password) {
        return {
            success: false,
            message: "Invalid credentials"
        };
    }

    return {
        success: true,
        message: "Login successful",
        user: {
            id: userFromDb.id,
            username: userFromDb.username,
            role: userFromDb.role
        }
    };
}
