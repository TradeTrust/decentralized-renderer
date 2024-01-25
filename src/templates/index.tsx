import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { BillOfLadingTemplates } from "./BillOfLading";
import { InvoiceTemplates } from "./Invoice";
import { XMLRendererTemplate } from "./XmlRenderer";

export const registry: TemplateRegistry<any> = {
  BILL_OF_LADING: BillOfLadingTemplates,
  INVOICE: InvoiceTemplates,
  XML_RENDERER: XMLRendererTemplate,
};