using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerPusher : MonoBehaviour
{
    Rigidbody2D rb;
    public float speed = 200;
    public float hopSpeed = 300;
    public float jumpTime = 0.6f;
    public float pushForce = 1f;
    public LayerMask enemyMask = 0;

    private float horizontalInput;
    private List<Collider2D> overlaps;
    private Collider2D cl;
    private ContactFilter2D enemyFilter;

    // Start is called before the first frame update
    void Start()
    {
        rb = this.GetComponent<Rigidbody2D>();
        timer = jumpTime;
        cl = this.GetComponent<Collider2D>();
        enemyFilter = new ContactFilter2D();
        enemyFilter.SetLayerMask(enemyMask);
        overlaps = new List<Collider2D>();
    }

    public float timer = 0.0f;
    // Update is called once per frame
    void Update()
    {

        if (Input.GetKeyDown(KeyCode.W))
        {
            if (timer <= 0.0f)
            {
                timer = jumpTime;
                rb.AddRelativeForce(Vector2.up * hopSpeed);
            }

        }

        timer -= Time.deltaTime;
        horizontalInput = Input.GetAxis("Horizontal");
        cl.OverlapCollider(enemyFilter, overlaps);
        //overlaps = Physics2D.OverlapCapsuleAll(ColliderTransform.position, new Vector2(2, 2), CapsuleDirection2D.Vertical, 0.0f, enemyMask);
    }
    private void FixedUpdate()
    {
        rb.velocity = new Vector2(horizontalInput * speed, rb.velocity.y);


        if (overlaps.Count != 0)
        {
            foreach(Collider2D collider in overlaps)
            {
                collider.attachedRigidbody.AddRelativeForce(new Vector2(horizontalInput * pushForce * Time.deltaTime, 0));
                //Debug.Log("Applied force to " + collider.ToString());
            }
            
        }
        
    }
}
