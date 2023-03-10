import { Manifest } from "deno-slack-sdk/mod.ts";
import { FindGIFFunction } from "./functions/find_gif.ts";
import { GiveKudosWorkflow } from "./workflows/give_kudos.ts";

export default Manifest({
  name: "give-kudos-app",
  description: "Brighten someone's day with a heartfelt thank you",
  icon: "assets/icon.png",
  functions: [FindGIFFunction],
  workflows: [GiveKudosWorkflow],
  outgoingDomains: [],
  botScopes: ["commands", "chat:write", "chat:write.public"],
});
