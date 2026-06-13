# TODO — Bot de publication automatique VoiePro

## Contexte
Bot de publication automatique sur les thèmes : stages, alternance, apprentissage.
57 tweets prêts dans `tweets.json`, sélection déterministe par jour de l'année.
GitHub Actions configuré pour poster lun/mer/ven à 9h (heure française).

## Twitter/X — Abandonné
- ✅ Repo créé et pushé sur GitHub (`zbenkhelifa/voiepro-twitter`)
- ✅ Workflow GitHub Actions configuré (`auto-tweet.yml`)
- ✅ Authentification OAuth 1.0a fonctionnelle (`x-access-level: read-write`)
- ❌ Plan gratuit ne permet plus de poster via API (erreur 402 CreditsDepleted)
- 💸 Plan Basic = $100/mois → trop cher pour ~12 tweets/mois

## LinkedIn — À faire
- [ ] Décider : page entreprise VoiePro ou profil personnel ?
- [ ] Décider : même repo ou repo séparé ?
- [ ] Créer une app sur `linkedin.com/developers`
- [ ] Activer le produit "Share on LinkedIn"
- [ ] Générer un token OAuth 2.0 initial (via navigateur)
- [ ] Adapter le script `post-tweet.js` → `post-linkedin.js`
- [ ] Configurer les secrets GitHub pour LinkedIn
- [ ] Adapter le workflow GitHub Actions
- [ ] Tester la publication

## Notes techniques LinkedIn
- Token d'accès : expire tous les 60 jours
- Refresh token : valide 365 jours (à stocker en secret GitHub)
- Scope nécessaire : `w_member_social` (profil) ou `w_organization_social` (page entreprise)
- API à utiliser : UGC Posts API (`https://api.linkedin.com/v2/ugcPosts`)
