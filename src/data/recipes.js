export const recipes = {
  breakfast: [
    {
      id: 'b1',
      name: 'Panquecas de banana com mel',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=480',
      prepTime: '20 mins',
      difficulty: 'Fácil',
      ingredients: [
        '2 bananas maduras',
        '2 ovos',
        '1 xícara de farinha',
        '1 xícara de leite',
        '1 colher de chá de fermento em pó',
        'Mel para servir'
      ],
      instructions: [
        'Bananas massh em uma tigela',
        'Bate em ovos, leite e farinha',
        'Adicione o fermento em pó e misture bem',
        'Cozinhe em uma panela aquecida até dourar',
        'Sirva com garoa de mel'
      ],
      tips: 'Para panquecas mais fofas, deixe a massa descansar por 5 minutos antes de cozinhar'
    },
    {
      id: 'b2',
      name: 'Aveia cremosa com frutas',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1517673400267-0251440c45dc?w=480',
      prepTime: '15 mins',
      difficulty: 'Fácil',
      ingredients: [
        '1 xícara de aveia rolada',
        '2 xícaras de leite',
        'Bagas mistas',
        'Mel',
        'Canela'
      ],
      instructions: [
        'Em uma panela, adicione a aveia e o leite. Cozinhe em fogo médio, mexendo de vez em quando.',
        'Quando a mistura começar a ferver, reduza o fogo para baixo e continue mexendo até que a aveia fique cremosa e o leite tenha sido absorvido (aproximadamente 5 a 7 minutos).',
        'Adicione o mel (se estiver usando) e misture bem.',
        'Retire a panela do fogo e distribua a aveia cremosa em tigelas individuais.',
        'Por cima da aveia, coloque as frutas fatiadas: banana, morango e mirtilo (Qualquer fruta de sua preferência).',

      ],
      tips: 'Se desejar coloque amendoin torrado por cima e com uma pitada de canela'
    },
    {
      id: 'b3',
      name: 'Omelete de espinafre e queijo',
      category: 'breakfast',
      image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=480',
      prepTime: '15 mins',
      difficulty: 'Médio',
      ingredients: [
        '3 ovos',
        'Spinafre fresco ( 1 xícara )',
        'Queijo ralado ( 1/2 xícara )',
        'Sal e pimenta ( a gosto )',
        'Azeite de oliva ( 1 colher de chá )'
      ],
      instructions: [
        'Em uma tigela, bata os ovos com o leite (se estiver usando), o sal e a pimenta-do-reino até ficarem bem misturados.',
        'Em uma frigideira, aqueça o azeite de oliva em fogo médio.',
        'Adicione as folhas de espinafre na frigideira e refogue por cerca de 2 a 3 minutos, até que murchem e liberem um pouco de água.',
        'Despeje a mistura de ovos batidos sobre o espinafre na frigideira e cozinhe por cerca de 2 minutos.',
        'Quando as bordas da omelete começarem a firmar, adicione o queijo ralado por cima.',
        'Dobre a omelete ao meio com uma espátula e deixe cozinhar por mais 1-2 minutos, até que o queijo derreta por dentro.',
        'Retire da frigideira e sirva imediatamente.'
      ],
      tips: 'Sirva-se com um bom café'
    }
  ],
  lunch: [
    {
      id: 'l1',
      name: 'Frango Grelhado com Legumes Assados',
      category: 'lunch',
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=480',
      prepTime: '45 minutos',
      difficulty: 'Médio',
      ingredients: [
        '4 peitos de frango',
        '2 colheres de sopa de azeite de oliva',
        '1 colher de chá de alho em pó',
        '1 colher de chá de páprica',
        'Sal e pimenta a gosto',
        'Suco de 1 limão',
        'Ervas frescas (como alecrim ou tomilho)',
        '2 cenouras cortadas em rodelas',
        '1 abobrinha cortada em rodelas',
        '1 pimentão vermelho cortado em tiras',
        '1 cebola roxa cortada em tiras'
      ],
      instructions: [
        'Em uma tigela, misture o azeite de oliva, o alho em pó, a páprica, o suco de limão, sal, pimenta e as ervas frescas. Marine os peitos de frango por pelo menos 30 minutos.',
        'Preaqueça o forno a 200°C. Em uma assadeira, coloque as cenouras, abobrinha, pimentão e cebola. Regue com azeite, tempere com sal, pimenta e ervas, e misture bem.',
        'Aqueça uma grelha ou frigideira antiaderente em fogo médio-alto. Grelhe o frango por 6-7 minutos de cada lado até estarem cozidos.',
        'Coloque os legumes no forno e asse por 25-30 minutos, mexendo na metade do tempo, até ficarem dourados e macios.',
        'Sirva o frango grelhado com os legumes assados ao lado. Adicione um fio de azeite extra ou ervas frescas, se desejar.'
      ],
      tips: 'Para um sabor mais intenso, deixe o frango marinar por pelo menos 1 hora ou durante a noite.'
    }
    
    
  ],
  snack: [
    {
      id: 's1',
      name: 'Red Fruit Smoothie',
      category: 'snack',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=480',
      prepTime: '5 mins',
      difficulty: 'Easy',
      ingredients: [
        'Mixed red berries',
        'Yogurt',
        'Honey',
        'Ice'
      ],
      instructions: [
        'Blend all ingredients',
        'Serve immediately'
      ],
      tips: 'Use frozen fruits for a thicker smoothie'
    }
  ],
  dinner: [
    {
      id: 'd1',
      name: 'Mushroom Risotto',
      category: 'dinner',
      image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=480',
      prepTime: '40 mins',
      difficulty: 'Hard',
      ingredients: [
        'Arborio rice',
        'Mushrooms',
        'Vegetable broth',
        'Parmesan cheese',
        'White wine'
      ],
      instructions: [
        'Sauté mushrooms',
        'Toast rice',
        'Add wine and broth gradually',
        'Finish with parmesan'
      ],
      tips: 'Keep the broth warm while cooking for best results'
    }
  ]
};
