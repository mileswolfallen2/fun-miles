gdjs.BattleCode = {};
gdjs.BattleCode.GDEnemyObjects1_1final = [];

gdjs.BattleCode.GDPlayerObjects1_1final = [];

gdjs.BattleCode.GDEnemyObjects1= [];
gdjs.BattleCode.GDEnemyObjects2= [];
gdjs.BattleCode.GDEnemyObjects3= [];
gdjs.BattleCode.GDEnemyObjects4= [];
gdjs.BattleCode.GDPlayerObjects1= [];
gdjs.BattleCode.GDPlayerObjects2= [];
gdjs.BattleCode.GDPlayerObjects3= [];
gdjs.BattleCode.GDPlayerObjects4= [];
gdjs.BattleCode.GDPlayerHealthBarObjects1= [];
gdjs.BattleCode.GDPlayerHealthBarObjects2= [];
gdjs.BattleCode.GDPlayerHealthBarObjects3= [];
gdjs.BattleCode.GDPlayerHealthBarObjects4= [];
gdjs.BattleCode.GDEnemyHealthBarObjects1= [];
gdjs.BattleCode.GDEnemyHealthBarObjects2= [];
gdjs.BattleCode.GDEnemyHealthBarObjects3= [];
gdjs.BattleCode.GDEnemyHealthBarObjects4= [];
gdjs.BattleCode.GDDialogueObjects1= [];
gdjs.BattleCode.GDDialogueObjects2= [];
gdjs.BattleCode.GDDialogueObjects3= [];
gdjs.BattleCode.GDDialogueObjects4= [];
gdjs.BattleCode.GDNewButtonObjects1= [];
gdjs.BattleCode.GDNewButtonObjects2= [];
gdjs.BattleCode.GDNewButtonObjects3= [];
gdjs.BattleCode.GDNewButtonObjects4= [];
gdjs.BattleCode.GDGrassObjects1= [];
gdjs.BattleCode.GDGrassObjects2= [];
gdjs.BattleCode.GDGrassObjects3= [];
gdjs.BattleCode.GDGrassObjects4= [];
gdjs.BattleCode.GDHouse2Objects1= [];
gdjs.BattleCode.GDHouse2Objects2= [];
gdjs.BattleCode.GDHouse2Objects3= [];
gdjs.BattleCode.GDHouse2Objects4= [];
gdjs.BattleCode.GDAttack1Objects1= [];
gdjs.BattleCode.GDAttack1Objects2= [];
gdjs.BattleCode.GDAttack1Objects3= [];
gdjs.BattleCode.GDAttack1Objects4= [];
gdjs.BattleCode.GDAttack2Objects1= [];
gdjs.BattleCode.GDAttack2Objects2= [];
gdjs.BattleCode.GDAttack2Objects3= [];
gdjs.BattleCode.GDAttack2Objects4= [];
gdjs.BattleCode.GDRunObjects1= [];
gdjs.BattleCode.GDRunObjects2= [];
gdjs.BattleCode.GDRunObjects3= [];
gdjs.BattleCode.GDRunObjects4= [];
gdjs.BattleCode.GDBackgroundObjects1= [];
gdjs.BattleCode.GDBackgroundObjects2= [];
gdjs.BattleCode.GDBackgroundObjects3= [];
gdjs.BattleCode.GDBackgroundObjects4= [];
gdjs.BattleCode.GDTransitionObjects1= [];
gdjs.BattleCode.GDTransitionObjects2= [];
gdjs.BattleCode.GDTransitionObjects3= [];
gdjs.BattleCode.GDTransitionObjects4= [];
gdjs.BattleCode.GDTextBorderObjects1= [];
gdjs.BattleCode.GDTextBorderObjects2= [];
gdjs.BattleCode.GDTextBorderObjects3= [];
gdjs.BattleCode.GDTextBorderObjects4= [];


gdjs.BattleCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyHealthBar"), gdjs.BattleCode.GDEnemyHealthBarObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHealthBar"), gdjs.BattleCode.GDPlayerHealthBarObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerHealthBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerHealthBarObjects1[i].SetValue((( gdjs.BattleCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDPlayerObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyHealthBarObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyHealthBarObjects1[i].SetValue((( gdjs.BattleCode.GDEnemyObjects1.length === 0 ) ? 0 :gdjs.BattleCode.GDEnemyObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.BattleCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attack1"), gdjs.BattleCode.GDAttack1Objects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAttack1Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAttack1Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAttack1Objects2[k] = gdjs.BattleCode.GDAttack1Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAttack1Objects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().get("State").setString("PlayPlayerAttack");
}}

}


};gdjs.BattleCode.asyncCallback21005612 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects4);

