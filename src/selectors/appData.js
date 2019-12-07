import store from '../store'

export const selectAppData = () => store.getState().appData

export const selectFiles = () => selectAppData().files

export const selectFileByKey = key => selectFiles()[key]

export const selectRates = () => selectAppData().rates
