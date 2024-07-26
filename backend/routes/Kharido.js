app.post('/create-order', async (req, res) => {
    const { amount } = req.body; // amount in paise (example: 1000 paise = ₹10)
    
    const options = {
      amount,
      currency: 'INR',
    };
  
    try {
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });