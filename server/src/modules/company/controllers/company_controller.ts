import { Request, Response } from "express";
import CompanyService from "../services/company_service";
import { err } from "../../helpers/responseHelper";

export default class CompanyController {
    private companyService: CompanyService

    constructor(companyService: CompanyService) {
        this.companyService = companyService;
    }

    createCompany = async (req: Request, res: Response): Promise<void> => {
        try {
            return await this.companyService.createCompany(req, res);
        } catch (error) {
            return err(res, '', error);
        }
    }

    getCompany = async (req: Request, res: Response): Promise<void> => {
        try {
            return await this.companyService.getCompany(req, res);
        } catch (error) {
            return err(res, '', error);
        }
    }

    getCompanies = async (req: Request, res: Response): Promise<void> => {
        try {
            return await this.companyService.getCompanies(req, res);
        } catch (error) {
            return err(res, '', error);
        }
    }

    updateCompany = async (req: Request, res: Response): Promise<void> => {
        try {
            return await this.companyService.updateCompany(req, res);
        } catch (error) {
            return err(res, '', error);
        }
    }

    deleteCompany = async (req: Request, res: Response): Promise<void> => {
        try {
            return await this.companyService.deleteCompany(req, res);
        } catch (error) {
            return err(res, '', error);
        }
    }
}