const CapitalizeFirstLetter = (string) => string[0].toUpperCase() + string.slice(1).split('_').join(' ');

export default CapitalizeFirstLetter;
