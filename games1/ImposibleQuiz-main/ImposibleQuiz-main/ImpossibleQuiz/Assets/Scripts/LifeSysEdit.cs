using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;
using TMPro;


public class LifeSysEdit : MonoBehaviour{
    private static int DEFAULT_LIFE_INIT = 3;
    public static int lifes = DEFAULT_LIFE_INIT;
    public TextMeshProUGUI text;

    public int GameOverSceneIndex = 6;

    public void Start()
    {

        int initLives;
        // Checks if First Level to Initiate number of lives.
        if("QuizLevel1" != SceneManager.GetActiveScene().name){
            initLives = PlayerPrefs.GetInt("score");
            lifes = initLives;
        }
        else{
            initLives = DEFAULT_LIFE_INIT;
            lifes = initLives;
        }
        text.text = lifes + " lives left";
    }
     
    // adds life to total
    public void lifeUp()
    {
        lifes++;
        text.text = lifes + "lives left";
    }

    public int getLives()
    {
       return lifes;
    }
    public void lifeDown()
    {
        if(lifes - 1 <= 0)
        {
            SceneManager.LoadScene(GameOverSceneIndex);
        }
        else
        {
            lifes--;
        }

        text.text = lifes + " lives left";
    }
}
