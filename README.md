<style>
  .subTitle{
    color: red;
  }
  .path{
    font-weight: bolder;
  }
</style>


# introduzione
Questo repository contiene tutte le risorse e le istruzioni necessarie per personalizzare il tema dell'account utente in Keycloak. Keycloak, un open-source Identity and Access Management solution, offre flessibilità nella gestione degli utenti, delle sessioni, e nella sicurezza delle applicazioni. L'applicazione del tema e` stato possibile sfruttando la base messa a disposizione da https://github.com/keycloakify/keycloakify-starter.

# Il tema
keycloakify offre la possibilità di customizzare in profondità ogni pagina di keycloak tramite la libreria di <strong>REACT</strong>.
Per aderirire alle linee guida della publica amministrazione e` stato scelto <strong>Bootstrap-italia</strong> che permette un rapido sviluppo del frontend mantenedo lo stile che caratterizza i le pagine web dei servizi pubblici...


# I File Aggiunti
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
  <!-- <li>
    <strong class="subTitle">Totp.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li> -->
  <li>
    <strong class="subTitle">Applications.tsx</strong> situato in <span class="path">/src/App/keycloak-theme/account/pages</span>
  </li>
</ul>

Che sono principalmente responsabili di visualizzare i relativi form per la modifica dei dati personali, per la modifica della password, visualizzare le sessioni e visualizzare i client e relativi ruoli / permessi

# I File Modificati

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

# Assets
Tutti i file che si vogliono utilizzare all'interno del progento dovrebbero essere poszionati in <strong>/src/Appkeycloak-theme/NOME-TEMA/assets</strong>.
In questa cartella possiamo inserire Font, file js, file css e immagini.
sara` poi possibile urilizzarli nel progetto tramite <strong>import</strong>

# Compilazione e Startup
È possibile compilare il progetto tramite il comando
<strong>yarn install</strong> (solo la prima volta)
<strong>yarn build-keycloak-theme</strong>
verra' generata la cartella dist_keycloak nella quale e' presente uno script atto a testare il tema sviluppato facendo partire un container con dentro keycloak e il nostro tema.
Sara' presente inoltre la cartella /dist_keycloak/target dove troveremo il .jar che contiene il nostro tema potendolo cosi importare nella cartella providers di keycloak

È possibile modificare il nome del tema in <strong>vite.config.ts</strong> modificando la proprieta' themeName (riga 16).