import express from 'express';
const router = express.Router();
import { checkout,paymentVerification } from '../controllers/payemntController.js';
//routes
router.route("/checkout").put(checkout)
router.route("/paymentverification").post(paymentVerification);

export default router;