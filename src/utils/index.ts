import {
  isRawV3Document,
  OpenAttestationDocument,
  RawVerifiableCredential,
  SignedVerifiableCredential,
  vc,
} from "@trustvc/trustvc";

/**
 * This function is necessary to extract the document data from the data. It makes decentralized renderer templates compatible with v2, v3 and w3c vc document version.
 * @param {OpenAttestationDocument | SignedVerifiableCredential | RawVerifiableCredential} document - The document itself.
 * @returns {document} The extracted data from the document.
 */
export const getDocumentData = (
  document: OpenAttestationDocument | SignedVerifiableCredential | RawVerifiableCredential
): any => {
  if (isRawV3Document(document) || vc.isSignedDocument(document) || vc.isRawDocument(document)) {
    return document.credentialSubject;
  } else {
    return document;
  }
};
