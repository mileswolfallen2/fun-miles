#!/usr/bin/env python3

# -*- coding: utf-8 -*-

import requests
from flask import Flask, render_template

# Flask Goodness
app = Flask(__name__, instance_relative_config = True)
app.config.from_object("config")
app.config.from_pyfile("config.py", silent = True)

def getEmojiCombinations():
    try: 
        return { emoji : { (left if left != emoji else right) : (left.replace("-", "-u"), right.replace("-", "-u"), date) for left, right, date in map(lambda c: c.values(), combinations) } for emoji, combinations in requests.get("https://raw.githubusercontent.com/xsalazar/emoji-kitchen/main/src/Components/emojiData.json").json().items() }
    except:
        return {}

@app.route("/")
def index():
    return render_template("index.html", combinations = getEmojiCombinations(), size = 64)

if __name__ == "__main__":
    app.run()
