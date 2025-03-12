import { useIntl } from "react-intl";
import { MessageKey } from "@/lib/definitions";

const useTranslate = () => {
  const { formatMessage } = useIntl();

  const t = (id: MessageKey, values = {}) => formatMessage({ id }, values);

  return t;
};

export default useTranslate;
