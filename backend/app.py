from flask import  Flask,redirect, url_for, request

from firestore import firestoreService

app = Flask(__name__)

@app.route('/',methods = ['POST', 'GET'])
def hello():
   fire = firestoreService()
   return fire.getUsers()



app.run()