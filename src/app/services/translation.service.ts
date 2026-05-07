import { Injectable, signal, computed } from '@angular/core';

export type Language = 'en' | 'pt' | 'fr';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = signal<Language>(this.getInitialLanguage());

  // Traduções (Exemplo inicial, pode ser expandido)
  private translations: any = {
    en: {
      NAV_HOME: 'Home',
      NAV_TEAM: 'Our TCSA Team',
      NAV_MEETING: 'Request A Meeting',
      NAV_SERVICES: 'Services',
      NAV_NETWORK: 'Network',
      NAV_PARTNERS: 'Partner Program',
      NAV_LOGIN: 'Login',
      NAV_DASHBOARD: 'Dashboard',
      NAV_LOGOUT: 'Logout',
      HERO_TITLE: 'We are <span class="highlight">TelCables</span> South Africa',
      HERO_DESC: 'Telcables South Africa is powered by the Angola Cables international network...',
      BTN_EXPLORE: 'Explore Our Network',
      BTN_SERVICES: 'View Services'
    },
    pt: {
      NAV_HOME: 'Início',
      NAV_TEAM: 'Nossa Equipa TCSA',
      NAV_MEETING: 'Solicitar Reunião',
      NAV_SERVICES: 'Serviços',
      NAV_NETWORK: 'Rede',
      NAV_PARTNERS: 'Programa de Parceiros',
      NAV_LOGIN: 'Entrar',
      NAV_DASHBOARD: 'Painel',
      NAV_LOGOUT: 'Sair',
      HERO_TITLE: 'Somos a <span class="highlight">TelCables</span> África do Sul',
      HERO_DESC: 'A Telcables África do Sul é impulsionada pela rede internacional da Angola Cables...',
      BTN_EXPLORE: 'Explorar Nossa Rede',
      BTN_SERVICES: 'Ver Serviços'
    },
    fr: {
      NAV_HOME: 'Accueil',
      NAV_TEAM: 'Notre Équipe TCSA',
      NAV_MEETING: 'Demander une Réunion',
      NAV_SERVICES: 'Services',
      NAV_NETWORK: 'Réseau',
      NAV_PARTNERS: 'Programme de Partenaires',
      NAV_LOGIN: 'Connexion',
      NAV_DASHBOARD: 'Tableau de Bord',
      NAV_LOGOUT: 'Déconnexion',
      HERO_TITLE: 'Nous sommes <span class="highlight">TelCables</span> Afrique du Sud',
      HERO_DESC: 'Telcables Afrique du Sud é alimenté par le réseau international d\'Angola Cables...',
      BTN_EXPLORE: 'Explorer Notre Réseau',
      BTN_SERVICES: 'Voir les Services'
    }
  };

  lang = computed(() => this.currentLang());

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
    localStorage.setItem('preferred_lang', lang);
  }

  translate(key: string): string {
    return this.translations[this.currentLang()][key] || key;
  }

  private getInitialLanguage(): Language {
    const saved = localStorage.getItem('preferred_lang') as Language;
    return saved || 'en';
  }
}
