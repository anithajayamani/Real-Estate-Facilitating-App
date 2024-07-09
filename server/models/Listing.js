const mongoose = require("mongoose");

const ListingSchema = new mongoose.Schema(
  {
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    category: {
      type: String,
      required: true,
    },
    type: {
      type: [String],
      required: true,
    },
    streetAddress: {
      type: String,
      required: true,
    },
    DtSt: {
      type: [String],
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    dtcpCertificate: {
      type: Boolean,
      required: true,
    },
    absoluteSaleDeed: {
      type: Boolean,
      required: true,
    },
    khataCertificate: {
      type: Boolean,
      required: true,
    },
    propertyTaxReceipt: {
      type: Boolean,
      required: true,
    },
    amenities: {
      type: Array,
      default: []
    },
    listingPhotoPaths: [{ type: String }], // Store photo URLs
    types: {
      type: [String],
      required: true
    },
    squarefeet: {
      type: String,
      required: true
    },
    landfacing: {
      type: String,
      required: true
    },
    highlightDesc: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
    },
    contactName: {
      type: String,
      required: true
    },
    contactPhone: {
      type: String,
      required: true
    },
    contactEmail: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", ListingSchema);
module.exports = Listing;
