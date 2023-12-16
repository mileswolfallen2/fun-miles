using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class Timer : MonoBehaviour
{
    // inital timer value
    public float timerInit = 10f;
    // precision of timer
    public float timerStep = 0.1f;
    // number of digits desplayed
    public int timerDigits = 1;
    public LifeSys life = null;
    public Text outText = null;
    public SceneSwitcher switcher;
    public float curTime;
    public bool autoStart = true;
    private string stringDigits;
    public bool continueCountdown = false;

    public void Start()
    {
        stringDigits = "F" + timerDigits;
        if (outText != null)
            outText.text = timerInit.ToString(stringDigits);
        curTime = timerInit;
        if(autoStart)
            startTimer();
    }

    public void startTimer()
    {
        if (outText != null)
            outText.text = curTime.ToString(stringDigits);
        // call interateTimer() every timerstep seconds
        InvokeRepeating("iterateTimer", timerStep, timerStep);
    }
    public void stopTimer()
    {
        CancelInvoke();
    }
    public void resetTimer()
    {
        CancelInvoke();
        // reset current time to inital time value
        curTime = timerInit;
        if(outText != null)
            outText.text = curTime.ToString(stringDigits);

        if (continueCountdown)
            startTimer();
    }
    public float iterateTimer()
    {
        curTime -= timerStep;
        // if timer reaches 0 remove a life and reset timer
        if(curTime <= 0)
        {
            life.lifeDown();
            //switcher.loadScene();
            resetTimer();
        }
        if (outText != null)
            outText.text = curTime.ToString(stringDigits);
        return curTime;
    }
}
