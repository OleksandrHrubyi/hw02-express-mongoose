const express = require("express");
const router = express.Router();

const {
  validCreateContact,
  validUpdateContacts,
  validUpdateStatus,
  validQueryContact,
} = require("./validation");

const {
  getAll,
  getById,
  createContact,
  rmContactById,
  updateContactsById,
  updateStatusFav,
} = require("../../controllers/contacts");

router.get("/", validQueryContact, getAll);

router.get("/:contactId", getById);

router.post("/",  validCreateContact, createContact);

router.patch("/:contactId", validUpdateContacts, updateContactsById);

router.delete("/:contactId", rmContactById);

module.exports = router;
