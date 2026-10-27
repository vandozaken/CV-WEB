/* Main JavaScript for CV-WEB Portfolio */

document.addEventListener('DOMContentLoaded', () => {
  console.log('CV-WEB initialized successfully.');

  // Smooth scroll helper or interactive enhancements can go here
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Epic Games / Steam Storefront Showcase Logic
  const projectsData = [
    {
      title: "E-Learning Bahasa Isyarat Tunarungu Wicara",
      type: "Skripsi • Tugas Akhir",
      desc: "Aplikasi E-Learning berbasis multimedia interaktif untuk pembelajaran bahasa isyarat bagi penyandang tunarungu wicara. Merupakan project Tugas Akhir (Skripsi).",
      tags: ["GoogleScript", "WebApps", "Spreadsheets"],
      link: "https://script.google.com/macros/s/AKfycbxvisbhbrPMiyRdsm3zT3DKms1ucyYY5wYX2JGnPsCJB7omH4q58hecBpd2T9xASfBj/exec",
      linkText: "Lihat Web ↗",
      image: "assets/elearning.png"
    },
    {
      title: "Website Peminjaman Ruangan LAB FKI",
      type: "Magang UMS",
      desc: "Sistem informasi manajemen dan peminjaman ruangan laboratorium berbasis Google Apps Script. Dikembangkan saat magang di UMS untuk mengotomatisasi administrasi.",
      tags: ["AppScript", "WebApps", "Spreadsheets"],
      link: "https://script.google.com/macros/s/AKfycbwoGL3J8Z5_RCGSFg_qJUMPcdm8uShuKkecaNuEp0DdFohi_ZftzWhqMavjVySnYpcM/exec",
      linkText: "Lihat Web ↗",
      image: "assets/lab_fki.png"
    },
    {
      title: "Domain Lens",
      type: "Web Application • Vercel",
      desc: "Aplikasi web untuk menganalisis dan melacak informasi domain dan DNS. Sudah di-hosting secara publik dan dapat diakses secara real-time.",
      tags: ["Vercel", "Python", "FastAPI", "JavaScript"],
      link: "https://domain-lab-sandy.vercel.app/",
      linkText: "Lihat Web ↗",
      image: "assets/domain_lens.png"
    },
    {
      title: "Aplikasi Scan Web",
      type: "Desktop App (Local)",
      desc: "Project mandiri berbasis Aplikasi Desktop Windows untuk melakukan pemindaian struktur dan informasi halaman web secara lokal dengan efisien.",
      tags: ["Python", "PySide", "HTTPX"],
      link: "#",
      linkText: "Desktop App (Local)",
      image: "assets/scan_web.png"
    },
    {
      title: "Website Ndalem-Kost",
      type: "Local Project",
      desc: "Platform direktori dan informasi penyewaan kos dengan layout yang informatif, bersih, dan mudah digunakan.",
      tags: ["Laravel", "MySQL", "PHP", "NodeJS"],
      link: "#",
      linkText: "Local Project",
      image: "assets/ndalem_kost.png"
    }
  ];

  const storefrontShowcase = document.getElementById('storefrontShowcase');
  if (storefrontShowcase) {
    const mainStageBanner = document.getElementById('mainStageBanner');
    const mainStageTag = document.getElementById('mainStageTag');
    const mainStageTitle = document.getElementById('mainStageTitle');
    const mainStageDesc = document.getElementById('mainStageDesc');
    const mainStageTags = document.getElementById('mainStageTags');
    const mainStageLink = document.getElementById('mainStageLink');
    const storeSidebarList = document.getElementById('storeSidebarList');

    let currentIndex = 0;
    let autoRotateInterval;

    function renderProject(index) {
      currentIndex = index;
      const proj = projectsData[index];

      // Trigger smooth transition effect
    const mainStage = document.getElementById('storeMainStage');
    mainStage.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    mainStage.style.opacity = '0';
    mainStage.style.transform = 'translateY(10px)';
    
    setTimeout(() => {
      mainStageBanner.src = proj.image;
      mainStageBanner.alt = proj.title;
      mainStageTag.textContent = proj.type;
      mainStageTitle.textContent = proj.title;
      mainStageDesc.textContent = proj.desc;
      
      mainStageTags.innerHTML = proj.tags.map(t => `<span class="skill-tag">${t}</span>`).join('');
      
      mainStageLink.textContent = proj.linkText;
      mainStageLink.href = proj.link;
      if (proj.link === '#') {
        mainStageLink.style.opacity = '0.6';
        mainStageLink.style.pointerEvents = 'none';
      } else {
        mainStageLink.style.opacity = '1';
        mainStageLink.style.pointerEvents = 'auto';
      }

      mainStage.style.opacity = '1';
      mainStage.style.transform = 'translateY(0)';
    }, 300);

      // Update sidebar active states
      const items = storeSidebarList.querySelectorAll('.store-sidebar-item');
      items.forEach((item, idx) => {
        if (idx === currentIndex) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }

    // Populate sidebar items
    projectsData.forEach((proj, idx) => {
      const div = document.createElement('div');
      div.classList.add('store-sidebar-item');
      if (idx === 0) div.classList.add('active');
      div.innerHTML = `
        <img src="${proj.image}" alt="${proj.title}" class="sidebar-item-thumb">
        <div class="sidebar-item-info">
          <div class="sidebar-item-title">${proj.title}</div>
          <div class="sidebar-item-type">${proj.type}</div>
        </div>
      `;
      div.addEventListener('click', () => {
        renderProject(idx);
        resetTimer();
      });
      storeSidebarList.appendChild(div);
    });

    // Initial render
    renderProject(0);

    // Auto-rotate timer (every 6 seconds for a slower, relaxed pace)
    function startTimer() {
      autoRotateInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % projectsData.length;
        renderProject(currentIndex);
      }, 6000);
    }

    function resetTimer() {
      clearInterval(autoRotateInterval);
      startTimer();
    }

    startTimer();

    // Pause on hover over entire showcase
    storefrontShowcase.addEventListener('mouseenter', () => clearInterval(autoRotateInterval));
    storefrontShowcase.addEventListener('mouseleave', () => startTimer());
  }
});
