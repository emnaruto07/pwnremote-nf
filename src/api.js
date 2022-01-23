const baseURL = "http://127.0.0.1:8000"
const apiURL = `${baseURL}/api`

export const API = {
    auth: {
        // login: `${baseURL}/api-token-auth/`
        login: `${baseURL}/dj-rest-auth/login/`,
        logout: `${baseURL}/dj-rest-auth/logout/`,
        passwordReset: `${baseURL}/dj-rest-auth/password/reset/`,
        passwordResetConfirm: `${baseURL}/dj-rest-auth/password/reset/confirm/`,
        signup: `${baseURL}/dj-rest-auth/registration/`,
        verifyEmail: `${baseURL}/dj-rest-auth/registration/verify-email/`

    },
    // payment: {
    //     createPayment: `${apiURL}/create-checkout-session/`,
    //     updatePayment: `${apiURL}/payments/create-payment/`
    // },

    jobs: {
        list: `${apiURL}/jobs/`,
        create:`${apiURL}/create-job/`,
        update: id => `${apiURL}/job/${id}/update`,
        delete: id => `${apiURL}/job/${id}/delete`,
        retrieve: id => `${apiURL}/job/${id}/`,

    },

    userfeedback: {
        feedback: `${apiURL}/feedback/`
    },

    user: {
        users: `${apiURL}/users/`
    }
}