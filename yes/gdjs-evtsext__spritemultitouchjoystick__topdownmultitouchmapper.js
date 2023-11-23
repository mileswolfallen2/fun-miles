
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper || {};

/**
 * Behavior generated from Top-down multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper = class TopDownMultitouchMapper extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
    this._behaviorData.ControllerIdentifier = behaviorData.ControllerIdentifier !== undefined ? behaviorData.ControllerIdentifier : Number("1") || 0;
    this._behaviorData.JoystickIdentifier = behaviorData.JoystickIdentifier !== undefined ? behaviorData.JoystickIdentifier : "Primary";
    this._behaviorData.StickMode = behaviorData.StickMode !== undefined ? behaviorData.StickMode : "Analog";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;
    if (oldBehaviorData.ControllerIdentifier !== newBehaviorData.ControllerIdentifier)
      this._behaviorData.ControllerIdentifier = newBehaviorData.ControllerIdentifier;
    if (oldBehaviorData.JoystickIdentifier !== newBehaviorData.JoystickIdentifier)
      this._behaviorData.JoystickIdentifier = newBehaviorData.JoystickIdentifier;
    if (oldBehaviorData.StickMode !== newBehaviorData.StickMode)
      this._behaviorData.StickMode = newBehaviorData.StickMode;

    return true;
  }

  // Properties:
  
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
  _getControllerIdentifier() {
    return this._behaviorData.ControllerIdentifier !== undefined ? this._behaviorData.ControllerIdentifier : Number("1") || 0;
  }
  _setControllerIdentifier(newValue) {
    this._behaviorData.ControllerIdentifier = newValue;
  }
  _getJoystickIdentifier() {
    return this._behaviorData.JoystickIdentifier !== undefined ? this._behaviorData.JoystickIdentifier : "Primary";
  }
  _setJoystickIdentifier(newValue) {
    this._behaviorData.JoystickIdentifier = newValue;
  }
  _getStickMode() {
    return this._behaviorData.StickMode !== undefined ? this._behaviorData.StickMode : "Analog";
  }
  _setStickMode(newValue) {
    this._behaviorData.StickMode = newValue;
  }
}

/**
 * Shared data generated from Top-down multitouch controller mapper
 */
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.SharedData = class TopDownMultitouchMapperSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._SpriteMultitouchJoystick_TopDownMultitouchMapperSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._SpriteMultitouchJoystick_TopDownMultitouchMapperSharedData = new gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.SharedData(
      initialData
    );
  }
  return instanceContainer._SpriteMultitouchJoystick_TopDownMultitouchMapperSharedData;
}

// Methods:
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{

/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "UpLeft", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "UpRight", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateUpKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "DownLeft", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateLeftKey();
}
}}

}


{

/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed8Way.func(runtimeScene, (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), "DownRight", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateDownKey();
}
}{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateRightKey();
}
}}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).diagonalsAllowed()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).diagonalsAllowed() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "Analog" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateStick(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "360°" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TopDownMovement")).simulateStick(gdjs.evtsExt__SpriteMultitouchJoystick__StickAngle.func(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.common.sign(gdjs.evtsExt__SpriteMultitouchJoystick__StickForce.func(runtimeScene, (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getControllerIdentifier()), (gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getJoystickIdentifier()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStickMode() == "8 Directions" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "TopDownMovement": this._getTopDownMovement()
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("SpriteMultitouchJoystick::TopDownMultitouchMapper", gdjs.evtsExt__SpriteMultitouchJoystick__TopDownMultitouchMapper.TopDownMultitouchMapper);
