import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { HTTP_STATUS } from "../constants/httpStatus";
import { ApiResponse } from "../utils/apiResponse";
import { AccountRepository } from "../repositories/account.repository";
export class AccountService {
  constructor(private accountRepo = new AccountRepository()) {}

  /**
   * Registers a new account.
   * @param {string} email - The email of the account.
   * @param {string} password - The password of the account.
   * @param {string} fullname - The full name of the account holder.
   * @param {Date} dob - The date of birth of the account holder.
   * @returns {Promise<void>} - A promise that resolves when the account is registered.
   * @throws {Error} - Throws an error if the account already exists or if there is an issue with the database.
   */
  async register(email: string, password: string, fullname: string, dob: Date) {
    try {
      const existingAccount = await this.accountRepo.findAccountByEmail(email);
      if (existingAccount) {
        return ApiResponse.error(
          "Account already exists",
          HTTP_STATUS.BAD_REQUEST
        );
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const account = await this.accountRepo.createAccount({
        email,
        password: hashedPassword,
        fullname,
        dob,
      });
      return ApiResponse.success(
        account,
        "Account created",
        HTTP_STATUS.CREATED
      );
    } catch (error: any) {
      console.error("Error in register method:", error);
      return ApiResponse.error(
        "Failed to register account",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
  /**
   * Logs in an account.
   * @param {string} email - The email of the account.
   * @param {string} password - The password of the account.
   * @returns {Promise<string>} - A promise that resolves to a JWT token if login is successful.
   * @throws {Error} - Throws an error if the account does not exist or if the password is incorrect.
   */
  async login(email: string, password: string) {
    try {
      const account = await this.accountRepo.findAccountByEmail(email);
      if (!account) {
        throw new ApiResponse(HTTP_STATUS.NOT_FOUND, "Account not found");
      }
      const isMatch = await bcrypt.compare(password, account.password);
      if (!isMatch) {
        throw new ApiResponse(HTTP_STATUS.UNAUTHORIZED, "Invalid credentials");
      }
      if (!process.env.JWT_SECRET) {
        return ApiResponse.error(
          "Invalid credentials",
          HTTP_STATUS.UNAUTHORIZED
        );
      }
      const token = jwt.sign(
        { id: account._id, email: account.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "20h" }
      );
      return ApiResponse.success(
        {
          token,
          account: { email: account.email, fullname: account.fullname },
        },
        "Login successful",
        HTTP_STATUS.OK
      );
    } catch (error: any) {
      console.error("Login Error:", error);
      return ApiResponse.error(
        "Failed to login",
        HTTP_STATUS.INTERNAL_SERVER_ERROR
      );
    }
  }
}
