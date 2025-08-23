// Dados das receitas
const drinksData = {
    'virgin-pina-colada': {
        name: 'Virgem Piña Colada',
        description: 'Uma versão tropical e refrescante sem álcool da clássica Piña Colada',
        ingredients: [
            '60 ml de suco de abacaxi (natural ou industrializado sem açúcar, bem gelado)',
            '30 ml de leite de coco',
            '30 ml de leite condensado (ou xarope simples/mel, ajustar a gosto)'
        ],
        preparation: 'Bater tudo no liquidificador com gelo até ficar cremoso. Servir em copo longo (highball) com canudo.',
        variations: 'Pode substituir o leite condensado por xarope simples ou mel para uma versão menos doce. Adicione algumas gotas de essência de coco para intensificar o sabor.'
    },
    'coquetel-infantil': {
        name: 'Coquetel Infantil',
        description: 'Um drink cremoso e doce, perfeito para crianças e ocasiões familiares',
        ingredients: [
            '150 ml de leite',
            '100 ml de leite condensado',
            '4 colheres de fruta (morango, maracujá ou abacaxi)'
        ],
        preparation: 'Bater tudo no liquidificador com gelo. Servir em copo longo com decoração da fruta escolhida.',
        variations: 'Experimente com diferentes frutas: manga, kiwi, ou até mesmo frutas vermelhas. Para uma versão mais saudável, substitua parte do leite condensado por iogurte natural.'
    },
    'mentiroska': {
        name: 'Mentiroska',
        description: 'Versão sem álcool da famosa Mentiroska, mantendo todo o sabor frutado',
        ingredients: [
            'Fruta: morango ou maracujá (fresco ou polpa)',
            '25 ml de leite condensado',
            '30 ml de leite'
        ],
        preparation: 'Macerar a fruta no copo. Adicionar leite condensado, leite e bastante gelo. Mexer ou bater no liquidificador (opcional).',
        variations: 'Funciona muito bem com outras frutas como kiwi, manga ou frutas vermelhas. Para uma versão mais intensa, use polpa de fruta concentrada.'
    },
    'sunset-na': {
        name: 'Sunset (Sem Álcool)',
        description: 'Um drink refrescante que lembra o pôr do sol, com sabores cítricos e aromáticos',
        ingredients: [
            '30 ml de suco de maracujá',
            '150 ml de água tônica (ou soda limonada)',
            '5–6 folhas de hortelã para decoração'
        ],
        preparation: 'Drink montado diretamente no copo com gelo. Finalizar com hortelã.',
        variations: 'Substitua o maracujá por outros sucos cítricos como limão ou laranja. Para uma versão mais doce, adicione um pouco de xarope simples.'
    },
    'suco-detox': {
        name: 'Suco Detox',
        description: 'Uma bebida saudável e energizante, rica em vitaminas e antioxidantes',
        ingredients: [
            '½ a 1 cenoura média',
            '250 ml de suco de laranja',
            '½ colher (bailarina) de canela em pó',
            '2–3 pedaços pequenos de gengibre fresco'
        ],
        preparation: 'Bater tudo no liquidificador. Servir coado ou não, conforme a preferência (sem coar mantém mais fibras e nutrientes).',
        variations: 'Adicione maçã verde para mais doçura, ou beterraba para uma cor mais vibrante. Experimente com hortelã fresca para um toque refrescante.'
    },
    'frape-cafe': {
        name: 'Frapê de Café',
        description: 'Uma bebida cremosa e energizante, perfeita para os amantes de café',
        ingredients: [
            '3 bolas de sorvete de creme ou baunilha',
            '100 ml de café',
            '150 ml de leite'
        ],
        preparation: 'Bater tudo no liquidificador até ficar cremoso. Servir em copo longo com chantilly opcional.',
        variations: 'Use café expresso para um sabor mais intenso. Adicione chocolate em pó ou calda de caramelo para variações saborosas.'
    },
    'gin-tonica': {
        name: 'Gin Tônica',
        description: 'O clássico drink inglês, elegante e refrescante',
        ingredients: [
            '50 ml de gin',
            '150 ml de água tônica',
            'Gelo em cubos'
        ],
        preparation: 'Drink montado diretamente no copo (taça balloon ou highball). Adicionar gelo, gin e completar com tônica.',
        variations: 'Experimente diferentes gins (London Dry, Hendricks, Tanqueray). Adicione rodelas de pepino, limão siciliano ou especiarias como cardamomo para variações aromáticas.'
    },
    'negroni': {
        name: 'Negroni',
        description: 'Um clássico italiano amargo e elegante, considerado um dos drinks mais sofisticados',
        ingredients: [
            '30 ml de vermute rosso',
            '30 ml de Campari',
            '30 ml de gin',
            '½ fatia de laranja para decorar'
        ],
        preparation: 'Drink montado diretamente no copo baixo (old fashioned). Mexer levemente com colher bailarina. Observação: não se bate na coqueteleira, é considerado um drink clássico e elegante.',
        variations: 'Negroni Sbagliato: substitua o gin por prosecco. Boulevardier: substitua o gin por whiskey bourbon. White Negroni: use Lillet Blanc e Suze no lugar do vermute e Campari.'
    },
    'pina-colada': {
        name: 'Piña Colada',
        description: 'O drink tropical mais famoso do mundo, originário de Porto Rico',
        ingredients: [
            '50 ml de rum branco',
            '90 ml de suco de abacaxi (preferência natural)',
            '30 ml de leite de coco',
            '30 ml de creme de leite (ou leite condensado, se desejar mais doce)'
        ],
        preparation: 'Bater todos os ingredientes no liquidificador com gelo. Servir em copo hurricane com abacaxi e cereja na decoração.',
        variations: 'Painkiller: adicione suco de laranja e noz-moscada. Piña Colada de coco queimado: use rum dourado e adicione um toque de xarope de coco queimado.'
    },
    'sex-on-beach': {
        name: 'Sex on the Beach',
        description: 'Um drink colorido e frutado, perfeito para o verão',
        ingredients: [
            '40 ml de vodka',
            '20 ml de licor de pêssego',
            '40 ml de suco de laranja',
            '15 ml de grenadine'
        ],
        preparation: 'Drink montado no copo longo com gelo. Adicionar vodka, licor, suco e por último a grenadine, criando camadas. Decorar with cereja ou fatia de laranja.',
        variations: 'Sex in the Driveway: substitua o licor de pêssego por blue curaçao. Adicione suco de cranberry para uma cor mais intensa.'
    },
    'sunset-alc': {
        name: 'Sunset (Com Álcool)',
        description: 'Versão alcoólica do Sunset, com gin e sabores tropicais',
        ingredients: [
            '60 ml de gin',
            '30 ml de suco de maracujá',
            '120 ml de tônica',
            '5–6 folhas de hortelã'
        ],
        preparation: 'Drink montado diretamente na taça balloon. Colocar gelo, gin, maracujá e completar com tônica. Finalizar com hortelã.',
        variations: 'Use diferentes tipos de gin para variar o perfil aromático. Substitua o maracujá por outros sucos tropicais como manga ou caju.'
    },
    'espanhola': {
        name: 'Espanhola',
        description: 'Um drink doce e cremoso, muito popular no Brasil',
        ingredients: [
            '50 ml de vinho suave (gelado)',
            '50 ml de leite condensado',
            '35 ml de suco de abacaxi'
        ],
        preparation: 'Bater no liquidificador com gelo. Servir em taça de vinho.',
        variations: 'Experimente com diferentes vinhos suaves ou moscatel. Adicione um toque de canela em pó para um sabor mais complexo.'
    },
    'aperol-spritz': {
        name: 'Aperol Spritz',
        description: 'O aperitivo italiano mais famoso, refrescante e levemente amargo',
        ingredients: [
            '75 ml de Aperol',
            '90 ml de espumante prosecco (ou moscatel)',
            'Completar com água com gás',
            '1 rodela de laranja para decorar'
        ],
        preparation: 'Drink montado diretamente na taça balloon com bastante gelo.',
        variations: 'Campari Spritz: substitua o Aperol por Campari para um sabor mais amargo. Hugo Spritz: use xarope de sabugueiro e hortelã no lugar do Aperol.'
    },
    'painkiller': {
        name: 'Painkiller',
        description: 'Um drink tropical das Ilhas Virgens, similar à Piña Colada mas com personalidade própria',
        ingredients: [
            '60 ml de rum ouro',
            '120 ml de suco de abacaxi',
            '30 ml de suco de laranja',
            '30 ml de leite de coco (originalmente usa creme de coco)'
        ],
        preparation: 'Drink montado no copo longo com gelo. Finalizar com noz-moscada ralada por cima (opcional, clássico).',
        variations: 'Varie a intensidade do rum (2, 3 ou 4 doses para diferentes "níveis de dor"). Use rum escuro para um sabor mais intenso.'
    },
    'caipirinha': {
        name: 'Caipirinha / Caipiroska',
        description: 'O drink nacional brasileiro e sua variação com vodka',
        ingredients: [
            '1 limão em pedaços (ou 2 limões espremidos)',
            '50 ml de cachaça (caipirinha) ou vodka (caipiroska)',
            '2 colheres de açúcar (ou xarope simples/mel, ajustar conforme a fruta)',
            'Frutas alternativas: morango, maracujá, manga, kiwi, caju, melancia, abacaxi'
        ],
        preparation: 'Macerar a fruta e o açúcar no copo. Adicionar gelo e a bebida. Mexer com colher bailarina.',
        variations: 'Caipirissima (com rum), Caipirosca (com vodka), Sakerinha (com saquê). Experimente frutas da estação: jabuticaba, pitanga, açaí.'
    },
    'cuba-libre': {
        name: 'Cuba Libre',
        description: 'Um clássico simples e refrescante, nascido em Cuba',
        ingredients: [
            '50 ml de rum claro',
            '120 ml de Coca-Cola (ou a gosto)',
            '1 fatia de limão'
        ],
        preparation: 'Drink montado diretamente no copo longo com gelo.',
        variations: 'Long Island Cuba Libre: adicione vodka e tequila. Use rum escuro para um sabor mais complexo. Experimente com diferentes colas artesanais.'
    }
};

