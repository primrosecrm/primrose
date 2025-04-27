import { Request, Response } from "express";
import { bad } from "../../helpers/responseHelper";
import ContactService from "../services/contact_service"

export default class ContactController {
    private contactService: ContactService;

    constructor(contactService: ContactService) {
        this.contactService = contactService;
    }

    createContact = async (req: Request, res: Response) => {
        try {
            return await this.contactService.createContact(req, res);
        } catch (error) {
            return bad(res, undefined, error);
        }
    }

    getContacts = async (req: Request, res: Response) => {
        try {
            return await this.contactService.getContacts(req, res);
        } catch (error) {
            return bad(res, undefined, error);
        }
    }
    
    updateContact = async (req: Request, res: Response) => {
        try {
            return await this.contactService.updateContact(req, res);
        } catch (error) {
            return bad(res, undefined, error);
        }
    }

    deleteContact = async (req: Request, res: Response) => {
        try {
            return await this.contactService.deleteContact(req, res);
        } catch (error) {
            return bad(res, undefined, error);
        }
    }
}