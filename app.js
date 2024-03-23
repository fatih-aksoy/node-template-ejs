const express = require("express");
const app = express();
// ! 2
app.set("view engine", "ejs");

app.listen(3000);

// ! 3
app.get("/", (req, res) => {
  res.render("index", { title: "Main-Page" });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

// ! 1
// app.use((req, res) => {
//   res.sendFile("./views/404.html", { root: __dirname });
// });
// ! 1.1

app._router.get("/about-us", (req, res) => {
  res.redirect("./about");
});

app.use((req, res) => {
  res.status(404).render("404", { title: "Page cannot be found!" });
});

// ! ******************************************
// ! ilk kurulum
// ! npm init -y
// ! npm i express
// ! sonra app.js olustur.
// ! npm Express.js link
// ! designs , template icin Express Handlebars, pug, ejs de kullanilabilir.
// ! npm i ejs

// ! 1 - sayfayi bulamazsa hata dondursun, bir middleware yazalim, get post mtodlarin altina yazalim. en alta yazalim ki usteki kosullar calismazsa burasi calissin, yoksa hata varir. app.use enkron olarak calisir, arkasinda gelen kod blogunu engeller.

// ! 1.1 ussteki metod 200 dondurdu ama 404 dondurmesi gerekir.

// ! 2 - template yazmak icin ejs. yazdiktan sonta 404,about, index.html uzantilarini 404.ejs, about.ejs, index.ejs olarak degistirdik.

// ! 3 - render etmek icin  res.render olarak degistiririz.
