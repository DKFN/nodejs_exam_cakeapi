const mongoose = require('mongoose');

const CakeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 250
    },
    baker: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 300
    },
    ingredients: {
        type: [String],
        required: true,
        enum: ['chocolate', 'flour', 'gluten free flour', 'eggs', 'milk', 'strawberry', 'vanilla', 'sugar'],
        validate: {
            validator: (col) => {
                return col.length > 0
            }
        }
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    },
    expirationDate: {
        type: Date,
        default: Date.now()
    },
    isGlutenFree: {
        type: Boolean,
        default: false
    }
});

const cakeModel = mongoose.model('cake', CakeSchema);
module.exports = cakeModel;
