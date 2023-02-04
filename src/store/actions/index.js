export const addAppointment = ( appointmentData ) => {
    return ( dispatch ) => {
        dispatch({
            type: "ADD_APPOINTMENT",
            payload: appointmentData
        })
    }
}
export const editAppointment = ( appointmentData ) => {
    return ( dispatch ) => {
        dispatch({
            type: "EDIT_APPOINTMENT",
            payload: appointmentData
        })
    }
}
export const deleteAppointment = ( appointmentData ) => {
    return ( dispatch ) => {
        dispatch({
            type: "DELETE_APPOINTMENT",
            payload: appointmentData
        })
    }
}

