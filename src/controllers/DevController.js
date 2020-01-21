const Dev = require("../models/Dev");
const axios = require("axios");

const parseStringAsArray = require("../utils/parseStringAsArray");
module.exports = {
  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const resp = await axios.get(
        `https://api.github.com/users/${github_username}`
      );

      const { name = login, avatar_url, bio } = resp.data;
      const techsArray = parseStringAsArray(techs);

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };
      dev = await Dev.create({
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location,
        github_username
      });
    }
    return res.json(dev);
  },
  async index(req, res) {
    const response = await Dev.find();
    return res.json({ users: response });
  },
  async destroy(req, res) {
    const { _id } = req.body;
    await Dev.remove({ _id });
    return res.json({ status: 200 });
  },
  async update(req, res) {
    const { _id, name, techs, avatar_url, bio } = req.body;
    const dev_id = await Dev.findOne({ _id });
    let dev = {};
    if (dev_id) {
      const techsArray = parseStringAsArray(techs);
      dev = await Dev.updateOne(
        { _id: dev_id["_id"],
          name,
          techs: techsArray,
          avatar_url,
          bio
        }
      );
    }
    return res.json(dev);
  }
};
