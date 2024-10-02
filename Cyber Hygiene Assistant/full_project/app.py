from flask import Flask, request, render_template
import numpy as np
import pandas as pd
from sklearn import metrics 
import warnings
import pickle
warnings.filterwarnings('ignore')
from feature import FeatureExtraction

file = open("pickle/model.pkl","rb")
gbc = pickle.load(file)
file.close()

app = Flask(__name__)

@app.route("/",methods=["GET"])
def homePage():
    return render_template("index.html")

@app.route("/phishing-url-detector", methods=["GET", "POST"])
def index():
    if request.method == "POST":
 
        url = request.form["url"]
        obj = FeatureExtraction(url)
        x = np.array(obj.getFeaturesList()).reshape(1,30) 

        y_pred =gbc.predict(x)[0]
        #1 is safe       
        #-1 is unsafe
        y_pro_phishing = gbc.predict_proba(x)[0,0]
        y_pro_non_phishing = gbc.predict_proba(x)[0,1]
        # if(y_pred ==1 ):
        pred = "It is {0:.2f} % safe to go ".format(y_pro_phishing*100)
        return render_template('phishingURLDetector.html',xx =round(y_pro_non_phishing,2),url=url )
    return render_template("phishingURLDetector.html", xx =-1)

@app.route("/encryptor",methods=["GET"])
def encryptor():
    return render_template("encryption.html")

@app.route("/password-strength-tester",methods=["GET"])
def passwordStrengthTester():
    return render_template("passwordStrengthTester.html")

@app.route("/password-generator",methods=["GET"])
def passwordGen():
    return render_template("passwordGen.html")



@app.route("/chat-bot", methods=["GET"])
def chatbot():
    return render_template("chatbot.html")





if __name__ == "__main__":
    app.run(debug=True)