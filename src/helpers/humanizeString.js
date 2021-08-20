export const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1).split('_').join(' ');
};