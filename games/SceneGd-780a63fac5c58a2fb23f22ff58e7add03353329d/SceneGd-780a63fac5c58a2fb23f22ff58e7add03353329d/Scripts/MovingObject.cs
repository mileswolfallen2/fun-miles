using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class MovingObject : MonoBehaviour
{
    [SerializeField] Rigidbody2D rb;
    [SerializeField] private Transform bg;
    [SerializeField] Button pauseButton;
    [SerializeField] Button continueButton;
    [SerializeField] Button restartButton;
    [SerializeField] private GameObject pausePanel;
    [SerializeField] private Text scoreText;  // Text field for displaying the score
    [SerializeField] private GameObject DeadSong;
    [SerializeField] private Text deadscore;
    [SerializeField] private Text starscore;
    [SerializeField] private GameObject starPrefab;
    public float speed = 5f;  // Скорость движения объекта
    private const float BackgroundSpeed = 1;  // Скорость фона
    private Vector3 initialPosition;
    private float initialBgPositionX;
    private int score = 0;  // Score variable
    private int scoredead = 1;
    private int starscore1 = 1;
    private string currentLevelName;
    [SerializeField] private Text levelText;
    [SerializeField] private Scrollbar progressBar;
    [SerializeField] private float maxLevelDistance = 200f;  // Установите это значение на основе вашего дизайна уровня



    private Vector3 startPosition;

    private void Start()
    {
        initialPosition = transform.position;
        initialPosition = startPosition;
        initialBgPositionX = bg.position.x;

        pauseButton.onClick.AddListener(OnPauseButtonClick);
        continueButton.onClick.AddListener(OnContinueButtonClick);
        restartButton.onClick.AddListener(OnRestartButtonClick);

        currentLevelName = SceneManager.GetActiveScene().name;
        levelText.text = "LEVEL: " + currentLevelName;

        UpdateLevelText();
        progressBar.size = 0f;

    }

    void Update()
    {
        // Проверяем, активна ли панель паузы перед обновлением позиции объекта
        if (!pausePanel.activeSelf)
        {
            transform.position += Vector3.right * speed * Time.deltaTime;

            float bgMove = speed * BackgroundSpeed * Time.deltaTime;
            bg.Translate(new Vector2(bgMove, 0));

            float progress = Mathf.Clamp01(transform.position.x / maxLevelDistance);
            progressBar.size = progress;
        }
    }

    void OnPauseButtonClick()
    {
        // Изменяем состояние активности панели при нажатии на кнопку паузы
        pausePanel.SetActive(!pausePanel.activeSelf);

        // Замораживаем время и отключаем физику при паузе
        if (pausePanel.activeSelf)
        {
            Time.timeScale = 0f;
            rb.simulated = false;
        }
        else
        {
            // Возобновляем время и включаем физику при продолжении игры
            Time.timeScale = 1f;
            rb.simulated = true;
        }
    }

    void OnContinueButtonClick()
    {
        // Прячем панель паузы при нажатии на кнопку "продолжить"
        pausePanel.SetActive(false);

        // Возобновляем время и включаем физику при продолжении игры
        Time.timeScale = 1f;
        rb.simulated = true;
    }

    void OnRestartButtonClick()
    {
        transform.position = initialPosition;
        bg.position = new Vector3(initialBgPositionX, bg.position.y, bg.position.z);
        DeadSong.SetActive(false);
        pausePanel.SetActive(false);
        Time.timeScale = 1f;
        rb.simulated = true;
    }

    private void OnCollisionEnter2D(Collision2D other)
    {
        if (other.gameObject.CompareTag("Spike"))
        {
            DieAndRespawn();
            score++;
            UpdateScoreText();
            UpdateScoreTextDead();
            scoredead++;
            Invoke("HideDeadSong", 0.1f);
        }

        if (other.gameObject.CompareTag("Star"))
        {
            UpdateScoreTextStar();
            starscore1++;
            Destroy(other.gameObject);
        }

        if (other.gameObject.CompareTag("endlvl"))
        {
            SceneManager.LoadScene("MIDNIGHT SUN");
        }

        if (other.gameObject.CompareTag("endlvl1"))
        {
            SceneManager.LoadScene("TIME MACHINE");
        }
    }
    private void DieAndRespawn()
    {
        transform.position = initialPosition;

        bg.position = new Vector3(initialBgPositionX, bg.position.y, bg.position.z);
        DeadSong.SetActive(false);
    }

    private void HideDeadSong()
    {
        // Инвертируем состояние активности объекта DeadSong
        DeadSong.SetActive(!DeadSong.activeSelf);
    }

    private void UpdateScoreText()
    {
        // Update the text field with the current score
        scoreText.text = "ATTEMPT " + score.ToString();
    }

    private void UpdateScoreTextDead()
    {
        // Update the text field with the current score
        deadscore.text = "DEATHS " + scoredead.ToString();
    }

    private void UpdateScoreTextStar()
    {
        // Update the text field with the current score
        starscore.text = "STARS " + starscore1.ToString();
    }

    private void UpdateLevelText()
    {
        // Обновляем текст с текущим названием уровня
        levelText.text = "LEVEL: " + currentLevelName;
    }
}
