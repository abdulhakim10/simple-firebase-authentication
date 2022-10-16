/*
----------------------
    INITIAL SETUP
----------------------
1. visit: console.firebase.google.com
2. create a new firebase project
3. visit (go to docs) Build > Authentication > Web > Get Started
4. Register web app > firebase project home > click web > give name and register
5. Install firebase for the project: npm install firebase
6. DANGEROUS: get firebase config and put it in firebase.init.js
7. export app from firebase.init.js
------------------------
    SETUP THE PROVIDER
------------------------
8. create auth using getAuth from firebase by using app from firebase.init.js
9. crate a google auth provider. do not forgot to use new GoogleAuthProvider();
10. go to firebase > Build > Authentication > Sign In method
11. Enable google sign in method
12. create a button for google sign in method with a click handler
13. inside the event handler, call signInWithPopup with auth and provider
14. after signInWithPopup .then result , error
15. 
*/