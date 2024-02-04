"use server";

import { createConnectSession, findUser } from "./api";
import { auth } from "./applicationMocks";

export const checkoutCurrentUserWithPlan = async (planId: string) => {
  const currentUser = auth.getUser();

  // Check if user already exists
  const userRes = await findUser(currentUser.email!);
  const existingUser = userRes.items[0];

  const userPayload = existingUser
    ? { user: existingUser.id }
    : {
        userDetails: {
          birthday: currentUser.birthday,
          email: currentUser.email,
          fullName: currentUser.fullName,
          preferredLocale: "en-US",
        },
      };

  const connectSession = {
    callbackUrl: "http://localhost:3000?error=connectSessionFailed",
    intent: {
      type: "checkoutNewSubscription",
      checkoutNewSubscription: {
        plan: planId,
      },
    },
    ...userPayload,
  };

  return await createConnectSession(connectSession);
};
