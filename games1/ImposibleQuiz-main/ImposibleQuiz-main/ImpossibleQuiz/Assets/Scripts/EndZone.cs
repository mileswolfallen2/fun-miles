using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class EndZone : MonoBehaviour
{
    public Vector2 zoneSize;
    public Text winText;
    public Text initText;
    public LayerMask mask;
    public Button nxtBtn;
    public Vector2 WinBtnPosition;

    private Transform pos;

    // Start is called before the first frame update
    void Start()
    {
        pos = this.GetComponent<Transform>();
    }

    // Update is called once per frame
    void Update()
    {
        Collider2D[] overlap = Physics2D.OverlapBoxAll(pos.position, zoneSize, 0.0f,mask);
        if(overlap.Length != 0)
        {
            winText.text = "Good job!";
            nxtBtn.transform.position = WinBtnPosition;
            Destroy(initText);
        }
    }
}
