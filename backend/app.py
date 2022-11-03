from flask import  Flask,redirect, url_for, request

from firestore import firestoreService
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
@app.route('/user',methods = ['POST', 'GET'])
@cross_origin()
def hello():
   fire = firestoreService()
   return fire.getUser(u'cacaca',u'cacacacacacac')

app.run()