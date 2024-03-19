/// <reference types="react" />
import type { PageProps } from "../../account/pages/PageProps";
import type { KcContext } from "../kcContext";
import type { I18n } from "../i18n";
export default function Applications(props: PageProps<Extract<KcContext, {
    pageId: "applications.ftl";
}>, I18n>): JSX.Element;
