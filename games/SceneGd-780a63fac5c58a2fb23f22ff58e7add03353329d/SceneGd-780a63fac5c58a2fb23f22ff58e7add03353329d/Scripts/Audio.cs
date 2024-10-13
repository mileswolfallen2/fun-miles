using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Audio : MonoBehaviour
{
    [SerializeField] AudioSource BackgroundMusic;

    private bool isEnabled = true;
    private float audioPlaybackPosition;

    private void Update()
    {
        if (isEnabled)
        {
            BackgroundMusic.enabled = true;
        }
        else
        {
            BackgroundMusic.enabled = false;
        }
    }

    public void EnableMusic()
    {
        if (isEnabled)
        {
            // Disable music and store the current playback position
            isEnabled = false;
            audioPlaybackPosition = BackgroundMusic.time;
            BackgroundMusic.Pause();
        }
        else
        {
            // Enable music and resume playback from the stored position
            isEnabled = true;
            BackgroundMusic.UnPause();
            BackgroundMusic.time = audioPlaybackPosition;
        }
    }
}
