
gdjs.evtsExt__Sticker__Sticker = gdjs.evtsExt__Sticker__Sticker || {};

/**
 * Behavior generated from Sticker
 */
gdjs.evtsExt__Sticker__Sticker.Sticker = class Sticker extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Sticker__Sticker.Sticker.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.OnlyFollowPosition = behaviorData.OnlyFollowPosition !== undefined ? behaviorData.OnlyFollowPosition : false;
    this._behaviorData.IsDestroyedWithParent = behaviorData.IsDestroyedWithParent !== undefined ? behaviorData.IsDestroyedWithParent : false;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.OnlyFollowPosition !== newBehaviorData.OnlyFollowPosition)
      this._behaviorData.OnlyFollowPosition = newBehaviorData.OnlyFollowPosition;
    if (oldBehaviorData.IsDestroyedWithParent !== newBehaviorData.IsDestroyedWithParent)
      this._behaviorData.IsDestroyedWithParent = newBehaviorData.IsDestroyedWithParent;

    return true;
  }

  // Properties:
  
  _getOnlyFollowPosition() {
    return this._behaviorData.OnlyFollowPosition !== undefined ? this._behaviorData.OnlyFollowPosition : false;
  }
  _setOnlyFollowPosition(newValue) {
    this._behaviorData.OnlyFollowPosition = newValue;
  }
  _toggleOnlyFollowPosition() {
    this._setOnlyFollowPosition(!this._getOnlyFollowPosition());
  }
  _getIsDestroyedWithParent() {
    return this._behaviorData.IsDestroyedWithParent !== undefined ? this._behaviorData.IsDestroyedWithParent : false;
  }
  _setIsDestroyedWithParent(newValue) {
    this._behaviorData.IsDestroyedWithParent = newValue;
  }
  _toggleIsDestroyedWithParent() {
    this._setIsDestroyedWithParent(!this._getIsDestroyedWithParent());
  }
}

/**
 * Shared data generated from Sticker
 */
gdjs.evtsExt__Sticker__Sticker.Sticker.SharedData = class StickerSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Sticker__Sticker.Sticker.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Sticker_StickerSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Sticker_StickerSharedData = new gdjs.evtsExt__Sticker__Sticker.Sticker.SharedData(
      initialData
    );
  }
  return instanceContainer._Sticker_StickerSharedData;
}

// Methods:
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext = {};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.GDObjectObjects1= [];


gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.userFunc0x9fd158 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

// Set up the scene sticker objects list - if not done already.
runtimeScene.__allStickers = runtimeScene.__allStickers || new Set();

