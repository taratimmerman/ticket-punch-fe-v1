export const DEFAULT_ERROR_MESSAGE = "DEFAULT_ERROR_MESSAGE";

export const errorActionCreator = (errorType, error) => {
    return {
        type: errorType,
        error: true,
        payload: error,
    };
}