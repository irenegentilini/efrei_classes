# Suivi — après-midi J1

**Noté. Un fichier par étudiant, écrit avec vos mots.** Une phrase honnête (« j'ai essayé X, j'ai vu Y, je ne comprends pas pourquoi ») rapporte plus qu'une phrase parfaite recopiée.

- Nom :
- Binôme :
- Atelier utilisé (le mien, celui du binôme, la reprise) :

## Pour chaque TP abordé

Recopiez ce bloc autant de fois que nécessaire.

### TP…

- J'ai prédit :
- Nous avons fait :
- J'ai observé :
- J'ai compris :
- Je n'ai pas compris :
- Réponse à la question « Dans le suivi » du TP :

### Tp9

- J'ai prédit : je pensais que jallait juste separer encore et cree le view.js pour que sa sois plus organiser et structurer et que app.js aller continuer a tout afficher 
- Nous avons fait :nous avons cree un  fichier view.js pour afficher les messages dans la page.
Nous avons aussi cree un tableau historique dans app.js pour garder les messages de la conversation.
Dans app.js, nous avons utilisé historique.push() pour ajouter le message de l'utilisateur et la réponse de Cap Web. Ensuite, on utilise renderMessages() pour afficher les messages.
Nous avons aussi modifié server/app.js pour ajouter view.js dans les fichiers autorisés par le serveur.
- J'ai observé :quand j'envoie un message, il reste affiché avec les anciens messages. J'ai aussi observé que si un fichier JavaScript n'est pas autorisé dans le serveur, le navigateur affiche une erreur 404 dans la console.
- J'ai compris :J'ai compris que chaque fichier a maintenant un rôle différent. brain.js s'occupe des règles et des réponses, view.js s'occupe de l'affichage et app.js fait le lien entre les deux.
- Je n'ai pas compris :j'ai aussi rencontré une erreur 404 pour view.js. J'ai utilisé F12 et la console du navigateur pour trouver l'erreur. J'avais fait une erreur dans le type de view.js dans server/app.js, et après correction le problème a été résolu mais jai pas compris pourquoi il fallait lajouter dans les types aussi 
- Réponse à la question « Dans le suivi » du TP :Le rôle de app.js est de gérer l'application et de faire le lien entre les différents fichiers. brain.js contient les règles pour vérifier le message et donner une réponse. view.js s'occupe seulement de l'affichage des messages. L'historique permet de conserver toute la conversation.

## Épreuve de l'explication (TP12)

- Ce que je n'ai pas su expliquer :
- Ce que mon binôme n'a pas su expliquer :

## Trois questions

1. Pourquoi `textContent` et pas `innerHTML` ?
2. Pourquoi trois fichiers plutôt qu'un seul ?
3. Si demain une IA écrit une partie du code, comment saurai-je qu'il est correct ?

## Aides utilisées

- Indices, aide-mémoire, voisins :
- Ce que j'ai demandé à une IA, et comment j'ai vérifié sa réponse :
