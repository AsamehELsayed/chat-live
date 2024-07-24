export const signupValidation = ({ firstName, lastName, email, password }) => {
    const errors = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
    };

    if (!firstName || firstName.length < 2) {
        errors.firstName = 'First name must be at least 2 characters long.';
    }
    if (!lastName || lastName.length < 2) {
        errors.lastName = 'Last name must be at least 2 characters long.';
    }
    if (!email || !isValidEmail(email)) {
        errors.email = 'Email address is not valid. Please provide a valid email address.';
    }
    if (!password || password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
    }

    // Return null if there are no errors, otherwise return the errors object
    return Object.values(errors).some(error => error !== null) ? errors : null;
}

const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
