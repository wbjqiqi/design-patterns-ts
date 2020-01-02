/* system-a.ts */
export default class SystemA {
    public static instance = new SystemA();

    public echoABC(a: string, b: string, c: string) {
        console.log(a, b, c);
    }
}