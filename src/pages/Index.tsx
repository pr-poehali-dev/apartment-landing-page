import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PHOTOS = [
  'https://img.dmclk.ru/s1200x800q80/vitrina/ca/e5/cae56188aa5de6ee14b1529f7445520dd48a4866.webp',
  'https://img.dmclk.ru/s1200x800q80/vitrina/4d/45/4d450118bae1e63bc3a94d485ac0831e9be28819.webp',
  'https://img.dmclk.ru/s1200x800q80/vitrina/f6/10/f61084ee312a8b95312477a8c8d310f459dbb61d.webp',
  'https://img.dmclk.ru/s1200x800q80/vitrina/96/9c/969c8377d4d23e4f7081d945fe94da96af93b5fc.webp',
];

const SPECS = [
  { label: 'Площадь', value: '97,6', unit: 'м²', icon: 'Maximize2' },
  { label: 'Комнат', value: '2', unit: 'комн.', icon: 'DoorOpen' },
  { label: 'Этаж', value: '1', unit: 'из 6', icon: 'Building2' },
  { label: 'Кухня', value: '15', unit: 'м²', icon: 'ChefHat' },
  { label: 'Балкон', value: '1', unit: 'шт.', icon: 'Columns2' },
  { label: 'Газ', value: 'Есть', unit: '', icon: 'Flame' },
];

const DETAILS = [
  { label: 'Тип жилья', value: 'Квартира' },
  { label: 'Этажность дома', value: '6 этажей' },
  { label: 'Ремонт', value: 'Косметический' },
  { label: 'Тип сделки', value: 'Свободная продажа' },
  { label: 'Балконы', value: '1 балкон' },
  { label: 'Газ', value: 'Есть' },
];

const INFRA = [
  { icon: 'GraduationCap', title: 'Школа', dist: 'Шаговая доступность' },
  { icon: 'ShoppingCart', title: 'Супермаркеты', dist: 'Рядом' },
  { icon: 'Store', title: 'ТЦ «Форум» и «Луч»', dist: 'Рядом' },
  { icon: 'Dumbbell', title: 'Спорткомплекс «Парнас»', dist: 'Рядом' },
  { icon: 'Car', title: 'Центр города', dist: '5 минут на авто' },
  { icon: 'Footprints', title: 'Центр пешком', dist: '15 минут' },
];

const NAV = [
  { id: 'about', label: 'О квартире' },
  { id: 'specs', label: 'Характеристики' },
  { id: 'gallery', label: 'Фото' },
  { id: 'video', label: 'Видео' },
  { id: 'infra', label: 'Район' },
  { id: 'contact', label: 'Контакты' },
];

