using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UpHighDownLowTooSlow : MonoBehaviour
{
    public GameObject wKey;
    public GameObject sKey;
    public GameObject tooSlow;
    public GameObject upHigh;
    public GameObject downLow;
    public GameObject speedTime;
    public GameObject Wow;
    public GameObject sceneSwitcher = null;

    public float startTime = 1.0f;
    public float wKeyTime = .5f;
    public float wKeyAfterTime = 2f;
    public float sKeyTime = .25f;
    public float sKeyAfterTime = 2f;
    public float superSpeedTime = .1f;
    public int superSpeedCount = 20;
    public bool skipSpeedSection = false;
    public float waitTimeComplete = 1.0f;

    // Start is called before the first frame update
    void Start()
    {
        Timer = superSpeedTime;
        wKey.SetActive(false);
        sKey.SetActive(false);
        tooSlow.SetActive(false);
        upHigh.SetActive(true);
        downLow.SetActive(false);
        Wow.SetActive(false);
    }

    public float Timer;
    private bool success = false;

    // Update is called once per frame
    void Update()
    {
        if (startTime > 0.0f)
        {
            startTime -= Time.deltaTime;
        }
        else if (wKeyTime > 0.0f)
        {
            wKey.SetActive(true);
            sKey.SetActive(false);

            if (checkInput(KeyCode.W)) // Up High!!!
            {
                success = true;
                wKeyTime = 0.0f;
            }
            else if (checkInput(KeyCode.S)) // Down Low???
            {
                fail();
            }
            wKeyTime -= Time.deltaTime;
        } 
        else if (wKeyAfterTime > 0.0f) // wait for time out
        {
            wKey.SetActive(false);
            sKey.SetActive(false);
            upHigh.SetActive(false);
            downLow.SetActive(true);
            if (success == false)
            {
                fail();
            }
            wKeyAfterTime -= Time.deltaTime;
            if (wKeyAfterTime <= 0.0f)
                success = false;
        } 
        else if (sKeyTime > 0.0f)
        {
            wKey.SetActive(false);
            sKey.SetActive(true);
            if (checkInput(KeyCode.S)) // Down Low!!!
            {
                success = true;
                sKeyTime = 0.0f;
            }
            else if (checkInput(KeyCode.W)) // Too Slow!!!
            {
                fail();
            }

            sKeyTime -= Time.deltaTime;
        }
        else if (sKeyAfterTime > 0.0f && !skipSpeedSection) // wait for time out
        {
            wKey.SetActive(false);
            sKey.SetActive(false);
            upHigh.SetActive(false);
            downLow.SetActive(false);
            speedTime.SetActive(true);
            if (success == false)
            {
                fail();
            }
            sKeyAfterTime -= Time.deltaTime;
            if (sKeyAfterTime <= 0.0f)
                success = false;
        }
        else if (Timer > 0.0f && !skipSpeedSection) // Speed Time!!!
        {
            if (superSpeedCount > 0)
            {
                if (superSpeedCount % 2 == 0)
                {
                    wKey.SetActive(true);
                    sKey.SetActive(false);
                    upHigh.SetActive(true);
                    downLow.SetActive(false);
                    if (checkInput(KeyCode.W)) // Good
                    {
                        success = true;
                        speedTime.transform.position = new Vector2(Random.Range(-10f, 10f), Random.Range(-5f, 5f));
                        Timer = 0.0f;
                    }
                    else if (checkInput(KeyCode.S)) // Bad
                    {
                        success = false;
                        fail();
                    }
                }
                else
                {
                    wKey.SetActive(false);
                    sKey.SetActive(true);
                    upHigh.SetActive(false);
                    downLow.SetActive(true);
                    if (checkInput(KeyCode.S)) // Good
                    {
                        success = true;
                        speedTime.transform.position = new Vector2(Random.Range(-10f, 10f), Random.Range(-5f, 5f));
                        Timer = 0.0f;
                    }
                    else if (checkInput(KeyCode.W)) // Bad
                    {
                        fail();
                    }
                }
                if (Timer - Time.deltaTime < 0) // reset timer
                {
                    if (success)
                    {
                        success = false;
                        Timer = superSpeedTime;
                        superSpeedCount--;
                    } 
                    else
                    {
                        fail();
                    }
                }

            }

            Timer -= Time.deltaTime;
        }
        else if (superSpeedCount == 0 || skipSpeedSection) // Win!
        {
            Wow.SetActive(true);
            wKey.SetActive(false);
            sKey.SetActive(false);
            tooSlow.SetActive(false);
            speedTime.SetActive(false);
            upHigh.SetActive(false);
            downLow.SetActive(false);
            if (waitTimeComplete >= 0.0f)
            {
                waitTimeComplete -= Time.deltaTime;
            }
            else
            {
                sceneSwitcher.GetComponent<SceneSwitcher>().loadScene();
            }
        }

        if (failed)
        {
            sceneSwitcher.GetComponent<SceneSwitcher>().sceneId = 6;
            sceneSwitcher.GetComponent<SceneSwitcher>().loadScene();

            if (waitTimeComplete >= 0.0f)
            {
                waitTimeComplete -= Time.deltaTime;
            }
            else
            {
                sceneSwitcher.GetComponent<SceneSwitcher>().loadScene();
            }
        }
    }

    private bool failed = false;
    private void fail()
    {
        wKeyTime = 0.0f;
        wKeyAfterTime = 0.0f;
        sKeyTime = 0.0f;
        sKeyAfterTime = 0.0f;
        superSpeedTime = 0.0f;
        superSpeedCount = -1;

        tooSlow.SetActive(true);
        failed = true;
    }

    private bool checkInput(KeyCode successKey)
    {
        if (Input.GetKeyDown(successKey))
        {
            return true;
        }
        return false;
    }
}
