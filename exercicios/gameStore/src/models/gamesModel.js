const mongoose = require("mongoose");
const gameSchema = mongoose.Schema(
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
      },

      name: {
        type: String,
        required: true,
        unique: true,
      },

      developer: {
        type: String,
        required: true,
      },

      releaseDate: {
        type: Number,
        required: true,
      },

      genre: {
        type: [String],
        required: true,
      },

      mode: {
        type: [String],
        required: true,
      },

      available: {
        type: Boolean,
        required: true,
      },

      description: {
          type: String,
          minLength: 0,
          maxLength: 500,
          default: "Não informado",
        },

      console: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Console",
      },
    },
    { timestamp: true }
  );
  
  const model = mongoose.model("game", gameSchema);
  
  module.exports = model;
