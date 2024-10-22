using UnityEngine;

public class PortalScript : MonoBehaviour
{
    Rigidbody2D rb;

    private void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }
    private void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "Portal")
        {
            rb.gravityScale *= -1;
        }

        if (other.gameObject.tag == "GravitySwitch")
        {
            rb.gravityScale = 1;
        }
    }
}
