document.addEventListener('DOMContentLoaded', function() {
  const currentLanguage = localStorage.getItem('language') || 'en';

  const translations = {
    en: {
      
    },
    ru: {
      'Login in': 'Вход',
      'User name:': 'Имя пользователя:',
	  'Password:': 'Пароль:',
	  'No account?': 'Нет аккаунта?',
	  'Join': 'Войти',
	  'Sing up': 'Регистрация',
	  'Home': 'Дом',
	  'Blog': 'Блог',
	  'Games': 'Игры',
	  'Softwr': 'Софт',
	  'Market': 'Маркет',
	  'Search': 'Поист',
	  'Create': 'Начать',
	  'Library': 'Библио',
	  'My AI': 'Мой ИИ',
	  'Help': 'Помощ',
	  'Login': 'Вход',
	  'Settings': 'Настройки',
	  'Login out': 'Выход',
	  'Name:': 'Имя:',
	  'Email:': 'Email:',
	  'Icon (URL):': 'Иконка (URL):',
	  'Choose a theme:': 'Выберите тему:',
	  'Light': 'Светлая',
	  'Dark': 'Тёмная',
	  'Right now launc core is still in development, so shopping is not recommended! Please wait the new update 2024. Contact: awesome.chesbax@yandex.ru': 'Сейчас ядро launc все еще находится в разработке, поэтому покупки не рекомендуются! Пожалуйста, подождите нового обновления 2024. Контакт: awesome.chesbax@yandex.ru',
	  'Buy Launcs': 'Купить Лаунчи',
	  'Gaming currency for real currency': 'Игровая валюта за реальную валюту',
	  'Software': 'Программы',
	  'See all': 'Смотреть всё',
	  'App Required:': 'Приложение требует:',
	  'V': 'В',
	  'App id:': 'Id приложения:'
    }
	md: {
      'Login in': 'Intrare',
      'User name:': 'Numele utilizatorului:',
	  'Password:': 'Parola:',
	  'No account?': 'Nu aveți un cont?',
	  'Join': 'Conectați-vă',
	  'Sing up': 'Înregistrare',
	  'Home': 'Casa',
	  'Blog': 'Blog',
	  'Games': 'Jocuri',
	  'Softwr': 'Soft',
	  'Market': 'Piața',
	  'Search': 'Căutare',
	  'Create': 'Start',
	  'Library': 'Biblio',
	  'My AI': 'AI meu',
	  'Help': 'Ajutor',
	  'Login': 'Intrare',
	  'Settings': 'Setări',
	  'Login out': 'Ieșire',
	  'Name:': 'Numele:',
	  'Email:': 'Email:',
	  'Icon (URL):': 'Icoană (URL):',
	  'Choose a theme:': 'Alegeți un subiect:',
	  'Light': 'Luminous',
	  'Dark': 'Întuneric',
	  'Right now launc core is still in development, so shopping is not recommended! Please wait the new update 2024. Contact: awesome.chesbax@yandex.ru': 'În acest moment core launc este încă în dezvoltare, așa că nu se recomandă achizițiile! Vă rugăm să așteptați noua actualizare 2024. Contact: awesome.chesbax@yandex.ru',
	  'Buy Launcs': 'Cumpărați Lansări',
	  'Gaming currency for real currency': 'Moneda din joc pentru moneda reală',
	  'Software': 'Programe',
	  'See all': 'Vezi toate',
	  'App Required:': 'Cererea necesită:',
	  'V': 'V',
	  'App id:': 'ID cererii:'
    }
  };

  const elements = document.body.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element.childNodes.length === 1 && element.childNodes[0].nodeType === Node.TEXT_NODE) {
      const text = element.childNodes[0].textContent.trim();
      element.childNodes[0].textContent = translations[currentLanguage][text] || text;
    }
  }
});