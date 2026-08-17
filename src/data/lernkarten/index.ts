import type { Lernkarte } from "../types";
import { gitGrundlagenLernkarten } from "./git-grundlagen";
import { githubZusammenarbeitLernkarten } from "./github-zusammenarbeit";
import { kommandozeilePowershellLernkarten } from "./kommandozeile-powershell";
import { laufzeitumgebungenSprachenLernkarten } from "./laufzeitumgebungen-sprachen";
import { librariesAbhaengigkeitenLernkarten } from "./libraries-abhaengigkeiten";
import { entwicklungswerkzeugeLernkarten } from "./entwicklungswerkzeuge";
import { webGrundlagenLernkarten } from "./web-grundlagen";
import { buildToolsBundlerLernkarten } from "./build-tools-bundler";
import { serverHostingLernkarten } from "./server-hosting";
import { datenbankenGrundlagenLernkarten } from "./datenbanken-grundlagen";
import { cloudDevopsGrundlagenLernkarten } from "./cloud-devops-grundlagen";
import { kiAssistentenAgenticCodingLernkarten } from "./ki-assistenten-agentic-coding";
import { lokaleLlmsLernkarten } from "./lokale-llms";
import { erpSystemeLernkarten } from "./erp-systeme";
import { sicherheitGutePraxisLernkarten } from "./sicherheit-gute-praxis";
import { instandhaltungElektrotechnikLernkarten } from "./instandhaltung-elektrotechnik";
import { schweissenMetallbauLernkarten } from "./schweissen-metallbau";
import { agentSkillsPluginsLernkarten } from "./agent-skills-plugins";

export const lernkarten: Lernkarte[] = [
  ...gitGrundlagenLernkarten,
  ...githubZusammenarbeitLernkarten,
  ...kommandozeilePowershellLernkarten,
  ...laufzeitumgebungenSprachenLernkarten,
  ...librariesAbhaengigkeitenLernkarten,
  ...entwicklungswerkzeugeLernkarten,
  ...webGrundlagenLernkarten,
  ...buildToolsBundlerLernkarten,
  ...serverHostingLernkarten,
  ...datenbankenGrundlagenLernkarten,
  ...cloudDevopsGrundlagenLernkarten,
  ...kiAssistentenAgenticCodingLernkarten,
  ...lokaleLlmsLernkarten,
  ...erpSystemeLernkarten,
  ...sicherheitGutePraxisLernkarten,
  ...instandhaltungElektrotechnikLernkarten,
  ...schweissenMetallbauLernkarten,
  ...agentSkillsPluginsLernkarten,
];
