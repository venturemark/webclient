import { MentionNodeData } from "@udecode/slate-plugins";

export const renderLabel =
  (mentionables: MentionNodeData[]) => (mentionable: MentionNodeData) => {
    const entry = mentionables.find((m) => m.value === mentionable.value);
    if (!entry) return "unknown option";
    return `${entry.name} - ${entry.email}`;
  };
