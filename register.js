<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBaZV6glLcIE9v0JbQaCFm2D3MCGouGv50",
    authDomain: "binsight-29468.firebaseapp.com",
    projectId: "binsight-29468",
    storageBucket: "binsight-29468.firebasestorage.app",
    messagingSenderId: "608574725460",
    appId: "1:608574725460:web:0b290132ca304b9ff9fcc1",
    measurementId: "G-0FLH51Z61E"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);



  const email= document.getElementById('email').value;
  const password=document.getElementById('password').value;

  const submit = document.getElementById('submit');
  submit.addEventListener("click",function (event){
    event.preventDefault()
    alert(5)

  })
</script>
  
  