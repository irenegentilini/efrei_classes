import { validateMessage, replyTo } from './brain.js';

document.querySelector('#status').textContent = 'Votre point de départ est prêt.';

const formulaire = document.querySelector('#chat-form');
const statut = document.querySelector('#status');
const versionElt = document.querySelector('#version');
const submit = document.querySelector('#submit');


const champ = document.querySelector('#message');
const messages = document.querySelector('#messages');

// J1 : interface seule, on bloque l’envoi et on l’explique.
formulaire?.addEventListener('submit', (event) => {
  event.preventDefault();

  //const texte = champ.value.trim();

  /*if (texte === "") {
    statut.textContent = 'Le message ne doit pas être vide.';
    champ.focus()
    champ.value = ""
    return;
  }
  else {
    var li = document.createElement("li");
    li.textContent = "Vous : "+ champ.value.trim();
    messages.appendChild(li);
    champ.value = ""
    champ.focus()
  }*/

  const result = validateMessage(champ.value);

  if (!result.ok) {
    statut.textContent = result.error;
    champ.focus()
    champ.value = ""
    return;
  }
  else {
    var liVous = document.createElement("li");
    liVous.textContent = "Vous : "+ result.value;
    messages.appendChild(liVous);
    var liChatbot = document.createElement("li");
    liChatbot.textContent = "Cap Web : "+ replyTo(champ.value);
    messages.appendChild(liChatbot);
    champ.value = "";
    champ.focus()
  }

  if (statut) {
    statut.textContent = 'Interface prête ; les réponses arrivent au J2.';
  }

});

// Version du serveur local, échec discret si indisponible.
fetch('/version.json', { headers: { accept: 'application/json' } })
  .then((reponse) => (reponse.ok ? reponse.json() : null))
  .then((donnees) => {
    if (donnees && typeof donnees.version === 'string' && versionElt) {
      versionElt.textContent = `version ${donnees.version}`;
    }
  })
  .catch(() => {});