{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0, -(2), -(2), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("State").setString("WaitEnemyChoice");
}}
gdjs.BattleCode.eventsList2 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.BattleCode.GDEnemyObjects3) asyncObjectsList.addObject("Enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback21005612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback21001964 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects3[i].getBehavior("ShakeObject_PositionAngle").StopShaking((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 5, 5, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects3[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects3[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects3[i].setText("You attacked your enemy.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList2(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BattleCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback21001964(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback21001180 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);

{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects2[i].getBehavior("Tween").addObjectPositionTween("BackUp", (gdjs.BattleCode.GDPlayerObjects2[i].getPointX("")) + 50, (gdjs.BattleCode.GDPlayerObjects2[i].getPointY("")), "easeInQuad", 100, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BattleCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.BattleCode.GDPlayerObjects1) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback21001180(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21000596);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("Tween").addObjectPositionTween("BackUp", (gdjs.BattleCode.GDPlayerObjects1[i].getPointX("")) - 50, (gdjs.BattleCode.GDPlayerObjects1[i].getPointY("")), "easeOutQuad", 500, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Attack1"), gdjs.BattleCode.GDAttack1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Attack2"), gdjs.BattleCode.GDAttack2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Run"), gdjs.BattleCode.GDRunObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAttack1Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAttack1Objects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAttack1Objects2[k] = gdjs.BattleCode.GDAttack1Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAttack1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDAttack2Objects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDAttack2Objects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDAttack2Objects2[k] = gdjs.BattleCode.GDAttack2Objects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDAttack2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.BattleCode.GDRunObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDRunObjects2[i].IsHovered((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.BattleCode.GDRunObjects2[k] = gdjs.BattleCode.GDRunObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDRunObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20996484);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "HoverSound.wav", false, 20, gdjs.randomFloatInRange(0.8, 0.9));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "WaitPlayerChoice";
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "PlayPlayerAttack";
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.asyncCallback21008036 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().get("State").setString("PlayEnemyAttack");
}}
gdjs.BattleCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback21008036(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21007852);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.asyncCallback21014260 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects4);

