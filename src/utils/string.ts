function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name: string) {
    let split = name.split(' ');
    let first = split[0];
    let second = split[1] || ' ';
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${first[0]}${second[0]}`,
    };
}

export {stringAvatar};


export const ellipsis = (v: string, length: number): string => {
    if (v.length <= length) {
        return v;
    }
    const reg = new RegExp('^(.{'+length+'}).+$');
    return `${v.replace(reg, "$1")}...`;
}