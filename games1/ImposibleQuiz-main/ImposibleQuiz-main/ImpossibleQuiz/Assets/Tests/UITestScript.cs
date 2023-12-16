using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;
using NUnit.Framework;

public class NewBehaviourScript : MonoBehaviour
{
    [Test]
    public void TimerTest()
    {
        Timer timer = new Timer();
        timer.life = new LifeSys();
        timer.life.Start();
        timer.Start();
        float initTime = timer.timerInit;

        float curTime = timer.iterateTimer();

        Assert.IsTrue(initTime > curTime);
    }

    [Test]
    public void LifeTest()
    {
        LifeSys life = new LifeSys();
        int lifes = life.getLifes();
        life.lifeUp();
        int upLifes = life.getLifes();
        life.lifeDown();
        life.lifeDown();
        int downLifes = life.getLifes();

        Assert.IsTrue(upLifes > lifes);
        Assert.IsTrue(lifes > downLifes);
    }

    [UnityTest]
    public IEnumerator TestSuiteWithEnumeratorPasses()
    {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return null;
    }
}

    
