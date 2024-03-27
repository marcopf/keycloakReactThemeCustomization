import { createUseI18n } from "keycloakify/account";

//NOTE: See src/login/i18n.ts for instructions on customization of i18n messages.
export const { useI18n } = createUseI18n({
    en:{
        defaultAttributes: "Informazioni Base",
        tagLineIstituzione: "Tag line dell'Istituzione",
        enteDiAppartenenza: "Ente di Appartenenza",
        additionalAttributes: "Informazioni Aggiuntive",
        accountSecurity: "Account security",
        signIn: "Sign In",
        deviceActivity: "Device Activity",
    }
    // it, en, ecc: {
    //     labelKey: "actualLabel"
    // }
});


export type I18n = NonNullable<ReturnType<typeof useI18n>>;
