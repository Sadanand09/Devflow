import mongoose from "mongoose";

import dbConnect from "@/lib/mongoose";
import handleError from "@/lib/handlers/error";

export async function POST(request: Request) {
  const { provider, providerAccountId, user } = request.json();

  await dbConnect();

    const session = await mongoose.startSession();
    session.startTransaction();


    try {
        
    } catch (error: unknown) {
        await session.abortTransaction();
        return handleError(error, "api") as APIErrorResponse;
    } finally {
        session.endSession();
    }
}
