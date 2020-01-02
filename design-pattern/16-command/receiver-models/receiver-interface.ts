/* receiver-interface.ts */
// 接收者接口
export interface IRightReceiver {
    moveRight: (step: number) => any;
    rightUndo: () => any;
}

export interface ILeftReceiver {
    moveLeft: (step: number) => any;
    leftUndo: () => any;
}