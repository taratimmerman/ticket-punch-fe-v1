export const humanizeString = (string) => {
    const removeUnderscores = string.split('_').join(' ');
    
    const humanized = removeUnderscores[0].toUpperCase() + removeUnderscores.slice(1);

    return humanized;
};