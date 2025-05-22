const { Schema, model } = require("mongoose");

const surveySchema = new Schema(
  {
    code: String,
    questions: [
      {
        questionText: String,
        options: [{ label: String, value: String }],
      },
    ],
    promptTemplate: String,
  },
  { timestamps: true }
);

const CLAConfig = model("CLAConfig", surveySchema);
module.exports = CLAConfig;
