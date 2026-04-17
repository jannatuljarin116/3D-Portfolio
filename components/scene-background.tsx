"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SceneBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      container.style.display = "none";
      return () => {
        container.style.display = "";
      };
    }

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.0015);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2.5, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      wireframe: true,
      roughness: 0.2,
      metalness: 0.8,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const coreGeo = new THREE.IcosahedronGeometry(1.8, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00e676,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 400;
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 25;
    }
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    const particlesMaterial = new THREE.PointsMaterial({
      size: window.innerWidth < 768 ? 0.02 : 0.03,
      color: 0x00e676,
      transparent: true,
      opacity: 0.25,
    });
    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    const pointLight2 = new THREE.PointLight(0x2979ff, 2);
    pointLight2.position.set(-10, -5, 5);
    scene.add(pointLight2);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      particlesMaterial.size = window.innerWidth < 768 ? 0.02 : 0.03;
    };

    document.addEventListener("mousemove", onMouseMove);
    window.addEventListener("resize", onResize);

    container.style.opacity = "1";

    const clock = new THREE.Clock();
    let rafId = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      const targetX = mouseX * 0.0005;
      const targetY = mouseY * 0.0005;

      sphere.rotation.y += 0.002;
      sphere.rotation.x += 0.1 * (targetY - sphere.rotation.x);
      sphere.rotation.y += 0.1 * (targetX - sphere.rotation.y);
      core.rotation.x -= 0.005;
      particlesMesh.rotation.y = -elapsedTime * 0.02;

      const scale = 1 + Math.sin(elapsedTime) * 0.02;
      sphere.scale.set(scale, scale, scale);

      const scrollY = window.scrollY;
      sphere.position.y = scrollY * 0.001;
      particlesMesh.position.y = -scrollY * 0.002;

      renderer.render(scene, camera);
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-[1] opacity-0 transition-opacity duration-[1500ms]"
      aria-hidden
    />
  );
}
