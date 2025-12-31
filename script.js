
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
    hamburger.classList.toggle("active");
});


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
        hamburger.classList.remove('active');
        
        
        document.querySelectorAll('.nav-link').forEach(item => {
            item.classList.remove('active');
        });
        link.classList.add('active');
    });
});


function showService(service) {
    const details = document.getElementById("service-details");
    
    if (service === "nettoyage") {
        details.innerHTML = `
            <div class="service-details-content">
                <button class="close-details" onclick="closeDetails()"><i class="fas fa-times"></i></button>
                <h3>🧼 Nettoyage à sec</h3>
                <p>Notre service de nettoyage à sec professionnel est spécialement conçu pour les vêtements délicats qui nécessitent un traitement spécial. Nous utilisons des solvants doux qui nettoient en profondeur sans endommager les tissus.</p>
                <div class="details-list">
                    <h4>🚚Sans vous déplacer, nous venons vers vous :</h4>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Nous récupérons vos vêtements</li>
                        <li><i class="fas fa-check-circle"></i> Nous vous les livrons sous 48 heures, en toute sécurité, avec assurance qualité.</li>
                        <li><i class="fas fa-check-circle"></i> Respect total des tissus et des couleurs</li>
                        <li><i class="fas fa-check-circle"></i> Nettoyage professionnel et hygiénique</li>
                        <li><i class="fas fa-check-circle"></i> Emballage protecteur pour le transport</li>
                    </ul>
                </div>
                <div class="details-pricing">
                    <h4>Tarifs indicatifs :</h4>
                    <ul>
                        <li>Chemise : 8 000 fc</li>                         
                        <li>Veste seule : 12 000 fc</li>
                        <li>Robe soirée dame : 22 000 fc</li>
                        <li>complet Veste : 15 000 fc</li>
                        <li>couverture : 50 000 fc</li>
                    </ul>
                    <p><em>Tarifs spéciaux pour les articles délicats et les volumes importants.</em></p>
                </div>
                <a href="https://wa.me/243812187991" class="btn whatsapp details-btn">
                    <i class="fab fa-whatsapp"></i> Réserver ce service
                </a>
            </div>
        `;
    }

    if (service === "repassage") {
        details.innerHTML = `
            <div class="service-details-content">
                <button class="close-details" onclick="closeDetails()"><i class="fas fa-times"></i></button>
                <h3>Repassage à domicile</h3>
                <p>Notre service de repassage à domicn résultat impeccable. Nos professionnels utilisent un équipement de haute qualité pour un repassage parfait.</p>
                <div class="details-list">
                    <h4>Ce service comprend :</h4>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Fer à vapeur professionnel fourni</li>
                        <li><i class="fas fa-check-circle"></i> Parfum textile longue durée</li>
                        <li><i class="fas fa-check-circle"></i> Service propre et élégant à domicile</li>
                        <li><i class="fas fa-check-circle"></i> Repassage adapté à chaque type de tissu</li>
                        <li><i class="fas fa-check-circle"></i> Pliage soigné des vêtements repassés</li>
                    </ul>
                </div>
                <div class="details-pricing">
                    <h4>Nos formules avantageuses :</h4>
                    <ul>
                        <li><strong>Formule mensuelle : 30 $ </strong></li>
                        <li>5 passages par mois</li>
                        <li>1 passage chaque semaine</li>
                        <li>2 passages la dernière semaine</li>
                        <p>Des vêtements toujours propres et bien entretenus,sans stress</p>
                        <li><strong>👕Formule Premium 50$/mois </strong></li>
                        <li>8 passages par mois</li>
                        <li>2 passages par semaine</li>
                        <p>Le choix idéal pour une propreté impeccable et un service prioritaire</p>    
                    </ul>
                    <p><em>Un passage = repassage d'un panier standard de vêtements .</em></p>
                </div>
                <a href="https://wa.me/243812187991" class="btn whatsapp details-btn">
                    <i class="fab fa-whatsapp"></i> Réserver ce service
                </a>
            </div>
        `;
    }

    if (service === "lavage") {
        details.innerHTML = `
            <div class="service-details-content">
                <button class="close-details" onclick="closeDetails()"><i class="fas fa-times"></i></button>
                <h3>🧺 Lavage et pliage</h3>
                <p>Notre service complet de lavage, séchage et pliage est idéal pour le linge de maison et les vêtements du quotidien. Nous utilisons des produits écologiques pour un nettoyage efficace et respectueux de l'environnement.</p>
                <div class="details-list">
                    <h4>Ce service comprend :</h4>
                    <ul>
                        <li><i class="fas fa-check-circle"></i> Lavage avec produits écologiques</li>
                        <li><i class="fas fa-check-circle"></i> Séchage à température adaptée</li>
                        <li><i class="fas fa-check-circle"></i> Pliage soigné et organisé</li>
                        <li><i class="fas fa-check-circle"></i> Tri par type de vêtement</li>
                        <li><i class="fas fa-check-circle"></i> Traitement anti-acariens (optionnel)</li>
                        <li><i class="fas fa-check-circle"></i> Emballage par catégorie</li>
                    </ul>
                </div>
                <div class="details-pricing">
                    <h4>Tarifs au kilo :</h4>
                    <ul>
                        <li>Moins de 5 kg : 4 $/kg</li>
                        <li>5 à 10 kg : 3.5 $/kg</li>
                        <li>Plus de 10 kg : 3 $/kg</li>
                        <li>Linge de maison : 3.5 $/kg</li>
                    </ul>
                    <p><em>Tarifs dégressifs selon le volume. Service minimum : 3 kg.</em></p>
                </div>
                <a href="https://wa.me/243812187991" class="btn whatsapp details-btn">
                    <i class="fab fa-whatsapp"></i> Réserver ce service
                </a>
            </div>
        `;
    }
    
    
    details.scrollIntoView({ behavior: 'smooth' });
}


