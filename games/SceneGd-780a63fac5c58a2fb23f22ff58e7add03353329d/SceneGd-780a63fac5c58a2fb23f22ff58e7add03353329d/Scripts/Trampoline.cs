using UnityEngine;

public class Trampoline : MonoBehaviour
{
    public float jumpForce = 30f;

    [Header("”пругость батута")]
    [Space]
    [SerializeField] private float _force;

    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (collision.gameObject.tag == "Player")
        {
            collision.rigidbody.AddForce(Vector2.up * _force, ForceMode2D.Impulse);
        }
    }

}
