import bcrypt from 'bcrypt';

export default class PasswordService {
    isValidPassword = (password: string): boolean => {
        if (password.length < 8) return false;

        let hasUpperChar = false;
        let hasNumber = false;

        for (var c of password) {
            if (c == c.toUpperCase()) {
                hasUpperChar = true;
            } else if (c >= '0' && c <= '9') {
                hasNumber = true;
            }

            if (hasUpperChar && hasNumber) return true;
        }

        return false;
    }

    hashString = async (str: string): Promise<string> => {
        return await bcrypt.hash(str, 12);
    }

    checkString  = async (str: string, hashedStr: string): Promise<boolean> => {
        return await bcrypt.compare(str, hashedStr);
    }
}