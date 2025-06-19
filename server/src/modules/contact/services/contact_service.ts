import { Request, Response } from "express";
import ContactRepository from "../repositories/contact_repository";
import { ok } from "../../helpers/responseHelper";

export default class ContactService {
    private db: ContactRepository;

    constructor(db: ContactRepository) {
        this.db = db;
    }

    createContact = async (req: Request, res: Response): Promise<void> => {
        let { firstName, lastName, preferredContactMethod, email, phone, notes, isArchived, createdAt } = req.body;

        ok(res);
    }

    getContacts = async (req: Request, res: Response): Promise<void> => {
        ok(res);
    }

    updateContact = async (req: Request, res: Response): Promise<void> => {
        ok(res);
    }

    deleteContact = async (req: Request, res: Response): Promise<void> => {
        ok(res);
    }
}