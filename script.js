// Konfigurasi Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDs4p4hYorUzGsCkiZVq6OOUjFD5ZLtGLw",
    authDomain: "example-4affb.firebaseapp.com",
    projectId: "example-4affb",
    storageBucket: "example-4affb.appspot.com",
    messagingSenderId: "780238357795",
    appId: "1:780238357795:web:9f762ba1e5e1a580fb3896",
    measurementId: "G-VNF3KLB92W"
  };

// Inisialisasi Firebase
const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        const storageRef = storage.ref('images/' + file.name);
        const uploadTask = storageRef.put(file);

        uploadTask.on('state_changed', 
            (snapshot) => {
                // Progress
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                document.getElementById('status').innerText = 'Uploading: ' + progress + '%';
            }, 
            (error) => {
                // Error
                document.getElementById('status').innerText = 'Upload failed: ' + error.message;
            }, 
            () => {
                // Complete
                document.getElementById('status').innerText = 'Upload successful!';
            }
        );
    } else {
        document.getElementById('status').innerText = 'Please select a file!';
    }
});


