export const validPortingStatuses = [
  "draft",
  "informationRequired",
  "pending",
  "requested",
  "declined",
  "canceled",
  "expired",
  "completed",
] as const;

export type PortingStatus = (typeof validPortingStatuses)[number];

export type PortingField =
  | "accountNumber"
  | "accountPin"
  | "birthday"
  | "donorProvider"
  | "donorProviderApproval"
  | "firstName"
  | "lastName"
  | "phoneNumber"
  | "address";

export type PortingDeclinedCode =
  | "portingAccountNumberRequiredOrInvalid"
  | "portingAccountPinRequiredOrInvalid"
  | "portingDeclined"
  | "portingDuplicated"
  | "portingFirstNameRequiredOrInvalid"
  | "portingLastNameRequiredOrInvalid"
  | "portingPendingOtherProvider"
  | "portingPhoneNumberAdministrative"
  | "portingPhoneNumberNotActive"
  | "portingPhoneNumberNotFound"
  | "portingPhoneNumberPortProtected"
  | "portingPhoneNumberPrepaid"
  | "portingSameNewAndOldNetworkProvider"
  | "portingUserInformationMismatch"
  | "portingZipCodeRequiredOrInvalid"
  | "portingAddressRequiredOrInvalid";

export type PortingAddress = {
  line1: string;
  line2: string | null;
  city: string;
  state: string | null;
  postalCode: string | null;
  country: string;
};

export type Porting = {
  object: "porting";
  id: string;
  accountNumber: string | null;
  accountPinExists: boolean;
  address: PortingAddress | null;
  birthday: string | null;
  donorProvider: ServiceProvider | null;
  firstName: string | null;
  lastName: string | null;
  phoneNumber: string;
  provider: string;
  donorProviderApproval: boolean | null;
  required: PortingField[];
  status: PortingStatus;
  subscription: string | null;
  user: string;
  createdAt: string;
  lastDeclinedAt: string | null;
  lastRequestedAt: string | null;
  declinedAttempts: number;
  declinedCode?: PortingDeclinedCode;
  declinedMessage?: string;
  recipientProvider: ServiceProvider;
  canceledAt: string | null;
  completedAt: string | null;
  expiredAt: string | null;
};

type ServiceProvider = {
  object: "serviceProvider";
  id: string;
  name: string;
  recipientProviders: string[];
};
