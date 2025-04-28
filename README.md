# Functionality

---


# Encryption and Cryptography standard

---
In terms of cryptography I plan to use the HMACSHA512 and a BIP39 Mnemonic Phrase. The account creation flow would look something like the following (subject to change):
createAccount() -> UserID: GUID/UUID
GeneratePhrase(UserID) -> Phrase: BIP39 Phrase
CreateUser(UserID, Phrase) -> User
HashUser(User, Phrase) -> Encrypts Everything not a single piece of userdata bar the Application pin and recovery phrase is stored in plaintext.
HashPhrase(Phrase, Pin) -> Uses the pin and IMEI number to hash the phrase
HashPin(Pin, HashedPhrase) -> Hashes the application pin using the hash of the phrase as a key

The flow for logging in and authenticating a user would look something like this (subject to change):
InputPin() -> Queries user for pin
AuthenticatesPin() -> Checks if pin is correct
DecryptData(Pin) -> Uses the pin to decrypt the phrase which decrypts the user

This encrypted data would be stored in Zustand, meaning that we would have our encrypted data stored in temporarily which if there is no additions the data in the Zustand store would be deleted and wouldn't be accessible. If changes are made the temporary user object is encrypted and replaces the Data which would normally be in the store.

For this authentication flow we need the following libraries 
- react-native-hash
- react-native-imei
- react-native-bip39

using this setup we should be able to stop most forms of attacks which for an application which is more than likely not going to able to access the internet is a little bit overkill.

All of this information about Authentication flow is subject to change, more than likely IMEI will be dropped in favour of using a user controlled recovery password which will have stringent rules of how they are to be written and formatted.

# Goals 

---

# Milestones

---
Our milestones would be as follows : 
- Documentation Complete. The completion of documentation means that we can start writing code and 
