
declare module 'csharp' {
    interface $Ref<T> {
        value: T
    }
    
    namespace System {
        interface Array$1<T> extends System.Array {
            get_Item(index: number):T;
            
            set_Item(index: number, value: T):void;
        }
    }
    
    interface $Task<T> {}
    
    namespace UnityEngine {
        /** Class containing methods to ease debugging while developing a game. */
        class Debug extends System.Object{ 
            /** Get default debug logger. */
            public static get unityLogger(): UnityEngine.ILogger;
            
            /** Reports whether the development console is visible. The development console cannot be made to appear using: */
            public static get developerConsoleVisible(): boolean;
            public static set developerConsoleVisible(value: boolean);
            /** In the Build Settings dialog there is a check box called "Development Build". */
            public static get isDebugBuild(): boolean;
            
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3):void;
            /** Draws a line between specified start and end points. * @param start Point in world space where the line should start.
             * @param end Point in world space where the line should end.
             * @param color Color of the line.
             * @param duration How long the line should be visible for.
             * @param depthTest Should the line be obscured by objects closer to the camera?
             */
            public static DrawLine($start: UnityEngine.Vector3, $end: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3):void;
            /** Draws a line from start to start + dir in world coordinates. * @param start Point in world space where the ray should start.
             * @param dir Direction and length of the ray.
             * @param color Color of the drawn line.
             * @param duration How long the line will be visible for (in seconds).
             * @param depthTest Should the line be obscured by other objects closer to the camera?
             */
            public static DrawRay($start: UnityEngine.Vector3, $dir: UnityEngine.Vector3, $color: UnityEngine.Color, $duration: number, $depthTest: boolean):void;
            
            public static Break():void;
            
            public static DebugBreak():void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any):void;
            /** Logs a message to the Unity Console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static Log($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Logs a formatted message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             * @param logType Type of message e.g. warn or error etc.
             * @param logOptions Option flags to treat the log message special.
             */
            public static LogFormat($logType: UnityEngine.LogType, $logOptions: UnityEngine.LogOption, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogError($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($format: string, ...args: any[]):void;
            /** Logs a formatted error message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogErrorFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
            public static ClearDeveloperConsole():void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception):void;
            /** A variant of Debug.Log that logs an error message to the console. * @param context Object to which the message applies.
             * @param exception Runtime Exception.
             */
            public static LogException($exception: System.Exception, $context: UnityEngine.Object):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any):void;
            /** A variant of Debug.Log that logs a warning message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogWarning($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($format: string, ...args: any[]):void;
            /** Logs a formatted warning message to the Unity Console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogWarningFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $context: UnityEngine.Object):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any):void;
            
            public static Assert($condition: boolean, $message: string):void;
            /** Assert a condition and logs an error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param context Object to which the message applies.
             * @param message String or object to be converted to string representation for display.
             */
            public static Assert($condition: boolean, $message: any, $context: UnityEngine.Object):void;
            
            public static Assert($condition: boolean, $message: string, $context: UnityEngine.Object):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $format: string, ...args: any[]):void;
            /** Assert a condition and logs a formatted error message to the Unity console on failure. * @param condition Condition you expect to be true.
             * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static AssertFormat($condition: boolean, $context: UnityEngine.Object, $format: string, ...args: any[]):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any):void;
            /** A variant of Debug.Log that logs an assertion message to the console. * @param message String or object to be converted to string representation for display.
             * @param context Object to which the message applies.
             */
            public static LogAssertion($message: any, $context: UnityEngine.Object):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($format: string, ...args: any[]):void;
            /** Logs a formatted assertion message to the Unity console. * @param format A composite format string.
             * @param args Format arguments.
             * @param context Object to which the message applies.
             */
            public static LogAssertionFormat($context: UnityEngine.Object, $format: string, ...args: any[]):void;
            
