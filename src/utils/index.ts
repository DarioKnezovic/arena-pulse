export const formatDate = (date: Date): String => {
    let month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
};

export const replaceWhitespace = (string: String): String => {
    return string.replaceAll(" ", "_");
};

