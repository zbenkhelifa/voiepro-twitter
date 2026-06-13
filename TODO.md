# TODO — Bot de publication automatique VoiePro

## Contexte
Bot de publication automatique sur les thèmes : stages, alternance, apprentissage.
57 posts prêts, sélection déterministe par jour de l'année (pas de répétition dans l'année).
GitHub Actions configuré pour poster lun/mer/ven à 9h (heure française).

## Twitter/X — Abandonné
- ✅ Repo créé et pushé sur GitHub (`zbenkhelifa/voiepro-twitter`)
- ✅ Workflow GitHub Actions configuré (`auto-tweet.yml`)
- ✅ Authentification OAuth 1.0a fonctionnelle (`x-access-level: read-write`)
- ❌ Plan gratuit ne permet plus de poster via API (erreur 402 CreditsDepleted)
- 💸 Plan Basic = $100/mois → abandonné

## LinkedIn — En cours
- ✅ Décidé : page entreprise VoiePro
- ✅ Repo séparé créé : `zbenkhelifa/voiepro-linkedin`
- ✅ Script `post-linkedin.js` (Posts API v202401, scope `w_organization_social`)
- ✅ Workflow GitHub Actions configuré (`auto-post.yml`)
- ✅ 57 posts copiés dans `posts.json`
- [ ] Récupérer l'Organization ID de la page LinkedIn VoiePro
- [ ] Créer une app sur `linkedin.com/developers` liée à la page VoiePro
- [ ] Activer le produit **"Share on LinkedIn"**
- [ ] Générer un token OAuth 2.0 avec scope `w_organization_social`
- [ ] Ajouter les 2 secrets GitHub dans `voiepro-linkedin` :
  - `LINKEDIN_ACCESS_TOKEN`
  - `LINKEDIN_ORGANIZATION_ID`
- [ ] Tester la publication via "Run workflow"

## Notes techniques LinkedIn
- Repo : `https://github.com/zbenkhelifa/voiepro-linkedin`
- API utilisée : Posts API (`https://api.linkedin.com/rest/posts`) — version 202401
- Token d'accès : expire tous les 60 jours → à régénérer manuellement
- Scope nécessaire : `w_organization_social`
- Organization ID : visible dans l'URL de la page admin (`linkedin.com/company/{ID}/`)
