@echo off
REM DOS Games Archive DOSBox launch script
REM 
REM Game title: DOOM (Shareware 1.9)
REM Configuration: standard
REM 
REM Please refer to the DOSBox manual and Wiki
REM for an explanation of commands
REM 
REM DOSBox: disable joystick (for online play)
config -set "joystick joysticktype=none"
REM DOSBox: configure CPU cycles
config -set "cpu cycles=auto 7800 max 99%% limit 77000"
REM DOSBox: set correct aspect ratio
config -set "render aspect=true"
REM DOSBox: loadfix (correct memory usage)
loadfix -25
cd DOOMS
dos32a DOOM.EXE
cd..
cls
echo Thank you for playing DOOM Shareware!
echo.
echo To play again, type DOOM and press Enter
echo.
echo Your DOS Games Archive http://www.dosgamesarchive.com/
@echo on