import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button 
      className="language-switcher" 
      onClick={toggleLanguage}
      aria-label="Switch Language"
    >
      <span className={`lang-option ${language === 'en' ? 'active' : ''}`}>EN</span>
      <span className="lang-divider">|</span>
      <span className={`lang-option ${language === 'kn' ? 'active' : ''}`}>ಕನ್ನಡ</span>
    </button>
  );
}

export default LanguageSwitcher;
