/* system-b.ts */
import ISystemB from './i-system-b';
import SystemBToAAdapter from './system-b-to-a-adapter';

export default class SystemB implements ISystemB{
    public static instance = new SystemB();

    public echoTime(args: {hours: string, minutes: string, seconds: string}) {
        SystemBToAAdapter.instance.echoTime(args);
    }
}