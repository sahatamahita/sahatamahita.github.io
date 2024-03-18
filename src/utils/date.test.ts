import {secondsToHourFormat} from "./date";

test('test secondsToHourFormat', () => {
    expect(secondsToHourFormat(3600)).toEqual("01:00:00");
    expect(secondsToHourFormat(3599)).toEqual("00:59:59");
    expect(secondsToHourFormat(3540)).toEqual("00:59:00");
    expect(secondsToHourFormat(3539)).toEqual("00:58:59");
    expect(secondsToHourFormat(3539)).toEqual("00:58:59");
    expect(secondsToHourFormat(70)).toEqual("00:01:10");
    expect(secondsToHourFormat(69)).toEqual("00:01:09");
    expect(secondsToHourFormat(60)).toEqual("00:01:00");
    expect(secondsToHourFormat(59)).toEqual("00:00:59");
    expect(secondsToHourFormat(1)).toEqual("00:00:01");
    expect(secondsToHourFormat(0)).toEqual("00:00:00");
});

export {}