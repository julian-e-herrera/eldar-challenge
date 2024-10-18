import { useState } from 'react';

export const useToast = () => {
  const [show, setShow] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const showToast = (msg: string) => {
    setMessage(msg);
    setShow(true);
  };

  const hideToast = () => {
    setShow(false);
    setMessage('');
  };

  return {
    show,
    message,
    showToast,
    hideToast,
  };
}
