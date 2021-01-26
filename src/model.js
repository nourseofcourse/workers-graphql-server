const mongoose = require('mongoose')

const proSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 255,
      required: true
    },
    category: {
      type: String,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Cat"
    }
  }, { timestamps: true }
)

const catSchema = mongoose.Schema(
  {
    name: {
      type: String,
      maxlength: 255,
      required: true
    },
  }, { timestamps: true }
)

export const Cat = mongoose.model('Cat', catSchema)
export const Pro = mongoose.model('Pro', proSchema)