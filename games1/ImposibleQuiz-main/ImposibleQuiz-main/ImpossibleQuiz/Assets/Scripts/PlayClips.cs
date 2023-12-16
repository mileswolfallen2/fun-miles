using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayClips : MonoBehaviour
{
    // Start is called before the first frame update
    public AudioSource audioSrc;
    public AudioClip clip;
    public AudioClip clip2;

    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {

    }

    public void CorrectAnswer(){
    	audioSrc.PlayOneShot((AudioClip)Resources.Load("Assets/Audio/wrongbuzzer.wav"), 1.0f);
    }
    public void WrongAnswer(){
    	audioSrc.PlayOneShot((AudioClip)Resources.Load("Assets/Audio/554055__gronkjaer__rightanswer.mp3"), 1.0f);
    }

    void Congratulations(){
    }
}
