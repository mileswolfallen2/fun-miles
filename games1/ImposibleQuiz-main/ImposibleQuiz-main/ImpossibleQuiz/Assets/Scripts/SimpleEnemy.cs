using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SimpleEnemy : MonoBehaviour
{
    public float speed;
    public Transform playerPosition;

    private Rigidbody2D rb;

    // Start is called before the first frame update
    void Start()
    {
        rb = this.GetComponent<Rigidbody2D>();
    }

    // Update is called once per frame
    void Update()
    {
        float relativePos = rb.transform.position.x - playerPosition.position.x;
        if (relativePos > 0)
        {
            rb.AddRelativeForce(Vector2.left * speed * Time.deltaTime);
        }else if(relativePos < 0)
        {
            rb.AddRelativeForce(Vector2.right * speed * Time.deltaTime);
        }
        
    }
}
