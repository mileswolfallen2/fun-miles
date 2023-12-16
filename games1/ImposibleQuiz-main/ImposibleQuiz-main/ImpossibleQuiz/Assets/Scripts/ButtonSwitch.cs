using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

 using UnityEngine.SceneManagement;

public class ButtonSwitch : MonoBehaviour
{
    // Start is called before the first frame update
    public Button btn;
    public int SceneIdx;
    void Start()
    {
        btn.onClick.AddListener(delegate {TaskWithParameters("Clicked!"); });

    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void TaskWithParameters(string message){
    	Debug.Log(message);
    	if(message == "Clicked!"){
    		SceneManager.LoadScene(SceneIdx);
    	}
    }

}
