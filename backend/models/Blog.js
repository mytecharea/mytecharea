const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    excerpt: {
      type: String,
      required: true,
      trim: true
    },

    content: {
      type: String,
      required: true
    },

    featuredImage: {
      type: String,
      default: ''
    },

    category: {
      type: String,
      required: true,
      trim: true
    },

    tags: {
      type: [String],
      default: []
    },

    author: {
      type: String,
      default: 'Niraj Kumar'
    },

    status: {
      type: String,
      enum: ['draft', 'published'],
      default: 'draft'
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Blog', blogSchema);