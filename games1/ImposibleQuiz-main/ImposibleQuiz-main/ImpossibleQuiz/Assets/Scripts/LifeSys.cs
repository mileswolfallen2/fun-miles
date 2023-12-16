using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LifeSys : MonoBehaviour
{
    private const int DEFAULT_LIFE_INIT = 3;
    private static int lifes = DEFAULT_LIFE_INIT;
    public SceneSwitcher scene;
    public Text text;


    // Start is called before the first frame update
    public void Start()
    {
        if(text != null)
            text.text = DEFAULT_LIFE_INIT + "";
    }
    
    // adds life to total
    public void lifeUp()
    {
        lifes++;
        if (text != null)
            text.text = lifes + "";
    }

    // removes life from total, quits if zero
    public void lifeDown()
    {
        if(lifes - 1 <= 0)
        {
            if (scene != null)
                scene.QuitGame();
        }
        else
        {
            lifes--;
        }
        if (text != null)
            text.text = lifes + "";
    }

    public void giveUp()
    {
        if(lifes == 1)
        {
            lifeDown();
        }
        else
        {
            if(scene != null)
                scene.loadScene();
            lifeDown();
        }
        
    }

    public int getLifes()
    {
        return lifes;
    }
}
