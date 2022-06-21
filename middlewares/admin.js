


const admin = async (req, res, next) => {
  try {
   Console.log('its happening')

   next()
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = admin;
