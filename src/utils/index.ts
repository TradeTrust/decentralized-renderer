import { OpenAttestationDocument, utils } from "@tradetrust-tt/tradetrust";

export const getDocumentData = (document: OpenAttestationDocument): any => {
  if (utils.isRawV3Document(document)) {
    return document.credentialSubject;
  } else {
    return document;
  }
};
