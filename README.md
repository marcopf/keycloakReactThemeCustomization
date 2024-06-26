

# Introduzione :book:
Questo repository contiene tutte le risorse e le istruzioni necessarie per personalizzare il tema dell'account utente in Keycloak. Keycloak, un open-source Identity and Access Management solution, offre flessibilità nella gestione degli utenti, delle sessioni, e nella sicurezza delle applicazioni. L'applicazione del tema e` stato possibile sfruttando la base messa a disposizione da https://github.com/keycloakify/keycloakify-starter.

# Il tema
keycloakify offre la possibilità di customizzare in profondità ogni pagina di keycloak tramite la libreria di <strong>REACT</strong>.
Per aderirire alle linee guida della pubblica amministrazione e` stato scelto <strong>Bootstrap-italia</strong> che permette un rapido sviluppo del frontend mantenedo lo stile che caratterizza i le pagine web dei servizi pubblici...


# File Aggiunti :heavy_plus_sign:
Come precedentemente accennato la base e` quella messa a disposizione da keycloakify aggiungendo dei file relativi alla pagina di <strong>Account Management</strong>, di seguito l'elenco dei file aggiunti.
<ul>
  <li>
    <strong class="subTitle">Account.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
  <li>
    <strong class="subTitle">Password.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
  <li>
    <strong class="subTitle">Sessions.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
  <li>
    <strong class="subTitle">Applications.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
  <li>
    <strong class="subTitle">DynamicAttribute.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
  <li>
    <strong class="subTitle">OtpSection.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
  <li>
    <strong class="subTitle">Header.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account</span>
  </li>
  <li>
    <strong class="subTitle">Footer.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account</span>
  </li>
</ul>

Che sono principalmente responsabili di visualizzare i relativi form per la modifica dei dati personali di default e <strong>custom</strong>, per la modifica della password, visualizzare le sessioni e visualizzare i client e relativi ruoli / permessi, i file Header.tsx e Footer.tsx invece servono lo scopo di organizzare meglio il codice rendendolo piu "modulare".

# Attributi Dinamici

In keycloak 23 non era possibile (di default) aggiungere attributi dinamici per il form di registrazione utente. Essendo il tema messo a disposizione da <strong>keycloakify</strong> abbastanza vecchio, per implementare questa funzionalita' e' stata integrata la creazione dinamica del form mediante i dati ricevuti dal server kyecloak stesso di seguito una descrizione dei passaggi effettuati:
<ul>
  <li>
    <strong>Richiesta Access_Token</strong><br>
      viene dapprima effettuata una richiesta al server di keycloak per ottenere un'access token che verra' utilizzato in seguito per ottenere i dati necessari.
      la richiesta e' di tipo <strong>OAUTH2</strong> con <strong>PKCE</strong>.
  </li>
  <br>
  <li>
    <strong>Richiesta dati relativi agli attributi</strong><br>
      Tramite <strong>FETCH</strong> viene effettuata una chiamata al server di keycloak per ottenere le informazioni relative agli attributi come ad esempio nome, displayName e validators collegati.<br>
      In questa richiesta viene aggiunto il token precedentemente ottenuto nell'header nel campo Authorization: Bearer >token<.
  </li>
  <br>
  <li>
    <strong>Creazione degli attributi Dinamici</strong><br>
      Arrivati a questo punto abbiamo tutto, basta ciclare l'array con le informazioni ottenuto da keycloak e generare il relativo codice html basandoci su quest'ultimo, per fare cio' e' stata usata la funzione map escludendo gli attributi di default che rimangono invece "Hard Coded" (si puo' tranquillamente modificare questo comportamento).
  </li>
</ul>
Il file in cui viene svolto il tutto e' <strong class="subTitle">DynamicAttribute.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>

# Otp Configuration :closed_lock_with_key:
Nel tema di base messo a disposizione da keycloakIfy la sezione otp carica un "card" a destra della sidebar principale,per emulare meglio quello che e' il piu' recente tema di keycloak la parte <strong>OTP</strong> e' stata implementata insieme al form di cambio password nella sezione <strong>Sign In</strong> della sidebar, per fare cio' e' stato implementato un meccanismo simile a quello usato per gli attributi dinamici andando pero' a chiamare l'endpoint che fornisce dati relativi all'otp passando sempre l'access_token ricevuto tramite l'endpoint di autenticazione.
In <strong>/src/App/keycloak-theme/account/pages/OtpSection.tsx</strong> viene definito il componente responsabile della gestione delle configurazioni <strong>OTP</strong>, componente che vinene poi implementato in <strong>/src/App/keycloak-theme/account/pages/Password.tsx</strong>.
Ulteriori dettagli sul funzionamento possono essere trovati nei commenti all'interno codice stesso.

# File Modificati :pencil2:

Per implementare boostrap-italia e integrare le pagine prima citate sono stati modificati i seguenti file:

<ul>
  <li>
    <strong class="subTitle">Template.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account</span><br>
    In cui e` stato aggiunto l'header e il footer di <strong>Bootstrap-italia</strong>, header nel quale sono stati poi innestati i link per la navigazione del pannello di controllo. All'interno del file il campo {children} definisce dove le varie viste verranno inserite.
  </li><br>
  <li>
    <strong class="subTitle">KcApp.css</strong> situato in <span class="path">/src/App/keycloak-theme/account/</span><br>E` stato utilizzato per inserire il font di <strong>Bootstrap-italia</strong> ma in generale e` possibile applicare sile globale all'interno di questo file.
  </li><br>
  <li>
    <strong class="subTitle">i18n.ts</strong> situato in <span class="path">/src/App/keycloak-theme/account/</span><br>Qui e` possibile definire i label da inserire per espandere quelli gia presenti in keycloak. Nel file e' presente un semplice commento che specifica la sintassi da seguire.
    
  </li><br>
  <li>
    <strong class="subTitle">KcApp.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/</span><br>File nel quale vanno specificati i componenti che verranno importati e nel quale e` presente uno switch case che permette la visualizzazione dinamica delle viste. All'interno della pagina sono presenti semplici commenti che evidenziano i file importati.
    
  </li>
</ul>

# Assets :floppy_disk:
Tutti i file che si vogliono utilizzare all'interno del progento dovrebbero essere poszionati in <strong>/src/Appkeycloak-theme/NOME-TEMA/assets</strong>.
In questa cartella possiamo inserire Font, file js, file css e immagini.
sara` poi possibile urilizzarli nel progetto tramite <strong>import</strong>

# Configurazioni Aggiuntive :wrench:

È possibile modificare il nome del tema in <strong>vite.config.ts</strong> modificando la proprieta' themeName (riga 16).<br>
Nello stesso file e' possibile specificare il domain per gli endpoint di keycloak potendo modificare <strong>Protocollo</strong>, <strong>Ip</strong> e <strong>Porta</strong> in modo semplice e veloce, per quanto riguarda gli endpoint di autorizzazione questi sono ricavati dall'endpoint <strong>WELL KNOW</strong>.

# Compilazione e Startup :rocket:
È possibile compilare il progetto tramite il comando
<strong>yarn install</strong> && <strong>yarn build-keycloak-theme</strong>
verra' generata la cartella dist_keycloak nella quale e' presente uno script atto a testare il tema sviluppato facendo partire un container con dentro keycloak e il nostro tema.
Sara' presente inoltre la cartella /dist_keycloak/target dove troveremo il .jar che contiene il nostro tema potendolo cosi importare nella cartella providers di keycloak
