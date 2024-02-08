export type SimType = "eSIM" | "pSIM";
export type SimStatus = "active" | "inactive" | "deleted" | "retired";

export type SimProvider =
  | "p1"
  | "p2"
  | "p3"
  | "p4"
  | "p5"
  | "p6"
  | "p7"
  | "p8"
  | "p9"
  | "test"
  | string;

export type Sim = {
  object: "sim";
  id: string;
  type: SimType;
  iccid: string;
  provider: SimProvider;
  status: SimStatus;
  createdAt: string;
};
