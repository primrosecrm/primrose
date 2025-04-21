import { NextFunction, Request, Response, Router } from "express";
import CompanyController from "../controllers/company_controller";
import { createCompanyValidation, deleteCompanyValidation, getCompaniesValidation, getCompanyValidation, updateCompanyValidation } from "../middleware/validate_company";
import { validationResult } from "express-validator";
import { err } from "../../helpers/responseHelper";
import CompanyService from "../services/company_service";
import CompanyRepository from "../repositories/company_repository";
import pool from "../../../db/database";

const companyRepository = new CompanyRepository(pool);
const companyService = new CompanyService(companyRepository);
const companyController = new CompanyController(companyService);

const router = Router();

router.post(
    '/createCompany', createCompanyValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    companyController.createCompany
);

router.post(
    '/getCompany', getCompanyValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    companyController.getCompany
);

router.post(
    '/getCompanies', getCompaniesValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    companyController.getCompanies
);

router.post(
    '/updateCompany', updateCompanyValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    companyController.updateCompany
);

router.post(
    '/deleteCompany', deleteCompanyValidation,
    (req: Request, res: Response, next: NextFunction): void => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) return err(res, '', errors.array());

        next();
    }, 
    companyController.deleteCompany
);

export default router;