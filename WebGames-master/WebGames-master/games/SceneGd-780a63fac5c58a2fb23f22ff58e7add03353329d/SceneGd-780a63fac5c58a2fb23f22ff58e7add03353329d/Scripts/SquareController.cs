using UnityEngine;
using System.Collections;

public class SquareController : MonoBehaviour
{
    public float rotationAmount = 90.0f;
    

    private bool isRotating = false;

    void Update()
    {
        if (Input.GetMouseButtonDown(0) && !isRotating)
        {
            isRotating = true;
            RotateCube();
        }
    }

    void RotateCube()
    {
        float targetAngle = transform.eulerAngles.z + rotationAmount;
        Quaternion targetRotation = Quaternion.Euler(0, 0, targetAngle);

        StartCoroutine(RotateCoroutine(targetRotation));
    }

    System.Collections.IEnumerator RotateCoroutine(Quaternion targetRotation)
    {
        float duration = 0.5f;

        Quaternion startRotation = transform.rotation;
        float time = 0.0f;

        while (time < duration)
        {
            transform.rotation = Quaternion.Lerp(startRotation, targetRotation, time / duration);
            time += Time.deltaTime;
            yield return null;
        }

        transform.rotation = targetRotation;
        isRotating = false;
    }
}
