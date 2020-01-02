/* system-b-to-a-adapter.ts */
import ISystemB from './i-system-b';
import SystemA from './system-a';

export default class SystemBToAAdapter implements ISystemB{
    public static instance: SystemBToAAdapter = new SystemBToAAdapter();

    public echoTime(args: {hours: string, minutes: string, seconds: string}) {
        // 将我们的参数稍微改动一下就可以调用A系统的接口而不用重写
        SystemA.instance.echoABC(args.hours, args.minutes, args.seconds);
    }
}
