import {Schema,model} from 'mongoose';

const instance = new Schema(
  {
    from: {
      type: String,
      required: true,
    },
    to: String,
    subject: String,
    message: String,
    read: {
      type: Boolean,
      default: false,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);


// note: use a singular name, mongoose automatically creates a collection like so -> model: 'Person' === collection: 'people'


export default model("Email", instance);