const Index = () => {
  const [activePhoto, setActivePhoto] = useState(0);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="min-h-screen bg-background">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border bg-primary text-primary-foreground">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-display text-lg font-600 tracking-wide">
            <Icon name="Home" size={20} className="text-accent" />
            ВОЛОГДА · 2-комн. · 97,6 м²
          </div>
          <nav className="hidden gap-7 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
              >
                {n.label}
              </button>
            ))}
          </nav>
          <Button
            onClick={() => scrollTo('contact')}
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Записаться на просмотр
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-primary text-primary-foreground">
        <img
          src={PHOTOS[0]}
          alt="Квартира"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="container relative grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
              <Icon name="MapPin" size={14} /> Вологда, Ленинградская ул., 76а
            </span>
            <h1 className="mt-6 font-display text-4xl font-700 leading-tight md:text-6xl">
              2-комнатная квартира 97,6 м²
            </h1>
            <p className="mt-4 max-w-md text-primary-foreground/70">
              Просторная квартира на первом этаже кирпичного дома с индивидуальным
              входом и собственной придомовой территорией. Развитый район, центр в 5 минутах.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
              <span className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-3 py-2 text-sm text-accent">
                <Icon name="DoorOpen" size={16} /> Индивидуальный вход
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-3 py-2 text-sm text-accent">
                <Icon name="Trees" size={16} /> Своя территория
              </span>
              <span className="inline-flex items-center gap-2 rounded-md bg-accent/10 px-3 py-2 text-sm text-accent">
                <Icon name="Bath" size={16} /> Два санузла
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                onClick={() => scrollTo('contact')}
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                <Icon name="CalendarCheck" size={18} /> Записаться на просмотр
              </Button>
              <Button
                onClick={() => scrollTo('video')}
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Icon name="Play" size={18} /> Видео-обзор
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="container py-16 md:py-24">
        <SectionTitle num="01" title="О квартире" />
        <div className="mt-10 grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <p className="text-lg leading-relaxed text-foreground/80">
            Просторная двухкомнатная квартира площадью 97,6 м² расположена на первом
            этаже пятиэтажного кирпичного дома в удобном и развитом районе. Главное
            преимущество объекта — индивидуальный вход и собственная придомовая
            территория, которую можно обустроить по своему вкусу: разбить клумбу,
            поставить лавочку или организовать место для отдыха.
            <br /><br />
            Планировка продумана для комфортного проживания: два санузла, два городских
            телефона, кухня совмещена с застеклённой лоджией, что создаёт дополнительное
            светлое пространство, а большая гостиная позволяет принимать гостей. Дом
            подходит как для постоянного проживания, так и для инвестиции — благодаря
            удачному расположению и удобной планировке квартира будет пользоваться
            стабильным спросом.
          </p>
          <div className="space-y-3">
            {[
              'Индивидуальный вход в квартиру',
              'Собственная придомовая территория',
              'Два раздельных санузла',
              'Кухня совмещена с лоджией',
              'Две линии городского телефона',
              'Развитый район, центр в 5 минутах',
            ].map((t) => (
              <div key={t} className="flex items-start gap-3">
                <Icon name="Check" size={20} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-foreground/80">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECS */}
      <section id="specs" className="bg-secondary py-16 md:py-24">
        <div className="container">
        <SectionTitle num="02" title="Характеристики" />
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3 lg:grid-cols-6">
          {SPECS.map((s) => (
            <div key={s.label} className="bg-card p-6">
              <Icon name={s.icon} size={22} className="text-accent" />
              <div className="mt-4 font-display text-3xl font-600 tnum">{s.value}</div>
              <div className="text-sm text-muted-foreground">
                {s.unit} · {s.label}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-px overflow-hidden rounded-lg border border-border bg-border md:grid md:grid-cols-2 md:gap-px">
          {DETAILS.map((d) => (
            <div
              key={d.label}
              className="flex items-center justify-between bg-card px-6 py-4"
            >
              <span className="text-muted-foreground">{d.label}</span>
              <span className="font-500 text-foreground">{d.value}</span>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-16 md:py-24">
        <div className="container">
          <SectionTitle num="03" title="Фотографии" />
          <div className="mt-10 overflow-hidden rounded-lg">
            <img
              src={PHOTOS[activePhoto]}
              alt="Фото квартиры"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4">
            {PHOTOS.map((p, i) => (
              <button
                key={i}
                onClick={() => setActivePhoto(i)}
                className={`overflow-hidden rounded-md border-2 transition-all ${
                  activePhoto === i ? 'border-accent' : 'border-transparent opacity-70'
                }`}
              >
                <img src={p} alt="" className="aspect-video w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section id="video" className="container py-16 md:py-24">
        <SectionTitle num="04" title="Видео-обзор квартиры и района" />
        <div className="mt-10 overflow-hidden rounded-lg border border-border bg-black">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Видео-обзор квартиры"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Полный обход квартиры, двора и окружающей инфраструктуры.
        </p>
      </section>

      {/* INFRA */}
      <section id="infra" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <SectionTitle num="05" title="Инфраструктура района" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {INFRA.map((i) => (
              <div key={i.title} className="flex items-center gap-4 bg-card p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/15">
                  <Icon name={i.icon} size={20} className="text-accent" />
                </div>
                <div>
                  <div className="font-500">{i.title}</div>
                  <div className="text-sm text-muted-foreground">{i.dist}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container grid gap-12 md:grid-cols-2">
          <div>
            <SectionTitle num="06" title="Записаться на просмотр" light />
            <p className="mt-6 max-w-md text-primary-foreground/70">
              Оставьте контакты — свяжемся в течение часа и согласуем удобное время показа.
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:+79000000000" className="flex items-center gap-3 hover:text-accent">
                <Icon name="Phone" size={20} className="text-accent" /> +7 (900) 000-00-00
              </a>
              <div className="flex items-center gap-3">
                <Icon name="Clock" size={20} className="text-accent" /> Ежедневно 9:00–21:00
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-lg bg-card p-8 text-card-foreground"
          >
            <Input placeholder="Ваше имя" className="mb-4" />
            <Input placeholder="Телефон" type="tel" className="mb-4" />
            <Input placeholder="Удобное время просмотра" className="mb-6" />
            <Button
              type="submit"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
              size="lg"
            >
              Отправить заявку
            </Button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь на обработку данных
            </p>
          </form>
        </div>
      </section>

      <footer className="border-t border-border bg-primary py-6 text-center text-sm text-primary-foreground/50">
        Вологда, Ленинградская ул., 76а · 2-комн. квартира 97,6 м² · Свободная продажа
      </footer>
    </div>
  );
};

const SectionTitle = ({
  num,
  title,
  light,
}: {
  num: string;
  title: string;
  light?: boolean;
}) => (
  <div className="flex items-baseline gap-4">
    <span className="font-display text-sm font-500 text-accent">{num}</span>
    <h2
      className={`font-display text-3xl font-600 md:text-4xl ${
        light ? 'text-primary-foreground' : 'text-foreground'
      }`}
    >
      {title}
    </h2>
  </div>
);

export default Index;