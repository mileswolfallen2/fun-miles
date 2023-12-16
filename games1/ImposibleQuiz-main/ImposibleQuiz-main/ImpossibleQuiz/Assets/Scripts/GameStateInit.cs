using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameStateInit : MonoBehaviour
{
    public Timer timer;

    // Start is called before the first frame update
    void Start()
    {
        timer.startTimer();
    }
}