{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects4.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects4[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0, 2.5, 2.5, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{runtimeScene.getScene().getVariables().get("State").setString("WaitPlayerChoice");
}}
gdjs.BattleCode.eventsList9 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.BattleCode.GDPlayerObjects3) asyncObjectsList.addObject("Player", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.BattleCode.asyncCallback21014260(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback21011308 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("Dialogue"), gdjs.BattleCode.GDDialogueObjects3);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects3);
{gdjs.evtTools.sound.playSound(runtimeScene, "Attack.wav", false, 90, gdjs.randomFloatInRange(0.9, 1));
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects3[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0.6, 5, 5, 5, 10, 0.2, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects3[i].getBehavior("Flash").Flash(0.3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects3[i].getBehavior("Health").Hit(10, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDDialogueObjects3.length ;i < len;++i) {
    gdjs.BattleCode.GDDialogueObjects3[i].setText("Your enemy attacked you.");
}
}
{ //Subevents
gdjs.BattleCode.eventsList9(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BattleCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.BattleCode.asyncCallback21011308(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.asyncCallback21010356 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects2);

{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects2.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects2[i].getBehavior("Tween").addObjectPositionTween("BackUp", (gdjs.BattleCode.GDEnemyObjects2[i].getPointX("")) - 50, (gdjs.BattleCode.GDEnemyObjects2[i].getPointY("")), "easeInQuad", 100, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.BattleCode.eventsList11 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.BattleCode.GDEnemyObjects1) asyncObjectsList.addObject("Enemy", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.BattleCode.asyncCallback21010356(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.BattleCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21009772);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects1[i].getBehavior("Tween").addObjectPositionTween("BackUp", (gdjs.BattleCode.GDEnemyObjects1[i].getPointX("")) + 50, (gdjs.BattleCode.GDEnemyObjects1[i].getPointY("")), "easeOutQuad", 500, false);
}
}
{ //Subevents
gdjs.BattleCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "WaitEnemyChoice";
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("State")) == "PlayEnemyAttack";
if (isConditionTrue_0) {

{ //Subevents
gdjs.BattleCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.BattleCode.eventsList14 = function(runtimeScene) {

{

gdjs.BattleCode.GDEnemyObjects1.length = 0;

gdjs.BattleCode.GDPlayerObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.BattleCode.GDEnemyObjects1_1final.length = 0;
gdjs.BattleCode.GDPlayerObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects2);
for (var i = 0, k = 0, l = gdjs.BattleCode.GDEnemyObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDEnemyObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.BattleCode.GDEnemyObjects2[k] = gdjs.BattleCode.GDEnemyObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDEnemyObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BattleCode.GDEnemyObjects2.length; j < jLen ; ++j) {
        if ( gdjs.BattleCode.GDEnemyObjects1_1final.indexOf(gdjs.BattleCode.GDEnemyObjects2[j]) === -1 )
            gdjs.BattleCode.GDEnemyObjects1_1final.push(gdjs.BattleCode.GDEnemyObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects2);
for (var i = 0, k = 0, l = gdjs.BattleCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.BattleCode.GDPlayerObjects2[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.BattleCode.GDPlayerObjects2[k] = gdjs.BattleCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.BattleCode.GDPlayerObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.BattleCode.GDPlayerObjects2.length; j < jLen ; ++j) {
        if ( gdjs.BattleCode.GDPlayerObjects1_1final.indexOf(gdjs.BattleCode.GDPlayerObjects2[j]) === -1 )
            gdjs.BattleCode.GDPlayerObjects1_1final.push(gdjs.BattleCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.BattleCode.GDEnemyObjects1_1final, gdjs.BattleCode.GDEnemyObjects1);
gdjs.copyArray(gdjs.BattleCode.GDPlayerObjects1_1final, gdjs.BattleCode.GDPlayerObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.BattleCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Enemy"), gdjs.BattleCode.GDEnemyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Grass"), gdjs.BattleCode.GDGrassObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.BattleCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.BattleCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.BattleCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.5, "Circular", "Backward", 255, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDPlayerObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0, 5, 5, 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.BattleCode.GDEnemyObjects1.length ;i < len;++i) {
    gdjs.BattleCode.GDEnemyObjects1[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(0, -(4), -(4), 0, 2, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 5, "Background", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.BattleCode.GDGrassObjects1.length !== 0 ? gdjs.BattleCode.GDGrassObjects1[0] : null), true, "Background", 0);
}{runtimeScene.getScene().getVariables().get("State").setString("WaitPlayerChoice");
}}

}


{


gdjs.BattleCode.eventsList0(runtimeScene);
}


{


gdjs.BattleCode.eventsList6(runtimeScene);
}


{


gdjs.BattleCode.eventsList13(runtimeScene);
}


{


gdjs.BattleCode.eventsList14(runtimeScene);
}


};

gdjs.BattleCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.BattleCode.GDEnemyObjects1.length = 0;
gdjs.BattleCode.GDEnemyObjects2.length = 0;
gdjs.BattleCode.GDEnemyObjects3.length = 0;
gdjs.BattleCode.GDEnemyObjects4.length = 0;
gdjs.BattleCode.GDPlayerObjects1.length = 0;
gdjs.BattleCode.GDPlayerObjects2.length = 0;
gdjs.BattleCode.GDPlayerObjects3.length = 0;
gdjs.BattleCode.GDPlayerObjects4.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects1.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects2.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects3.length = 0;
gdjs.BattleCode.GDPlayerHealthBarObjects4.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects1.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects2.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects3.length = 0;
gdjs.BattleCode.GDEnemyHealthBarObjects4.length = 0;
gdjs.BattleCode.GDDialogueObjects1.length = 0;
gdjs.BattleCode.GDDialogueObjects2.length = 0;
gdjs.BattleCode.GDDialogueObjects3.length = 0;
gdjs.BattleCode.GDDialogueObjects4.length = 0;
gdjs.BattleCode.GDNewButtonObjects1.length = 0;
gdjs.BattleCode.GDNewButtonObjects2.length = 0;
gdjs.BattleCode.GDNewButtonObjects3.length = 0;
gdjs.BattleCode.GDNewButtonObjects4.length = 0;
gdjs.BattleCode.GDGrassObjects1.length = 0;
gdjs.BattleCode.GDGrassObjects2.length = 0;
gdjs.BattleCode.GDGrassObjects3.length = 0;
gdjs.BattleCode.GDGrassObjects4.length = 0;
gdjs.BattleCode.GDHouse2Objects1.length = 0;
gdjs.BattleCode.GDHouse2Objects2.length = 0;
gdjs.BattleCode.GDHouse2Objects3.length = 0;
gdjs.BattleCode.GDHouse2Objects4.length = 0;
gdjs.BattleCode.GDAttack1Objects1.length = 0;
gdjs.BattleCode.GDAttack1Objects2.length = 0;
gdjs.BattleCode.GDAttack1Objects3.length = 0;
gdjs.BattleCode.GDAttack1Objects4.length = 0;
gdjs.BattleCode.GDAttack2Objects1.length = 0;
gdjs.BattleCode.GDAttack2Objects2.length = 0;
gdjs.BattleCode.GDAttack2Objects3.length = 0;
gdjs.BattleCode.GDAttack2Objects4.length = 0;
gdjs.BattleCode.GDRunObjects1.length = 0;
gdjs.BattleCode.GDRunObjects2.length = 0;
gdjs.BattleCode.GDRunObjects3.length = 0;
gdjs.BattleCode.GDRunObjects4.length = 0;
gdjs.BattleCode.GDBackgroundObjects1.length = 0;
gdjs.BattleCode.GDBackgroundObjects2.length = 0;
gdjs.BattleCode.GDBackgroundObjects3.length = 0;
gdjs.BattleCode.GDBackgroundObjects4.length = 0;
gdjs.BattleCode.GDTransitionObjects1.length = 0;
gdjs.BattleCode.GDTransitionObjects2.length = 0;
gdjs.BattleCode.GDTransitionObjects3.length = 0;
gdjs.BattleCode.GDTransitionObjects4.length = 0;
gdjs.BattleCode.GDTextBorderObjects1.length = 0;
gdjs.BattleCode.GDTextBorderObjects2.length = 0;
gdjs.BattleCode.GDTextBorderObjects3.length = 0;
gdjs.BattleCode.GDTextBorderObjects4.length = 0;

gdjs.BattleCode.eventsList15(runtimeScene);

return;

}

gdjs['BattleCode'] = gdjs.BattleCode;
