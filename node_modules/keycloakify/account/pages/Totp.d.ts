/// <reference types="react" />
import type { PageProps } from "../../account/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
export default function Totp(props: PageProps<Extract<KcContext, {
    pageId: "totp.ftl";
}>, I18n>): JSX.Element;
