/* i-system-b.ts */
export default interface ISystemB {
    echoTime: (args: {hours: string, minutes: string, seconds: string}) => any;
}