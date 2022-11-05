import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class userLogin():
    def __init__(self,username,password):
        self.username = username
        self.password= password
class userRegister():
    def __init__(self, name,email,username, password,typeUser,address,telephone,tourismSector):
        self.name = name
        self.email = email
        self.username = username
        self.password = password
        self.typeUser = typeUser
        self.address = address
        self.telephone = telephone
        self.tourismSector =tourismSector

class firestoreService():

    def __init__(self):
        self.cred = credentials.Certificate('ceprotur-firebase-adminsdk-xvjjf-a97121250f.json')
        try:
            self.app = firebase_admin.get_app()
        except ValueError:
            self.app = firebase_admin.initialize_app(self.cred)
        self.db = firestore.client()


    #Add document using know id, change document to document(user['name'])
    def addUser(self,user):
        checkUser = self.db.collection('users').where("username", "==", user.username).get()
        if checkUser != []:
            doc_ref = self.db.collection(u'users').document(user.username)
            doc_ref.set({
                'name': user.name,
                'email' : user.email,
                'username' : user.username,
                'password' : user.password,
                'typeUser' : user.typeUser,
                'address' : user.address,
                'telephone' : user.telephone,
                'tourismSector' : user.tourismSector
            })
            res = {'result':'Sucess'}
            return res
        else:
            res = {'result':'Change Username'}
            return res


    def getUsers(self):
        users = []
        users_ref = self.db.collection('users')
        docs = users_ref.stream()
        for doc in docs:
            print(f'{doc.id} => {doc.to_dict()}')
            users.append(doc.to_dict())
        return users


    #getUser with name and password
    def getUser(self,user):
        docRef = self.db.collection('users').where("username","==",user.username).get()
        if docRef != []:
            userRes = docRef[0].to_dict()
            if userRes['password'] == user.password:
                print(userRes)
                return userRes
            else:
                print('Wrong Password')
                return None;
        else:
            print('No se encuentra el usuario')
            return None;




    def getServicesFromUser(self):
        collections = self.db.collection('users').document('LWOV2GpylQzwiLagcBkm').collections()
        for collection in collections:
            for doc in collection.stream():
                print(doc.to_dict())



