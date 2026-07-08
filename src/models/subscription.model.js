import mongoose,{Schema, Types} from "mongoose";

const subscriptionSchema = new Schema({
  subscriber:{
    Type:Schema.Types.ObjectId,
    ref:"User"
  },
  channel: {
    Type:Schema.Types.ObjectId,
    ref:"User"
  }
},{
  timestamps: true
})


export const Subsciption = mongoose.model("Subscription",subscriptionSchema)