// Set up the behavior extra methods - if not done already.
const prototype = Object.getPrototypeOf(behavior);
if (!prototype.updateRelativeCoordinates) {
    // Unstick from deleted objects.
    gdjs.registerObjectDeletedFromSceneCallback(function (runtimeScene, deletedObject) {
        const allStickers = runtimeScene.__allStickers;
        if (!allStickers) return;

        for (const sticker of allStickers) {
            if (sticker.basisObject === deletedObject) {
                if (sticker._getIsDestroyedWithParent()) {
                  sticker.owner.deleteFromScene(runtimeScene);
                }
                sticker.basisObject = null;
            }
        }
    });

    /**
     * Update the coordinates in the basisObject basis.
     * 
     * It uses the basisObject coordinates from the previous frame.
     * This way, the sticker can move relatively to it and still
     * follow basisObject.
     * 
     * @param {gdjs.RuntimeObject} basisObject
     */
    prototype.updateRelativeCoordinates = function (basisObject) {
        const object = this.owner;

        // Update relative coordinates
        this.relativeX = object.getX() - this.basisOldX;
        this.relativeY = object.getY() - this.basisOldY;
        if (!this._getOnlyFollowPosition()) {
            this.relativeAngle = object.getAngle() - this.basisOldAngle;
            this.relativeWidth = object.getWidth() / this.basisOldWidth;
            this.relativeHeight = object.getHeight() / this.basisOldHeight;
            const deltaX = object.getCenterXInScene() - this.basisOldCenterXInScene;
            const deltaY = object.getCenterYInScene() - this.basisOldCenterYInScene;
            const angle = this.basisOldAngle * Math.PI / 180;
            this.relativeRotatedX = (deltaX * Math.cos(angle) + deltaY * Math.sin(angle)) / this.basisOldWidth;
            this.relativeRotatedY = (-deltaX * Math.sin(angle) + deltaY * Math.cos(angle)) / this.basisOldHeight;

            // Save initial values to avoid calculus and rounding errors
            this.basisOriginalWidth = basisObject.getWidth();
            this.basisOriginalHeight = basisObject.getHeight();
            this.basisOriginalAngle = basisObject.getAngle();
        }
    }

    /**
     * Copy the coordinates to use it the next frame.
     * @param basisObject {gdjs.RuntimeObject}
     */
    prototype.updateOldCoordinates = function (basisObject) {
        const object = this.owner;

        this.ownerOldX = object.getX();
        this.ownerOldY = object.getY();

        this.basisOldX = basisObject.getX();
        this.basisOldY = basisObject.getY();

        if (!this._getOnlyFollowPosition()) {
            this.ownerOldAngle = object.getAngle();
            this.ownerOldWidth = object.getWidth();
            this.ownerOldHeight = object.getHeight();

            this.basisOldAngle = basisObject.getAngle();
            this.basisOldWidth = basisObject.getWidth();
            this.basisOldHeight = basisObject.getHeight();
            this.basisOldCenterXInScene = basisObject.getCenterXInScene();
            this.basisOldCenterYInScene = basisObject.getCenterYInScene();
        }
    }
    /**
     * Follow the basisObject (called in doStepPostEvents).
     * 
     * This method is also called by children to ensure
     * parents are updated first.
     */
    prototype.followBasisObject = function () {
        if (this.followingDoneThisFrame) {
            return;
        }
        this.followingDoneThisFrame = true;
        /** @type {gdjs.RuntimeObject} */
        const basisObject = this.basisObject;
        if (basisObject) {
            // If the behavior on the basis object has a different name,
            // the objects will still follow their basis objects
            // but frame delays could happen.
            if (basisObject.hasBehavior(behaviorName)) {
                const basisBehavior = basisObject.getBehavior(behaviorName);
                if (basisBehavior.type === this.type) {
                    // Follow parents 1st to avoid frame delays
                    basisBehavior.followBasisObject();
                }
            }

            const object = this.owner;

            if (this._getOnlyFollowPosition()) {
                if (object.getX() !== this.ownerOldX
                    || object.getY() !== this.ownerOldY) {
                    this.updateRelativeCoordinates(basisObject);
                }

                if (this.basisOldX !== basisObject.getX() ||
                    this.basisOldY !== basisObject.getY()) {
                    object.setPosition(
                        basisObject.getX() + this.relativeX,
                        basisObject.getY() + this.relativeY);
                }
            } else {
                if (object.getX() !== this.ownerOldX
                    || object.getY() !== this.ownerOldY
                    || object.getAngle() !== this.ownerOldAngle
                    || object.getWidth() !== this.ownerOldWidth
                    || object.getHeight() !== this.ownerOldHeight) {
                    this.updateRelativeCoordinates(basisObject);
                }

                // Follow basisObject
                if (basisObject.getAngle() === this.basisOriginalAngle && this.basisOriginalAngle === 0) {
                    if (basisObject.getWidth() === this.basisOriginalWidth ||
                        basisObject.getHeight() === this.basisOriginalHeight) {
                        if (this.basisOldX !== basisObject.getX() ||
                            this.basisOldY !== basisObject.getY()) {
                            object.setPosition(
                                basisObject.getX() + this.relativeX,
                                basisObject.getY() + this.relativeY);
                        }
                    } else {
                        object.setPosition(
                            basisObject.getX() + this.relativeRotatedX * basisObject.getWidth(),
                            basisObject.getY() + this.relativeRotatedY * basisObject.getHeight());
                    }
                } else {
                    object.setAngle(basisObject.getAngle() + this.relativeAngle);

                    const deltaX = this.relativeRotatedX * basisObject.getWidth();
                    const deltaY = this.relativeRotatedY * basisObject.getHeight();
                    const angle = -basisObject.getAngle() * Math.PI / 180;
                    object.setX(basisObject.getCenterXInScene() + object.getX() - object.getCenterXInScene() + deltaX * Math.cos(angle) + deltaY * Math.sin(angle));
                    object.setY(basisObject.getCenterYInScene() + object.getY() - object.getCenterYInScene() - deltaX * Math.sin(angle) + deltaY * Math.cos(angle));
                }
                // Unproportional dimensions changes won't work as expected
                // if the object angle is not null but nothing more can be done
                // because there is no full affine transformation on objects.
                if (basisObject.getWidth() !== this.basisOriginalWidth) {
                    object.setWidth(this.relativeWidth * basisObject.getWidth());
                }
                if (basisObject.getHeight() !== this.basisOriginalHeight) {
                    object.setHeight(this.relativeHeight * basisObject.getHeight());
                }
            }

            this.updateOldCoordinates(basisObject);
        }
    }
}

// Register this object as a sticker.
runtimeScene.__allStickers.add(behavior);

};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.userFunc0x9fd158(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.userFunc0x9fc868 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

behavior.followingDoneThisFrame = false;
};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.userFunc0x9fc868(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.userFunc0x9fc868 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

behavior.followBasisObject();
};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.userFunc0x9fc868(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext = {};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.GDObjectObjects1= [];
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.GDBasisObjectObjects1= [];


gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.userFunc0xa28488 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const basisObjects = eventsFunctionContext.getObjects("BasisObject");

if (basisObjects.length === 0) return;
const basisObject = basisObjects[0];

const behavior = object.getBehavior(behaviorName);

behavior.basisObject = basisObject;
behavior.updateOldCoordinates(basisObject);
behavior.updateRelativeCoordinates(basisObject);

};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.userFunc0xa28488(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.Stick = function(BasisObject, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "BasisObject": BasisObject
},
  _objectArraysMap: {
"Object": thisObjectList
, "BasisObject": gdjs.objectsListsToArray(BasisObject)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.GDBasisObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.StickContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext = {};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.GDObjectObjects1= [];


gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.userFunc0xa28488 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.basisObject = null;
};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.userFunc0xa28488(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.Unstick = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.UnstickContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext = {};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.userFunc0x9fd158 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const object = objects[0];
const behavior = object.getBehavior(behaviorName);

if (runtimeScene.__allStickers)
    runtimeScene.__allStickers.delete(behavior);

};
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.GDObjectObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.GDObjectObjects1);
gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.userFunc0x9fd158(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroy = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__Sticker__Sticker.Sticker.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);

return;
}


gdjs.registerBehavior("Sticker::Sticker", gdjs.evtsExt__Sticker__Sticker.Sticker);
