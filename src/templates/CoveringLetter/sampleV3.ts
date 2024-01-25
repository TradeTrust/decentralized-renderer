import { v3 } from "@tradetrust-tt/tradetrust";
import { CoveringLetterSchemaV3 } from "./types";

export const CoveringLetterSampleV3: CoveringLetterSchemaV3 = {
  "@context": [
    "https://www.w3.org/2018/credentials/v1",
    "https://schemata.openattestation.com/io/tradetrust/cover-letter/1.0/cover-letter-context.json",
    "https://schemata.openattestation.com/com/openattestation/1.0/OpenAttestation.v3.json",
  ],
  type: ["VerifiableCredential", "OpenAttestationCredential"],
  issuanceDate: "2010-01-01T19:23:24Z",
  credentialSubject: {
    title: "Documents Bundle",
    remarks: "Some very important documents in here for some submission. And it supports multiline!",
    titleColor: "rgb(204, 119, 17)",
    remarksColor: "rgb(85, 170, 153)",
    logo: "",
  },
  openAttestationMetadata: {
    template: {
      type: v3.TemplateType.EmbeddedRenderer,
      name: "COVERING_LETTER",
      url: "https://generic-templates.tradetrust.io",
    },
    proof: {
      type: v3.ProofType.OpenAttestationProofMethod,
      method: v3.Method.DocumentStore,
      value: "0x71D28767662cB233F887aD2Bb65d048d760bA694",
      revocation: { type: v3.RevocationType.None },
    },
    identityProof: {
      type: v3.IdentityProofType.DNSTxt,
      identifier: "example.tradetrust.io",
    },
  },
  issuer: {
    id: "https://example.com",
    name: "DEMO DOCUMENT STORE",
  },
};
