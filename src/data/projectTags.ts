// Eén bron van waarheid voor alle "tags" die nieuwsberichten koppelen
// aan ventures of past projects. Nooit meer losse strings rondstrooien.
//
// Toevoegen van een nieuw project? Voeg hier de slug + label toe en gebruik
// `ProjectTags.<key>` overal waar je naar dat project verwijst.

export const ProjectTags = {
  // Live ventures
  oakMarketing: "OAK Marketing",
  postPilot: "PostPilot",
  plugAndPower: "Plug and Power",
  pactly: "Pactly",
  emma: "Emma",

  // Past projects
  aardbeiCommunicatie: "Aardbei Communicatie",
  ledIbc: "LED-IBC",
  entranz: "ENTRANZ",
  designerShirts: "DesignerShirts",
  partyBlender: "PartyBlender",
} as const;

export type ProjectTag = (typeof ProjectTags)[keyof typeof ProjectTags];

// Alle bekende tags als array. handig voor validatie / overzichten.
export const ALL_PROJECT_TAGS: ProjectTag[] = Object.values(ProjectTags);

// Type-guard: check of een willekeurige string een bekende project-tag is.
export const isProjectTag = (value: string): value is ProjectTag =>
  (ALL_PROJECT_TAGS as string[]).includes(value);