function closeDetails() {
    const details = document.getElementById("service-details");
    details.innerHTML = `
        <div class="service-details-content">
            <p>Cliquez sur un service pour voir les détails et les tarifs.</p>
        </div>
    `;
}


function playVideo(button) {
    const videoContainer = button.closest('.video-container');
    const video = videoContainer.querySelector('.service-video');
    const overlay = videoContainer.querySelector('.video-overlay');
    
    if (video) {
        video.play();
        overlay.style.display = 'none';
        
        
        video.addEventListener('pause', function() {
            overlay.style.display = 'flex';
        });
        
        
        video.addEventListener('ended', function() {
            overlay.style.display = 'flex';
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    
    const videos = document.querySelectorAll('.service-video');
    const playButtons = document.querySelectorAll('.play-btn');
    
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            playVideo(this);
        });
    });
    
    
    videos.forEach(video => {
        video.addEventListener('play', function() {
            
            videos.forEach(otherVideo => {
                if (otherVideo !== video && !otherVideo.paused) {
                    otherVideo.pause();
                    
                    const otherOverlay = otherVideo.closest('.video-container').querySelector('.video-overlay');
                    if (otherOverlay) {
                        otherOverlay.style.display = 'flex';
                    }
                }
            });
        });
        
        
        if (!video.poster || video.poster === '') {
            video.poster = 'images/video-poster-default.jpg';
        }
    });
});


document.getElementById('messageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    
    const whatsappMessage = `Bonjour, je m'appelle ${name}. Mon numéro est ${phone}. Message: ${message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/243812187991?text=${encodedMessage}`;
    
    
    window.open(whatsappURL, '_blank');
    
    
    document.getElementById('messageForm').reset();
    
    
    alert('Merci ! Vous allez être redirigé vers WhatsApp pour envoyer votre message.');
});


window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    
    updateActiveNavLink();
});


function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}


document.addEventListener('DOMContentLoaded', function() {
    
    document.querySelectorAll('.footer-services a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const service = this.getAttribute('onclick').match(/showService\('(.*?)'\)/)[1];
            showService(service);
            
            
            document.getElementById('services').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    
    updateActiveNavLink();

    const video = document.querySelector('.service-video');
    video.addEventListener('play',() => {
        video.muted = true;
    });
    
});