// Função para abrir o modal
function openModal(drinkId) {
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const drink = drinksData[drinkId];
    
    if (!drink) return;
    
    modalBody.innerHTML = `
        <div class="recipe-header">
            <h2>${drink.name}</h2>
            <p class="drink-description">${drink.description}</p>
        </div>
        
        <div class="recipe-section">
            <h3>Ingredientes</h3>
            <ul class="ingredients-list">
                ${drink.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        
        <div class="recipe-section">
            <h3>Modo de Preparo</h3>
            <div class="preparation-steps">
                <p>${drink.preparation}</p>
            </div>
        </div>
        
        <div class="variations">
            <h4>Variações e Dicas</h4>
            <p>${drink.variations}</p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar event listeners para os cards dos drinks
    const drinkCards = document.querySelectorAll('.drink-card');
    drinkCards.forEach(card => {
        card.addEventListener('click', function() {
            const drinkId = this.getAttribute('data-drink');
            openModal(drinkId);
        });
        
        // Adicionar efeito de hover com som (opcional)
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Event listener para fechar o modal
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    
    // Fechar modal clicando fora dele
    const modal = document.getElementById('modal');
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fechar modal com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
    
    // Animação de entrada para os cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animação de entrada aos cards
    drinkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Adicionar efeito de parallax suave ao scroll (opcional)
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('header');
    if (header) {
        header.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

