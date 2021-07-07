import { format } from 'date-fns';

export const DatetoString = (date) => {
    if (!date) {
        return '';
    }
    return format(date, 'yyyy年M月d日HH時mm分');
};
