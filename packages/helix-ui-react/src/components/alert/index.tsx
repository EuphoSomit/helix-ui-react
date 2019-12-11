import React, { useEffect } from 'react';

export interface IAlertProps {
  children: React.ReactNode;
  cta: string;
  onSubmit: () => void;
  type: 'info' | 'warning' | 'error' | 'success';
}

const Alert = ({ children, cta, onSubmit, type, ...rest }: IAlertProps) => {
  let hxRef: any = null;

  useEffect(() => {
    if (hxRef) {
      hxRef.addEventListener('submit', onSubmit);
    }

    return () => {
      if (hxRef) {
        hxRef.removeEventListener('submit', onSubmit);
      }
    };
  }, []);

  const setRef = (element: object) => {
    hxRef = element;
  };

  return (
    <div>
      <hx-alert
        cta={cta}
        persist={false}
        ref={setRef}
        status={type}
        type={type}
        {...rest}
      >
        {children}
      </hx-alert>
    </div>
  );
};

export default Alert;
