gdjs.GameCode = {};
gdjs.GameCode.GDDustObjects1= [];
gdjs.GameCode.GDDustObjects2= [];
gdjs.GameCode.GDDustObjects3= [];
gdjs.GameCode.GDDustObjects4= [];
gdjs.GameCode.GDCoinPickUpObjects1= [];
gdjs.GameCode.GDCoinPickUpObjects2= [];
gdjs.GameCode.GDCoinPickUpObjects3= [];
gdjs.GameCode.GDCoinPickUpObjects4= [];
gdjs.GameCode.GDBestTimeTextObjects1= [];
gdjs.GameCode.GDBestTimeTextObjects2= [];
gdjs.GameCode.GDBestTimeTextObjects3= [];
gdjs.GameCode.GDBestTimeTextObjects4= [];
gdjs.GameCode.GDRemainingTextObjects1= [];
gdjs.GameCode.GDRemainingTextObjects2= [];
gdjs.GameCode.GDRemainingTextObjects3= [];
gdjs.GameCode.GDRemainingTextObjects4= [];
gdjs.GameCode.GDTimeTextObjects1= [];
gdjs.GameCode.GDTimeTextObjects2= [];
gdjs.GameCode.GDTimeTextObjects3= [];
gdjs.GameCode.GDTimeTextObjects4= [];
gdjs.GameCode.GDTutorialTextObjects1= [];
gdjs.GameCode.GDTutorialTextObjects2= [];
gdjs.GameCode.GDTutorialTextObjects3= [];
gdjs.GameCode.GDTutorialTextObjects4= [];
gdjs.GameCode.GDSteeringJoystickObjects1= [];
gdjs.GameCode.GDSteeringJoystickObjects2= [];
gdjs.GameCode.GDSteeringJoystickObjects3= [];
gdjs.GameCode.GDSteeringJoystickObjects4= [];
gdjs.GameCode.GDPedalJoystickObjects1= [];
gdjs.GameCode.GDPedalJoystickObjects2= [];
gdjs.GameCode.GDPedalJoystickObjects3= [];
gdjs.GameCode.GDPedalJoystickObjects4= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDPlayerObjects4= [];
gdjs.GameCode.GDLargeBuildingFObjects1= [];
gdjs.GameCode.GDLargeBuildingFObjects2= [];
gdjs.GameCode.GDLargeBuildingFObjects3= [];
gdjs.GameCode.GDLargeBuildingFObjects4= [];
gdjs.GameCode.GDLargeBuildingAObjects1= [];
gdjs.GameCode.GDLargeBuildingAObjects2= [];
gdjs.GameCode.GDLargeBuildingAObjects3= [];
gdjs.GameCode.GDLargeBuildingAObjects4= [];
gdjs.GameCode.GDSuvLuxuryObjects1= [];
gdjs.GameCode.GDSuvLuxuryObjects2= [];
gdjs.GameCode.GDSuvLuxuryObjects3= [];
gdjs.GameCode.GDSuvLuxuryObjects4= [];
gdjs.GameCode.GDVanObjects1= [];
gdjs.GameCode.GDVanObjects2= [];
gdjs.GameCode.GDVanObjects3= [];
gdjs.GameCode.GDVanObjects4= [];
gdjs.GameCode.GDCoinObjects1= [];
gdjs.GameCode.GDCoinObjects2= [];
gdjs.GameCode.GDCoinObjects3= [];
gdjs.GameCode.GDCoinObjects4= [];
gdjs.GameCode.GDArrowObjects1= [];
gdjs.GameCode.GDArrowObjects2= [];
gdjs.GameCode.GDArrowObjects3= [];
gdjs.GameCode.GDArrowObjects4= [];
gdjs.GameCode.GDRoadStraightObjects1= [];
gdjs.GameCode.GDRoadStraightObjects2= [];
gdjs.GameCode.GDRoadStraightObjects3= [];
gdjs.GameCode.GDRoadStraightObjects4= [];
gdjs.GameCode.GDRoadCrossroadPathObjects1= [];
gdjs.GameCode.GDRoadCrossroadPathObjects2= [];
gdjs.GameCode.GDRoadCrossroadPathObjects3= [];
gdjs.GameCode.GDRoadCrossroadPathObjects4= [];
gdjs.GameCode.GDRoadIntersectionPathObjects1= [];
gdjs.GameCode.GDRoadIntersectionPathObjects2= [];
gdjs.GameCode.GDRoadIntersectionPathObjects3= [];
gdjs.GameCode.GDRoadIntersectionPathObjects4= [];
gdjs.GameCode.GDRoadBendObjects1= [];
gdjs.GameCode.GDRoadBendObjects2= [];
gdjs.GameCode.GDRoadBendObjects3= [];
gdjs.GameCode.GDRoadBendObjects4= [];
gdjs.GameCode.GDCommonTree1Objects1= [];
gdjs.GameCode.GDCommonTree1Objects2= [];
gdjs.GameCode.GDCommonTree1Objects3= [];
gdjs.GameCode.GDCommonTree1Objects4= [];
gdjs.GameCode.GDGrassObjects1= [];
gdjs.GameCode.GDGrassObjects2= [];
gdjs.GameCode.GDGrassObjects3= [];
gdjs.GameCode.GDGrassObjects4= [];
gdjs.GameCode.GDCameraTargetObjects1= [];
gdjs.GameCode.GDCameraTargetObjects2= [];
gdjs.GameCode.GDCameraTargetObjects3= [];
gdjs.GameCode.GDCameraTargetObjects4= [];


