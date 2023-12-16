using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

public class TestSuite
{
    // A Test behaves as an ordinary method
    [Test]
    public void SceneSwitcherQuitTests()
    {
        SceneSwitcher ss = new SceneSwitcher(); // Not proper way to instantiate a monobehavior object. Will not worry about till later.

        UnityEditor.EditorApplication.isPlaying = true;
        ss.QuitGame();
        Assert.IsFalse(UnityEditor.EditorApplication.isPlaying);
    }

    // A Test behaves as an ordinary method
    [Test]
    public void SceneSwitcherSwitchTests()
    {
        SceneSwitcher ss = new SceneSwitcher(); // Not proper way to instantiate a monobehavior object. Will not worry about till later.
        ss.sceneId = 0;
        ss.Start();

        Assert.IsTrue(ss.loadScene()); 

        ss = new SceneSwitcher();
        ss.sceneId = -1;
        ss.Start();

        Assert.IsFalse(ss.loadScene());
    }

    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator TestSuiteWithEnumeratorPasses()
    {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return null;
    }
}
