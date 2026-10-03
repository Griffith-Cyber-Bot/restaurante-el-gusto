'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('tostadas');

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#2C2C2C] font-sans selection:bg-[#D4AF37] selection:text-white">
      
      {/* HEADER / NAVEGACIÓN */}
      <header className="sticky top-0 z-50 bg-[#111111] text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* LOGOTIPO Y NOMBRE CLICKEABLES PARA IR AL INICIO */}
          <a href="#inicio" className="flex items-center space-x-3 group cursor-pointer focus:outline-none">
            <Image 
              src="/logo.webp" 
              alt="Restaurante El Gusto" 
              width={50} 
              height={50} 
              className="rounded-full object-cover border border-[#D4AF37] transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-serif tracking-wider text-[#D4AF37] group-hover:underline">Restaurante El Gusto</span>
          </a>

          <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium">
            <a href="#inicio" className="hover:text-[#D4AF37] transition-colors">Inicio</a>
            <a href="#nosotros" className="hover:text-[#D4AF37] transition-colors">Sobre nosotros</a>
            <a href="#servicios" className="hover:text-[#D4AF37] transition-colors">Servicios</a>
            <a href="#carta" className="hover:text-[#D4AF37] transition-colors">Carta</a>
            <a href="#galeria" className="hover:text-[#D4AF37] transition-colors">Galería</a>
            <a href="#reseñas" className="hover:text-[#D4AF37] transition-colors">Reseñas</a>
            <a href="#contacto" className="hover:text-[#D4AF37] transition-colors">Contacto</a>
          </nav>
        </div>
      </header>

      {/* SECCIÓN INICIO / HERO */}
      <section id="inicio" className="relative min-h-[85vh] flex items-center justify-center text-center px-4 overflow-hidden bg-[#FAF9F5] py-20 border-b border-gray-200" style={{ scrollMarginTop: '80px' }}>
        <style jsx>{`
          @keyframes floatSlow {
            0%, 100% { transform: translateY(0px) rotate(-5deg); }
            50% { transform: translateY(-15px) rotate(5deg); }
          }
          @keyframes floatFast {
            0%, 100% { transform: translateY(0px) rotate(5deg); }
            50% { transform: translateY(-12px) rotate(-5deg); }
          }
          .paella-left { animation: floatSlow 6s ease-in-out infinite; }
          .paella-right { animation: floatFast 5s ease-in-out infinite; }
        `}</style>

        <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none select-none paella-left z-0">
          <div className="w-56 h-56 bg-gradient-to-br from-amber-100 to-orange-50 rounded-full shadow-xl border-4 border-amber-200 flex flex-col items-center justify-center p-4 relative">
            <span className="text-7xl drop-shadow-md">🥘</span>
            <span className="mt-2 text-xs font-serif font-bold text-amber-900 bg-white/80 px-2 py-0.5 rounded-full shadow-sm">Arroz Tradicional</span>
          </div>
        </div>

        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none paella-right z-0">
          <div className="w-56 h-56 bg-gradient-to-br from-amber-100 to-orange-50 rounded-full shadow-xl border-4 border-amber-200 flex flex-col items-center justify-center p-4 relative">
            <span className="text-7xl drop-shadow-md">🔥</span>
            <span className="mt-2 text-xs font-serif font-bold text-amber-900 bg-white/80 px-2 py-0.5 rounded-full shadow-sm">Sabor Alicantino</span>
          </div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#EFECE6] text-[#6B5B3E] text-xs font-semibold tracking-widest uppercase shadow-sm">
            Tradición y sabor en Ibi
          </span>
          <p className="text-gray-600 text-sm md:text-base tracking-wide font-light max-w-xl mx-auto">
            Una carta basada en la tradición, el producto fresco y la cocina hecha a mano, como se ha hecho siempre.
          </p>
          
          {/* TÍTULO EN 2 LÍNEAS SIN GUION */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-serif text-[#111111] italic leading-tight">
            Restaurante El Gusto<br />
            <span className="mt-2 inline-block">Cocina casera tradicional en Ibi</span>
          </h1>

          <div className="pt-6 flex flex-col sm:flex-row justify-center gap-4">
            <a href="#carta" className="inline-block bg-[#6B5B3E] hover:bg-[#85724E] text-white font-medium px-8 py-3 rounded-md shadow-lg transition-all">
              Consulta nuestra carta
            </a>
            <a href="#contacto" className="inline-block bg-white hover:bg-gray-100 text-[#111111] border border-gray-300 font-medium px-8 py-3 rounded-md shadow-sm transition-all">
              Reserva tu mesa
            </a>
          </div>
        </div>
      </section>

      {/* SECCIÓN SOBRE NOSOTROS */}
      <section id="nosotros" className="py-20 bg-[#EFECE6] px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: '120px' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#6B5B3E] font-semibold">Sobre nosotros</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] italic">
              Disfruta de nuestros arroces alicantinos al momento
            </h2>
            <div className="inline-block p-2 bg-white rounded-full shadow-sm">
              <span className="text-xl">⭐</span>
            </div>
          </div>
          <div className="space-y-4 text-gray-700 text-sm md:text-base leading-relaxed">
            <p>
              En <strong>Restaurante El Gusto</strong>, ubicado en Ibi, creemos que la buena cocina empieza por el respeto a la tradición. Nuestra propuesta gastronómica se basa en la <strong>cocina casera de la abuela</strong>, elaborada cada día con paciencia, cariño y recetas de generación en generación.
            </p>
            <p>
              Somos un restaurante pensado para quienes valoran el sabor auténtico, el producto bien tratado y una experiencia gastronómica honesta en un ambiente acogedor y familiar.
            </p>
          </div>
        </div>
      </section>

      {/* SECCIÓN NUESTROS SERVICIOS */}
      <section id="servicios" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24" style={{ scrollMarginTop: '80px' }}>
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Descubre</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] italic">Nuestros servicios</h2>
        </div>

        {/* Bloque 1 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg bg-gray-100">
            <Image 
              src="/tapa4.webp" 
              alt="Arroces alicantinos" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
              className="object-cover object-center" 
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-[#6B5B3E] italic">
              Arroces alicantinos elaborados con tradición
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Nuestra especialidad son los <strong>arroces alicantinos</strong>, uno de los grandes referentes de la gastronomía local. Cada arroz se prepara al momento, respetando los tiempos de cocción y utilizando ingredientes frescos y de calidad. Apostamos por recetas tradicionales que reflejan la esencia de Alicante, cuidando cada detalle para lograr el punto perfecto.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              El arroz es mucho más que un plato para nosotros: es una experiencia para compartir, disfrutar sin prisas y saborear como se hacía antes. Por eso, recomendamos reservar con antelación y dejarse aconsejar por nuestro equipo.
            </p>
            <div>
              <a href="#contacto" className="inline-block bg-[#6B5B3E] hover:bg-[#85724E] text-white text-sm font-medium px-6 py-3 rounded-md shadow transition-all">
                Llámanos y ven a comer como en casa
              </a>
            </div>
          </div>
        </div>

        {/* Bloque 2 */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-serif text-[#6B5B3E] italic">
              Carnes a la brasa y ambiente familiar
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Además de nuestros arroces, en El Gusto destacamos por nuestras <strong>carnes a la brasa</strong>, cocinadas con técnica y respeto por el producto. La brasa aporta un sabor inconfundible que convierte cada plato en una experiencia única para los amantes de la carne.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Todo ello se acompaña de un <strong>trato cercano y un ambiente familiar</strong>, ideal para comidas en familia, reuniones con amigos o celebraciones informales. Nuestro objetivo es que cada cliente se sienta como en casa.
            </p>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium">
              ✨ Reserva tu mesa, llámanos o contacta por WhatsApp y descubre por qué El Gusto es un restaurante de referencia en Alicante.
            </p>
            <div>
              <a href="#carta" className="inline-block bg-[#6B5B3E] hover:bg-[#85724E] text-white text-sm font-medium px-6 py-3 rounded-md shadow transition-all">
                Descubre nuestros arroces tradicionales
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg order-1 md:order-2 bg-gray-100">
            <Image 
              src="/tapa3.webp" 
              alt="Carnes a la brasa" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={100}
              priority
              className="object-cover object-center" 
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN CARTA */}
      <section id="carta" className="py-20 bg-white border-y px-4 sm:px-6 lg:px-8" style={{ scrollMarginTop: '50px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-3 mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-[#111111]">Nuestra Carta</h2>
            <p className="text-gray-600 max-w-xl mx-auto">Explora nuestra amplia selección de tapas, bocadillos, carnes, arroces y postres caseros.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10 pb-4">
            {[
              { id: 'tostadas', label: 'Tostadas' },
              { id: 'bocadillos', label: 'Bocadillos' },
              { id: 'tapas', label: 'Tapas Frías y Calientes' },
              { id: 'carnes', label: 'Carnes' },
              { id: 'arroces', label: 'Arroces' },
              { id: 'pescados', label: 'Pescados' },
              { id: 'postres', label: 'Postres' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all ${
                  activeCategory === cat.id 
                    ? 'bg-[#111111] text-[#D4AF37] shadow' 
                    : 'bg-[#FAF9F5] text-gray-700 hover:bg-gray-200 border'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="bg-[#FAF9F5] rounded-xl shadow-md p-6 md:p-10 border border-gray-100 max-w-5xl mx-auto">
            {activeCategory === 'tostadas' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Tostadas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Tostada de jamón y queso', price: '7.20 €' },
                    { name: 'Tostada catalana', price: '6.70 €' },
                    { name: 'Tostada de salmón', price: '8.70 €' },
                    { name: 'Tostada de ventresca de atún y tomate', price: '6.20 €' },
                    { name: 'Tostada pepita', price: '9.00 €' },
                    { name: 'Tostada con aceite', price: '2.00 €' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === 'bocadillos' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Bocadillos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Bocadillo El dorado', desc: 'Cebolla caramelizada, pechuga, bacon y huevo.', price: '7.90 €' },
                    { name: 'Bocadillo de Longaniza', price: '5.50 €' },
                    { name: 'Bocadillo El Gusto', desc: 'Cebolla caramelizada, ternera, foie y pistacho.', price: '8.80 €' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <div>
                        <span className="font-medium text-gray-800 block">{item.name}</span>
                        {item.desc && <span className="text-xs text-gray-500">{item.desc}</span>}
                      </div>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === 'tapas' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Tapas Frías y Calientes</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Marinera (Rosquilla, ensaladilla, anchoa y huevas)', price: '5.50 €' },
                    { name: 'Plato de jamón y queso', price: '19.50 €' },
                    { name: 'Ceviche de corvina', price: '20.00 €' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === 'carnes' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Carnes Seleccionadas</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: "Chuletón de vaca madurada 'Frisona'", price: '75.90 €/kg' },
                    { name: 'Entrecot añojo', price: '72.00 €/kg' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === 'arroces' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Arroces Tradicionales (Mínimo 2 pax)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Arroz a banda', price: '18.00 €' },
                    { name: 'Arroz negro', price: '18.00 €' },
                    { name: 'Arroz del señoret', price: '22.00 €' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === 'pescados' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Pescados</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Tartar de atún rojo', price: '18.00 €' },
                    { name: 'Bacalao al pilpil', price: '19.00 €' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeCategory === 'postres' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-serif text-[#D4AF37] border-b pb-2">Postres Caseros</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { name: 'Tarta de queso con frutos rojos', price: '6.50 €' },
                    { name: 'Crema Catalana', price: '5.00 €' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                      <span className="font-medium text-gray-800">{item.name}</span>
                      <span className="text-[#D4AF37] font-semibold">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECCIÓN GALERÍA DE FOTOS */}
      <section id="galeria" className="py-20 bg-[#FAF9F5] px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" style={{ scrollMarginTop: '80px' }}>
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-[#6B5B3E] font-semibold">Nuestra Esencia</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] italic">Galería de Momentos y Platos</h2>
          <p className="text-gray-600 text-sm">Descubre de cerca nuestros platos y el ambiente de El Gusto</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { src: '/tapa8.webp', alt: 'Tapa tradicional' },
            { src: '/tapa9.webp', alt: 'Carne a la brasa' },
            { src: '/arrocero.webp', alt: 'Arroz al momento' },
            { src: '/tapa1.webp', alt: 'Marinera especial' },
            { src: '/tapa2.webp', alt: 'Postre de la casa' },
            { src: '/tapa5.webp', alt: 'Gamba al ajillo' },
            { src: '/tapa7.webp', alt: 'Tartar de atún con huevo' },
            { src: '/tapa6.webp', alt: 'Tarta de queso' },
          ].map((photo, idx) => (
            <div 
              key={idx} 
              className="relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-md bg-white border border-gray-200 group cursor-pointer"
            >
              <Image 
                src={photo.src} 
                alt={photo.alt} 
                fill 
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={100}
                className="object-cover object-center transition-all duration-300 group-hover:brightness-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 pointer-events-none">
                <span className="text-white text-xs font-medium bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                  {photo.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN RESEÑAS */}
      <section id="reseñas" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t" style={{ scrollMarginTop: '130px' }}>
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Testimonios</span>
          <h2 className="text-3xl md:text-4xl font-serif text-[#2C2C2C] italic">Lo que opinan nuestros clientes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between space-y-6">
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "Cena muy buena con cositas diferentes. Carne roja muy bien preparada e incluso el bacalao especial. Repetiremos sin duda."
            </p>
            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-medium text-sm text-gray-900">Marisa Pérez Encinas</span>
              <div className="flex items-center space-x-1 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold">
                <span>5</span>
                <span>★</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between space-y-6">
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "Arroz de marisco, carnes y postres muy ricos. Ambiente acogedor y estupendo servicio."
            </p>
            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-medium text-sm text-gray-900">Cantera Perea</span>
              <div className="flex items-center space-x-1 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold">
                <span>5</span>
                <span>★</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 flex flex-col justify-between space-y-6">
            <p className="text-gray-700 text-sm leading-relaxed italic">
              "Es un sitio donde queda patente la experiencia en cocina. La carne estaba estupenda y el servicio inmejorable."
            </p>
            <div className="flex items-center justify-between border-t pt-4">
              <span className="font-medium text-sm text-gray-900">Olga Valero</span>
              <div className="flex items-center space-x-1 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-xs font-bold">
                <span>5</span>
                <span>★</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="bg-[#EFECE6] py-20 border-t" style={{ scrollMarginTop: '80px' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-[#111111]">Visítanos y disfruta de la cocina de siempre</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                Reserva tu mesa o llámanos para cualquier duda. Nuestro equipo estará encantado de atenderte.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] text-white p-3 rounded-full text-sm">📞</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Teléfono</h4>
                    <p className="text-gray-600 text-sm">+34 640 546 279</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4AF37] text-white p-3 rounded-full text-sm">📍</div>
                  <div>
                    <h4 className="font-semibold text-gray-800 text-sm">Dirección</h4>
                    <p className="text-gray-600 text-sm">Avenida De Juan Carlos I, 03440 Ibi, Alicante, España</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-64 rounded-xl overflow-hidden shadow-md border border-gray-300 mt-6">
                <iframe
                  title="Ubicación Restaurante El Gusto"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.558370724654!2d-0.5732151234789524!3d38.62758157176735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd61f7e012345679%3A0x123456789abcdef!2sAv.%20de%20Juan%20Carlos%20I%2C%2003440%20Ibi%2C%20Alicante!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-2xl font-serif mb-6 text-[#111111]">Formulario de contacto</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado con éxito!'); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Nombre*</label>
                  <input type="text" required className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none bg-[#FAF9F5]" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Email*</label>
                  <input type="email" required className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none bg-[#FAF9F5]" placeholder="tucorreo@example.com" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Mensaje*</label>
                  <textarea rows={4} required className="w-full px-4 py-2 border rounded-md text-sm focus:ring-2 focus:ring-[#D4AF37] focus:outline-none bg-[#FAF9F5]" placeholder="¿En qué podemos ayudarte?"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#111111] hover:bg-black text-[#D4AF37] font-medium py-3 text-sm rounded-md transition-colors shadow">
                  Enviar
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-gray-400 py-8 text-center text-xs border-t border-gray-800">
        <p>&copy; {new Date().getFullYear()} Restaurante El Gusto. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}