gdjs.GameCode.mapOfEmptyGDCoinObjects = Hashtable.newFrom({"Coin": []});
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PedalJoystick"), gdjs.GameCode.GDPedalJoystickObjects2);
gdjs.copyArray(runtimeScene.getObjects("SteeringJoystick"), gdjs.GameCode.GDSteeringJoystickObjects2);
{for(var i = 0, len = gdjs.GameCode.GDSteeringJoystickObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDSteeringJoystickObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.GameCode.GDPedalJoystickObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPedalJoystickObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TutorialText"), gdjs.GameCode.GDTutorialTextObjects1);
{for(var i = 0, len = gdjs.GameCode.GDTutorialTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTutorialTextObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRoadStraightObjects1ObjectsGDgdjs_9546GameCode_9546GDRoadCrossroadPathObjects1ObjectsGDgdjs_9546GameCode_9546GDRoadIntersectionPathObjects1ObjectsGDgdjs_9546GameCode_9546GDRoadBendObjects1Objects = Hashtable.newFrom({"RoadStraight": gdjs.GameCode.GDRoadStraightObjects1, "RoadCrossroadPath": gdjs.GameCode.GDRoadCrossroadPathObjects1, "RoadIntersectionPath": gdjs.GameCode.GDRoadIntersectionPathObjects1, "RoadBend": gdjs.GameCode.GDRoadBendObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")).setNumber(-(4));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")).setNumber(6);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PedalJoystick"), gdjs.GameCode.GDPedalJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPedalJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPedalJoystickObjects2[i].IsDirectionPushed4Way("Down", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPedalJoystickObjects2[k] = gdjs.GameCode.GDPedalJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPedalJoystickObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPedalJoystickObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")).setNumber(-(4) * (( gdjs.GameCode.GDPedalJoystickObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPedalJoystickObjects2[0].StickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PedalJoystick"), gdjs.GameCode.GDPedalJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPedalJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPedalJoystickObjects2[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPedalJoystickObjects2[k] = gdjs.GameCode.GDPedalJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPedalJoystickObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPedalJoystickObjects2 */
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].returnVariable(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")).setNumber(6 * (( gdjs.GameCode.GDPedalJoystickObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPedalJoystickObjects2[0].StickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").applyPolarForce((gdjs.GameCode.GDPlayerObjects2[i].getAngle()), (gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force"))), (gdjs.GameCode.GDPlayerObjects2[i].getCenterXInScene()), (gdjs.GameCode.GDPlayerObjects2[i].getCenterYInScene()));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").applyTorque(0.002 * (gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityLength()) * gdjs.evtTools.common.sign((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")))));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").applyTorque(-(0.002) * (gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityLength()) * gdjs.evtTools.common.sign((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SteeringJoystick"), gdjs.GameCode.GDSteeringJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSteeringJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSteeringJoystickObjects2[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSteeringJoystickObjects2[k] = gdjs.GameCode.GDSteeringJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSteeringJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
/* Reuse gdjs.GameCode.GDSteeringJoystickObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").applyTorque(0.002 * (gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityLength()) * gdjs.evtTools.common.sign((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")))) * (( gdjs.GameCode.GDSteeringJoystickObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSteeringJoystickObjects2[0].StickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SteeringJoystick"), gdjs.GameCode.GDSteeringJoystickObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDSteeringJoystickObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDSteeringJoystickObjects2[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDSteeringJoystickObjects2[k] = gdjs.GameCode.GDSteeringJoystickObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDSteeringJoystickObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
/* Reuse gdjs.GameCode.GDSteeringJoystickObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").applyTorque(-(0.002) * (gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityLength()) * gdjs.evtTools.common.sign((gdjs.RuntimeObject.getVariableNumber(gdjs.GameCode.GDPlayerObjects2[i].getVariables().get("Force")))) * (( gdjs.GameCode.GDSteeringJoystickObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDSteeringJoystickObjects2[0].StickForce((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").setLinearDamping(9);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoadBend"), gdjs.GameCode.GDRoadBendObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoadCrossroadPath"), gdjs.GameCode.GDRoadCrossroadPathObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoadIntersectionPath"), gdjs.GameCode.GDRoadIntersectionPathObjects1);
gdjs.copyArray(runtimeScene.getObjects("RoadStraight"), gdjs.GameCode.GDRoadStraightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRoadStraightObjects1ObjectsGDgdjs_9546GameCode_9546GDRoadCrossroadPathObjects1ObjectsGDgdjs_9546GameCode_9546GDRoadIntersectionPathObjects1ObjectsGDgdjs_9546GameCode_9546GDRoadBendObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("Physics2").setLinearDamping(4);
}
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getBehavior("Physics2").getLinearVelocityLength() > 0 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") > 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Time");
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("TimeText"), gdjs.GameCode.GDTimeTextObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTimeTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTimeTextObjects2[i].getBehavior("Text").setText("Time: " + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}}

}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("GameState")) == "Playing";
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCameraTargetObjects2Objects = Hashtable.newFrom({"CameraTarget": gdjs.GameCode.GDCameraTargetObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCameraTargetObjects1Objects = Hashtable.newFrom({"CameraTarget": gdjs.GameCode.GDCameraTargetObjects1});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.GameCode.GDCameraTargetObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCameraTargetObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.GameCode.GDCameraTargetObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCameraTargetObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CameraTarget"), gdjs.GameCode.GDCameraTargetObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dust"), gdjs.GameCode.GDDustObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
{runtimeScene.getScene().getVariables().get("CameraAngle").setNumber(gdjs.evtTools.common.lerp(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CameraAngle")), (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getAngle()), gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 4));
}{for(var i = 0, len = gdjs.GameCode.GDCameraTargetObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCameraTargetObjects1[i].putAroundObject((gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), 200, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CameraAngle")));
}
}{gdjs.evtsExt__ThirdPersonCamera__LookFromDistanceAtObject3D.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCameraTargetObjects1Objects, "Object3D", 800, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("CameraAngle")) + 90, 80, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.scene3d.camera.setCameraZ(runtimeScene, gdjs.scene3d.camera.getCameraZ(runtimeScene, "", 0) + (0), "", 0);
}{for(var i = 0, len = gdjs.GameCode.GDDustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDustObjects1[i].setAngle((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getAngle()) + 180);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDustObjects1[i].putAroundObject((gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), 10, (( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getAngle()) - 180);
}
}{for(var i = 0, len = gdjs.GameCode.GDDustObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDDustObjects1[i].setPosition((gdjs.GameCode.GDDustObjects1[i].getX()) + gdjs.randomFloatInRange(-(6), 6),(gdjs.GameCode.GDDustObjects1[i].getY()) + gdjs.randomFloatInRange(-(6), 6));
}
}{gdjs.evtTools.sound.setSoundOnChannelPitch(runtimeScene, 0, Math.min(((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getBehavior("Physics2").getLinearVelocityLength()) / 300), 1));
}{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, Math.min(((( gdjs.GameCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects1[0].getBehavior("Physics2").getLinearVelocityLength())) * 10, 25));
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDCoinObjects2, gdjs.GameCode.GDCoinObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDCoinObjects3[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCoinObjects3[k] = gdjs.GameCode.GDCoinObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects3.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.GameCode.GDArrowObjects2, gdjs.GameCode.GDArrowObjects3);

{for(var i = 0, len = gdjs.GameCode.GDArrowObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDArrowObjects3[i].hide();
}
}}

}


{

/* Reuse gdjs.GameCode.GDCoinObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDCoinObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDCoinObjects2[i].getBehavior("InOnScreen").IsOnScreen(10, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDCoinObjects2[k] = gdjs.GameCode.GDCoinObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDCoinObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDArrowObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDArrowObjects2[i].hide(false);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinPickUpObjects2Objects = Hashtable.newFrom({"CoinPickUp": gdjs.GameCode.GDCoinPickUpObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.GameCode.GDCoinObjects2});
gdjs.GameCode.asyncCallback13308492 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.GameCode.asyncCallback13308492(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback13310644 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Leaderboard", false);
}}
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.5), (runtimeScene) => (gdjs.GameCode.asyncCallback13310644(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Time") < gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 0;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestTimeText"), gdjs.GameCode.GDBestTimeTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "Time"));
}{runtimeScene.getGame().getVariables().get("Score").setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{gdjs.evtTools.storage.writeNumberInJSONFile("HighScore", "HighScore", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.GameCode.GDBestTimeTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBestTimeTextObjects2[i].setColor("248;231;28");
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects) == 0;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("GameState").setString("GameOver");
}{gdjs.evtTools.runtimeScene.setTimeScale(runtimeScene, 0.5);
}
{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects2);
{for(var i = 0, len = gdjs.GameCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects2[i].rotate(50, runtimeScene);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickNearestObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects, (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterYInScene()), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.GameCode.GDArrowObjects2);
/* Reuse gdjs.GameCode.GDCoinObjects2 */
/* Reuse gdjs.GameCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDArrowObjects2[i].setAngle(gdjs.evtTools.common.angleBetweenPositions((( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDPlayerObjects2[0].getCenterYInScene()), (( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getCenterYInScene())));
}
}{for(var i = 0, len = gdjs.GameCode.GDArrowObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDArrowObjects2[i].putAroundObject((gdjs.GameCode.GDPlayerObjects2.length !== 0 ? gdjs.GameCode.GDPlayerObjects2[0] : null), 160, (gdjs.GameCode.GDArrowObjects2[i].getAngle()));
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.GameCode.GDCoinObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDCoinObjects2 */
gdjs.copyArray(runtimeScene.getObjects("RemainingText"), gdjs.GameCode.GDRemainingTextObjects2);
gdjs.GameCode.GDCoinPickUpObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinPickUpObjects2Objects, (( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getCenterXInScene()), (( gdjs.GameCode.GDCoinObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDCoinObjects2[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.GameCode.GDCoinPickUpObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinPickUpObjects2[i].setZOrder(5);
}
}{for(var i = 0, len = gdjs.GameCode.GDCoinObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "CoinPickUP", false, 25, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)));
}{for(var i = 0, len = gdjs.GameCode.GDRemainingTextObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRemainingTextObjects2[i].getBehavior("Text").setText("Remaining: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDCoinObjects2Objects)));
}
}{runtimeScene.getScene().getVariables().getFromIndex(2).mul(1.05);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "RisingPitch");
}
{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "RisingPitch") >= 1;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(gdjs.randomFloatInRange(0.9, 1.1));
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSuvLuxuryObjects1ObjectsGDgdjs_9546GameCode_9546GDLargeBuildingAObjects1ObjectsGDgdjs_9546GameCode_9546GDLargeBuildingFObjects1ObjectsGDgdjs_9546GameCode_9546GDVanObjects1Objects = Hashtable.newFrom({"SuvLuxury": gdjs.GameCode.GDSuvLuxuryObjects1, "LargeBuildingA": gdjs.GameCode.GDLargeBuildingAObjects1, "LargeBuildingF": gdjs.GameCode.GDLargeBuildingFObjects1, "Van": gdjs.GameCode.GDVanObjects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("LargeBuildingA"), gdjs.GameCode.GDLargeBuildingAObjects1);
gdjs.copyArray(runtimeScene.getObjects("LargeBuildingF"), gdjs.GameCode.GDLargeBuildingFObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SuvLuxury"), gdjs.GameCode.GDSuvLuxuryObjects1);
gdjs.copyArray(runtimeScene.getObjects("Van"), gdjs.GameCode.GDVanObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.physics2.objectsCollide(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPlayerObjects1Objects, "Physics2", gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDSuvLuxuryObjects1ObjectsGDgdjs_9546GameCode_9546GDLargeBuildingAObjects1ObjectsGDgdjs_9546GameCode_9546GDLargeBuildingFObjects1ObjectsGDgdjs_9546GameCode_9546GDVanObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13312668);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Collision", false, 50, gdjs.randomFloatInRange(0.8, 1));
}}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Level1", 0, 0, 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BestTimeText"), gdjs.GameCode.GDBestTimeTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("RemainingText"), gdjs.GameCode.GDRemainingTextObjects1);
{runtimeScene.getScene().getVariables().get("GameState").setString("Playing");
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.GameCode.GDPlayerObjects1.length !== 0 ? gdjs.GameCode.GDPlayerObjects1[0] : null), true, "", 0);
}{gdjs.evtTools.storage.readNumberFromJSONFile("HighScore", "HighScore", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}{for(var i = 0, len = gdjs.GameCode.GDBestTimeTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBestTimeTextObjects1[i].getBehavior("Text").setText("Best: " + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.GameCode.GDRemainingTextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRemainingTextObjects1[i].getBehavior("Text").setText("Remaining: " + gdjs.evtTools.common.toString(gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfEmptyGDCoinObjects)));
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\CarEngine.mp3", 0, true, 30, 1);
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDDustObjects1.length = 0;
gdjs.GameCode.GDDustObjects2.length = 0;
gdjs.GameCode.GDDustObjects3.length = 0;
gdjs.GameCode.GDDustObjects4.length = 0;
gdjs.GameCode.GDCoinPickUpObjects1.length = 0;
gdjs.GameCode.GDCoinPickUpObjects2.length = 0;
gdjs.GameCode.GDCoinPickUpObjects3.length = 0;
gdjs.GameCode.GDCoinPickUpObjects4.length = 0;
gdjs.GameCode.GDBestTimeTextObjects1.length = 0;
gdjs.GameCode.GDBestTimeTextObjects2.length = 0;
gdjs.GameCode.GDBestTimeTextObjects3.length = 0;
gdjs.GameCode.GDBestTimeTextObjects4.length = 0;
gdjs.GameCode.GDRemainingTextObjects1.length = 0;
gdjs.GameCode.GDRemainingTextObjects2.length = 0;
gdjs.GameCode.GDRemainingTextObjects3.length = 0;
gdjs.GameCode.GDRemainingTextObjects4.length = 0;
gdjs.GameCode.GDTimeTextObjects1.length = 0;
gdjs.GameCode.GDTimeTextObjects2.length = 0;
gdjs.GameCode.GDTimeTextObjects3.length = 0;
gdjs.GameCode.GDTimeTextObjects4.length = 0;
gdjs.GameCode.GDTutorialTextObjects1.length = 0;
gdjs.GameCode.GDTutorialTextObjects2.length = 0;
gdjs.GameCode.GDTutorialTextObjects3.length = 0;
gdjs.GameCode.GDTutorialTextObjects4.length = 0;
gdjs.GameCode.GDSteeringJoystickObjects1.length = 0;
gdjs.GameCode.GDSteeringJoystickObjects2.length = 0;
gdjs.GameCode.GDSteeringJoystickObjects3.length = 0;
gdjs.GameCode.GDSteeringJoystickObjects4.length = 0;
gdjs.GameCode.GDPedalJoystickObjects1.length = 0;
gdjs.GameCode.GDPedalJoystickObjects2.length = 0;
gdjs.GameCode.GDPedalJoystickObjects3.length = 0;
gdjs.GameCode.GDPedalJoystickObjects4.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects4.length = 0;
gdjs.GameCode.GDLargeBuildingFObjects1.length = 0;
gdjs.GameCode.GDLargeBuildingFObjects2.length = 0;
gdjs.GameCode.GDLargeBuildingFObjects3.length = 0;
gdjs.GameCode.GDLargeBuildingFObjects4.length = 0;
gdjs.GameCode.GDLargeBuildingAObjects1.length = 0;
gdjs.GameCode.GDLargeBuildingAObjects2.length = 0;
gdjs.GameCode.GDLargeBuildingAObjects3.length = 0;
gdjs.GameCode.GDLargeBuildingAObjects4.length = 0;
gdjs.GameCode.GDSuvLuxuryObjects1.length = 0;
gdjs.GameCode.GDSuvLuxuryObjects2.length = 0;
gdjs.GameCode.GDSuvLuxuryObjects3.length = 0;
gdjs.GameCode.GDSuvLuxuryObjects4.length = 0;
gdjs.GameCode.GDVanObjects1.length = 0;
gdjs.GameCode.GDVanObjects2.length = 0;
gdjs.GameCode.GDVanObjects3.length = 0;
gdjs.GameCode.GDVanObjects4.length = 0;
gdjs.GameCode.GDCoinObjects1.length = 0;
gdjs.GameCode.GDCoinObjects2.length = 0;
gdjs.GameCode.GDCoinObjects3.length = 0;
gdjs.GameCode.GDCoinObjects4.length = 0;
gdjs.GameCode.GDArrowObjects1.length = 0;
gdjs.GameCode.GDArrowObjects2.length = 0;
gdjs.GameCode.GDArrowObjects3.length = 0;
gdjs.GameCode.GDArrowObjects4.length = 0;
gdjs.GameCode.GDRoadStraightObjects1.length = 0;
gdjs.GameCode.GDRoadStraightObjects2.length = 0;
gdjs.GameCode.GDRoadStraightObjects3.length = 0;
gdjs.GameCode.GDRoadStraightObjects4.length = 0;
gdjs.GameCode.GDRoadCrossroadPathObjects1.length = 0;
gdjs.GameCode.GDRoadCrossroadPathObjects2.length = 0;
gdjs.GameCode.GDRoadCrossroadPathObjects3.length = 0;
gdjs.GameCode.GDRoadCrossroadPathObjects4.length = 0;
gdjs.GameCode.GDRoadIntersectionPathObjects1.length = 0;
gdjs.GameCode.GDRoadIntersectionPathObjects2.length = 0;
gdjs.GameCode.GDRoadIntersectionPathObjects3.length = 0;
gdjs.GameCode.GDRoadIntersectionPathObjects4.length = 0;
gdjs.GameCode.GDRoadBendObjects1.length = 0;
gdjs.GameCode.GDRoadBendObjects2.length = 0;
gdjs.GameCode.GDRoadBendObjects3.length = 0;
gdjs.GameCode.GDRoadBendObjects4.length = 0;
gdjs.GameCode.GDCommonTree1Objects1.length = 0;
gdjs.GameCode.GDCommonTree1Objects2.length = 0;
gdjs.GameCode.GDCommonTree1Objects3.length = 0;
gdjs.GameCode.GDCommonTree1Objects4.length = 0;
gdjs.GameCode.GDGrassObjects1.length = 0;
gdjs.GameCode.GDGrassObjects2.length = 0;
gdjs.GameCode.GDGrassObjects3.length = 0;
gdjs.GameCode.GDGrassObjects4.length = 0;
gdjs.GameCode.GDCameraTargetObjects1.length = 0;
gdjs.GameCode.GDCameraTargetObjects2.length = 0;
gdjs.GameCode.GDCameraTargetObjects3.length = 0;
gdjs.GameCode.GDCameraTargetObjects4.length = 0;

gdjs.GameCode.eventsList12(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
