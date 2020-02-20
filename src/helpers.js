export const getFullName = ({ first_name, last_name, middle_name }) => {
    return [first_name, middle_name, last_name].join(' ');
};
