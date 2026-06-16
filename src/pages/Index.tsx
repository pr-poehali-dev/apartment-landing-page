import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PHOTOS = [
  'https://cdn.poehali.dev/projects/e8ec8e00-f260-4974-b1f2-bf56125189b0/files/1379bcc4-04e3-4b83-8fe1-f26293534797.jpg',
  'https://cdn.poehali.dev/projects/e8ec8e00-f260-4974-b1f2-bf56125189b0/files/25cc74fe-2e1e-46bf-ba83-5eeeb5e454f3.jpg',
  'https://cdn.poehali.dev/projects/e8ec8e00-f260-4974-b1f2-bf56125189b0/files/858d81fd-b077-4124-96ad-83c87049979c.jpg',
];

const SPECS = [
  { label: 'Площадь', value: '64,5', unit: 'м²', icon: 'Maximize2' },
  { label: 'Комнат', value: '2', unit: 'комн.', icon: 'DoorOpen' },
  { label: 'Этаж', value: '7', unit: 'из 16', icon: 'Building2' },
  { label: 'Год постройки', value: '2021', unit: 'г.', icon: 'CalendarDays' },
  { label: 'Санузел', value: '2', unit: 'разд.', icon: 'Bath' },
  { label: 'Высота потолков', value: '2,75', unit: 'м', icon: 'MoveVertical' },
];

const DETAILS = [
  { label: 'Тип дома', value: 'Монолит-кирпич' },
  { label: 'Отделка', value: 'Чистовая, евроремонт' },
  { label: 'Балкон', value: 'Застеклённая лоджия' },
  { label: 'Парковка', value: 'Подземная + гостевая' },
  { label: 'Лифт', value: 'Пассажирский + грузовой' },
  { label: 'Документы', value: 'Собственность, 1 владелец' },
];

const INFRA = [
  { icon: 'GraduationCap', title: 'Школа №5', dist: '350 м' },
  { icon: 'Baby', title: 'Детский сад', dist: '200 м' },
  { icon: 'ShoppingCart', title: 'ТЦ «Мармелад»', dist: '600 м' },
  { icon: 'Trees', title: 'Парк Мира', dist: '450 м' },
  { icon: 'Bus', title: 'Остановка', dist: '120 м' },
  { icon: 'Stethoscope', title: 'Поликлиника', dist: '800 м' },
];

const NAV = [
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
            ВОЛОГДА · 2-комн.
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
              <Icon name="MapPin" size={14} /> Вологда, ул. Ленинградская, 144
            </span>
            <h1 className="mt-6 font-display text-4xl font-700 leading-tight md:text-6xl">
              2-комнатная квартира 64,5 м²
            </h1>
            <p className="mt-4 max-w-md text-primary-foreground/70">
              Светлая видовая квартира с евроремонтом в монолитном доме 2021 года.
              Развитая инфраструктура, подземный паркинг.
            </p>
            <div className="mt-8 flex items-end gap-4">
              <span className="font-display text-5xl font-700 tnum">11 000 000 ₽</span>
              <span className="pb-2 text-sm text-primary-foreground/60">
                170 542 ₽/м²
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

      {/* SPECS */}
      <section id="specs" className="container py-16 md:py-24">
        <SectionTitle num="01" title="Характеристики" />
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
      </section>

      {/* GALLERY */}
      <section id="gallery" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <SectionTitle num="02" title="Фотографии" />
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
        <SectionTitle num="03" title="Видео-обзор квартиры и района" />
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
          <SectionTitle num="04" title="Инфраструктура района" />
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
            <SectionTitle num="05" title="Записаться на просмотр" light />
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
        Вологда, ул. Ленинградская, 144 · Продажа квартиры собственником
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
