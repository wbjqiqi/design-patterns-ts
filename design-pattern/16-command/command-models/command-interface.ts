/* command-interface.ts */
// 命令接口
export interface ICommand {
    execute: (step: number) => any
    undo: () => any
}
