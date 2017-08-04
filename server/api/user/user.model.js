import Promise from 'bluebird' ;
import mongoose from 'mongoose' ;
let mongoosee = Promise.promisifyAll(mongoose);
let Schema = mongoosee.Schema;
import crypto from 'crypto';
import bcrypt from 'bcrypt'; 

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        lowercase: true,
        unique: true
    },
    role: {
        type: String,
        default: 'user'
    },
    hashedPassword: String,
    verified: {
        type: Boolean,
        default: false
    },
    team: { type: Schema.Types.ObjectId, ref: 'Team'},
    dateCreated: {
        type: Date,
        default: Date.now()
    }
});

// Public profile information
UserSchema
    .virtual('profile')
    .get(function() {
        return {
            name: this.name,
            role: this.role,
            id: this._id.toString()
        };
    });

// User information
UserSchema
    .virtual('info')
    .get(function() {
        return {
            _id: this._id,
            name: this.name,
            role: this.role,
            email: this.email,
            team : this.team, 
            dateCreated: this.dateCreated
        };
    });

// Non-sensitive info we'll be putting in the token
UserSchema
    .virtual('token')
    .get(function() {
        return {
            _id: this._id,
            role: this.role
        };
    });

/**
 * Validations
 */

// Validate empty email
UserSchema
    .path('email')
    .validate(function(email) {
        return email.length;
    }, 'Email cannot be blank');

// Validate empty password
UserSchema
    .path('hashedPassword')
    .validate(function(hashedPassword) {
        return hashedPassword.length;
    }, 'Password cannot be blank');

// Validate email is not taken
UserSchema
    .path('email')
    .validate(function(value, respond) {
        let _this = this;
        this.constructor.findOne({
            email: value
        }, function(err, user) {
            if (err) throw err;
            if (user) {
                if (_this.id === user.id) return respond(true);
                return respond(false);
            }
            respond(true);
        });
    }, 'The specified email address is already in use.');

function validatePresenceOf(value) {
    return value && value.length;
};

/**
 * Pre-save hook
 */
UserSchema
    .pre('save', function(next) {
        if (!this.isNew) return next();

        if (!validatePresenceOf(this.hashedPassword))
            next(new Error('Invalid password'));
        else
            next();
    });

/**
 * Methods
 */
UserSchema.methods = {
    authenticate: function(plainText) {
        return bcrypt.compareSync(plainText, this.hashedPassword)
    },

    setVerified: function() {
        if (this.verified) return true;
        this.verified = true;
        return this.saveAsync();        
    }
};

export default mongoose.model('User', UserSchema);
