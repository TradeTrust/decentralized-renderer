import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { BillOfLadingTemplates } from "./BillOfLading";
import { CoveringLetterTemplates } from "./CoveringLetter";
import { InvoiceTemplates } from "./Invoice";
import { XMLRendererTemplate } from "./XmlRenderer";

export const registry: TemplateRegistry<any> = {
  BILL_OF_LADING: BillOfLadingTemplates,
  COVERING_LETTER: CoveringLetterTemplates,
  INVOICE: InvoiceTemplates,
  XML_RENDERER: XMLRendererTemplate,
};