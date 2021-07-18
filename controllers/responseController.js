const Response = require('../models/response');

const createResponse = async (req, res) => {
  try {
    const response = new Response(req.body);
    await response.save();
    res.status(201).json(response);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

const getResponses = async (req, res) => {
  try {
    const responses = await Response.find();
    res.status(200).json(responses);
  } catch (err) {
    res.status(400).json({ success: false, error: 'error 400' });
  }
};

module.exports = { createResponse, getResponses };
