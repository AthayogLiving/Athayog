export const capitalizeFirstLetter = (string) => {
     return string != undefined
          ? string.charAt(0).toUpperCase() + string.slice(1)
          : 'String';
};
