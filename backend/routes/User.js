//Registraion of user and save data in mongodb atlas
const User = mongoose.model("userInfo");

///UserDATA
app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET, (err, res) => {
        if (err) {
          return "Token Expired";
        }
        return res;
      });
      console.log(user);
      if(user=="Token Expired"){
        return res.send({ status: "error",data:"Token Expired"});
      }
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "OK", data: data });
        })
        .catch((error) => {
          res.send({ status: "Error", data: data });
        });
    } catch (error) {}
  });

  //User Login check
app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User not found...!" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET, {
        expiresIn: 10,
      });
  
      if (res.status(201)) {
        return res.json({ status: "Ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "Invalid Password" });
  });

  //ragister
app.post("/register", async (req, res) => {
    const { fname, lname, email, password } = req.body;
  
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.send({ error: "User Already Exist" });
      }
      await User.create({ fname, lname, email, password: encryptedPassword });
      res.send({ status: "OK" });
    } catch (error) {
      res.send({ status: "Error" });
    }
  });


//   User.find({}).tne(function(err, documents) {
//   if (err) {
//     console.error('Error fetching documents:', err);
//   } else {
//     console.log('Documents:', documents);
//     // Now 'documents' is an array containing all documents from the collection
//   }
// });