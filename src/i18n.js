// eslint-disable-next-line
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      coffee: 'Coffee',
      milk: 'Milk',
      water: 'Water',
      ice: 'Ice',
      none: 'None',
      sugar: 'Sugar',
      less: 'Less',
      regular: 'Regular',
      more: 'More',
      condMilk: 'Condensed Milk',
      evapMilk: 'Evaporated Milk',
    },
  },
  cnS: {
    translation: {
      coffee: '咖啡',
      milk: '牛奶',
      water: '水',
      ice: '冰',
      none: '无',
      sugar: '糖',
      less: '少',
      regular: '普通',
      more: '多',
      condMilk: '炼乳',
      evapMilk: '淡奶',
      help: '请帮我按照以上的食谱做这杯咖啡。',
      appDescription: '这个手机应用是为了帮助每个人都能接触到他们最喜欢的咖啡, 无论他们身在何处。',
    },
  },
  cnT: {
    translation: {
      coffee: '咖啡',
      milk: '牛奶',
      water: '水',
      ice: '冰',
      none: '無',
      sugar: '糖',
      less: '少',
      regular: '普通',
      more: '多',
      condMilk: '煉乳',
      evapMilk: '淡奶',
      help: '請幫我按照以上的食譜做這杯咖啡。',
      appDescription: '這個手機應用是為了幫助每個人都能接觸到他們最喜歡的咖啡, 無論他們身在何處。',
    },
  },
  kr: {
    translation: {
      coffee: '커피',
      milk: '우유',
      water: '물',
      ice: '얼음',
      none: '없음',
      sugar: '설탕',
      less: '조금',
      regular: '보통',
      more: '더',
      condMilk: '농축 우유',
      evapMilk: '증발 우유',
      help: '위의 레시피에 따라 이 커피를 만들 수 있도록 도와주세요.',
      appDescription: '이 모바일 앱은 모든 사람이 장소에 관계없이 좋아하는 커피에 접근할 수 있도록 하기 위해 만들어졌습니다.',
    },
  },
  jp: {
    translation: {
      coffee: 'コーヒー',
      milk: '牛乳',
      water: '水',
      ice: '氷',
      none: 'なし',
      sugar: '砂糖',
      less: '少し',
      regular: '通常',
      more: 'もっと',
      condMilk: '練乳',
      evapMilk: '無糖練乳',
      help: '上記のレシピに従ってこのコーヒーを作るのを手伝ってください。',
      appDescription: 'このモバイルアプリは、誰もが場所に関係なくお気に入りのコーヒーにアクセスできるようにするために作成されました。',
    },
  },
  es: {
    translation: {
      coffee: 'Café',
      milk: 'Leche',
      water: 'Agua',
      ice: 'Hielo',
      none: 'Sin',
      sugar: 'Azúcar',
      less: 'Menos',
      regular: 'Regular',
      more: 'Más',
      condMilk: 'Leche Condensada',
      evapMilk: 'Leche Evaporada',
      help: 'Por favor, ayúdame a hacer este café de acuerdo con la receta anterior.',
      appDescription: 'Esta aplicación móvil fue creada para ayudar a que todos tengan acceso a su café favorito, sin importar dónde se encuentren.',
    },
  },
  fr: {
    translation: {
      coffee: 'Café',
      milk: 'Lait',
      water: 'Eau',
      ice: 'Glace',
      none: 'Pas',
      sugar: 'Sucre',
      less: 'Moins',
      regular: 'Régulier',
      more: 'Plus',
      condMilk: 'Lait Condensé',
      evapMilk: 'Lait Évaporé',
      help: "S'il vous plaît aidez-moi à faire ce café selon la recette ci-dessus.",
      appDescription: "Cette application mobile a été créée pour permettre à chacun d'avoir accès à son café préféré, où qu'il se trouve.",
    },
  },
  de: {
    translation: {
      coffee: 'Kaffee',
      milk: 'Milch',
      water: 'Wasser',
      ice: 'Eis',
      none: 'Ohne',
      sugar: 'Zucker',
      less: 'Weniger',
      regular: 'Regulär',
      more: 'Mehr',
      condMilk: 'Gezuckerte Kondensmilch',
      evapMilk: 'Kondensmilch',
      help: 'Bitte helfen Sie mir, diesen Kaffee nach obigem Rezept zuzubereiten.',
      appDescription: 'Diese mobile App wurde entwickelt, damit jeder Zugriff auf seinen Lieblingskaffee hat, egal wo er sich befindet.',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
