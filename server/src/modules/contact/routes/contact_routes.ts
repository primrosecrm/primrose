import { NextFunction, Request, Response, Router } from "express";
import { validationResult } from "express-validator";
import { err } from "../../helpers/responseHelper";
import pool from "../../../db/database";
import ContactController from "../controllers/contact_controller";
import { createContactValidation, deleteContactValidation, getContactsValidation, getContactValidation, updateContactValidation } from "../middleware/validate_contact";
import ContactRepository from "../repositories/contact_repository";
import ContactService from "../services/contact_service";

const contactRepository = new ContactRepository(pool);
const contactService = new ContactService(contactRepository);
const contactController = new ContactController(contactService);

const router = Router();

router.post(
    '/createContact', createContactValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    contactController.createContact
);

router.post(
    '/getContact', getContactValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    contactController.getContact
);

router.post(
    '/getContacts', getContactsValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    contactController.getContacts
);

router.post(
    '/updateContact', updateContactValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    contactController.updateContact
);

router.post(
    '/deleteContact', deleteContactValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    contactController.deleteContact
);

export default router;