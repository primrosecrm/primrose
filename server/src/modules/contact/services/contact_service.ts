import { Request, Response } from "express";
import ContactRepository from "../repositories/contact_repository";

export default class ContactService {
    private db: ContactRepository;

    constructor(db: ContactRepository) {
        this.db = db;
    }

    createContact = async (req: Request, res: Response): Promise<void> => {

    }

    getContact = async (req: Request, res: Response): Promise<void> => {

    }

    getContacts = async (req: Request, res: Response): Promise<void> => {

    }

    updateContact = async (req: Request, res: Response): Promise<void> => {

    }

    deleteContact = async (req: Request, res: Response): Promise<void> => {

    }
}