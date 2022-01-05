using System;
using System.Collections;
using Puerts;
using UnityEngine;

namespace PuertsMethod
{
    public delegate void ModuleInit(Init monoBehaviour);
    public class Init : MonoBehaviour
    {
        public string JsFile = "init";
        public bool DevMode = true;
        public Action JsAwake;
        public Action JsStart;
        public Action JsUpdate;
        public Action JsFixedUpdate;
        public Action JsOnDestroy;
        static JsEnv jsEnv;
        static Init instance;
        public static Init Instance
        {
            get
            {
                if (instance == null)
                {
                    GameObject obj = new GameObject("PuertsInit");
                    instance = obj.AddComponent<Init>();
                    DontDestroyOnLoad(obj);
                }
                return instance;
            }
        }
        void Awake()
        {
            if (instance == null)
            {
                InitTs();
                instance = this;
                DontDestroyOnLoad(instance);
            }
            else
            {
                Destroy(this);
            }
            if (JsAwake != null) JsAwake();
        }
        void Start()
        {
            if (JsStart != null) JsStart();
        }
        void Update()
        {
            if (JsUpdate != null) JsUpdate();
            jsEnv.Tick();
        }
        void FixedUpdate()
        {
            if (JsFixedUpdate != null) JsFixedUpdate();
        }
        void OnDestroy()
        {
            if (JsOnDestroy != null) JsOnDestroy();
            JsAwake = null;
            JsStart = null;
            JsUpdate = null;
            JsFixedUpdate = null;
            JsOnDestroy = null;
        }
        void InitTs()
        {
            if (jsEnv == null)
            {
                if (DevMode) jsEnv = new JsEnv(new DefaultLoader(UnityEngine.Application.dataPath + "/../TsProject/out"), 8282);
                else jsEnv = new JsEnv();
            }
            string runCode = "const m = require('init'); m.init;";
            JsFile = JsFile.Trim();
            if (JsFile != "") runCode = "const m = require('" + JsFile + "'); m.init;";
            var init = jsEnv.Eval<ModuleInit>(runCode);
            if (init != null) init(this);
        }
        private IEnumerator CoroutineYield(object to_yield, Action callback)
        {
            if (to_yield is IEnumerator)
                yield return StartCoroutine((IEnumerator)to_yield);
            else
                yield return to_yield;
            callback();
        }

        public static void Yield(object to_yield, Action callback)
        {
            Instance.StartCoroutine(Instance.CoroutineYield(to_yield, callback));
        }
    }
}
