import mongooose, {Schema} from "mongoose" ;

const videoSchema = new Schema({
    videoFile: {
        type: String ,//coudinary url,
        required: true
    },
    thumbnail: {
        type: String, // cloudinary url
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number, //cloudinary
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: true
        
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }




},{
    timestamps: true
}) ;

export const Video = mongooose.model("Video", videoSchema)