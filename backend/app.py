from flask import Flask, redirect, url_for, request, jsonify

from firestore import firestoreService, userLogin, userRegister, serviceAdd
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/login',methods = ['POST', 'GET'])
@cross_origin()
def login():
   fire = firestoreService()
   name = request.form.get('name')
   password= request.form.get('password')
   userLog = userLogin(name,password)
   res = fire.getUser(userLog)
   return jsonify(res)

@app.route('/register',methods = ['POST', 'GET'])
@cross_origin()
def register():
   fire = firestoreService()
   name = request.form.get('name')
   email = request.form.get('email')
   username = request.form.get('username')
   password = request.form.get('password')
   userType = request.form.get('userType')
   address = request.form.get('address')
   telephone = request.form.get('telephone')
   tourismSector = request.form.get('tourismSector')
   userLog = userRegister(name,email,username, password,userType,address,telephone,tourismSector)
   res = fire.addUser(userLog)
   return jsonify(res)

@app.route('/service',methods = ['POST', 'GET'])
@cross_origin()
def service():
   fire = firestoreService()


   serviceDescription = request.form.get('serviceDescription')
   companyDescription = request.form.get('companyDescription')
   serviceType = request.form.get('serviceType')
   username = request.form.get('username')
   serv = serviceAdd(companyDescription,serviceDescription,serviceType,username)
   res = fire.addService(serv)
   return jsonify(res)


app.run()