// create action creators to update the redux state

export const updateTextInput = (text) => ({
    type: 'UPDATE_TEXT_INPUT',
    payload: text
})