import { Request, Response } from "express";
import { adminService } from "./admin.service";
import pick from "../../../shared/pick";
import { adminFilterableFields } from "./admin.constant";

const getAllAdmin = async (req: Request, res: Response) => {
  try {
    const filters = pick(req.query, adminFilterableFields);
    const options = pick(req.query, ["limit", "page","sortby","sortOrder"]);
    console.log(options);
    const result = await adminService.getAllFromDb(filters,options);
    res.status(200).json({
      success: true,
      message: "Admin Data Fetched!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error?.name || "Something went wrong",
      error: error,
    });
  }
};

export const adminController = {
  getAllAdmin,
};
