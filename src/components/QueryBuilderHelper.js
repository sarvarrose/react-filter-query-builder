export const defaultRules = {
  fields: [
    { name: "Theme", label: "Theme" },
    { name: "Sub-theme", label: "Sub-theme" },
    { name: "Reason", label: "Reason" },
    { name: "Source", label: "Source" },
    { name: "Rating", label: "Rating" },
    { name: "Time Period", label: "Time Period" },
    { name: "Customer ID", label: "Customer ID" },
  ],
  conditions: [
    { name: "=", label: "Equals" },
    { name: "!=", label: "Does not equal" },
    { name: "LIKE", label: "Like" },
    { name: "Not Like", label: "Not Like" },
    { name: "IS NULL", label: "Is Empty" },
    { name: "IS", label: "Is" },
    { name: "IS NOT", label: "IS NOT" },
  ],
};
