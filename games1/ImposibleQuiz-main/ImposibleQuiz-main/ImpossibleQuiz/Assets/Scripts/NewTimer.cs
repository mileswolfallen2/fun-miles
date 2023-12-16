using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
 using UnityEngine.SceneManagement;

public class NewTimer : MonoBehaviour
{
    public float timerInit = 10f;
    public float timerStep = 0.1f;
    public float totalTime;

    public Text text;
    public LifeSysEdit life = null;
    private float curTime;
    // Start is called before the first frame update
    void Start()
    {
        text.text = timerInit.ToString("F2");
        curTime = timerInit;
        if(SceneManager.GetActiveScene().name != "QuizLevel1")
             totalTime = PlayerPrefs.GetFloat("totalTime");
        else{
            totalTime = 0.0f;
        }
        startTimer();
    }


    public void startTimer()
    {
        text.text = curTime.ToString("F2");
        InvokeRepeating("iterateTimer", timerStep, timerStep);
    }
    public void stopTimer()
    {
        CancelInvoke();
    }
    public void resetTimer()
    {
        CancelInvoke();
        curTime = timerInit;
        InvokeRepeating("iterateTimer", timerStep, timerStep);
    }
    private void iterateTimer()
    {
        curTime -= timerStep;
        totalTime+=timerStep;
        PlayerPrefs.SetFloat("totalTime", totalTime);

        if(curTime <= 0)
        {
            life.lifeDown();
            resetTimer();
        }
        text.text = curTime.ToString("F2");
    }
}
