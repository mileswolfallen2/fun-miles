using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerJump : MonoBehaviour
{
    public float jumpForce = 7f; // Сила прыжка
    private bool _isGround = false;
    [SerializeField] private Transform sprite;
    [SerializeField] private float rotateSpeed;
    private Rigidbody2D rb;

    void Start()
    {
        rb = GetComponent<Rigidbody2D>();
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0) && (_isGround || IsTouchingOrb())) // Проверяем _isGround или касание "orb"
        {
            rb.AddForce(Vector2.up * jumpForce, ForceMode2D.Impulse);
            _isGround = false;
        }
    }

    private void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.tag == "ground")
        {
            _isGround = true;
        }
    }

    private bool IsTouchingOrb()
    {
        Collider2D[] colliders = Physics2D.OverlapCircleAll(transform.position, 0.2f);
        foreach (Collider2D collider in colliders)
        {
            if (collider.gameObject.tag == "orb")
            {
                return true;
            }
        }
        return false;
    }
}
