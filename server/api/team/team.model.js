import mongoose from 'mongoose' ;
let Schema = mongoosee.Schema;

const TeamSchema = new Schema({
    teamName: {
        type: String,
        required: true
    },
    adminUser : { type: Schema.Types.ObjectId, ref: 'User', required: true},
    members: { type: [{type: Schema.Types.ObjectId,ref: 'User'}],	index: true	},
    dateCreated: {
        type: Date,
        default: Date.now
    }, 
    lastUpdated: Date
});

export default mongoose.model('Team', TeamSchema);
