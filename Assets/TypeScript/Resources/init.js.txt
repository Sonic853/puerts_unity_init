"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
class PuertsInit {
    obj;
    constructor(obj) {
        this.obj = obj;
        this.obj.JsAwake = () => {
            this.Awake();
        };
        this.obj.JsStart = () => {
            this.Start();
        };
        this.obj.JsUpdate = () => {
            this.Update();
        };
        this.obj.JsFixedUpdate = () => {
            this.FixedUpdate();
        };
        this.obj.JsOnDestroy = () => {
            this.OnDestroy();
        };
    }
    Awake() {
        console.log("Awake");
    }
    Start() {
        console.log("Start");
    }
    Update() {
    }
    FixedUpdate() {
    }
    OnDestroy() {
        console.log("OnDestroy");
    }
}
let puertsInit;
const init = (obj) => {
    puertsInit = new PuertsInit(obj);
};
exports.init = init;
//# sourceMappingURL=init.js.map