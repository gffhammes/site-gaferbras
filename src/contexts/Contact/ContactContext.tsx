import { createContext, ReactNode, useMemo, useState } from "react";

interface IContactContextProviderProps {
  children: ReactNode;
}

interface IContactContext {
  cnpj: string;
  defaultMail: string;
  recruitingMail: string;
  contactFormMail: string;
  phone: string;
  formattedPhone: string;
  whatsapp: string;
  address: string;
  facebookUrl: string;
  instagramUrl: string;
  linkedinUrl: string;
}

export const defaultContactContext = {
  cnpj: "",
  defaultMail: "",
  recruitingMail: "",
  contactFormMail: "",
  phone: "",
  formattedPhone: "",
  whatsapp: "",
  address: "",
  facebookUrl: "",
  instagramUrl: "",
  linkedinUrl: "",
};

export const ContactContext = createContext<IContactContext>(
  defaultContactContext
);

export const ContactContextProvider = ({
  children,
}: IContactContextProviderProps) => {
  const contactData = {
    telefone: "4734391500",
    cnpj: "01.004.509/0001-75",
    email: "contato@gaferbras.com.br",
    emailTrabalheConosco: "contato@gaferbras.com.br",
    emailFormulario: "contato@gaferbras.com.br",
    whatsapp: "4734391500",
    endereco: "R. Santa Edviges, 272 - Vila Nova, Joinville/SC",
    urlFacebook: "/",
    urlInstagram: "/",
    urlLinkedin: "/",
  };

  const formattedPhone = useMemo(() => {
    const ddd = contactData?.telefone.slice(0, 2);
    const firstHalf = contactData?.telefone.slice(2, 6);
    const secondHalf = contactData?.telefone.slice(6, 10);

    return `(${ddd}) ${firstHalf}-${secondHalf}`;
  }, [contactData?.telefone]);

  const contextValue = {
    cnpj: contactData?.cnpj,
    defaultMail: contactData?.email,
    recruitingMail: contactData?.emailTrabalheConosco,
    contactFormMail: contactData?.emailFormulario,
    phone: contactData?.telefone,
    formattedPhone,
    whatsapp: contactData?.whatsapp,
    address: contactData?.endereco,
    facebookUrl: contactData?.urlFacebook,
    instagramUrl: contactData?.urlInstagram,
    linkedinUrl: contactData?.urlLinkedin,
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};
