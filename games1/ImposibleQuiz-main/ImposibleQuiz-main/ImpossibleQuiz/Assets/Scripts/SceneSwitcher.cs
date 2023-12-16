using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class SceneSwitcher : MonoBehaviour
{
    public int sceneId;
    private Scene currentScene;

    public void Start()
    {
        currentScene = SceneManager.GetActiveScene();
    }

    public void LoadSceneButton()
    {
        loadScene();
    }

    public bool loadScene()
    {
        if (sceneId >= 0)
        {
            try
            {
                SceneManager.LoadSceneAsync(sceneId, LoadSceneMode.Single);
                Debug.Log("Scene has been loaded successfully.\n");
                return true;
            }
            catch (Exception e2)
            {
                Debug.Log(e2.Message);
            }
        }

        Debug.Log("Scene failed to load.");
        return false;
    }    

    public void QuitGame()
    {
        #if UNITY_EDITOR
            UnityEditor.EditorApplication.isPlaying = false;
        #else
            Application.Quit();
        #endif
    }

}
