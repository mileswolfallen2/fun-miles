using System.Collections;
using System.Collections.Generic;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.UI;
using YG;

public class YGDataSaveSkins : MonoBehaviour
{
    public Sprite[] SpriteIconMassive;
    public static int MaxSkinLvl;
    private void Start()
    {
        MaxSkinLvl = YandexGame.savesData.MaxPlayeSkinLvl;
        SkinsLvlList(true);

    }
    #region SkinsList
    public List<int> PlayerSkinsList = new List<int>();
    private void SkinsLvlList(bool _debuging)
    {
        for(int i = 1; i <= MaxSkinLvl; i++)
        {
            PlayerSkinsList.Add(i);
            if(_debuging)Debug.Log("List add " +i);
        }
    }
    #endregion
    #region SkinsShow
    public void SkinsMenuOpen(bool _debuging)
    {
        for (int c = 1; c <= MaxSkinLvl; c++)
        {
            if (PlayerSkinsList.Contains(c))
            {
                GameObject currentObj = GameObject.Find("LockSign[" + c + "]");
                currentObj.GetComponent<Image>().color = new Color(0, 0, 0, 0);
                if (_debuging) Debug.Log("Unlock[lvl] " + c + "[indification [true]");
            }
            else
            {
                GameObject currentObj = GameObject.Find("LockSign[" + c + "]");
                currentObj.GetComponent<Image>().color = new Color(1 , 1 , 1 , 0.5f);
                if (_debuging) Debug.Log("Lock [lvl] " + c + "[indification [false]");
            }
        }
    }
    #endregion
    #region UILoad
    public static int SelectedSkin;
    public void SetSavedIcon()
    {
        SelectedSkin = YandexGame.savesData.SelectedIcon;
        GameObject IconSprite = GameObject.Find("SelectedSkin");
        IconSprite.GetComponent<Image>().sprite = SpriteIconMassive[SelectedSkin];
    }
    public void SetSelectedIcon(int IconNumber)
    {
        GameObject IconSprite = GameObject.Find("SelectedSkin");
        IconSprite.GetComponent<Image>().sprite = SpriteIconMassive[IconNumber];
        if (PlayerSkinsList.Contains(IconNumber))
        {
            SelectedSkin = IconNumber;
            YandexGame.savesData.SelectedIcon = IconNumber;
            YandexGame.SaveProgress();
        }
    }
    #endregion
}
