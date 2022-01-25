import  Mongoose  from 'mongoose';

//mode for signup database

const signupschema = new Mongoose.Schema({
    "firstName": {
        type: String,
        required: "firstName is required field"
    },
    "lastName": {
        type: String,
        required: "lastName is required field"
    },
    "email": {
        type: String,
        required: "email is required field",
        match: [/\S+@\S+\.\S+/, 'is invalid']
    },
    "password": {
        type: String,
        required: "password is required field"
    },

    "profilePicture": {
        type: String,
        default: "",
      },
      "followers": {
        type: Array,
        default: [],
      },
      "followings": {
        type: Array,
        default: [],
      },
      "desc": {
        type: String,
        max: 50,
      },
      "city": {
        type: String,
        max: 50,
      },
    "phoneNo": {
        type: String,
        required: "phoneNo is required field"
    },
    "createdDate": {
        type: Date,
        default: Date.now
    },
},
    {
    versionKey:false
});

signupschema.virtual("id", () => {
    return this._id.toHexString()
});

signupschema.set('toJSON', {virtuals: true});




const Signup = Mongoose.model('signup', signupschema);

export default Signup;