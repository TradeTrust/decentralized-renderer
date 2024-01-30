import { TemplateRegistry } from "@tradetrust-tt/decentralized-renderer-react-components";
import { TemplateATemplates } from "./TemplateA";
import { TemplateBTemplates } from "./TemplateB";

export const registry: TemplateRegistry<any> = {
  TEMPLATE_A: TemplateATemplates,
  TEMPLATE_B: TemplateBTemplates,
  };