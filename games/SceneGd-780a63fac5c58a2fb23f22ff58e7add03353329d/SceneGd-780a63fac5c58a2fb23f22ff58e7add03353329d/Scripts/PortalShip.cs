using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PortalShip : MonoBehaviour
{
    private Rigidbody2D rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        //if (Input.GetKeyDown(KeyCode.Space))
        //{
        //    rb.gravityScale *= -1;
        //}
    }

    private void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.CompareTag("Ship"))
        {
            rb.gravityScale *= -1;
        }

        if (other.gameObject.CompareTag("Ship"))
        {
            if (Input.GetMouseButtonDown(0))
                rb.gravityScale *= -1;
        }
    }
}
