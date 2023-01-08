import { HttpMethod } from "@local/shared/dist/types/message/http";
import { NextApiRequest, NextApiResponse } from "next";

export type ExecutionType = {
  [key in HttpMethod]?: (req: NextApiRequest, res: NextApiResponse) => void;
};
