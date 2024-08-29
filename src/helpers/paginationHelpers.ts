type IOptions = {
    page?: number;
    limit?: number;
    sortOrder?: string;
    sortBy?: string;
}

type IOptionsResult = {
    limit:number,
    skip: number,
    sortBy: string,
    sortOrder: string,
    page: number
}

const calculatePagination = (options: IOptions):IOptionsResult => {
  const page: number = Number(options.page) || 1;
  const limit: number = Number(options.limit) || 5;
  const skip: number = (Number(page) - 1) * Number(limit);

  const sortBy: string = options.sortBy || "createdAt";
  const sortOrder: string = options.sortOrder || "desc";
  return {
    limit,
    skip,
    sortBy,
    sortOrder,
    page,
  };
};

export const paginationHelper = {
  calculatePagination,
};
