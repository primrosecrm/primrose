import { Request, Response } from "express";
import CompanyRepository from "../repositories/company_repository";

export default class CompanyService {
    private db: CompanyRepository;

    constructor(db: CompanyRepository) {
        this.db = db;
    }

    createCompany = async (req: Request, res: Response): Promise<void> => {

    }

    getCompany = async (req: Request, res: Response): Promise<void> => {

    }

    getCompanies = async (req: Request, res: Response): Promise<void> => {

    }

    updateCompany = async (req: Request, res: Response): Promise<void> => {

    }

    deleteCompany = async (req: Request, res: Response): Promise<void> => {

    }
}