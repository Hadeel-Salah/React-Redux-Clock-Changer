export const setIncrease = (type,time) => ({
    type,
    payload: time
});

export const setDecrease = (type,activeSession) => ({
    type,
    payload: activeSession
});


export const setType = (activeSession) => ({
    type: 'SESSIONTYPE',
    payload: activeSession
});