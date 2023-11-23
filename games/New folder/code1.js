gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.GDScoreTextObjects1= [];
gdjs.LeaderboardCode.GDScoreTextObjects2= [];
gdjs.LeaderboardCode.GDScoreTextObjects3= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameInputObjects3= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects1= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects2= [];
gdjs.LeaderboardCode.GDSubmitButtonObjects3= [];
gdjs.LeaderboardCode.GDRestartButtonObjects1= [];
gdjs.LeaderboardCode.GDRestartButtonObjects2= [];
gdjs.LeaderboardCode.GDRestartButtonObjects3= [];
gdjs.LeaderboardCode.GDPanelObjects1= [];
gdjs.LeaderboardCode.GDPanelObjects2= [];
gdjs.LeaderboardCode.GDPanelObjects3= [];
gdjs.LeaderboardCode.GDCoinObjects1= [];
gdjs.LeaderboardCode.GDCoinObjects2= [];
gdjs.LeaderboardCode.GDCoinObjects3= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects = Hashtable.newFrom({"Panel": gdjs.LeaderboardCode.GDPanelObjects1});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.LeaderboardCode.GDPlayerNameInputObjects1, gdjs.LeaderboardCode.GDPlayerNameInputObjects2);

{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects2[i].setDisabled(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("PlayerName")) != "0";
}
if (isConditionTrue_0) {
/* Reuse gdjs.LeaderboardCode.GDPlayerNameInputObjects1 */
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("PlayerName")));
}
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "deb878e9-5785-4881-81f9-13b517269c46", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "deb878e9-5785-4881-81f9-13b517269c46", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")), (( gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects2[0].getText()));
}{runtimeScene.getGame().getVariables().get("PlayerName").setString((( gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length === 0 ) ? "" :gdjs.LeaderboardCode.GDPlayerNameInputObjects2[0].getText()));
}}

}


{


let isConditionTrue_0 = false;
{
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "deb878e9-5785-4881-81f9-13b517269c46", true);
}}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDCoinObjects3Objects = Hashtable.newFrom({"Coin": gdjs.LeaderboardCode.GDCoinObjects3});
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


const repeatCount3 = 100;
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.LeaderboardCode.GDCoinObjects3.length = 0;


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDCoinObjects3Objects, gdjs.randomInRange(gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, "", 0)), gdjs.randomInRange(-(500) + gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, "", 0), gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, "", 0) + 500), "3D");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].returnVariable(gdjs.LeaderboardCode.GDCoinObjects3[i].getVariables().get("RotationX")).setNumber(gdjs.randomFloatInRange(20, 45));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].returnVariable(gdjs.LeaderboardCode.GDCoinObjects3[i].getVariables().get("RotationY")).setNumber(gdjs.randomFloatInRange(20, 45));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].returnVariable(gdjs.LeaderboardCode.GDCoinObjects3[i].getVariables().get("RotationZ")).setNumber(gdjs.randomFloatInRange(20, 45));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].addForce(0, 200, 1);
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].getBehavior("Object3D").setZ(gdjs.randomFloatInRange(-(1000), -(32)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].getBehavior("Object3D").setRotationX(gdjs.randomFloat(360));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects3.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects3[i].getBehavior("Object3D").setRotationY(gdjs.randomFloat(360));
}
}}
}

}


};gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.LeaderboardCode.GDCoinObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects1[i].getBehavior("Object3D").setRotationX(gdjs.LeaderboardCode.GDCoinObjects1[i].getBehavior("Object3D").getRotationX() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.LeaderboardCode.GDCoinObjects1[i].getVariables().get("RotationX"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects1[i].getBehavior("Object3D").setRotationY(gdjs.LeaderboardCode.GDCoinObjects1[i].getBehavior("Object3D").getRotationY() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.LeaderboardCode.GDCoinObjects1[i].getVariables().get("RotationY"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDCoinObjects1[i].setAngle(gdjs.LeaderboardCode.GDCoinObjects1[i].getAngle() + ((gdjs.RuntimeObject.getVariableNumber(gdjs.LeaderboardCode.GDCoinObjects1[i].getVariables().get("RotationZ"))) * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.LeaderboardCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.LeaderboardCode.GDPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ScoreText"), gdjs.LeaderboardCode.GDScoreTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreTextObjects1[i].getBehavior("Text").setText("Time: " + gdjs.evtsExt__TimeFormatter__SecondsToHHMMSS000.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDScoreTextObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDScoreTextObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDSubmitButtonObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDSubmitButtonObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
for(var i = 0, len = gdjs.LeaderboardCode.GDRestartButtonObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDRestartButtonObjects1[i].getBehavior("Sticker").Stick(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPanelObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Panel"), gdjs.LeaderboardCode.GDPanelObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPanelObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPanelObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.hasLoggedIn();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerNameInput"), gdjs.LeaderboardCode.GDPlayerNameInputObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].getBehavior("Text").setText(gdjs.playerAuthentication.getUsername());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameInputObjects1[i].setDisabled(true);
}
}{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isLeaderboardViewErrored();
if (isConditionTrue_0) {
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RestartButton"), gdjs.LeaderboardCode.GDRestartButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDRestartButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDRestartButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDRestartButtonObjects1[k] = gdjs.LeaderboardCode.GDRestartButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.playerAuthentication.removeAuthenticationBanner(runtimeScene);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitButton"), gdjs.LeaderboardCode.GDSubmitButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDSubmitButtonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDSubmitButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDSubmitButtonObjects1[k] = gdjs.LeaderboardCode.GDSubmitButtonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasPlayerJustClosedLeaderboardView();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("deb878e9-5785-4881-81f9-13b517269c46");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.LeaderboardCode.eventsList4(runtimeScene);
}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDScoreTextObjects3.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameInputObjects3.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDSubmitButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects1.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects2.length = 0;
gdjs.LeaderboardCode.GDRestartButtonObjects3.length = 0;
gdjs.LeaderboardCode.GDPanelObjects1.length = 0;
gdjs.LeaderboardCode.GDPanelObjects2.length = 0;
gdjs.LeaderboardCode.GDPanelObjects3.length = 0;
gdjs.LeaderboardCode.GDCoinObjects1.length = 0;
gdjs.LeaderboardCode.GDCoinObjects2.length = 0;
gdjs.LeaderboardCode.GDCoinObjects3.length = 0;

gdjs.LeaderboardCode.eventsList5(runtimeScene);

return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
