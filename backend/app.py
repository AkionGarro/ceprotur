from flask import Flask, redirect, url_for, request, jsonify

from firestore import firestoreService, userLogin
from flask_cors import CORS, cross_origin
import json

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/user',methods = ['POST', 'GET'])
@cross_origin()
def getUser():
   user = userLogin('cacaca','cacacacacacac')
   fire = firestoreService()
   return fire.getUser(user)

@app.route('/login',methods = ['POST', 'GET'])
@cross_origin()
def login():
   fire = firestoreService()
   name = request.form.get('name')
   password= request.form.get('password')
   userLog = userLogin(name,password)
   res = fire.getUser(userLog)
   return jsonify(res)



app.run()