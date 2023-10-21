import {Schema,model} from 'mongoose';

const instance = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: {
      first: { type: String, required: true },
      middle: { type: String },
      last: { type: String, required: true },
    },
    profilePicture: String,
    mailbox: {
      inbox: [{ type: Schema.Types.ObjectId, ref: 'Email' }],
      outbox: [{ type: Schema.Types.ObjectId, ref: 'Email' }],
      drafts: [{ type: Schema.Types.ObjectId, ref: 'Email' }],
      trash: [{ type: Schema.Types.ObjectId, ref: 'Email' }],
    },
  },
  {
    timestamps: true,
  },
);


// note: use a singular name, mongoose automatically creates a collection like so -> model: 'Person' === collection: 'people'

export default model("Account", instance);