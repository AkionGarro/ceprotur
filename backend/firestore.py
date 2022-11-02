import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

class firestoreService():
    def __init__(self):
        self.cred = credentials.Certificate('ceprotur-firebase-adminsdk-xvjjf-a97121250f.json')
        self.app = firebase_admin.initialize_app(self.cred)
        self.db = firestore.client()

    def addUser(self,user):
        doc_ref = self.db.collection(u'users').document(u'alovelace')
        doc_ref.set({
            u'first': u'AK',
            u'last': u'Lovelace',
            u'born': 1815
        })

    def getUsers(self):
        users = []
        users_ref = self.db.collection(u'users')
        docs = users_ref.stream()
        for doc in docs:
            print(f'{doc.id} => {doc.to_dict()}')
            users.append(doc.to_dict())
        return users


