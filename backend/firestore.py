import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class userLogin():
    def __init__(self,name,password):
        self.name = name
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
        doc_ref = self.db.collection(u'users').document(user.username)
        doc_ref.set({
            'name': user.name,
            'email' : user.email,
            'username' : user.username,
            'passwor' : user.password,
            'typeUser' : user.typeUser,
            'address' : user.address,
            'telephone' : user.telephone,
            'tourismSector' : user.tourismSector
        })

    def getUsers(self):
        users = []
        users_ref = self.db.collection(u'users')
        docs = users_ref.stream()
        for doc in docs:
            print(f'{doc.id} => {doc.to_dict()}')
            users.append(doc.to_dict())
        return users


    #getUser with name and password
    def getUser(self,user):
        docRef = self.db.collection('users').where("usuarioImput","==",user.name).get()
        userRes = docRef[0].to_dict()
        if userRes['contraImput'] == user.password:
            print(userRes)
            return userRes
        else:
            print('Contra incorecta')
            return None;



    def getServicesFromUser(self):
        collections = self.db.collection('users').document('alovelace').collections()
        for collection in collections:
            for doc in collection.stream():
                print(doc.to_dict())





