# 0007 – Vercel nur für Preview und späteres Hosting

Status: entschieden (2026-07-21)

## Kontext

Astro-Projekte werden häufig über Vercel gehostet. Eine Verbindung erfordert einen Vercel-Account und Zugangsdaten, die in dieser Arbeitsumgebung nicht vorliegen.

## Entscheidung

Vercel ist der vorgesehene spätere Hosting-/Preview-Dienst. In diesem Auftrag wird **keine** Verbindung hergestellt — nur dokumentiert und vorbereitet (`docs/deployment/vercel-preparation.md`).

## Begründung

- Zugangsdaten-Beschaffung ist Autonomiestufe ROT (`12_AI_SYSTEM/03_github-autonomy.md`) — nie ohne Ramin.
- Vorbereitung (Root Directory, Build/Install Command, Node-Version) kann unabhängig von einer echten Verbindung dokumentiert werden.

## Konsequenzen

- Sobald Ramin einen Vercel-Account verbindet, kann `apps/website` ohne weitere Repository-Änderungen als Root Directory eingetragen werden.
- Kein automatisches Live-Deployment entsteht durch diesen Auftrag.
