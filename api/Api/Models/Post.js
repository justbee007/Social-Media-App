import  Mongoose  from 'mongoose';

// user posts schema
const PostSchema = new Mongoose.Schema(
  {
    "heading":{
      type: String,      
      },

    "userId": {
      type: String,
      required: true,
    },
    "description": {
      type: String,
      max: 500,
    },
    "image": {
      type: String,
    },
    "yums": {
      type: Array,
      default: [],
    },
    "createdDate": {
        type: Date,
        default: Date.now
    },
},
    {
    versionKey:false
});
PostSchema.virtual("id", () => {
    return this._id.toHexString()
});

PostSchema.set('toJSON', {virtuals: true});

export const Post = Mongoose.model('post', PostSchema);

