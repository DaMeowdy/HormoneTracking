## Functionality
### Hormones 

#### Doses 
- Generate next n doses 
- delete dose
- Remind to take dose
- Track taken doses 
- Track untaken doses

#### Dosages 

- Add Dosage
- Edit Dosage
- Delete Dosage

### Levels 
- Add test  
- Add test results
- Graph levels 
- Update tests
- Update test results 
- Delete tests 

### Authentication
- Login with PIN
- Register user
- Recovery with phrase
### <sup><sub>please see Encryption and Cryptography for the authentication flow</sub></sup>

### Cryptography
- Encrypt User
- Encrypt Phrase
- Encrypt Pin

- Decrypt Pin
- Decrypt Phrase
- Decrypt User

### <sup><sub>please see Encryption and Cryptography for the authentication flow</sub></sup>

### Safety
- Quick Exit (immediately kills the application and opens the default web browser)
- Discrete mode (makes the app not look like a hormone tracking application)
- Self Destruct (Deletes all user data)
- Silent Mode (No Push Notification)

### Reports 
- Generate reports based on weekly, monthly or yearly data
- Store reports in an encrypted format 
- have reports easily accessible at all times 

## Encryption and Cryptography standard

In terms of cryptography I plan to use the HMACSHA512 and a BIP39 Mnemonic Phrase. The account creation flow would look something like the following (subject to change):
- createAccount() -> UserID: GUID/UUID
- GeneratePhrase(UserID) -> Phrase: BIP39 Phrase
- CreateUser(UserID, Phrase) -> User
- HashUser(User, Phrase) -> Encrypts Everything not a single piece of userdata bar the Application pin and recovery phrase is stored in plaintext.
- HashPhrase(Phrase, Pin) -> Uses the pin and IMEI number to hash the phrase
- HashPin(Pin, HashedPhrase) -> Hashes the application pin using the hash of the phrase as a key

The flow for logging in and authenticating a user would look something like this (subject to change):
- InputPin() -> Queries user for pin
- AuthenticatesPin() -> Checks if pin is correct
- DecryptData(Pin) -> Uses the pin to decrypt the phrase which decrypts the user

This encrypted data would be stored in Zustand, meaning that we would have our encrypted data stored in temporarily which if there is no additions the data in the Zustand store would be deleted and wouldn't be accessible. If changes are made the temporary user object is encrypted and replaces the Data which would normally be in the store.

For this authentication flow we need the following libraries 
- react-native-hash
- react-native-imei
- react-native-bip39

using this setup we should be able to stop most forms of attacks which for an application which is more than likely not going to able to access the internet is a little bit overkill.

All of this information about Authentication flow is subject to change, more than likely IMEI will be dropped in favour of using a user controlled recovery password which will have stringent rules of how they are to be written and formatted.

## Documentation
The following documents will be produced before development begins 
- Project overview (this file)
- System Class Diagram
- Use Case Diagram 
- Use Case Description 
- Wireframes 
- Personas
- Security threat model

## Goals 
- Complete development documention
- Build a robust and secure system. 
- complete onboarding/quickstart documentation 
- Ensure offline compatibility 
- Make it onto the google play store as a FOSS application for trans people to track their hormone levels and doses

## Milestones

Our milestones would be as follows : 
- Documentation Complete. The completion of documentation means that we can start writing code and developing this application and hopefully delivering to users 
- Authentication Proof of Concept(POC). A working proof of concept which shows how our authentication works. 
- General MVP. The delivery of our MVP will mean that this process has amounted to more than just documentation and deliberation. The delivery of an MVP also gives our potential users a look into our 
- UX/UI refurb. The refurbishment of the user interface and general user experience. 
- Closed Alpha Build, A closed alpha where people will be testing an android build of the application. Selecting Users who will be testing the application will be deliberated on after the UI/UX refurb is completed.
- Delivery, Delivery will be when the application is ready for users 
