import { Price } from "./price";

export type Plan = {
  object: "plan";
  id: string;
  name: string;
  description: string;
  image: string | null;
  coverage: {
    object: "coverage";
    id: string;
    name: string;
    countries: string[];
  };
  allowances: {
    dataBytes: number | null;
    voiceSeconds: number | null;
    smsMessages: number | null;
  };
  limits: {
    dataBytes: number | null;
    bandwidthBitsPerSecond: number | null;
    throttling: {
      thresholdBytes: number;
      bandwidthBitsPerSecond: number;
    } | null;
  } | null;
  price: Price;
  provider: string;
  requirements: {
    address: "none" | "present" | "verified";
    "user.birthday": "none" | "present" | "verified";
    "user.fullName": "none" | "present" | "verified";
    device: "none" | "present";
  };
  simTypes: SimType[];
  status: "available" | "archived" | "pending" | "draft";
  validity: {
    value: number;
    unit: "day" | "month";
    type: "oneTime" | "recurring";
    minimumPeriods: number;
  };
  createdAt: string;
};

type SimType = "eSIM" | "pSIM";
