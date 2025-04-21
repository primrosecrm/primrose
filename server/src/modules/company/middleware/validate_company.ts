import { body } from "express-validator";


export const createCompanyValidation = [
    body("companyName").isLength({ min: 3 })
];

export const getCompanyValidation = [
    body("companyName").isLength({ min: 3 })
];

export const getCompaniesValidation = [
    body("companyName").isLength({ min: 3 })
];

export const updateCompanyValidation = [
    body("companyName").isLength({ min: 3 })
];

export const deleteCompanyValidation = [
    body("companyName").isLength({ min: 3 })
];