            public constructor();
            
        }
        
        
        interface ILogger extends UnityEngine.ILogHandler{ 
            
        }
        
        
        interface ILogHandler{ 
            
        }
        
        /** Representation of 3D vectors and points. */
        class Vector3 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector3>{ 
            
        }
        
        /** Representation of RGBA colors. */
        class Color extends System.ValueType implements System.IEquatable$1<UnityEngine.Color>{ 
            
        }
        
        /** Base class for all objects Unity can reference. */
        class Object extends System.Object{ 
            /** The name of the object. */
            public get name(): string;
            public set name(value: string);
            /** Should the object be hidden, saved with the Scene or modifiable by the user? */
            public get hideFlags(): UnityEngine.HideFlags;
            public set hideFlags(value: UnityEngine.HideFlags);
            
            public GetInstanceID():number;
            
            public static op_Implicit($exists: UnityEngine.Object):boolean;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            /** Clones the object original and returns the clone.
             * @param original An existing object that you want to make a copy of.
             * @param position Position for the new object.
             * @param rotation Orientation of the new object.
             * @param parent Parent that will be assigned to the new object.
             * @param instantiateInWorldSpace When you assign a parent Object, pass true to position the new object directly in world space. Pass false to set the Object’s position relative to its new parent..
             * @returns The instantiated clone. 
             */
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $instantiateInWorldSpace: boolean):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform):UnityEngine.Object;
            
            public static Instantiate($original: UnityEngine.Object, $parent: UnityEngine.Transform, $worldPositionStays: boolean):UnityEngine.Object;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object, $t: number):void;
            /** Removes a GameObject, component or asset. * @param obj The object to destroy.
             * @param t The optional amount of time to delay before destroying the object.
             */
            public static Destroy($obj: UnityEngine.Object):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object, $allowDestroyingAssets: boolean):void;
            /** Destroys the object obj immediately. You are strongly recommended to use Destroy instead. * @param obj Object to be destroyed.
             * @param allowDestroyingAssets Set to true to allow assets to be destroyed.
             */
            public static DestroyImmediate($obj: UnityEngine.Object):void;
            /** The older, non-generic version of this method. In most cases you should use the generic version of this method.
             * @param type The type of object to find.
             * @returns Returns an array of all active loaded objects of Type type. 
             */
            public static FindObjectsOfType($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Do not destroy the target Object when loading a new Scene. * @param target An Object not destroyed on Scene change.
             */
            public static DontDestroyOnLoad($target: UnityEngine.Object):void;
            /** The older, non-generic version of this method. In most cases you should use the generic version of this method.
             * @param type The type of object to find.
             * @returns Returns an array of all active loaded objects of Type type. 
             */
            public static FindObjectOfType($type: System.Type):UnityEngine.Object;
            
            public static op_Equality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public static op_Inequality($x: UnityEngine.Object, $y: UnityEngine.Object):boolean;
            
            public constructor();
            
        }
        
        /** The type of the log message in Debug.unityLogger.Log or delegate registered with Application.RegisterLogCallback. */
        enum LogType{ Error = 0, Assert = 1, Warning = 2, Log = 3, Exception = 4 }
        
        /** Option flags for specifying special treatment of a log message. */
        enum LogOption{ None = 0, NoStacktrace = 1 }
        
        /** Provides an interface to get time information from Unity. */
        class Time extends System.Object{ 
            /** The time at the beginning of this frame (Read Only). */
            public static get time(): number;
            
            /** The time since this frame started (Read Only). This is the time in seconds since the last non-additive scene has finished loading. */
            public static get timeSinceLevelLoad(): number;
            
            /** The interval in seconds from the last frame to the current one (Read Only). */
            public static get deltaTime(): number;
            
            /** The time since the last MonoBehaviour.FixedUpdate started (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedTime(): number;
            
            /** The timeScale-independent time for this frame (Read Only). This is the time in seconds since the start of the game. */
            public static get unscaledTime(): number;
            
            /** The timeScale-independent time at the beginning of the last MonoBehaviour.FixedUpdate phase (Read Only). This is the time in seconds since the start of the game. */
            public static get fixedUnscaledTime(): number;
            
            /** The timeScale-independent interval in seconds from the last frame to the current one (Read Only). */
            public static get unscaledDeltaTime(): number;
            
            /** The timeScale-independent interval in seconds from the last MonoBehaviour.FixedUpdate phase to the current one (Read Only). */
            public static get fixedUnscaledDeltaTime(): number;
            
            /** The interval in seconds at which physics and other fixed frame rate updates (like MonoBehaviour's MonoBehaviour.FixedUpdate) are performed. */
            public static get fixedDeltaTime(): number;
            public static set fixedDeltaTime(value: number);
            /** The maximum value of Time.deltaTime in any given frame. This is a time in seconds that limits the increase of Time.time between two frames. */
            public static get maximumDeltaTime(): number;
            public static set maximumDeltaTime(value: number);
            /** A smoothed out Time.deltaTime (Read Only). */
            public static get smoothDeltaTime(): number;
            
            /** The maximum time a frame can spend on particle updates. If the frame takes longer than this, then updates are split into multiple smaller updates. */
            public static get maximumParticleDeltaTime(): number;
            public static set maximumParticleDeltaTime(value: number);
            /** The scale at which time passes. */
            public static get timeScale(): number;
            public static set timeScale(value: number);
            /** The total number of frames since the start of the game (Read Only). */
            public static get frameCount(): number;
            
            
            public static get renderedFrameCount(): number;
            
            /** The real time in seconds since the game started (Read Only). */
            public static get realtimeSinceStartup(): number;
            
            /** Slows your application’s playback time to allow Unity to save screenshots in between frames. */
            public static get captureDeltaTime(): number;
            public static set captureDeltaTime(value: number);
            /** The reciprocal of Time.captureDeltaTime. */
            public static get captureFramerate(): number;
            public static set captureFramerate(value: number);
            /** Returns true if called inside a fixed time step callback (like MonoBehaviour's MonoBehaviour.FixedUpdate), otherwise returns false. */
            public static get inFixedTimeStep(): boolean;
            
            
            public constructor();
            
        }
        
        /** Base class for all entities in Unity Scenes. */
        class GameObject extends UnityEngine.Object{ 
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            
            /** The layer the game object is in. */
            public get layer(): number;
            public set layer(value: number);
            /** The local active state of this GameObject. (Read Only) */
            public get activeSelf(): boolean;
            
            /** Defines whether the GameObject is active in the Scene. */
            public get activeInHierarchy(): boolean;
            
            /** Gets and sets the GameObject's StaticEditorFlags. */
            public get isStatic(): boolean;
            public set isStatic(value: boolean);
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Scene that the GameObject is part of. */
            public get scene(): UnityEngine.SceneManagement.Scene;
            
            /** Scene culling mask Unity uses to determine which scene to render the GameObject in. */
            public get sceneCullingMask(): bigint;
            
            
            public get gameObject(): UnityEngine.GameObject;
            
            /** Creates a game object with a primitive mesh renderer and appropriate collider. * @param type The type of primitive object to create.
             */
            public static CreatePrimitive($type: UnityEngine.PrimitiveType):UnityEngine.GameObject;
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: string):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param type The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($type: System.Type):UnityEngine.Component;
            /** Retrieves the component of Type type in the GameObject or any of its parents.
             * @param type Type of component to find.
             * @returns Returns a component if a component matching the type is found. Returns null otherwise. 
             */
            public GetComponentInParent($type: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject. * @param type The type of component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its children. * @param type The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set?
             */
            public GetComponentsInChildren($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($type: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param type The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($type: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns one active GameObject tagged tag. Returns null if no GameObject was found. * @param tag The tag to search for.
             */
            public static FindWithTag($tag: string):UnityEngine.GameObject;
            
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Adds a component class of type componentType to the game object. C# Users can use a generic version. */
            public AddComponent($componentType: System.Type):UnityEngine.Component;
            /** ActivatesDeactivates the GameObject, depending on the given true or false/ value. * @param value Activate or deactivate the object, where true activates the GameObject and false deactivates the GameObject.
             */
            public SetActive($value: boolean):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            
            public static FindGameObjectWithTag($tag: string):UnityEngine.GameObject;
            /** Returns an array of active GameObjects tagged tag. Returns empty array if no GameObject was found. * @param tag The name of the tag to search GameObjects for.
             */
            public static FindGameObjectsWithTag($tag: string):System.Array$1<UnityEngine.GameObject>;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName The name of the method to call.
             * @param value An optional parameter value to pass to the called method.
             * @param options Should an error be raised if the method doesn't exist on the target object?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. */
            public BroadcastMessage($methodName: string):void;
            /** Finds a GameObject by name and returns it. */
            public static Find($name: string):UnityEngine.GameObject;
            
            public constructor($name: string);
            
            public constructor();
            
            public constructor($name: string, ...components: System.Type[]);
            
        }
        
        /** The various primitives that can be created using the GameObject.CreatePrimitive function. */
        enum PrimitiveType{ Sphere = 0, Capsule = 1, Cylinder = 2, Cube = 3, Plane = 4, Quad = 5 }
        
        /** Base class for everything attached to GameObjects. */
        class Component extends UnityEngine.Object{ 
            /** The Transform attached to this GameObject. */
            public get transform(): UnityEngine.Transform;
            
            /** The game object this component is attached to. A component is always attached to a game object. */
            public get gameObject(): UnityEngine.GameObject;
            
            /** The tag of this game object. */
            public get tag(): string;
            public set tag(value: string);
            /** Returns the component of Type type if the game object has one attached, null if it doesn't. * @param type The type of Component to retrieve.
             */
            public GetComponent($type: System.Type):UnityEngine.Component;
            /** Gets the component of the specified type, if it exists.
             * @param type The type of the component to retrieve.
             * @param component The output argument that will contain the component or null.
             * @returns Returns true if the component is found, false otherwise. 
             */
            public TryGetComponent($type: System.Type, $component: $Ref<UnityEngine.Component>):boolean;
            /** Returns the component with name type if the game object has one attached, null if it doesn't. */
            public GetComponent($type: string):UnityEngine.Component;
            
            public GetComponentInChildren($t: System.Type, $includeInactive: boolean):UnityEngine.Component;
            /** Returns the component of Type type in the GameObject or any of its children using depth first search.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInChildren($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its children. Works recursively. * @param t The type of Component to retrieve.
             * @param includeInactive Should Components on inactive GameObjects be included in the found set? includeInactive decides which children of the GameObject will be searched.  The GameObject that you call GetComponentsInChildren on is always searched regardless. Default is false.
             */
            public GetComponentsInChildren($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInChildren($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns the component of Type type in the GameObject or any of its parents.
             * @param t The type of Component to retrieve.
             * @returns A component of the matching type, if found. 
             */
            public GetComponentInParent($t: System.Type):UnityEngine.Component;
            /** Returns all components of Type type in the GameObject or any of its parents. * @param t The type of Component to retrieve.
             * @param includeInactive Should inactive Components be included in the found set?
             */
            public GetComponentsInParent($t: System.Type, $includeInactive: boolean):System.Array$1<UnityEngine.Component>;
            
            public GetComponentsInParent($t: System.Type):System.Array$1<UnityEngine.Component>;
            /** Returns all components of Type type in the GameObject. * @param type The type of Component to retrieve.
             */
            public GetComponents($type: System.Type):System.Array$1<UnityEngine.Component>;
            
            public GetComponents($type: System.Type, $results: System.Collections.Generic.List$1<UnityEngine.Component>):void;
            /** Is this game object tagged with tag ? * @param tag The tag to compare.
             */
            public CompareTag($tag: string):boolean;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object and on every ancestor of the behaviour. * @param methodName Name of method to call.
             * @param value Optional parameter value for the method.
             * @param options Should an error be raised if the method does not exist on the target object?
             */
            public SendMessageUpwards($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $value: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object. * @param methodName Name of the method to call.
             * @param value Optional parameter for the method.
             * @param options Should an error be raised if the target object doesn't implement the method for the message?
             */
            public SendMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any, $options: UnityEngine.SendMessageOptions):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $parameter: any):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string):void;
            /** Calls the method named methodName on every MonoBehaviour in this game object or any of its children. * @param methodName Name of the method to call.
             * @param parameter Optional parameter to pass to the method (can be any value).
             * @param options Should an error be raised if the method does not exist for a given target object?
             */
            public BroadcastMessage($methodName: string, $options: UnityEngine.SendMessageOptions):void;
            
            public constructor();
            
        }
        
        /** Options for how to send a message. */
        enum SendMessageOptions{ RequireReceiver = 0, DontRequireReceiver = 1 }
        
        /** Position, rotation and scale of an object. */
        class Transform extends UnityEngine.Component implements System.Collections.IEnumerable{ 
            /** The world space position of the Transform. */
            public get position(): UnityEngine.Vector3;
            public set position(value: UnityEngine.Vector3);
            /** Position of the transform relative to the parent transform. */
            public get localPosition(): UnityEngine.Vector3;
            public set localPosition(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees. */
            public get eulerAngles(): UnityEngine.Vector3;
            public set eulerAngles(value: UnityEngine.Vector3);
            /** The rotation as Euler angles in degrees relative to the parent transform's rotation. */
            public get localEulerAngles(): UnityEngine.Vector3;
            public set localEulerAngles(value: UnityEngine.Vector3);
            /** The red axis of the transform in world space. */
            public get right(): UnityEngine.Vector3;
            public set right(value: UnityEngine.Vector3);
            /** The green axis of the transform in world space. */
            public get up(): UnityEngine.Vector3;
            public set up(value: UnityEngine.Vector3);
            /** Returns a normalized vector representing the blue axis of the transform in world space. */
            public get forward(): UnityEngine.Vector3;
            public set forward(value: UnityEngine.Vector3);
            /** A Quaternion that stores the rotation of the Transform in world space. */
            public get rotation(): UnityEngine.Quaternion;
            public set rotation(value: UnityEngine.Quaternion);
            /** The rotation of the transform relative to the transform rotation of the parent. */
            public get localRotation(): UnityEngine.Quaternion;
            public set localRotation(value: UnityEngine.Quaternion);
            /** The scale of the transform relative to the GameObjects parent. */
            public get localScale(): UnityEngine.Vector3;
            public set localScale(value: UnityEngine.Vector3);
            /** The parent of the transform. */
            public get parent(): UnityEngine.Transform;
            public set parent(value: UnityEngine.Transform);
            /** Matrix that transforms a point from world space into local space (Read Only). */
            public get worldToLocalMatrix(): UnityEngine.Matrix4x4;
            
            /** Matrix that transforms a point from local space into world space (Read Only). */
            public get localToWorldMatrix(): UnityEngine.Matrix4x4;
            
            /** Returns the topmost transform in the hierarchy. */
            public get root(): UnityEngine.Transform;
            
            /** The number of children the parent Transform has. */
            public get childCount(): number;
            
            /** The global scale of the object (Read Only). */
            public get lossyScale(): UnityEngine.Vector3;
            
            /** Has the transform changed since the last time the flag was set to 'false'? */
            public get hasChanged(): boolean;
            public set hasChanged(value: boolean);
            /** The transform capacity of the transform's hierarchy data structure. */
            public get hierarchyCapacity(): number;
            public set hierarchyCapacity(value: number);
            /** The number of transforms in the transform's hierarchy data structure. */
            public get hierarchyCount(): number;
            
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($p: UnityEngine.Transform):void;
            /** Set the parent of the transform. * @param parent The parent Transform to use.
             * @param worldPositionStays If true, the parent-relative position, scale and rotation are modified such that the object keeps the same world space position, rotation and scale as before.
             */
            public SetParent($parent: UnityEngine.Transform, $worldPositionStays: boolean):void;
            /** Sets the world space position and rotation of the Transform component. */
            public SetPositionAndRotation($position: UnityEngine.Vector3, $rotation: UnityEngine.Quaternion):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Space):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number):void;
            /** Moves the transform in the direction and distance of translation. */
            public Translate($translation: UnityEngine.Vector3, $relativeTo: UnityEngine.Transform):void;
            /** Moves the transform by x along the x axis, y along the y axis, and z along the z axis. */
            public Translate($x: number, $y: number, $z: number, $relativeTo: UnityEngine.Transform):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             * @param relativeTo Determines whether to rotate the GameObject either locally to  the GameObject or relative to the Scene in world space.
             */
            public Rotate($eulers: UnityEngine.Vector3, $relativeTo: UnityEngine.Space):void;
            /** Applies a rotation of eulerAngles.z degrees around the z-axis, eulerAngles.x degrees around the x-axis, and eulerAngles.y degrees around the y-axis (in that order). * @param eulers The rotation to apply in euler angles.
             */
            public Rotate($eulers: UnityEngine.Vector3):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number, $relativeTo: UnityEngine.Space):void;
            /** The implementation of this method applies a rotation of zAngle degrees around the z axis, xAngle degrees around the x axis, and yAngle degrees around the y axis (in that order). * @param xAngle Degrees to rotate the GameObject around the X axis.
             * @param yAngle Degrees to rotate the GameObject around the Y axis.
             * @param zAngle Degrees to rotate the GameObject around the Z axis.
             */
            public Rotate($xAngle: number, $yAngle: number, $zAngle: number):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param angle The degrees of rotation to apply.
             * @param axis The axis to apply rotation to.
             * @param relativeTo Determines whether to rotate the GameObject either locally to the GameObject or relative to the Scene in world space.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number, $relativeTo: UnityEngine.Space):void;
            /** Rotates the object around the given axis by the number of degrees defined by the given angle. * @param axis The axis to apply rotation to.
             * @param angle The degrees of rotation to apply.
             */
            public Rotate($axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform about axis passing through point in world coordinates by angle degrees. */
            public RotateAround($point: UnityEngine.Vector3, $axis: UnityEngine.Vector3, $angle: number):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at target's current position. * @param target Object to point towards.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($target: UnityEngine.Transform):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3, $worldUp: UnityEngine.Vector3):void;
            /** Rotates the transform so the forward vector points at worldPosition. * @param worldPosition Point to look at.
             * @param worldUp Vector specifying the upward direction.
             */
            public LookAt($worldPosition: UnityEngine.Vector3):void;
            /** Transforms direction from local space to world space. */
            public TransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms direction x, y, z from local space to world space. */
            public TransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a direction from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($direction: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the direction x, y, z from world space to local space. The opposite of Transform.TransformDirection. */
            public InverseTransformDirection($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms vector from local space to world space. */
            public TransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms vector x, y, z from local space to world space. */
            public TransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms a vector from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($vector: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the vector x, y, z from world space to local space. The opposite of Transform.TransformVector. */
            public InverseTransformVector($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from local space to world space. */
            public TransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from local space to world space. */
            public TransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            /** Transforms position from world space to local space. */
            public InverseTransformPoint($position: UnityEngine.Vector3):UnityEngine.Vector3;
            /** Transforms the position x, y, z from world space to local space. The opposite of Transform.TransformPoint. */
            public InverseTransformPoint($x: number, $y: number, $z: number):UnityEngine.Vector3;
            
            public DetachChildren():void;
            
            public SetAsFirstSibling():void;
            
            public SetAsLastSibling():void;
            /** Sets the sibling index. * @param index Index to set.
             */
            public SetSiblingIndex($index: number):void;
            
            public GetSiblingIndex():number;
            /** Finds a child by n and returns it.
             * @param n Name of child to be found.
             * @returns The returned child transform or null if no child is found. 
             */
            public Find($n: string):UnityEngine.Transform;
            /** Is this transform a child of parent? */
            public IsChildOf($parent: UnityEngine.Transform):boolean;
            
            public GetEnumerator():System.Collections.IEnumerator;
            /** Returns a transform child by index.
             * @param index Index of the child transform to return. Must be smaller than Transform.childCount.
             * @returns Transform child by index. 
             */
            public GetChild($index: number):UnityEngine.Transform;
            
        }
        
        /** Element that can be used for screen rendering. */
        class Canvas extends UnityEngine.Behaviour{ 
            /** Is the Canvas in World or Overlay mode? */
            public get renderMode(): UnityEngine.RenderMode;
            public set renderMode(value: UnityEngine.RenderMode);
            /** Is this the root Canvas? */
            public get isRootCanvas(): boolean;
            
            /** Get the render rect for the Canvas. */
            public get pixelRect(): UnityEngine.Rect;
            
            /** Used to scale the entire canvas, while still making it fit the screen. Only applies with renderMode is Screen Space. */
            public get scaleFactor(): number;
            public set scaleFactor(value: number);
            /** The number of pixels per unit that is considered the default. */
            public get referencePixelsPerUnit(): number;
            public set referencePixelsPerUnit(value: number);
            /** Allows for nested canvases to override pixelPerfect settings inherited from parent canvases. */
            public get overridePixelPerfect(): boolean;
            public set overridePixelPerfect(value: boolean);
            /** Force elements in the canvas to be aligned with pixels. Only applies with renderMode is Screen Space. */
            public get pixelPerfect(): boolean;
            public set pixelPerfect(value: boolean);
            /** How far away from the camera is the Canvas generated. */
            public get planeDistance(): number;
            public set planeDistance(value: number);
            /** The render order in which the canvas is being emitted to the Scene. (Read Only) */
            public get renderOrder(): number;
            
            /** Override the sorting of canvas. */
            public get overrideSorting(): boolean;
            public set overrideSorting(value: boolean);
            /** Canvas' order within a sorting layer. */
            public get sortingOrder(): number;
            public set sortingOrder(value: number);
            /** For Overlay mode, display index on which the UI canvas will appear. */
            public get targetDisplay(): number;
            public set targetDisplay(value: number);
            /** Unique ID of the Canvas' sorting layer. */
            public get sortingLayerID(): number;
            public set sortingLayerID(value: number);
            /** Cached calculated value based upon SortingLayerID. */
            public get cachedSortingLayerValue(): number;
            
            /** Get or set the mask of additional shader channels to be used when creating the Canvas mesh. */
            public get additionalShaderChannels(): UnityEngine.AdditionalCanvasShaderChannels;
            public set additionalShaderChannels(value: UnityEngine.AdditionalCanvasShaderChannels);
            /** Name of the Canvas' sorting layer. */
            public get sortingLayerName(): string;
            public set sortingLayerName(value: string);
            /** Returns the Canvas closest to root, by checking through each parent and returning the last canvas found. If no other canvas is found then the canvas will return itself. */
            public get rootCanvas(): UnityEngine.Canvas;
            
            /** Returns the canvas display size based on the selected render mode and target display. */
            public get renderingDisplaySize(): UnityEngine.Vector2;
            
            /** Camera used for sizing the Canvas when in Screen Space - Camera. Also used as the Camera that events will be sent through for a World Space [[Canvas]. */
            public get worldCamera(): UnityEngine.Camera;
            public set worldCamera(value: UnityEngine.Camera);
            /** The normalized grid size that the canvas will split the renderable area into. */
            public get normalizedSortingGridSize(): number;
            public set normalizedSortingGridSize(value: number);
            
            public static add_preWillRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static remove_preWillRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static add_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static remove_willRenderCanvases($value: UnityEngine.Canvas.WillRenderCanvases):void;
            
            public static GetDefaultCanvasMaterial():UnityEngine.Material;
            
            public static GetETC1SupportedCanvasMaterial():UnityEngine.Material;
            
            public static ForceUpdateCanvases():void;
            
            public constructor();
            
        }
        
        /** Behaviours are Components that can be enabled or disabled. */
        class Behaviour extends UnityEngine.Component{ 
            
        }
        
        /** RenderMode for the Canvas. */
        enum RenderMode{ ScreenSpaceOverlay = 0, ScreenSpaceCamera = 1, WorldSpace = 2 }
        
        /** A 2D Rectangle defined by X and Y position, width and height. */
        class Rect extends System.ValueType implements System.IEquatable$1<UnityEngine.Rect>{ 
            
        }
        
        /** Enum mask of possible shader channel properties that can also be included when the Canvas mesh is created. */
        enum AdditionalCanvasShaderChannels{ None = 0, TexCoord1 = 1, TexCoord2 = 2, TexCoord3 = 4, Normal = 8, Tangent = 16 }
        
        /** Representation of 2D vectors and points. */
        class Vector2 extends System.ValueType implements System.IEquatable$1<UnityEngine.Vector2>{ 
            
        }
        
        /** A Camera is a device through which the player views the world. */
        class Camera extends UnityEngine.Behaviour{ 
            
        }
        
        /** The material class. */
        class Material extends UnityEngine.Object{ 
            
        }
        
        /** MonoBehaviour is the base class from which every Unity script derives. */
        class MonoBehaviour extends UnityEngine.Behaviour{ 
            
        }
        
        /** Class that can be used to generate text for rendering. */
        class TextGenerator extends System.Object implements System.IDisposable{ 
            
        }
        
        /** Base class for Texture handling. */
        class Texture extends UnityEngine.Object{ 
            
        }
        
        /** Script interface for. */
        class Font extends UnityEngine.Object{ 
            
        }
        
        /** Where the anchor of the text is placed. */
        enum TextAnchor{ UpperLeft = 0, UpperCenter = 1, UpperRight = 2, MiddleLeft = 3, MiddleCenter = 4, MiddleRight = 5, LowerLeft = 6, LowerCenter = 7, LowerRight = 8 }
        
        /** Wrapping modes for text that reaches the horizontal boundary. */
        enum HorizontalWrapMode{ Wrap = 0, Overflow = 1 }
        
        /** Wrapping modes for text that reaches the vertical boundary. */
        enum VerticalWrapMode{ Truncate = 0, Overflow = 1 }
        
        /** Font Style applied to GUI Texts, Text Meshes or GUIStyles. */
        enum FontStyle{ Normal = 0, Bold = 1, Italic = 2, BoldAndItalic = 3 }
        
        /** A struct that stores the settings for TextGeneration. */
        class TextGenerationSettings extends System.ValueType{ 
            
        }
        
        /** Asynchronous operation coroutine. */
        class AsyncOperation extends UnityEngine.YieldInstruction{ 
            
        }
        
        /** Base class for all yield instructions. */
        class YieldInstruction extends System.Object{ 
            
        }
        
        /** Type of the imported(native) data. */
        enum AudioType{ UNKNOWN = 0, ACC = 1, AIFF = 2, IT = 10, MOD = 12, MPEG = 13, OGGVORBIS = 14, S3M = 17, WAV = 20, XM = 21, XMA = 22, VAG = 23, AUDIOQUEUE = 24 }
        
        /** Represent the hash value. */
        class Hash128 extends System.ValueType implements System.IComparable, System.IComparable$1<UnityEngine.Hash128>, System.IEquatable$1<UnityEngine.Hash128>{ 
            
        }
        
        /** Data structure for downloading AssetBundles to a customized cache path. See Also:UnityWebRequestAssetBundle.GetAssetBundle for more information. */
        class CachedAssetBundle extends System.ValueType{ 
            
        }
        
        /** Helper class to generate form data to post to web servers using the UnityWebRequest or WWW classes. */
        class WWWForm extends System.Object{ 
            /** (Read Only) Returns the correct request headers for posting the form using the WWW class. */
            public get headers(): System.Collections.Generic.Dictionary$2<string, string>;
            
            /** (Read Only) The raw data to pass as the POST request body when sending the form. */
            public get data(): System.Array$1<number>;
            
            /** Add a simple field to the form. */
            public AddField($fieldName: string, $value: string):void;
            /** Add a simple field to the form. */
            public AddField($fieldName: string, $value: string, $e: System.Text.Encoding):void;
            /** Adds a simple field to the form. */
            public AddField($fieldName: string, $i: number):void;
            /** Add binary data to the form. */
            public AddBinaryData($fieldName: string, $contents: System.Array$1<number>):void;
            /** Add binary data to the form. */
            public AddBinaryData($fieldName: string, $contents: System.Array$1<number>, $fileName: string):void;
            /** Add binary data to the form. */
            public AddBinaryData($fieldName: string, $contents: System.Array$1<number>, $fileName: string, $mimeType: string):void;
            
            public constructor();
            
        }
        
        /** Access to application run-time data. */
        class Application extends System.Object{ 
            /** Returns true when called in any kind of built Player, or when called in the Editor in Play Mode (Read Only). */
            public static get isPlaying(): boolean;
            
            /** Whether the player currently has focus. Read-only. */
            public static get isFocused(): boolean;
            
            /** Returns a GUID for this build (Read Only). */
            public static get buildGUID(): string;
            
            /** Should the player be running when the application is in the background? */
            public static get runInBackground(): boolean;
            public static set runInBackground(value: boolean);
            /** Returns true when Unity is launched with the -batchmode flag from the command line (Read Only). */
            public static get isBatchMode(): boolean;
            
            /** Contains the path to the game data folder on the target device (Read Only). */
            public static get dataPath(): string;
            
            /** The path to the StreamingAssets folder (Read Only). */
            public static get streamingAssetsPath(): string;
            
            /** Contains the path to a persistent data directory (Read Only). */
            public static get persistentDataPath(): string;
            
            /** Contains the path to a temporary data / cache directory (Read Only). */
            public static get temporaryCachePath(): string;
            
            /** The URL of the document. For WebGL, this a web URL. For Android, iOS, or Universal Windows Platform (UWP) this is a deep link URL. (Read Only) */
            public static get absoluteURL(): string;
            
            /** The version of the Unity runtime used to play the content. */
            public static get unityVersion(): string;
            
            /** Returns application version number  (Read Only). */
            public static get version(): string;
            
            /** Returns the name of the store or package that installed the application (Read Only). */
            public static get installerName(): string;
            
            /** Returns application identifier at runtime. On Apple platforms this is the 'bundleIdentifier' saved in the info.plist file, on Android it's the 'package' from the AndroidManifest.xml.  */
            public static get identifier(): string;
            
            /** Returns application install mode (Read Only). */
            public static get installMode(): UnityEngine.ApplicationInstallMode;
            
            /** Returns application running in sandbox (Read Only). */
            public static get sandboxType(): UnityEngine.ApplicationSandboxType;
            
            /** Returns application product name (Read Only). */
            public static get productName(): string;
            
            /** Return application company name (Read Only). */
            public static get companyName(): string;
            
            /** A unique cloud project identifier. It is unique for every project (Read Only). */
            public static get cloudProjectId(): string;
            
            /** Instructs the game to try to render at a specified frame rate. */
            public static get targetFrameRate(): number;
            public static set targetFrameRate(value: number);
            /** Returns the path to the console log file, or an empty string if the current platform does not support log files. */
            public static get consoleLogPath(): string;
            
            /** Priority of background loading thread. */
            public static get backgroundLoadingPriority(): UnityEngine.ThreadPriority;
            public static set backgroundLoadingPriority(value: UnityEngine.ThreadPriority);
            /** Returns false if application is altered in any way after it was built. */
            public static get genuine(): boolean;
            
            /** Returns true if application integrity can be confirmed. */
            public static get genuineCheckAvailable(): boolean;
            
            /** Returns the platform the game is running on (Read Only). */
            public static get platform(): UnityEngine.RuntimePlatform;
            
            /** Is the current Runtime platform a known mobile platform. */
            public static get isMobilePlatform(): boolean;
            
            /** Is the current Runtime platform a known console platform. */
            public static get isConsolePlatform(): boolean;
            
            /** The language the user's operating system is running in. */
            public static get systemLanguage(): UnityEngine.SystemLanguage;
            
            /** Returns the type of Internet reachability currently possible on the device. */
            public static get internetReachability(): UnityEngine.NetworkReachability;
            
            /** Are we running inside the Unity editor? (Read Only) */
            public static get isEditor(): boolean;
            
            
            public static Quit($exitCode: number):void;
            
            public static Quit():void;
            
            public static Unload():void;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelIndex: number):boolean;
            /** Can the streamed level be loaded? */
            public static CanStreamedLevelBeLoaded($levelName: string):boolean;
            /** Returns true if the given object is part of the playing world either in any kind of built Player or in Play Mode.
             * @param obj The object to test.
             * @returns True if the object is part of the playing world. 
             */
            public static IsPlaying($obj: UnityEngine.Object):boolean;
            
            public static GetBuildTags():System.Array$1<string>;
            /** Set an array of feature tags for this build. */
            public static SetBuildTags($buildTags: System.Array$1<string>):void;
            
            public static HasProLicense():boolean;
            
            public static RequestAdvertisingIdentifierAsync($delegateMethod: UnityEngine.Application.AdvertisingIdentifierCallback):boolean;
            /** Opens the URL specified, subject to the permissions and limitations of your app’s current platform and environment. This is handled in different ways depending on the nature of the URL, and with different security restrictions, depending on the runtime platform. * @param url The URL to open.
             */
            public static OpenURL($url: string):void;
            /** Get stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static GetStackTraceLogType($logType: UnityEngine.LogType):UnityEngine.StackTraceLogType;
            /** Set stack trace logging options. The default value is StackTraceLogType.ScriptOnly. */
            public static SetStackTraceLogType($logType: UnityEngine.LogType, $stackTraceType: UnityEngine.StackTraceLogType):void;
            /** Request authorization to use the webcam or microphone on iOS. */
            public static RequestUserAuthorization($mode: UnityEngine.UserAuthorization):UnityEngine.AsyncOperation;
            /** Check if the user has authorized use of the webcam or microphone in the Web Player. */
            public static HasUserAuthorization($mode: UnityEngine.UserAuthorization):boolean;
            
            public static add_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static remove_lowMemory($value: UnityEngine.Application.LowMemoryCallback):void;
            
            public static add_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceived($value: UnityEngine.Application.LogCallback):void;
            
            public static add_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static remove_logMessageReceivedThreaded($value: UnityEngine.Application.LogCallback):void;
            
            public static add_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static remove_onBeforeRender($value: UnityEngine.Events.UnityAction):void;
            
            public static add_focusChanged($value: System.Action$1<boolean>):void;
            
            public static remove_focusChanged($value: System.Action$1<boolean>):void;
            
            public static add_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static remove_deepLinkActivated($value: System.Action$1<string>):void;
            
            public static add_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static remove_wantsToQuit($value: System.Func$1<boolean>):void;
            
            public static add_quitting($value: System.Action):void;
            
            public static remove_quitting($value: System.Action):void;
            
            public constructor();
            
        }
        
        /** Application installation mode (Read Only). */
        enum ApplicationInstallMode{ Unknown = 0, Store = 1, DeveloperBuild = 2, Adhoc = 3, Enterprise = 4, Editor = 5 }
        
        /** Application sandbox type. */
        enum ApplicationSandboxType{ Unknown = 0, NotSandboxed = 1, Sandboxed = 2, SandboxBroken = 3 }
        
        /** Stack trace logging options. */
        enum StackTraceLogType{ None = 0, ScriptOnly = 1, Full = 2 }
        
        /** Priority of a thread. */
        enum ThreadPriority{ Low = 0, BelowNormal = 1, Normal = 2, High = 4 }
        
        /** Constants to pass to Application.RequestUserAuthorization. */
        enum UserAuthorization{ WebCam = 1, Microphone = 2 }
        
        /** The platform application is running. Returned by Application.platform. */
        enum RuntimePlatform{ OSXEditor = 0, OSXPlayer = 1, WindowsPlayer = 2, OSXWebPlayer = 3, OSXDashboardPlayer = 4, WindowsWebPlayer = 5, WindowsEditor = 7, IPhonePlayer = 8, XBOX360 = 10, PS3 = 9, Android = 11, NaCl = 12, FlashPlayer = 15, LinuxPlayer = 13, LinuxEditor = 16, WebGLPlayer = 17, MetroPlayerX86 = 18, WSAPlayerX86 = 18, MetroPlayerX64 = 19, WSAPlayerX64 = 19, MetroPlayerARM = 20, WSAPlayerARM = 20, WP8Player = 21, BB10Player = 22, BlackBerryPlayer = 22, TizenPlayer = 23, PSP2 = 24, PS4 = 25, PSM = 26, XboxOne = 27, SamsungTVPlayer = 28, WiiU = 30, tvOS = 31, Switch = 32, Lumin = 33, Stadia = 34, CloudRendering = 35, GameCoreScarlett = 36, GameCoreXboxSeries = 36, GameCoreXboxOne = 37, PS5 = 38 }
        
        /** The language the user's operating system is running in. Returned by Application.systemLanguage. */
        enum SystemLanguage{ Afrikaans = 0, Arabic = 1, Basque = 2, Belarusian = 3, Bulgarian = 4, Catalan = 5, Chinese = 6, Czech = 7, Danish = 8, Dutch = 9, English = 10, Estonian = 11, Faroese = 12, Finnish = 13, French = 14, German = 15, Greek = 16, Hebrew = 17, Hugarian = 18, Icelandic = 19, Indonesian = 20, Italian = 21, Japanese = 22, Korean = 23, Latvian = 24, Lithuanian = 25, Norwegian = 26, Polish = 27, Portuguese = 28, Romanian = 29, Russian = 30, SerboCroatian = 31, Slovak = 32, Slovenian = 33, Spanish = 34, Swedish = 35, Thai = 36, Turkish = 37, Ukrainian = 38, Vietnamese = 39, ChineseSimplified = 40, ChineseTraditional = 41, Unknown = 42, Hungarian = 18 }
        
        /** Describes network reachability options. */
        enum NetworkReachability{ NotReachable = 0, ReachableViaCarrierDataNetwork = 1, ReachableViaLocalAreaNetwork = 2 }
        
        /** The Resources class allows you to find and access Objects including assets. */
        class Resources extends System.Object{ 
            /** Returns a list of all objects of Type type. */
            public static FindObjectsOfTypeAll($type: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads an asset stored at path in a Resources folder.
             * @param path Path to the target resource to load. When using an empty string (i.e., ""), the function loads the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string):UnityEngine.Object;
            /** Loads an asset stored at path in a Resources folder.
             * @param path Path to the target resource to load. When using an empty string (i.e., ""), the function loads the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             * @returns The requested asset returned as an Object. 
             */
            public static Load($path: string, $systemTypeInstance: System.Type):UnityEngine.Object;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAsync($path: string):UnityEngine.ResourceRequest;
            /** Asynchronously loads an asset stored at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAsync($path: string, $type: System.Type):UnityEngine.ResourceRequest;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             * @param systemTypeInstance Type filter for objects returned.
             */
            public static LoadAll($path: string, $systemTypeInstance: System.Type):System.Array$1<UnityEngine.Object>;
            /** Loads all assets in a folder or file at path in a Resources folder. * @param path Pathname of the target folder. When using the empty string (i.e., ""), the function will load the entire contents of the Resources folder.
             */
            public static LoadAll($path: string):System.Array$1<UnityEngine.Object>;
            
            public static GetBuiltinResource($type: System.Type, $path: string):UnityEngine.Object;
            /** Unloads assetToUnload from memory. */
            public static UnloadAsset($assetToUnload: UnityEngine.Object):void;
            
            public static UnloadUnusedAssets():UnityEngine.AsyncOperation;
            
            public constructor();
            
        }
        
        /** Asynchronous load request from the Resources bundle. */
        class ResourceRequest extends UnityEngine.AsyncOperation{ 
            
        }
        
        /** Suspends the coroutine execution for the given amount of seconds using scaled time. */
        class WaitForSeconds extends UnityEngine.YieldInstruction{ 
            
            public constructor($seconds: number);
            
        }
        
        /** Waits until the end of the frame after Unity has rendererd every Camera and GUI, just before displaying the frame on screen. */
        class WaitForEndOfFrame extends UnityEngine.YieldInstruction{ 
            
            public constructor();
            
        }
        
        /** Quaternions are used to represent rotations. */
        class Quaternion extends System.ValueType implements System.IEquatable$1<UnityEngine.Quaternion>{ 
            
        }
        
        /** A standard 4x4 transformation matrix. */
        class Matrix4x4 extends System.ValueType implements System.IEquatable$1<UnityEngine.Matrix4x4>{ 
            
        }
        
        /** The coordinate space in which to operate. */
        enum Space{ World = 0, Self = 1 }
        
        /** Bit mask that controls object destruction, saving and visibility in inspectors. */
        enum HideFlags{ None = 0, HideInHierarchy = 1, HideInInspector = 2, DontSaveInEditor = 4, NotEditable = 8, DontSaveInBuild = 16, DontUnloadUnusedAsset = 32, DontSave = 52, HideAndDontSave = 61 }
        
        
    }
    namespace System {
        
        class Object{ 
            
        }
        
        
        class Void extends System.ValueType{ 
            
        }
        
        
        class ValueType extends System.Object{ 
            
        }
        
        
        interface IEquatable$1<T>{ 
            
        }
        
        
        class Single extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
        interface IComparable{ 
            
        }
        
        
        interface IComparable$1<T>{ 
            
        }
        
        
        interface IConvertible{ 
            
        }
        
        
        interface IFormattable{ 
            
        }
        
        
        class Boolean extends System.ValueType implements System.IComparable, System.IComparable$1<boolean>, System.IConvertible, System.IEquatable$1<boolean>{ 
            
        }
        
        
        class Int32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
        class String extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.IComparable, System.IComparable$1<string>, System.IConvertible, System.IEquatable$1<string>, System.Collections.Generic.IEnumerable$1<number>{ 
            
        }
        
        
        interface ICloneable{ 
            
        }
        
        
        class Char extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>{ 
            
        }
        
        
        class Enum extends System.ValueType implements System.IComparable, System.IConvertible, System.IFormattable{ 
            
        }
        
        
        class Exception extends System.Object implements System.Runtime.InteropServices._Exception, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Type extends System.Reflection.MemberInfo implements System.Reflection.IReflect, System.Runtime.InteropServices._Type, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
            public static FilterAttribute: System.Reflection.MemberFilter;
            
            public static FilterName: System.Reflection.MemberFilter;
            
            public static FilterNameIgnoreCase: System.Reflection.MemberFilter;
            
            public static Missing: any;
            
            public static Delimiter: number;
            
            public static EmptyTypes: System.Array$1<System.Type>;
            
            public get MemberType(): System.Reflection.MemberTypes;
            
            
            public get DeclaringType(): System.Type;
            
            
            public get DeclaringMethod(): System.Reflection.MethodBase;
            
            
            public get ReflectedType(): System.Type;
            
            
            public get StructLayoutAttribute(): System.Runtime.InteropServices.StructLayoutAttribute;
            
            
            public get GUID(): System.Guid;
            
            
            public static get DefaultBinder(): System.Reflection.Binder;
            
            
            public get Module(): System.Reflection.Module;
            
            
            public get Assembly(): System.Reflection.Assembly;
            
            
            public get TypeHandle(): System.RuntimeTypeHandle;
            
            
            public get FullName(): string;
            
            
            public get Namespace(): string;
            
            
            public get AssemblyQualifiedName(): string;
            
            
            public get BaseType(): System.Type;
            
            
            public get TypeInitializer(): System.Reflection.ConstructorInfo;
            
            
            public get IsNested(): boolean;
            
            
            public get Attributes(): System.Reflection.TypeAttributes;
            
            
            public get GenericParameterAttributes(): System.Reflection.GenericParameterAttributes;
            
            
            public get IsVisible(): boolean;
            
            
            public get IsNotPublic(): boolean;
            
            
            public get IsPublic(): boolean;
            
            
            public get IsNestedPublic(): boolean;
            
            
            public get IsNestedPrivate(): boolean;
            
            
            public get IsNestedFamily(): boolean;
            
            
            public get IsNestedAssembly(): boolean;
            
            
            public get IsNestedFamANDAssem(): boolean;
            
            
            public get IsNestedFamORAssem(): boolean;
            
            
            public get IsAutoLayout(): boolean;
            
            
            public get IsLayoutSequential(): boolean;
            
            
            public get IsExplicitLayout(): boolean;
            
            
            public get IsClass(): boolean;
            
            
            public get IsInterface(): boolean;
            
            
            public get IsValueType(): boolean;
            
            
            public get IsAbstract(): boolean;
            
            
            public get IsSealed(): boolean;
            
            
            public get IsEnum(): boolean;
            
            
            public get IsSpecialName(): boolean;
            
            
            public get IsImport(): boolean;
            
            
            public get IsSerializable(): boolean;
            
            
            public get IsAnsiClass(): boolean;
            
            
            public get IsUnicodeClass(): boolean;
            
            
            public get IsAutoClass(): boolean;
            
            
            public get IsArray(): boolean;
            
            
            public get IsGenericType(): boolean;
            
            
            public get IsGenericTypeDefinition(): boolean;
            
            
            public get IsConstructedGenericType(): boolean;
            
            
            public get IsGenericParameter(): boolean;
            
            
            public get GenericParameterPosition(): number;
            
            
            public get ContainsGenericParameters(): boolean;
            
            
            public get IsByRef(): boolean;
            
            
            public get IsPointer(): boolean;
            
            
            public get IsPrimitive(): boolean;
            
            
            public get IsCOMObject(): boolean;
            
            
            public get HasElementType(): boolean;
            
            
            public get IsContextful(): boolean;
            
            
            public get IsMarshalByRef(): boolean;
            
            
            public get GenericTypeArguments(): System.Array$1<System.Type>;
            
            
            public get IsSecurityCritical(): boolean;
            
            
            public get IsSecuritySafeCritical(): boolean;
            
            
            public get IsSecurityTransparent(): boolean;
            
            
            public get UnderlyingSystemType(): System.Type;
            
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $assemblyResolver: System.Func$2<System.Reflection.AssemblyName, System.Reflection.Assembly>, $typeResolver: System.Func$4<System.Reflection.Assembly, string, boolean, System.Type>, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public MakePointerType():System.Type;
            
            public MakeByRefType():System.Type;
            
            public MakeArrayType():System.Type;
            
            public MakeArrayType($rank: number):System.Type;
            
            public static GetTypeFromProgID($progID: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string):System.Type;
            
            public static GetTypeFromProgID($progID: string, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $throwOnError: boolean):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string):System.Type;
            
            public static GetTypeFromCLSID($clsid: System.Guid, $server: string, $throwOnError: boolean):System.Type;
            
            public static GetTypeCode($type: System.Type):System.TypeCode;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>, $culture: System.Globalization.CultureInfo, $namedParameters: System.Array$1<string>):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>, $culture: System.Globalization.CultureInfo):any;
            
            public InvokeMember($name: string, $invokeAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $target: any, $args: System.Array$1<any>):any;
            
            public static GetTypeHandle($o: any):System.RuntimeTypeHandle;
            
            public GetArrayRank():number;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.ConstructorInfo;
            
            public GetConstructor($types: System.Array$1<System.Type>):System.Reflection.ConstructorInfo;
            
            public GetConstructors():System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetConstructors($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.ConstructorInfo>;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $callConvention: System.Reflection.CallingConventions, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $types: System.Array$1<System.Type>):System.Reflection.MethodInfo;
            
            public GetMethod($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.MethodInfo;
            
            public GetMethod($name: string):System.Reflection.MethodInfo;
            
            public GetMethods():System.Array$1<System.Reflection.MethodInfo>;
            
            public GetMethods($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MethodInfo>;
            
            public GetField($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.FieldInfo;
            
            public GetField($name: string):System.Reflection.FieldInfo;
            
            public GetFields():System.Array$1<System.Reflection.FieldInfo>;
            
            public GetFields($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.FieldInfo>;
            
            public GetInterface($name: string):System.Type;
            
            public GetInterface($name: string, $ignoreCase: boolean):System.Type;
            
            public GetInterfaces():System.Array$1<System.Type>;
            
            public FindInterfaces($filter: System.Reflection.TypeFilter, $filterCriteria: any):System.Array$1<System.Type>;
            
            public GetEvent($name: string):System.Reflection.EventInfo;
            
            public GetEvent($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.EventInfo;
            
            public GetEvents():System.Array$1<System.Reflection.EventInfo>;
            
            public GetEvents($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.EventInfo>;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags, $binder: System.Reflection.Binder, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>, $modifiers: System.Array$1<System.Reflection.ParameterModifier>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $types: System.Array$1<System.Type>):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string, $returnType: System.Type):System.Reflection.PropertyInfo;
            
            public GetProperty($name: string):System.Reflection.PropertyInfo;
            
            public GetProperties($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetProperties():System.Array$1<System.Reflection.PropertyInfo>;
            
            public GetNestedTypes():System.Array$1<System.Type>;
            
            public GetNestedTypes($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Type>;
            
            public GetNestedType($name: string):System.Type;
            
            public GetNestedType($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Type;
            
            public GetMember($name: string):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMember($name: string, $type: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public GetMembers($bindingAttr: System.Reflection.BindingFlags):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetDefaultMembers():System.Array$1<System.Reflection.MemberInfo>;
            
            public FindMembers($memberType: System.Reflection.MemberTypes, $bindingAttr: System.Reflection.BindingFlags, $filter: System.Reflection.MemberFilter, $filterCriteria: any):System.Array$1<System.Reflection.MemberInfo>;
            
            public GetGenericParameterConstraints():System.Array$1<System.Type>;
            
            public MakeGenericType(...typeArguments: System.Type[]):System.Type;
            
            public GetElementType():System.Type;
            
            public GetGenericArguments():System.Array$1<System.Type>;
            
            public GetGenericTypeDefinition():System.Type;
            
            public GetEnumNames():System.Array$1<string>;
            
            public GetEnumValues():System.Array;
            
            public GetEnumUnderlyingType():System.Type;
            
            public IsEnumDefined($value: any):boolean;
            
            public GetEnumName($value: any):string;
            
            public IsSubclassOf($c: System.Type):boolean;
            
            public IsInstanceOfType($o: any):boolean;
            
            public IsAssignableFrom($c: System.Type):boolean;
            
            public IsEquivalentTo($other: System.Type):boolean;
            
            public static GetTypeArray($args: System.Array$1<any>):System.Array$1<System.Type>;
            
            public Equals($o: any):boolean;
            
            public Equals($o: System.Type):boolean;
            
            public static op_Equality($left: System.Type, $right: System.Type):boolean;
            
            public static op_Inequality($left: System.Type, $right: System.Type):boolean;
            
            public GetInterfaceMap($interfaceType: System.Type):System.Reflection.InterfaceMapping;
            
            public GetType():System.Type;
            
            public static GetType($typeName: string):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean):System.Type;
            
            public static GetType($typeName: string, $throwOnError: boolean, $ignoreCase: boolean):System.Type;
            
            public static ReflectionOnlyGetType($typeName: string, $throwIfNotFound: boolean, $ignoreCase: boolean):System.Type;
            
            public static GetTypeFromHandle($handle: System.RuntimeTypeHandle):System.Type;
            
        }
        
        
        class Array extends System.Object implements System.ICloneable, System.Collections.IEnumerable, System.Collections.IList, System.Collections.IStructuralComparable, System.Collections.IStructuralEquatable, System.Collections.ICollection{ 
            
        }
        
        
        class UInt64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable{ 
            
        }
        
        
        class Delegate extends System.Object implements System.ICloneable, System.Runtime.Serialization.ISerializable{ 
            
            public get Method(): System.Reflection.MethodInfo;
            
            
            public get Target(): any;
            
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $firstArgument: any, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $method: System.Reflection.MethodInfo):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string):Function;
            
            public static CreateDelegate($type: System.Type, $target: System.Type, $method: string, $ignoreCase: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean, $throwOnBindFailure: boolean):Function;
            
            public static CreateDelegate($type: System.Type, $target: any, $method: string, $ignoreCase: boolean):Function;
            
            public DynamicInvoke(...args: any[]):any;
            
            public Clone():any;
            
            public GetObjectData($info: System.Runtime.Serialization.SerializationInfo, $context: System.Runtime.Serialization.StreamingContext):void;
            
            public GetInvocationList():System.Array$1<Function>;
            
            public static Combine($a: Function, $b: Function):Function;
            
            public static Combine(...delegates: Function[]):Function;
            
            public static Remove($source: Function, $value: Function):Function;
            
            public static RemoveAll($source: Function, $value: Function):Function;
            
            public static op_Equality($d1: Function, $d2: Function):boolean;
            
            public static op_Inequality($d1: Function, $d2: Function):boolean;
            
        }
        
        
        interface MulticastDelegate { (...args:any[]) : any; } 
        var MulticastDelegate: {new (func: (...args:any[]) => any): MulticastDelegate;}
        
        
        interface IDisposable{ 
            
        }
        
        
        interface Func$2<T, TResult> { (arg: T) : TResult; } 
        
        
        interface Func$4<T1, T2, T3, TResult> { (arg1: T1, arg2: T2, arg3: T3) : TResult; } 
        
        
        class Attribute extends System.Object implements System.Runtime.InteropServices._Attribute{ 
            
        }
        
        
        class Guid extends System.ValueType implements System.IComparable, System.IComparable$1<System.Guid>, System.IEquatable$1<System.Guid>, System.IFormattable{ 
            
        }
        
        
        enum TypeCode{ Empty = 0, Object = 1, DBNull = 2, Boolean = 3, Char = 4, SByte = 5, Byte = 6, Int16 = 7, UInt16 = 8, Int32 = 9, UInt32 = 10, Int64 = 11, UInt64 = 12, Single = 13, Double = 14, Decimal = 15, DateTime = 16, String = 18 }
        
        
        interface IFormatProvider{ 
            
        }
        
        
        class RuntimeTypeHandle extends System.ValueType implements System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Uri extends System.Object implements System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Int64 extends System.ValueType implements System.IComparable, System.IComparable$1<bigint>, System.IConvertible, System.IEquatable$1<bigint>, System.IFormattable{ 
            
        }
        
        
        class UInt32 extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
        class Byte extends System.ValueType implements System.IComparable, System.IComparable$1<number>, System.IConvertible, System.IEquatable$1<number>, System.IFormattable{ 
            
        }
        
        
        interface Action$1<T> { (obj: T) : void; } 
        
        
        interface Func$1<TResult> { () : TResult; } 
        
        
        interface Action { () : void; } 
        var Action: {new (func: () => void): Action;}
        
        
        class MarshalByRefObject extends System.Object{ 
            
        }
        
        
        class DateTime extends System.ValueType implements System.IComparable, System.IComparable$1<Date>, System.IConvertible, System.IEquatable$1<Date>, System.Runtime.Serialization.ISerializable, System.IFormattable{ 
            
        }
        
        
    }
    namespace System.Collections {
        
        interface IEnumerable{ 
            
        }
        
        
        interface IList extends System.Collections.IEnumerable, System.Collections.ICollection{ 
            
        }
        
        
        interface ICollection extends System.Collections.IEnumerable{ 
            
        }
        
        
        interface IStructuralComparable{ 
            
        }
        
        
        interface IStructuralEquatable{ 
            
        }
        
        
        interface IDictionary extends System.Collections.IEnumerable, System.Collections.ICollection{ 
            
        }
        
        
        interface IEnumerator{ 
            
        }
        
        
    }
    namespace System.Collections.Generic {
        
        interface IEnumerable$1<T> extends System.Collections.IEnumerable{ 
            
        }
        
        
        interface IList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<T>, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface ICollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface IReadOnlyCollection$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        interface IReadOnlyList$1<T> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        class List$1<T> extends System.Object implements System.Collections.IEnumerable, System.Collections.Generic.IList$1<T>, System.Collections.Generic.IReadOnlyCollection$1<T>, System.Collections.Generic.IReadOnlyList$1<T>, System.Collections.IList, System.Collections.Generic.ICollection$1<T>, System.Collections.ICollection, System.Collections.Generic.IEnumerable$1<T>{ 
            
        }
        
        
        class Dictionary$2<TKey, TValue> extends System.Object implements System.Collections.IDictionary, System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IReadOnlyDictionary$2<TKey, TValue>, System.Runtime.Serialization.IDeserializationCallback, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Runtime.Serialization.ISerializable, System.Collections.ICollection, System.Collections.Generic.IDictionary$2<TKey, TValue>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>{ 
            
        }
        
        
        class KeyValuePair$2<TKey, TValue> extends System.ValueType{ 
            
        }
        
        
        interface IReadOnlyDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.IReadOnlyCollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>{ 
            
        }
        
        
        interface IDictionary$2<TKey, TValue> extends System.Collections.IEnumerable, System.Collections.Generic.ICollection$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>, System.Collections.Generic.IEnumerable$1<System.Collections.Generic.KeyValuePair$2<TKey, TValue>>{ 
            
        }
        
        
    }
    namespace System.Runtime.InteropServices {
        
        interface _Exception{ 
            
        }
        
        
        interface _MemberInfo{ 
            
        }
        
        
        interface _Type{ 
            
        }
        
        
        interface _MethodBase{ 
            
        }
        
        
        interface _MethodInfo{ 
            
        }
        
        
        interface _AssemblyName{ 
            
        }
        
        
        interface _Assembly{ 
            
        }
        
        
        class StructLayoutAttribute extends System.Attribute implements System.Runtime.InteropServices._Attribute{ 
            
        }
        
        
        interface _Attribute{ 
            
        }
        
        
        interface _Module{ 
            
        }
        
        
        interface _ConstructorInfo{ 
            
        }
        
        
        interface _FieldInfo{ 
            
        }
        
        
        interface _EventInfo{ 
            
        }
        
        
        interface _PropertyInfo{ 
            
        }
        
        
    }
    namespace System.Runtime.Serialization {
        
        interface ISerializable{ 
            
        }
        
        
        class SerializationInfo extends System.Object{ 
            
        }
        
        
        class StreamingContext extends System.ValueType{ 
            
        }
        
        
        interface IDeserializationCallback{ 
            
        }
        
        
    }
    namespace System.Reflection {
        
        class MemberInfo extends System.Object implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        interface ICustomAttributeProvider{ 
            
        }
        
        
        interface IReflect{ 
            
        }
        
        
        class MethodInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._MethodInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class MethodBase extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._MethodBase, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        interface MemberFilter { (m: System.Reflection.MemberInfo, filterCriteria: any) : boolean; } 
        var MemberFilter: {new (func: (m: System.Reflection.MemberInfo, filterCriteria: any) => boolean): MemberFilter;}
        
        
        enum MemberTypes{ Constructor = 1, Event = 2, Field = 4, Method = 8, Property = 16, TypeInfo = 32, Custom = 64, NestedType = 128, All = 191 }
        
        
        class AssemblyName extends System.Object implements System.ICloneable, System.Runtime.Serialization.IDeserializationCallback, System.Runtime.InteropServices._AssemblyName, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Assembly extends System.Object implements System.Security.IEvidenceFactory, System.Runtime.InteropServices._Assembly, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Binder extends System.Object{ 
            
        }
        
        
        enum BindingFlags{ Default = 0, IgnoreCase = 1, DeclaredOnly = 2, Instance = 4, Static = 8, Public = 16, NonPublic = 32, FlattenHierarchy = 64, InvokeMethod = 256, CreateInstance = 512, GetField = 1024, SetField = 2048, GetProperty = 4096, SetProperty = 8192, PutDispProperty = 16384, PutRefDispProperty = 32768, ExactBinding = 65536, SuppressChangeType = 131072, OptionalParamBinding = 262144, IgnoreReturn = 16777216 }
        
        
        class ParameterModifier extends System.ValueType{ 
            
        }
        
        
        class Module extends System.Object implements System.Runtime.InteropServices._Module, System.Reflection.ICustomAttributeProvider, System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class ConstructorInfo extends System.Reflection.MethodBase implements System.Runtime.InteropServices._MethodBase, System.Runtime.InteropServices._ConstructorInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        enum CallingConventions{ Standard = 1, VarArgs = 2, Any = 3, HasThis = 32, ExplicitThis = 64 }
        
        
        class FieldInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._FieldInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        interface TypeFilter { (m: System.Type, filterCriteria: any) : boolean; } 
        var TypeFilter: {new (func: (m: System.Type, filterCriteria: any) => boolean): TypeFilter;}
        
        
        class EventInfo extends System.Reflection.MemberInfo implements System.Runtime.InteropServices._EventInfo, System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        class PropertyInfo extends System.Reflection.MemberInfo implements System.Reflection.ICustomAttributeProvider, System.Runtime.InteropServices._PropertyInfo, System.Runtime.InteropServices._MemberInfo{ 
            
        }
        
        
        enum TypeAttributes{ VisibilityMask = 7, NotPublic = 0, Public = 1, NestedPublic = 2, NestedPrivate = 3, NestedFamily = 4, NestedAssembly = 5, NestedFamANDAssem = 6, NestedFamORAssem = 7, LayoutMask = 24, AutoLayout = 0, SequentialLayout = 8, ExplicitLayout = 16, ClassSemanticsMask = 32, Class = 0, Interface = 32, Abstract = 128, Sealed = 256, SpecialName = 1024, Import = 4096, Serializable = 8192, WindowsRuntime = 16384, StringFormatMask = 196608, AnsiClass = 0, UnicodeClass = 65536, AutoClass = 131072, CustomFormatClass = 196608, CustomFormatMask = 12582912, BeforeFieldInit = 1048576, ReservedMask = 264192, RTSpecialName = 2048, HasSecurity = 262144 }
        
        
        enum GenericParameterAttributes{ None = 0, VarianceMask = 3, Covariant = 1, Contravariant = 2, SpecialConstraintMask = 28, ReferenceTypeConstraint = 4, NotNullableValueTypeConstraint = 8, DefaultConstructorConstraint = 16 }
        
        
        class InterfaceMapping extends System.ValueType{ 
            
        }
        
        
    }
    namespace UnityEngine.SceneManagement {
        /** Run-time data structure for *.unity file. */
        class Scene extends System.ValueType{ 
            
        }
        
        
    }
    namespace UnityEngine.Canvas {
        
        interface WillRenderCanvases { () : void; } 
        var WillRenderCanvases: {new (func: () => void): WillRenderCanvases;}
        
        
    }
    namespace UnityEngine.UI {
        
        class Text extends UnityEngine.UI.MaskableGraphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.ILayoutElement, UnityEngine.UI.IClippable{ 
            
            public get cachedTextGenerator(): UnityEngine.TextGenerator;
            
            
            public get cachedTextGeneratorForLayout(): UnityEngine.TextGenerator;
            
            
            public get mainTexture(): UnityEngine.Texture;
            
            
            public get font(): UnityEngine.Font;
            public set font(value: UnityEngine.Font);
            
            public get text(): string;
            public set text(value: string);
            
            public get supportRichText(): boolean;
            public set supportRichText(value: boolean);
            
            public get resizeTextForBestFit(): boolean;
            public set resizeTextForBestFit(value: boolean);
            
            public get resizeTextMinSize(): number;
            public set resizeTextMinSize(value: number);
            
            public get resizeTextMaxSize(): number;
            public set resizeTextMaxSize(value: number);
            
            public get alignment(): UnityEngine.TextAnchor;
            public set alignment(value: UnityEngine.TextAnchor);
            
            public get alignByGeometry(): boolean;
            public set alignByGeometry(value: boolean);
            
            public get fontSize(): number;
            public set fontSize(value: number);
            
            public get horizontalOverflow(): UnityEngine.HorizontalWrapMode;
            public set horizontalOverflow(value: UnityEngine.HorizontalWrapMode);
            
            public get verticalOverflow(): UnityEngine.VerticalWrapMode;
            public set verticalOverflow(value: UnityEngine.VerticalWrapMode);
            
            public get lineSpacing(): number;
            public set lineSpacing(value: number);
            
            public get fontStyle(): UnityEngine.FontStyle;
            public set fontStyle(value: UnityEngine.FontStyle);
            
            public get pixelsPerUnit(): number;
            
            
            public get minWidth(): number;
            
            
            public get preferredWidth(): number;
            
            
            public get flexibleWidth(): number;
            
            
            public get minHeight(): number;
            
            
            public get preferredHeight(): number;
            
            
            public get flexibleHeight(): number;
            
            
            public get layoutPriority(): number;
            
            
            public FontTextureChanged():void;
            
            public GetGenerationSettings($extents: UnityEngine.Vector2):UnityEngine.TextGenerationSettings;
            
            public static GetTextAnchorPivot($anchor: UnityEngine.TextAnchor):UnityEngine.Vector2;
            
            public CalculateLayoutInputHorizontal():void;
            
            public CalculateLayoutInputVertical():void;
            
        }
        
        
        class MaskableGraphic extends UnityEngine.UI.Graphic implements UnityEngine.UI.IMaterialModifier, UnityEngine.UI.IMaskable, UnityEngine.UI.ICanvasElement, UnityEngine.UI.IClippable{ 
            
        }
        
        
        class Graphic extends UnityEngine.EventSystems.UIBehaviour implements UnityEngine.UI.ICanvasElement{ 
            
        }
        
        
        interface ICanvasElement{ 
            
        }
        
        
        interface IMaterialModifier{ 
            
        }
        
        
        interface IMaskable{ 
            
        }
        
        
        interface IClippable{ 
            
        }
        
        
        interface ILayoutElement{ 
            
        }
        
        
    }
    namespace UnityEngine.EventSystems {
        
        class UIBehaviour extends UnityEngine.MonoBehaviour{ 
            
        }
        
        
    }
    namespace System.Security {
        
        interface IEvidenceFactory{ 
            
        }
        
        
    }
    namespace System.Globalization {
        
        class CultureInfo extends System.Object implements System.ICloneable, System.IFormatProvider{ 
            
        }
        
        
    }
    namespace UnityEngine.Networking {
        /** Provides methods to communicate with web servers. */
        class UnityWebRequest extends System.Object implements System.IDisposable{ 
            /** The string "GET", commonly used as the verb for an HTTP GET request. */
            public static kHttpVerbGET: string;
            /** The string "HEAD", commonly used as the verb for an HTTP HEAD request. */
            public static kHttpVerbHEAD: string;
            /** The string "POST", commonly used as the verb for an HTTP POST request. */
            public static kHttpVerbPOST: string;
            /** The string "PUT", commonly used as the verb for an HTTP PUT request. */
            public static kHttpVerbPUT: string;
            /** The string "CREATE", commonly used as the verb for an HTTP CREATE request. */
            public static kHttpVerbCREATE: string;
            /** The string "DELETE", commonly used as the verb for an HTTP DELETE request. */
            public static kHttpVerbDELETE: string;
            /** If true, any CertificateHandler attached to this UnityWebRequest will have CertificateHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeCertificateHandlerOnDispose(): boolean;
            public set disposeCertificateHandlerOnDispose(value: boolean);
            /** If true, any DownloadHandler attached to this UnityWebRequest will have DownloadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeDownloadHandlerOnDispose(): boolean;
            public set disposeDownloadHandlerOnDispose(value: boolean);
            /** If true, any UploadHandler attached to this UnityWebRequest will have UploadHandler.Dispose called automatically when UnityWebRequest.Dispose is called. */
            public get disposeUploadHandlerOnDispose(): boolean;
            public set disposeUploadHandlerOnDispose(value: boolean);
            /** Defines the HTTP verb used by this UnityWebRequest, such as GET or POST. */
            public get method(): string;
            public set method(value: string);
            /** A human-readable string describing any system errors encountered by this UnityWebRequest object while handling HTTP requests or responses. (Read Only) */
            public get error(): string;
            
            /** Determines whether this UnityWebRequest will include Expect: 100-Continue in its outgoing request headers. (Default: true). */
            public get useHttpContinue(): boolean;
            public set useHttpContinue(value: boolean);
            /** Defines the target URL for the UnityWebRequest to communicate with. */
            public get url(): string;
            public set url(value: string);
            /** Defines the target URI for the UnityWebRequest to communicate with. */
            public get uri(): System.Uri;
            public set uri(value: System.Uri);
            /** The numeric HTTP response code returned by the server, such as 200, 404 or 500. (Read Only) */
            public get responseCode(): bigint;
            
            /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of uploading body data to the server. */
            public get uploadProgress(): number;
            
            /** Returns true while a UnityWebRequest’s configuration properties can be altered. (Read Only) */
            public get isModifiable(): boolean;
            
            /** Returns true after the UnityWebRequest has finished communicating with the remote server. (Read Only) */
            public get isDone(): boolean;
            
            /** Returns true after this UnityWebRequest encounters a system error. (Read Only) */
            public get isNetworkError(): boolean;
            
            /** Returns true after this UnityWebRequest receives an HTTP response code indicating an error. (Read Only) */
            public get isHttpError(): boolean;
            
            /** Returns a floating-point value between 0.0 and 1.0, indicating the progress of downloading body data from the server. (Read Only) */
            public get downloadProgress(): number;
            
            /** Returns the number of bytes of body data the system has uploaded to the remote server. (Read Only) */
            public get uploadedBytes(): bigint;
            
            /** Returns the number of bytes of body data the system has downloaded from the remote server. (Read Only) */
            public get downloadedBytes(): bigint;
            
            /** Indicates the number of redirects which this UnityWebRequest will follow before halting with a “Redirect Limit Exceeded” system error. */
            public get redirectLimit(): number;
            public set redirectLimit(value: number);
            /** Holds a reference to the UploadHandler object which manages body data to be uploaded to the remote server. */
            public get uploadHandler(): UnityEngine.Networking.UploadHandler;
            public set uploadHandler(value: UnityEngine.Networking.UploadHandler);
            /** Holds a reference to a DownloadHandler object, which manages body data received from the remote server by this UnityWebRequest. */
            public get downloadHandler(): UnityEngine.Networking.DownloadHandler;
            public set downloadHandler(value: UnityEngine.Networking.DownloadHandler);
            /** Holds a reference to a CertificateHandler object, which manages certificate validation for this UnityWebRequest. */
            public get certificateHandler(): UnityEngine.Networking.CertificateHandler;
            public set certificateHandler(value: UnityEngine.Networking.CertificateHandler);
            /** Sets UnityWebRequest to attempt to abort after the number of seconds in timeout have passed. */
            public get timeout(): number;
            public set timeout(value: number);
            
            public static ClearCookieCache():void;
            
            public static ClearCookieCache($uri: System.Uri):void;
            
            public Dispose():void;
            
            public SendWebRequest():UnityEngine.Networking.UnityWebRequestAsyncOperation;
            
            public Abort():void;
            /** Retrieves the value of a custom request header.
             * @param name Name of the custom request header. Case-insensitive.
             * @returns The value of the custom request header. If no custom header with a matching name has been set, returns an empty string. 
             */
            public GetRequestHeader($name: string):string;
            /** Set a HTTP request header to a custom value. * @param name The key of the header to be set. Case-sensitive.
             * @param value The header's intended value.
             */
            public SetRequestHeader($name: string, $value: string):void;
            /** Retrieves the value of a response header from the latest HTTP response received.
             * @param name The name of the HTTP header to retrieve. Case-insensitive.
             * @returns The value of the HTTP header from the latest HTTP response. If no header with a matching name has been received, or no responses have been received, returns null. 
             */
            public GetResponseHeader($name: string):string;
            
            public GetResponseHeaders():System.Collections.Generic.Dictionary$2<string, string>;
            /** Create a UnityWebRequest for HTTP GET.
             * @param uri The URI of the resource to retrieve via HTTP GET.
             * @returns An object that retrieves data from the uri. 
             */
            public static Get($uri: string):UnityEngine.Networking.UnityWebRequest;
            /** Create a UnityWebRequest for HTTP GET.
             * @param uri The URI of the resource to retrieve via HTTP GET.
             * @returns An object that retrieves data from the uri. 
             */
            public static Get($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured for HTTP DELETE.
             * @param uri The URI to which a DELETE request should be sent.
             * @returns A UnityWebRequest configured to send an HTTP DELETE request. 
             */
            public static Delete($uri: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Delete($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to send a HTTP HEAD request.
             * @param uri The URI to which to send a HTTP HEAD request.
             * @returns A UnityWebRequest configured to transmit a HTTP HEAD request. 
             */
            public static Head($uri: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Head($uri: System.Uri):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
             * @param uri The URI to which the data will be sent.
             * @param bodyData The data to transmit to the remote server.
            If a string, the string will be converted to raw bytes via <a href="https:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
             * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
             */
            public static Put($uri: string, $bodyData: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            
            public static Put($uri: System.Uri, $bodyData: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to upload raw data to a remote server via HTTP PUT.
             * @param uri The URI to which the data will be sent.
             * @param bodyData The data to transmit to the remote server.
            If a string, the string will be converted to raw bytes via <a href="https:msdn.microsoft.comen-uslibrarysystem.text.encoding.utf8">System.Text.Encoding.UTF8<a>.
             * @returns A UnityWebRequest configured to transmit bodyData to uri via HTTP PUT. 
             */
            public static Put($uri: string, $bodyData: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Put($uri: System.Uri, $bodyData: string):UnityEngine.Networking.UnityWebRequest;
            /** Creates a UnityWebRequest configured to send form data to a server via HTTP POST.
             * @param uri The target URI to which form data will be transmitted.
             * @param postData Form body data. Will be URLEncoded prior to transmission.
             * @returns A UnityWebRequest configured to send form data to uri via POST. 
             */
            public static Post($uri: string, $postData: string):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $postData: string):UnityEngine.Networking.UnityWebRequest;
            /** Create a UnityWebRequest configured to send form data to a server via HTTP POST.
             * @param uri The target URI to which form data will be transmitted.
             * @param formData Form fields or files encapsulated in a WWWForm object, for formatting and transmission to the remote server.
             * @returns A UnityWebRequest configured to send form data to uri via POST. 
             */
            public static Post($uri: string, $formData: UnityEngine.WWWForm):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $formData: UnityEngine.WWWForm):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: string, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: string, $formFields: System.Collections.Generic.Dictionary$2<string, string>):UnityEngine.Networking.UnityWebRequest;
            
            public static Post($uri: System.Uri, $formFields: System.Collections.Generic.Dictionary$2<string, string>):UnityEngine.Networking.UnityWebRequest;
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
             * @param e The text encoding to use.
             */
            public static EscapeURL($s: string):string;
            /** Escapes characters in a string to ensure they are URL-friendly. * @param s A string with characters to be escaped.
             * @param e The text encoding to use.
             */
            public static EscapeURL($s: string, $e: System.Text.Encoding):string;
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
             * @param e The text encoding to use.
             */
            public static UnEscapeURL($s: string):string;
            /** Converts URL-friendly escape sequences back to normal text. * @param s A string containing escaped characters.
             * @param e The text encoding to use.
             */
            public static UnEscapeURL($s: string, $e: System.Text.Encoding):string;
            
            public static SerializeFormSections($multipartFormSections: System.Collections.Generic.List$1<UnityEngine.Networking.IMultipartFormSection>, $boundary: System.Array$1<number>):System.Array$1<number>;
            
            public static GenerateBoundary():System.Array$1<number>;
            
            public static SerializeSimpleForm($formFields: System.Collections.Generic.Dictionary$2<string, string>):System.Array$1<number>;
            
            public constructor();
            
            public constructor($url: string);
            
            public constructor($uri: System.Uri);
            
            public constructor($url: string, $method: string);
            
            public constructor($uri: System.Uri, $method: string);
            
            public constructor($url: string, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler);
            
            public constructor($uri: System.Uri, $method: string, $downloadHandler: UnityEngine.Networking.DownloadHandler, $uploadHandler: UnityEngine.Networking.UploadHandler);
            
        }
        
        /** Asynchronous operation object returned from UnityWebRequest.SendWebRequest().
        You can yield until it continues, register an event handler with AsyncOperation.completed, or manually check whether it's done (AsyncOperation.isDone) or progress (AsyncOperation.progress). */
        class UnityWebRequestAsyncOperation extends UnityEngine.AsyncOperation{ 
            /** Returns the associated UnityWebRequest that created the operation. */
            public get webRequest(): UnityEngine.Networking.UnityWebRequest;
            
            
            public constructor();
            
        }
        
        /** Helper object for UnityWebRequests. Manages the buffering and transmission of body data during HTTP requests. */
        class UploadHandler extends System.Object implements System.IDisposable{ 
            
        }
        
        /** Manage and process HTTP response body data received from a remote server. */
        class DownloadHandler extends System.Object implements System.IDisposable{ 
            /** Returns true if this DownloadHandler has been informed by its parent UnityWebRequest that all data has been received, and this DownloadHandler has completed any necessary post-download processing. (Read Only) */
            public get isDone(): boolean;
            
            /** Returns the raw bytes downloaded from the remote server, or null. (Read Only) */
            public get data(): System.Array$1<number>;
            
            /** Convenience property. Returns the bytes from data interpreted as a UTF8 string. (Read Only) */
            public get text(): string;
            
            
            public Dispose():void;
            
        }
        
        /** Responsible for rejecting or accepting certificates received on https requests. */
        class CertificateHandler extends System.Object implements System.IDisposable{ 
            
        }
        
        
        interface IMultipartFormSection{ 
            
        }
        
        /** A general-purpose UploadHandler subclass, using a native-code memory buffer. */
        class UploadHandlerRaw extends UnityEngine.Networking.UploadHandler implements System.IDisposable{ 
            
            public constructor($data: System.Array$1<number>);
            
        }
        
        
    }
    namespace System.Text {
        
        class Encoding extends System.Object implements System.ICloneable{ 
            
        }
        
        
    }
    namespace UnityEngine.Application {
        
        interface AdvertisingIdentifierCallback { (advertisingId: string, trackingEnabled: boolean, errorMsg: string) : void; } 
        var AdvertisingIdentifierCallback: {new (func: (advertisingId: string, trackingEnabled: boolean, errorMsg: string) => void): AdvertisingIdentifierCallback;}
        
        
        interface LowMemoryCallback { () : void; } 
        var LowMemoryCallback: {new (func: () => void): LowMemoryCallback;}
        
        
        interface LogCallback { (condition: string, stackTrace: string, type: UnityEngine.LogType) : void; } 
        var LogCallback: {new (func: (condition: string, stackTrace: string, type: UnityEngine.LogType) => void): LogCallback;}
        
        
    }
    namespace UnityEngine.Events {
        /** Zero argument delegate used by UnityEvents. */
        interface UnityAction { () : void; } 
        var UnityAction: {new (func: () => void): UnityAction;}
        
        
    }
    namespace PuertsMethod {
        
        class Init extends UnityEngine.MonoBehaviour{ 
            
            public JsFile: string;
            
            public DevMode: boolean;
            
            public JsAwake: System.Action;
            
            public JsStart: System.Action;
            
            public JsUpdate: System.Action;
            
            public JsFixedUpdate: System.Action;
            
            public JsOnDestroy: System.Action;
            
            public static get Instance(): PuertsMethod.Init;
            
            
            public static Yield($to_yield: any, $callback: System.Action):void;
            
            public constructor();
            
        }
        
        
    }
    namespace System.IO {
        
        class File extends System.Object{ 
            
            public static AppendAllText($path: string, $contents: string):void;
            
            public static AppendAllText($path: string, $contents: string, $encoding: System.Text.Encoding):void;
            
            public static AppendText($path: string):System.IO.StreamWriter;
            
            public static Copy($sourceFileName: string, $destFileName: string):void;
            
            public static Copy($sourceFileName: string, $destFileName: string, $overwrite: boolean):void;
            
            public static Create($path: string):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number, $options: System.IO.FileOptions):System.IO.FileStream;
            
            public static Create($path: string, $bufferSize: number, $options: System.IO.FileOptions, $fileSecurity: System.Security.AccessControl.FileSecurity):System.IO.FileStream;
            
            public static CreateText($path: string):System.IO.StreamWriter;
            
            public static Delete($path: string):void;
            
            public static Exists($path: string):boolean;
            
            public static GetAccessControl($path: string):System.Security.AccessControl.FileSecurity;
            
            public static GetAccessControl($path: string, $includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.FileSecurity;
            
            public static GetAttributes($path: string):System.IO.FileAttributes;
            
            public static GetCreationTime($path: string):Date;
            
            public static GetCreationTimeUtc($path: string):Date;
            
            public static GetLastAccessTime($path: string):Date;
            
            public static GetLastAccessTimeUtc($path: string):Date;
            
            public static GetLastWriteTime($path: string):Date;
            
            public static GetLastWriteTimeUtc($path: string):Date;
            
            public static Move($sourceFileName: string, $destFileName: string):void;
            
            public static Open($path: string, $mode: System.IO.FileMode):System.IO.FileStream;
            
            public static Open($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess):System.IO.FileStream;
            
            public static Open($path: string, $mode: System.IO.FileMode, $access: System.IO.FileAccess, $share: System.IO.FileShare):System.IO.FileStream;
            
            public static OpenRead($path: string):System.IO.FileStream;
            
            public static OpenText($path: string):System.IO.StreamReader;
            
            public static OpenWrite($path: string):System.IO.FileStream;
            
            public static Replace($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string):void;
            
            public static Replace($sourceFileName: string, $destinationFileName: string, $destinationBackupFileName: string, $ignoreMetadataErrors: boolean):void;
            
            public static SetAccessControl($path: string, $fileSecurity: System.Security.AccessControl.FileSecurity):void;
            
            public static SetAttributes($path: string, $fileAttributes: System.IO.FileAttributes):void;
            
            public static SetCreationTime($path: string, $creationTime: Date):void;
            
            public static SetCreationTimeUtc($path: string, $creationTimeUtc: Date):void;
            
            public static SetLastAccessTime($path: string, $lastAccessTime: Date):void;
            
            public static SetLastAccessTimeUtc($path: string, $lastAccessTimeUtc: Date):void;
            
            public static SetLastWriteTime($path: string, $lastWriteTime: Date):void;
            
            public static SetLastWriteTimeUtc($path: string, $lastWriteTimeUtc: Date):void;
            
            public static ReadAllBytes($path: string):System.Array$1<number>;
            
            public static ReadAllLines($path: string):System.Array$1<string>;
            
            public static ReadAllLines($path: string, $encoding: System.Text.Encoding):System.Array$1<string>;
            
            public static ReadAllText($path: string):string;
            
            public static ReadAllText($path: string, $encoding: System.Text.Encoding):string;
            
            public static WriteAllBytes($path: string, $bytes: System.Array$1<number>):void;
            
            public static WriteAllLines($path: string, $contents: System.Array$1<string>):void;
            
            public static WriteAllLines($path: string, $contents: System.Array$1<string>, $encoding: System.Text.Encoding):void;
            
            public static WriteAllText($path: string, $contents: string):void;
            
            public static WriteAllText($path: string, $contents: string, $encoding: System.Text.Encoding):void;
            
            public static Encrypt($path: string):void;
            
            public static Decrypt($path: string):void;
            
            public static ReadLines($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static ReadLines($path: string, $encoding: System.Text.Encoding):System.Collections.Generic.IEnumerable$1<string>;
            
            public static AppendAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>):void;
            
            public static AppendAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding):void;
            
            public static WriteAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>):void;
            
            public static WriteAllLines($path: string, $contents: System.Collections.Generic.IEnumerable$1<string>, $encoding: System.Text.Encoding):void;
            
        }
        
        
        class StreamWriter extends System.IO.TextWriter implements System.IDisposable{ 
            
        }
        
        
        class TextWriter extends System.MarshalByRefObject implements System.IDisposable{ 
            
        }
        
        
        class FileStream extends System.IO.Stream implements System.IDisposable{ 
            
        }
        
        
        class Stream extends System.MarshalByRefObject implements System.IDisposable{ 
            
        }
        
        
        enum FileOptions{ None = 0, Encrypted = 16384, DeleteOnClose = 67108864, SequentialScan = 134217728, RandomAccess = 268435456, Asynchronous = 1073741824, WriteThrough = -2147483648 }
        
        
        enum FileAttributes{ Archive = 32, Compressed = 2048, Device = 64, Directory = 16, Encrypted = 16384, Hidden = 2, Normal = 128, NotContentIndexed = 8192, Offline = 4096, ReadOnly = 1, ReparsePoint = 1024, SparseFile = 512, System = 4, Temporary = 256, IntegrityStream = 32768, NoScrubData = 131072 }
        
        
        enum FileMode{ CreateNew = 1, Create = 2, Open = 3, OpenOrCreate = 4, Truncate = 5, Append = 6 }
        
        
        enum FileAccess{ Read = 1, Write = 2, ReadWrite = 3 }
        
        
        enum FileShare{ None = 0, Read = 1, Write = 2, ReadWrite = 3, Delete = 4, Inheritable = 16 }
        
        
        class StreamReader extends System.IO.TextReader implements System.IDisposable{ 
            
        }
        
        
        class TextReader extends System.MarshalByRefObject implements System.IDisposable{ 
            
        }
        
        
        class Directory extends System.Object{ 
            
            public static GetFiles($path: string):System.Array$1<string>;
            
            public static GetFiles($path: string, $searchPattern: string):System.Array$1<string>;
            
            public static GetFiles($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<string>;
            
            public static GetDirectories($path: string):System.Array$1<string>;
            
            public static GetDirectories($path: string, $searchPattern: string):System.Array$1<string>;
            
            public static GetDirectories($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<string>;
            
            public static GetFileSystemEntries($path: string):System.Array$1<string>;
            
            public static GetFileSystemEntries($path: string, $searchPattern: string):System.Array$1<string>;
            
            public static GetFileSystemEntries($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Array$1<string>;
            
            public static EnumerateDirectories($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateDirectories($path: string, $searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateDirectories($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFiles($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFiles($path: string, $searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFiles($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFileSystemEntries($path: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFileSystemEntries($path: string, $searchPattern: string):System.Collections.Generic.IEnumerable$1<string>;
            
            public static EnumerateFileSystemEntries($path: string, $searchPattern: string, $searchOption: System.IO.SearchOption):System.Collections.Generic.IEnumerable$1<string>;
            
            public static GetDirectoryRoot($path: string):string;
            
            public static CreateDirectory($path: string):System.IO.DirectoryInfo;
            
            public static CreateDirectory($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity):System.IO.DirectoryInfo;
            
            public static Delete($path: string):void;
            
            public static Delete($path: string, $recursive: boolean):void;
            
            public static Exists($path: string):boolean;
            
            public static GetLastAccessTime($path: string):Date;
            
            public static GetLastAccessTimeUtc($path: string):Date;
            
            public static GetLastWriteTime($path: string):Date;
            
            public static GetLastWriteTimeUtc($path: string):Date;
            
            public static GetCreationTime($path: string):Date;
            
            public static GetCreationTimeUtc($path: string):Date;
            
            public static GetCurrentDirectory():string;
            
            public static GetLogicalDrives():System.Array$1<string>;
            
            public static GetParent($path: string):System.IO.DirectoryInfo;
            
            public static Move($sourceDirName: string, $destDirName: string):void;
            
            public static SetAccessControl($path: string, $directorySecurity: System.Security.AccessControl.DirectorySecurity):void;
            
            public static SetCreationTime($path: string, $creationTime: Date):void;
            
            public static SetCreationTimeUtc($path: string, $creationTimeUtc: Date):void;
            
            public static SetCurrentDirectory($path: string):void;
            
            public static SetLastAccessTime($path: string, $lastAccessTime: Date):void;
            
            public static SetLastAccessTimeUtc($path: string, $lastAccessTimeUtc: Date):void;
            
            public static SetLastWriteTime($path: string, $lastWriteTime: Date):void;
            
            public static SetLastWriteTimeUtc($path: string, $lastWriteTimeUtc: Date):void;
            
            public static GetAccessControl($path: string, $includeSections: System.Security.AccessControl.AccessControlSections):System.Security.AccessControl.DirectorySecurity;
            
            public static GetAccessControl($path: string):System.Security.AccessControl.DirectorySecurity;
            
        }
        
        
        enum SearchOption{ TopDirectoryOnly = 0, AllDirectories = 1 }
        
        
        class DirectoryInfo extends System.IO.FileSystemInfo implements System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class FileSystemInfo extends System.MarshalByRefObject implements System.Runtime.Serialization.ISerializable{ 
            
        }
        
        
        class Path extends System.Object{ 
            
            public static AltDirectorySeparatorChar: number;
            
            public static DirectorySeparatorChar: number;
            
            public static PathSeparator: number;
            
            public static VolumeSeparatorChar: number;
            
            public static ChangeExtension($path: string, $extension: string):string;
            
            public static Combine($path1: string, $path2: string):string;
            
            public static GetDirectoryName($path: string):string;
            
            public static GetExtension($path: string):string;
            
            public static GetFileName($path: string):string;
            
            public static GetFileNameWithoutExtension($path: string):string;
            
            public static GetFullPath($path: string):string;
            
            public static GetPathRoot($path: string):string;
            
            public static GetTempFileName():string;
            
            public static GetTempPath():string;
            
            public static HasExtension($path: string):boolean;
            
            public static IsPathRooted($path: string):boolean;
            
            public static GetInvalidFileNameChars():System.Array$1<number>;
            
            public static GetInvalidPathChars():System.Array$1<number>;
            
            public static GetRandomFileName():string;
            
            public static Combine(...paths: string[]):string;
            
            public static Combine($path1: string, $path2: string, $path3: string):string;
            
            public static Combine($path1: string, $path2: string, $path3: string, $path4: string):string;
            
        }
        
        
    }
    namespace System.Security.AccessControl {
        
        class FileSecurity extends System.Security.AccessControl.FileSystemSecurity{ 
            
        }
        
        
        class FileSystemSecurity extends System.Security.AccessControl.NativeObjectSecurity{ 
            
        }
        
        
        class NativeObjectSecurity extends System.Security.AccessControl.CommonObjectSecurity{ 
            
        }
        
        
        class CommonObjectSecurity extends System.Security.AccessControl.ObjectSecurity{ 
            
        }
        
        
        class ObjectSecurity extends System.Object{ 
            
        }
        
        
        enum AccessControlSections{ None = 0, Audit = 1, Access = 2, Owner = 4, Group = 8, All = 15 }
        
        
        class DirectorySecurity extends System.Security.AccessControl.FileSystemSecurity{ 
            
        }
        
        
    }
    
}