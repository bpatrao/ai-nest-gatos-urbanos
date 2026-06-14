import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "pt" | "en";

type Dict = Record<string, string>;

const pt: Dict = {
  "nav.about": "Sobre Nós",
  "nav.what": "O Que Fazemos",
  "nav.adopt": "Adotar",
  "nav.help": "Como Ajudar",
  "nav.contact": "Contactos",
  "cta.adopt": "Quero adotar",
  "cta.help": "Quero ajudar",
  "cta.learn": "Saber mais",
  "lang.toggle": "EN",

  "home.tag": "Associação de proteção animal · Coimbra",
  "home.title": "Proteção e bem-estar animal em meio urbano",
  "home.sub": "Desde 2009, o Grupo Gatos Urbanos promove o bem-estar dos animais que partilham os espaços urbanos com as pessoas.",
  "home.slide1.t": "Adota um amigo para a vida",
  "home.slide1.s": "Conhece os nossos gatos à espera de família",
  "home.slide2.t": "Ajuda-nos a ajudar",
  "home.slide2.s": "Donativos, voluntariado, acolhimento temporário",
  "home.slide3.t": "CED — Capturar, Esterilizar, Devolver",
  "home.slide3.s": "Uma resposta digna e humana à sobrepopulação de animais de rua",
  "home.slide4.t": "Sê família de acolhimento temporário",
  "home.slide4.s": "Acolhe temporariamente um animal que precisa de um lar",

  "home.impact.title": "O nosso impacto",
  "home.impact.s1": "Gatos resgatados",
  "home.impact.s2": "Esterilizações",
  "home.impact.s3": "Adoções felizes",
  "home.impact.s4": "Voluntários ativos",

  "adoptPopup.title": "Quer adotar?",
  "adoptPopup.body": "Se está interessado em adotar, preencha o nosso formulário. Entraremos em contacto consigo.",
  "adoptPopup.cta": "Formulário de adoção",
  "adoptPopup.later": "Mais tarde",

  "about.title": "Sobre Nós",
  "about.lead": "Somos uma associação de proteção animal, legalmente constituída, dedicada à defesa dos animais mais carenciados.",
  "about.mission.t": "Missão",
  "about.mission.b": "Promover o bem-estar dos animais que partilham os espaços urbanos com os seres humanos.",
  "about.vision.t": "Visão",
  "about.vision.b": "Equilibrar os espaços urbanos, os animais e as pessoas, reduzindo a população animal através da esterilização.",
  "about.values.t": "Atuação",
  "about.values.b": "Resgate e socorro, programas CED, apoio a animais de colónia, adoção e divulgação de boas práticas de proteção animal.",
  "about.team.title": "Associação Grupo Gatos Urbanos",
  "about.team.sub": "Órgãos sociais eleitos em Assembleia Geral a 28 de fevereiro de 2026, para o mandato 2026–2029.",
  "about.org.title": "Órgãos Sociais",

  "what.title": "O Que Fazemos",
  "what.lead": "Protegemos animais em risco e promovemos uma convivência mais equilibrada entre animais, pessoas e espaços urbanos.",
  "what.ced.t": "CED — Capturar, Esterilizar, Devolver",
  "what.ced.b": "O CED contribui para reduzir o número de animais de rua de forma digna e humana. Após o diagnóstico da colónia, os gatos são capturados, esterilizados em clínicas parceiras e devolvidos ao local de origem.",
  "what.rescue.t": "Resgate e tratamento",
  "what.rescue.b": "Prestamos socorro e apoio a animais em risco, incluindo alimentação e ajuda veterinária a animais de colónia.",
  "what.adoption.t": "Adoção responsável",
  "what.adoption.b": "Os animais domésticos perdidos ou abandonados que são recolhidos permanecem em acolhimento temporário até encontrarem uma família de adoção permanente.",
  "what.foster.t": "Acolhimento temporário",
  "what.foster.b": "As Famílias de Acolhimento Temporário recebem animais que precisam de um lar enquanto aguardam uma adoção permanente.",
  "what.community.t": "Sensibilização",
  "what.community.b": "Divulgamos informação científica e técnica sobre boas práticas de proteção animal e defendemos políticas centradas no bem-estar dos animais e na sua convivência com as pessoas.",

  "adopt.title": "Adotar um animal",
  "adopt.lead": "Conheça os animais disponíveis e dê início a uma adoção responsável.",
  "adopt.reg.title": "Como funciona a adoção",
  "adopt.reg.lead": "O processo indicado pelo Grupo Gatos Urbanos segue quatro passos simples.",
  "adopt.reg.1.t": "Conheça os animais",
  "adopt.reg.1.b": "Consulte os animais que estão disponíveis para adoção.",
  "adopt.reg.2.t": "Preencha o formulário",
  "adopt.reg.2.b": "Envie o formulário de candidatura à adoção.",
  "adopt.reg.3.t": "Fale com a equipa",
  "adopt.reg.3.b": "A equipa entrará em contacto consigo para realizar uma entrevista.",
  "adopt.reg.4.t": "Leve o novo amigo para casa",
  "adopt.reg.4.b": "Depois da candidatura e da entrevista, poderá receber o seu novo companheiro.",
  "adopt.cta": "Quero conhecer os gatos",

  "adopt.testimonials.title": "Testemunhos de adoção",
  "adopt.testimonials.sub": "Espaço preparado para partilhar histórias reais de famílias adotantes.",
  "adopt.testimonial.1.name": "Testemunho a adicionar",
  "adopt.testimonial.1.text": "Este espaço está reservado para um testemunho real, validado pelo Grupo Gatos Urbanos.",
  "adopt.testimonial.2.name": "Testemunho a adicionar",
  "adopt.testimonial.2.text": "Este espaço está reservado para um testemunho real, validado pelo Grupo Gatos Urbanos.",
  "adopt.testimonial.3.name": "Testemunho a adicionar",
  "adopt.testimonial.3.text": "Este espaço está reservado para um testemunho real, validado pelo Grupo Gatos Urbanos.",

  "help.title": "Como Ajudar",
  "help.lead": "Há várias formas de apoiar os animais e contribuir para melhorar a sua qualidade de vida.",
  "help.donate.t": "Donativo",
  "help.donate.b": "O seu apoio ajuda-nos a salvar vidas e a melhorar a qualidade de vida dos animais.",
  "help.foster.t": "Família de acolhimento",
  "help.foster.b": "Pode acolher temporariamente um animal que precisa de um lar, através da candidatura a Família de Acolhimento Temporário.",
  "help.volunteer.t": "Voluntariado",
  "help.volunteer.b": "Pode ajudar no resgate e socorro de animais, nos transportes para assistência médica, na alimentação de colónias e noutras tarefas.",
  "help.supplies.t": "Doação de bens",
  "help.supplies.b": "Aceitamos bens como comida, medicamentos, brinquedos e mantas. Para oferecer alimentação, contacte-nos por email.",
  "help.member.t": "Seja sócio/a",
  "help.member.b": "Junte-se ao Grupo Gatos Urbanos. A inscrição tem uma jóia única de 10 € e uma quota mensal de 3 €.",
  "help.member.cta": "Ficha de inscrição de sócio",
  "help.foster.cta": "Candidatura a família de acolhimento",
  "help.iban": "IBAN para donativos",
  "help.paypal": "PayPal",
  "help.mbway": "MB WAY",
  "help.copy": "Copiar IBAN",
  "help.copied": "IBAN copiado",

  "contact.title": "Contactos",
  "contact.lead": "Estamos sempre disponíveis para falar contigo.",
  "contact.area": "Área de atuação",
  "contact.area.b": "Coimbra",
  "contact.email": "Email",
  "contact.social": "Redes sociais",
  "contact.form.title": "Envia-nos uma mensagem",
  "contact.form.name": "Nome",
  "contact.form.email": "Email",
  "contact.form.subject": "Assunto",
  "contact.form.message": "Mensagem",
  "contact.form.send": "Enviar mensagem",
  "contact.form.sent": "Mensagem pronta a enviar — abrimos o teu cliente de email.",

  "footer.tag": "Associação de proteção animal · Coimbra",
  "footer.rights": "Todos os direitos reservados.",
};

