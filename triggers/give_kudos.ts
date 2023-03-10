import { Trigger } from "deno-slack-api/types.ts";

const trigger: Trigger = {
  type: "shortcut",
  name: "Slap a friend",
  description: "Broadcast your appreciation with kind words and a GIF",
  workflow: "#/workflows/give_kudos_workflow",
  inputs: {
    interactivity: {
      value: "{{data.interactivity}}",
    },
  },
};

export default trigger;
