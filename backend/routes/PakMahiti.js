  //  for finding Uses 
  const Uses = mongoose.model("PlantUses");

  const onFindUses = (req,res)=>{
    Uses.find({})
    .then(docs => {
        res.send(docs);
        console.log(docs);
    })
    .catch(err => {
        console.log(err);
    });
    //res.send("Getting GET request");
  };
  app.get("/api/v1/PlantUses", onFindUses);