const en: Dict = {
  "nav.about": "About Us",
  "nav.what": "What We Do",
  "nav.adopt": "Adopt",
  "nav.help": "How to Help",
  "nav.contact": "Contact",
  "cta.adopt": "I want to adopt",
  "cta.help": "I want to help",
  "cta.learn": "Learn more",
  "lang.toggle": "PT",

  "home.tag": "Animal protection association · Coimbra",
  "home.title": "Animal protection and welfare in urban spaces",
  "home.sub": "Since 2009, Grupo Gatos Urbanos has promoted the welfare of animals who share urban spaces with people.",
  "home.slide1.t": "Adopt a friend for life",
  "home.slide1.s": "Meet our cats waiting for a family",
  "home.slide2.t": "Help us help them",
  "home.slide2.s": "Donations, volunteering, temporary fostering",
  "home.slide3.t": "CNR — Capture, Neuter, Return",
  "home.slide3.s": "A dignified and humane response to street-animal overpopulation",
  "home.slide4.t": "Become a foster family",
  "home.slide4.s": "Temporarily foster an animal in need of a home",

  "home.impact.title": "Our impact",
  "home.impact.s1": "Cats rescued",
  "home.impact.s2": "Sterilizations",
  "home.impact.s3": "Happy adoptions",
  "home.impact.s4": "Active volunteers",

  "adoptPopup.title": "Interested in adopting?",
  "adoptPopup.body": "If you are interested in adopting, please fill out our form. We will get in touch with you.",
  "adoptPopup.cta": "Adoption form",
  "adoptPopup.later": "Later",

  "about.title": "About Us",
  "about.lead": "We are a legally established animal protection association dedicated to protecting animals in greatest need.",
  "about.mission.t": "Mission",
  "about.mission.b": "To promote the welfare of animals who share urban spaces with human beings.",
  "about.vision.t": "Vision",
  "about.vision.b": "To balance urban spaces, animals and people by reducing animal populations through sterilization.",
  "about.values.t": "Our work",
  "about.values.b": "Rescue and assistance, CNR programmes, support for colony animals, adoption and sharing good animal-protection practices.",
  "about.team.title": "Grupo Gatos Urbanos Association",
  "about.team.sub": "Governing bodies elected at the General Assembly on 28 February 2026 for the 2026–2029 term.",
  "about.org.title": "Board",

  "what.title": "What We Do",
  "what.lead": "We protect animals at risk and promote a more balanced coexistence between animals, people and urban spaces.",
  "what.ced.t": "CNR — Capture, Neuter, Return",
  "what.ced.b": "CNR helps reduce the number of street animals in a dignified and humane way. After assessing the colony, cats are captured, sterilized at partner clinics and returned to where they were found.",
  "what.rescue.t": "Rescue and treatment",
  "what.rescue.b": "We rescue and support animals at risk, including providing food and veterinary assistance to colony animals.",
  "what.adoption.t": "Responsible adoption",
  "what.adoption.b": "Lost or abandoned domestic animals rescued from the streets remain in temporary foster care until a permanent adoptive family is found.",
  "what.foster.t": "Temporary fostering",
  "what.foster.b": "Temporary Foster Families host animals in need of a home while they await permanent adoption.",
  "what.community.t": "Awareness",
  "what.community.b": "We share scientific and technical information on good animal-protection practices and advocate for policies focused on animal welfare and coexistence with people.",

  "adopt.title": "Adopt an animal",
  "adopt.lead": "Meet the available animals and begin a responsible adoption.",
  "adopt.reg.title": "How adoption works",
  "adopt.reg.lead": "The process described by Grupo Gatos Urbanos follows four simple steps.",
  "adopt.reg.1.t": "Meet the animals",
  "adopt.reg.1.b": "View the animals currently available for adoption.",
  "adopt.reg.2.t": "Complete the form",
  "adopt.reg.2.b": "Submit the adoption application form.",
  "adopt.reg.3.t": "Talk to the team",
  "adopt.reg.3.b": "The team will contact you to arrange an interview.",
  "adopt.reg.4.t": "Take your new friend home",
  "adopt.reg.4.b": "After the application and interview, you can welcome your new companion.",
  "adopt.cta": "I want to meet the cats",

  "adopt.testimonials.title": "Adoption testimonials",
  "adopt.testimonials.sub": "A space ready to share real stories from adoptive families.",
  "adopt.testimonial.1.name": "Testimonial to be added",
  "adopt.testimonial.1.text": "This space is reserved for a real testimonial validated by Grupo Gatos Urbanos.",
  "adopt.testimonial.2.name": "Testimonial to be added",
  "adopt.testimonial.2.text": "This space is reserved for a real testimonial validated by Grupo Gatos Urbanos.",
  "adopt.testimonial.3.name": "Testimonial to be added",
  "adopt.testimonial.3.text": "This space is reserved for a real testimonial validated by Grupo Gatos Urbanos.",

  "help.title": "How to Help",
  "help.lead": "There are several ways to support the animals and help improve their quality of life.",
  "help.donate.t": "Donate",
  "help.donate.b": "Your support helps us save lives and improve the animals' quality of life.",
  "help.foster.t": "Foster family",
  "help.foster.b": "You can temporarily foster an animal in need of a home by applying to become a foster family.",
  "help.volunteer.t": "Volunteer",
  "help.volunteer.b": "You can help rescue animals, transport them to medical care, feed colonies and support other tasks.",
  "help.supplies.t": "Supplies",
  "help.supplies.b": "We accept goods such as food, medication, toys and blankets. To offer animal food, please contact us by email.",
  "help.member.t": "Become a member",
  "help.member.b": "Join Grupo Gatos Urbanos. Membership has a one-time €10 registration fee and a €3 monthly fee.",
  "help.member.cta": "Membership application form",
  "help.foster.cta": "Foster family application",
  "help.iban": "IBAN for donations",
  "help.paypal": "PayPal",
  "help.mbway": "MB WAY",
  "help.copy": "Copy IBAN",
  "help.copied": "IBAN copied",

  "contact.title": "Contact",
  "contact.lead": "We're always available to talk.",
  "contact.area": "Area of operation",
  "contact.area.b": "Coimbra",
  "contact.email": "Email",
  "contact.social": "Social media",
  "contact.form.title": "Send us a message",
  "contact.form.name": "Name",
  "contact.form.email": "Email",
  "contact.form.subject": "Subject",
  "contact.form.message": "Message",
  "contact.form.send": "Send message",
  "contact.form.sent": "Message ready — we opened your email client.",

  "footer.tag": "Animal protection association · Coimbra",
  "footer.rights": "All rights reserved.",
};

const dicts: Record<Lang, Dict> = { pt, en };

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };
const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    const saved = typeof window !== "undefined" ? (localStorage.getItem("lang") as Lang | null) : null;
    if (saved === "pt" || saved === "en") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") localStorage.setItem("lang", l);
  };

  const t = (k: string) => dicts[lang][k] ?? k;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}
