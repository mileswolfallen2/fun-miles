using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class StatsReport : MonoBehaviour
{
    // Start is called before the first frame update
    int totalCorrect;
    public Text correctDisplay;
    public Text livesLeft;
    public Text scorePerc;
    public Text timeTaken;
    public Text ttpc;

    void Start()
    {
        totalCorrect = PlayerPrefs.GetInt("correctCount");
        TotalSetCorrect();
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void TotalSetCorrect(){
    	correctDisplay.text = "Total Correct Answers: " + totalCorrect;
    	livesLeft.text = "Remaining Lives: " + (3-PlayerPrefs.GetInt("wrongCount"));
    	scorePerc.text = "Score Percentage: " + (  1.0 * PlayerPrefs.GetInt("correctCount") / (5.0)) * 100.0 + "%";
    	timeTaken.text = "Time Spent on Quiz: " + ( PlayerPrefs.GetFloat("totalTime")) + " seconds";
    	ttpc.text = "Time Taken Per Correct Answer: " + (PlayerPrefs.GetFloat("totalTime") / PlayerPrefs.GetInt("correctCount")) + " seconds";
    }
}
