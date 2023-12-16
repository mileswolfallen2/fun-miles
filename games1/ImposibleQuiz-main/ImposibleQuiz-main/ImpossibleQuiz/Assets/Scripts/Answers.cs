using UnityEngine;
using UnityEngine.UI;
using TMPro;
 using UnityEngine.SceneManagement;
public class Answers : MonoBehaviour
{
    public Button m_YourFirstButton, m_YourSecondButton, m_YourThirdButton, m_YourFourthButton;
    public TextMeshProUGUI myText;
    public LifeSysEdit life = null;
    public int CorrectAnswer = 1;
    public int nextSceneIndex = 3;
    public int totalCorrects;
    public int totalWrongs;

    void Start()
    {
    	if(SceneManager.GetActiveScene().name != "QuizLevel1"){
    		totalCorrects = PlayerPrefs.GetInt("correctCount");
    		totalWrongs = PlayerPrefs.GetInt("wrongCount");
    	}
    	else{
    		PlayerPrefs.SetInt("correctCount", 0);
    		PlayerPrefs.SetInt("wrongCount", 0);

    	}
        //Calls the TaskOnClick/TaskWithParameters/ButtonClicked method when you click the Button
        if(CorrectAnswer == 1)
        	m_YourFirstButton.onClick.AddListener(delegate {TaskWithParameters("Correct!"); });
        else{
        	m_YourFirstButton.onClick.AddListener(delegate {TaskWithParameters("Wrong"); });

        }
        if(CorrectAnswer == 2)
        	m_YourSecondButton.onClick.AddListener(delegate {TaskWithParameters("Correct!"); });
        else{
        	m_YourSecondButton.onClick.AddListener(delegate {TaskWithParameters("Wrong!"); });
        }
        
        if(CorrectAnswer == 3){
        	m_YourThirdButton.onClick.AddListener(delegate {TaskWithParameters("Correct!"); });

        }
        else{
        	m_YourThirdButton.onClick.AddListener(delegate {TaskWithParameters("Wrong"); });

        }
        if(CorrectAnswer == 4){
        	m_YourFourthButton.onClick.AddListener(delegate {TaskWithParameters("Correct!"); });

        }
        else{
        	m_YourFourthButton.onClick.AddListener(delegate {TaskWithParameters("Wrong"); });
        }

        
    }

  

    void TaskWithParameters(string message)
    {
        //Output this to console when the Button2 is clicked
        Debug.Log(message);
        
        if(message == "Correct!"){
        	totalCorrects++;
        	PlayerPrefs.SetInt("correctCount", totalCorrects);
        	myText.text = "Correct Answer!";
            PlayerPrefs.SetInt("score",life.getLives());

            SceneManager.LoadScene(nextSceneIndex);

        }
        else{
        	totalWrongs++;
        	PlayerPrefs.SetInt("wrongCount", totalWrongs);

            life.lifeDown();

        }

    }

    
}