using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class CameraFollow : MonoBehaviour
{
    [SerializeField] private Transform player;
    private float smoothSpeed = 0.125f;
    private float startFollowXPosition = 0;
    public Vector3 offset;

    private bool _isFollowing = false;

    // Update is called once per frame
    void Update()
    {
        if (!_isFollowing && player != null)
        {
            if (player.position.x >= startFollowXPosition)
            {
                _isFollowing = true;
            }
        }

        if (_isFollowing && player != null)
        {
            // Adjust offset to include both horizontal and vertical positions
            var desiredPosition = player.position + offset;
            var smoothedPosition = Vector3.Lerp(transform.position, desiredPosition, smoothSpeed);

            // Freeze only the Y position to follow the player vertically
            var freezeYPos = new Vector3(smoothedPosition.x, smoothedPosition.y, transform.position.z);
            transform.position = freezeYPos;
        }
    }
}
