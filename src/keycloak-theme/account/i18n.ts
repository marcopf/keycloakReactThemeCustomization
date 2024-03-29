import { createUseI18n } from "keycloakify/account";

//NOTE: See src/login/i18n.ts for instructions on customization of i18n messages.
export const { useI18n } = createUseI18n({
    en:{
        tagLineIstituzione: "Tag line dell'Istituzione",
        enteDiAppartenenza: "Ente di Appartenenza",
        accountSecurity: "Account security",
        signIn: "Sign In",
    }
    // it, en, ecc: {
    //     labelKey: "actualLabel"
    // }
});


export type I18n = NonNullable<ReturnType<typeof useI18n>>;
