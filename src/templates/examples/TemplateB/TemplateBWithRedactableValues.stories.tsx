import React, { FunctionComponent } from "react";
import { TemplateBWithRedactableValues } from "./TemplateBWithRedactableValues";
import { TemplateBSampleV2 } from "./sampleV2";

export default {
  title: "TemplateB",
  component: TemplateBWithRedactableValues,
  parameters: {
    componentSubtitle: "Sample Template B",
  },
};

export const TemplateWithRedactableValues: FunctionComponent = () => {
  return (
    <TemplateBWithRedactableValues
      document={TemplateBSampleV2}
      handleObfuscation={() => {}}
    />
  );
};
