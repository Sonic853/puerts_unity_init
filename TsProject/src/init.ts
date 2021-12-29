import { UnityEngine, System, PuertsMethod } from 'csharp'
class PuertsInit {
    obj: PuertsMethod.Init
    constructor(obj: PuertsMethod.Init) {
        this.obj = obj;
        this.obj.JsAwake = () => {
            this.Awake()
        }
        this.obj.JsStart = () => {
            this.Start()
        }
        this.obj.JsUpdate = () => {
            this.Update()
        }
        this.obj.JsFixedUpdate = () => {
            this.FixedUpdate()
        }
        this.obj.JsOnDestroy = () => {
            this.OnDestroy()
        }
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
let puertsInit: PuertsInit
export const init = (obj: PuertsMethod.Init) => {
    puertsInit = new PuertsInit(obj)
}