const { template } = require("../../utils/templates");

require("dotenv").config();

exports.scriptController = async (req, res) => {
  const { initId } = req.query;

  if (!initId) {
    res.status(401).json({ msg: `Invalid initId!` });
    return;
  }
  const initScript = template.initScript(initId);
  res.type(".js");
  res.status(200).send(initScript);
};
