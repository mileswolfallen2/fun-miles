using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimpleCharacter : MonoBehaviour
{
    Rigidbody2D rb;
    public float speed;
    public float hopSpeed;
    public float jumpTime = 0.0f;
    private Camera cam;
    public Vector3 camOffset;

    // Start is called before the first frame update
    void Start()
    {
        rb = this.GetComponent<Rigidbody2D>();
        cam = Camera.main;
        timer = jumpTime;
    }

    public float timer = 0.0f;
    // Update is called once per frame
    void Update()
    {
        cam.transform.position = new Vector3(0, 0, -10) + this.transform.position + camOffset;

        if (Input.GetKeyDown(KeyCode.W))
        {
            if (timer <= 0.0f)
            {
                timer = jumpTime;
                rb.AddRelativeForce(Vector2.up * hopSpeed);
            }
            
        }

        timer -= Time.deltaTime;
        
        if (Input.GetKey(KeyCode.A))
        {
            rb.AddRelativeForce(Vector2.left * speed * Time.deltaTime);
        }
        else if (Input.GetKey(KeyCode.D))
        {
            rb.AddRelativeForce(Vector2.right * speed * Time.deltaTime);
        }
    }
}
