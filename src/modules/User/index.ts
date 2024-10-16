import { Router } from "express";
import * as MainControllers from "./Main.controllers";
const router = Router();
import multer from "multer";
const upload = multer({ dest: "temp/" });

router.post("/add-country", upload.single("image"), MainControllers.addCountry);
router.get("/get-all-countries", MainControllers.getAllCountries);
router.post("/add-state", MainControllers.addState);
router.post("/all-states", MainControllers.getAllStates);
router.post("/create-city", MainControllers.addCity);
router.get("/get-all-cities", MainControllers.getAllCities);


export default router;
