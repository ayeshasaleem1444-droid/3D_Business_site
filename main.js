// ============ 3D HERO (Three.js) ============
const canvas = document.getElementById("hero-canvas");
if (canvas && window.THREE) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    60,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000,
  );
  camera.position.z = 6;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Torus knot = premium 3D abstract shape
  const geo = new THREE.TorusKnotGeometry(1.4, 0.4, 128, 32);
  const mat = new THREE.MeshStandardMaterial({
    color: 0x6c5ce7,
    emissive: 0x00d9ff,
    emissiveIntensity: 0.4,
    metalness: 0.9,
    roughness: 0.15,
    wireframe: true,
  });
  const knot = new THREE.Mesh(geo, mat);
  scene.add(knot);

  scene.add(new THREE.AmbientLight(0xffffff, 0.5));
  const light = new THREE.PointLight(0x00d9ff, 2);
  light.position.set(5, 5, 5);
  scene.add(light);

  let mx = 0,
    my = 0;
  window.addEventListener("mousemove", (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 0.6;
    my = (e.clientY / window.innerHeight - 0.5) * 0.6;
  });

  function animate() {
    requestAnimationFrame(animate);
    knot.rotation.x += 0.003;
    knot.rotation.y += 0.004;
    knot.rotation.x += (my - knot.rotation.x) * 0.02;
    knot.rotation.y += (mx - knot.rotation.y) * 0.02;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener("resize", () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

// ============ GSAP SCROLL ANIMATIONS ============
if (window.gsap && window.ScrollTrigger) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.utils.toArray("section").forEach((sec) => {
    const targets = sec.querySelectorAll(".card, .section-title, .section-sub");
    if (targets.length === 0) return; // skip if nothing to animate
    gsap.from(targets, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      scrollTrigger: { trigger: sec, start: "top 80%" },
    });
  });
}

// ============ TILT CARDS (vanilla) ============
document.querySelectorAll(".tilt").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) translateY(-4px)`;
  });
  card.addEventListener("mouseleave", () => (card.style.transform = ""));
});

// ============ MOBILE NAV ============
const burger = document.querySelector(".hamburger");
if (burger) {
  burger.addEventListener("click", () => {
    const links = document.querySelector(".nav-links");
    const open = links.style.display === "flex";
    links.style.display = open ? "none" : "flex";
    if (!open) {
      links.style.cssText =
        "display:flex;flex-direction:column;position:absolute;top:70px;right:20px;background:var(--surface);padding:20px;border-radius:16px;gap:16px";
    }
  });
}
