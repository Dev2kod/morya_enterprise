import { useEffect, useState } from 'react'

const PHONE = '8975712604'
const PHONE_INTL = '918975712604'
const EMAIL = 'moryenterprises.1972@gmail.com'

/* ---------- tiny helpers ---------- */

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function useScrolled(offset = 24) {
  const [on, setOn] = useState(false)
  useEffect(() => {
    const fn = () => setOn(window.scrollY > offset)
    fn()
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [offset])
  return on
}

const Logo = ({ size = 40 }) => (
  <svg className="logo" width={size} height={(size * 110) / 128} viewBox="0 0 128 110" aria-hidden="true">
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#FFE892" />
        <stop offset=".45" stopColor="#F5B301" />
        <stop offset="1" stopColor="#B87A00" />
      </linearGradient>
    </defs>
    <path d="M6 104V6h17l20 33L63 6h17v98H63V44L43 76 23 44v60z" fill="url(#lg)" />
    <path d="M66 104C66 62 82 28 120 6" stroke="#00AEEF" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M82 104C82 62 98 28 122 14" stroke="#EC008C" strokeWidth="10" fill="none" strokeLinecap="round" />
    <path d="M98 104C98 70 108 44 124 30" stroke="#FFF200" strokeWidth="10" fill="none" strokeLinecap="round" />
  </svg>
)

/* ---------- icon paths ---------- */

const I = {
  card: 'M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5zM7 9h5M7 13h10M7 17h7',
  flyer: 'M4 4h7v16H4zM13 4h7v16h-7zM7 8h1M16 8h1M7 12h1M16 12h1',
  flex: 'M3 5h18v11H3zM7 20h10M12 16v4M7 9h10M7 12.5h6',
  design: 'M12 3l2.6 5.5 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.3l6-.8z',
  printer: 'M7 9V3h10v6M7 19H5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M7 15h10v6H7z',
  layers: 'M12 3 3 8l9 5 9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5',
  phone: 'M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4z',
  mail: 'M3 6h18v12H3zM3 7l9 6 9-6',
  pin: 'M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11zM12 10.6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0',
  check: 'M4 12.5 9 17.5 20 6.5',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3.5 2',
  medal: 'M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14 7 22l5-2.5L17 22l-1.5-8',
  rupee: 'M6 4h12M6 9h12M15 4c0 4-3 5-6.5 5L17 20M6 9h3',
  wa: 'M20.5 11.6a8.4 8.4 0 0 1-12.3 7.5L4 20.5l1.5-4.1A8.4 8.4 0 1 1 20.5 11.6zM9 9.2c.3-.8.6-.8.9-.8h.7c.2 0 .5 0 .7.6l.8 1.9c.1.3 0 .5-.1.7l-.5.6c-.2.2-.3.4-.1.7a7 7 0 0 0 3.2 2.8c.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.5.3.5.5 0 .9-.6 1.8-1.1 2-.5.2-1.2.4-3.4-.5a11 11 0 0 1-5-4.6c-.5-.9-.8-1.9-.8-2.8 0-.6.2-1 .4-1.2z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
}

const Icon = ({ d, size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
    strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={d} />
  </svg>
)

/* ---------- content ---------- */

const SERVICES = [
  { icon: I.card, title: 'Visiting Cards', text: 'Matte, gloss, velvet-lamination and spot-UV cards that make the right first impression.', tags: ['300-400 GSM', 'Spot UV', 'Fast proof'] },
  { icon: I.flyer, title: 'Flyers & Pamphlets', text: 'High-volume leaflets and brochures printed sharp and delivered fast for your next campaign.', tags: ['A4 / A5 / A6', 'Bulk rates', 'Fold options'] },
  { icon: I.flex, title: 'Flex & Banner Printing', text: 'Shop boards, hoardings, standees and backdrops in weather-resistant outdoor flex.', tags: ['Any size', 'Star flex', 'Eyelet finish'] },
  { icon: I.design, title: 'Logo & Designing', text: 'Original logo design, brand kits and print-ready artwork crafted in-house by our team.', tags: ['Logo', 'Branding', 'Artwork'] },
  { icon: I.layers, title: 'Digital & Offset', text: 'Short runs on digital, large runs on offset - accurate CMYK colour on every single sheet.', tags: ['CMYK', 'Offset', 'Digital'] },
  { icon: I.printer, title: 'All Types of Printing', text: 'Stickers, labels, certificates, menu cards, invitations - if it prints, we print it.', tags: ['Stickers', 'Labels', 'Custom'] },
]

const WHY = [
  { icon: I.medal, title: 'High Quality', text: 'Calibrated CMYK output and premium paper stock on every order, big or small.' },
  { icon: I.clock, title: 'On Time Delivery', text: 'Committed deadlines. Urgent jobs handled with same-day and next-day turnaround.' },
  { icon: I.check, title: 'Customer Satisfaction', text: 'A free digital proof before printing - you approve it, then we press start.' },
  { icon: I.rupee, title: 'Best Price', text: 'Direct from our own press. No middlemen, no hidden charges, honest rates.' },
]

const STEPS = [
  { n: '01', title: 'Share Your Idea', text: 'Send your design, a reference, or simply tell us what you need on WhatsApp.' },
  { n: '02', title: 'Design & Proof', text: 'We design or correct the artwork and send a digital proof for your approval.' },
  { n: '03', title: 'Printing', text: 'Your job goes to press with precise colour control and a quality check.' },
  { n: '04', title: 'Delivery', text: 'Finished, packed and handed over - on the date we promised.' },
]

/* ---------- sections ---------- */

function Nav() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const links = [
    ['Services', '#services'],
    ['Why Us', '#why'],
    ['Process', '#process'],
    ['About', '#about'],
    ['Contact', '#contact'],
  ]
  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''}`}>
      <div className="wrap nav__inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <Logo size={38} />
          <span className="brand__text">
            <strong>MORYA</strong>
            <em>Enterprises · Printing Press</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn btn--gold nav__cta" href={`tel:+91${PHONE}`}>
            <Icon d={I.phone} size={17} /> {PHONE}
          </a>
        </nav>

        <button className={`burger ${open ? 'is-open' : ''}`} onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu" aria-expanded={open}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  const waLink = `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent('Hi Morya Enterprises, I need a printing quote for:')}`
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <span className="blob blob--c" /><span className="blob blob--m" /><span className="blob blob--y" />
        <div className="grid-lines" />
      </div>

      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="eyebrow" data-reveal>
            <span className="dot dot--c" /><span className="dot dot--m" /><span className="dot dot--y" />
            Dighori, Nagpur
          </p>
          <h1 data-reveal>
            Your Ideas,<br />
            <span className="grad">Our Prints.</span>
          </h1>
          <p className="lede" data-reveal>
            Morya Enterprises is a full-service printing press in Nagpur — visiting cards, flyers,
            flex banners, logo design and every other kind of printing work, finished to a standard
            you can hand straight to a client.
          </p>
          <div className="hero__cta" data-reveal>
            <a className="btn btn--gold btn--lg" href={waLink} target="_blank" rel="noreferrer">
              <Icon d={I.wa} size={19} /> Get a Free Quote
            </a>
            <a className="btn btn--ghost btn--lg" href="#services">
              View Services <Icon d={I.arrow} size={18} />
            </a>
          </div>
          <ul className="hero__stats" data-reveal>
            <li><strong>1000+</strong><span>Jobs printed</span></li>
            <li><strong>24 hr</strong><span>Urgent delivery</span></li>
            <li><strong>100%</strong><span>In-house work</span></li>
          </ul>
        </div>

        <div className="hero__visual" data-reveal>
          <div className="card3d">
            <img src="./card.jpg" alt="Morya Enterprises Printing Press business card" />
            <span className="card3d__sheen" />
          </div>
          <div className="chip chip--1"><Icon d={I.medal} size={16} /> Quality Printing</div>
          <div className="chip chip--2"><Icon d={I.rupee} size={16} /> at Best Price</div>
        </div>
      </div>

      <div className="cmyk-bar" aria-hidden="true"><i /><i /><i /><i /></div>
    </section>
  )
}

function Marquee() {
  const items = ['Visiting Cards', 'Flyers', 'Pamphlets', 'Flex Printing', 'Logo Design', 'Banners', 'Stickers', 'Offset Printing', 'Standees', 'Brochures']
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((k) => (
          <div className="marquee__group" key={k}>
            {items.map((t) => (
              <span key={t + k}>{t}<i className="sep" /></span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SectionHead({ kicker, title, sub, light }) {
  return (
    <div className={`head ${light ? 'head--light' : ''}`} data-reveal>
      <p className="kicker">{kicker}</p>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
    </div>
  )
}

function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <SectionHead kicker="What we print" title="Everything your brand needs on paper"
          sub="One press, one point of contact — from a hundred visiting cards to a full shop hoarding." />
        <div className="cards">
          {SERVICES.map((s, i) => (
            <article className="card" key={s.title} data-reveal style={{ '--d': `${i * 70}ms` }}>
              <span className="card__icon"><Icon d={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <ul className="tags">{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
              <a className="card__link" href="#contact">Enquire <Icon d={I.arrow} size={16} /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Why() {
  return (
    <section className="section section--dark" id="why">
      <div className="wrap">
        <SectionHead light kicker="Why Morya" title="High quality. On time. Every time."
          sub="The three promises printed on our card — and kept on every job that leaves the press." />
        <div className="why">
          {WHY.map((w, i) => (
            <div className="why__item" key={w.title} data-reveal style={{ '--d': `${i * 80}ms` }}>
              <span className="why__icon"><Icon d={w.icon} size={22} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Process() {
  return (
    <section className="section" id="process">
      <div className="wrap">
        <SectionHead kicker="How it works" title="From your idea to your hands in four steps" />
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.n} data-reveal style={{ '--d': `${i * 90}ms` }}>
              <span className="step__n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap about__grid">
        <div className="about__media" data-reveal>
          <img src="./card.jpg" alt="Morya Enterprises branding" />
          <div className="about__badge">
            <strong>CMYK</strong>
            <span>true colour printing</span>
          </div>
        </div>
        <div className="about__copy">
          <SectionHead kicker="About us" title="A Nagpur press that treats every job like its own" />
          <p data-reveal>
            Morya Enterprises works out of Dighori, Nagpur, handling design and printing under one
            roof. That means fewer hand-offs, fewer mistakes and a price that stays honest — the work
            goes straight from our designer to our press.
          </p>
          <p data-reveal>
            Whether it is a single box of visiting cards or a thousand pamphlets for a campaign, you
            deal directly with us, see a proof before we print, and get it when we said you would.
          </p>
          <div className="about__list" data-reveal>
            {['In-house design team', 'Free digital proof', 'Bulk order pricing', 'Urgent orders accepted'].map((t) => (
              <span key={t}><Icon d={I.check} size={16} /> {t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: SERVICES[0].title, details: '' })
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const send = (e) => {
    e.preventDefault()
    const msg = [
      'Hello Morya Enterprises,',
      '',
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      `Details: ${form.details}`,
    ].join('\n')
    window.open(`https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener')
  }

  return (
    <section className="section section--dark contact" id="contact">
      <div className="wrap contact__grid">
        <div className="contact__info">
          <SectionHead light kicker="Get in touch" title="Tell us what you need printed" />
          <p className="contact__lede" data-reveal>
            Send us your design or simply describe the job — we reply with a price and a timeline.
          </p>
          <ul className="contact__list" data-reveal>
            <li>
              <span className="ci"><Icon d={I.user} size={20} /></span>
              <div><small>Proprietor</small><strong>Ayush Pisudde</strong></div>
            </li>
            <li>
              <span className="ci"><Icon d={I.phone} size={20} /></span>
              <div><small>Call or WhatsApp</small><a href={`tel:+91${PHONE}`}><strong>{PHONE}</strong></a></div>
            </li>
            <li>
              <span className="ci"><Icon d={I.mail} size={20} /></span>
              <div><small>Email</small><a href={`mailto:${EMAIL}`}><strong className="break">{EMAIL}</strong></a></div>
            </li>
            <li>
              <span className="ci"><Icon d={I.pin} size={20} /></span>
              <div><small>Press address</small><strong>Dighori, Nagpur</strong></div>
            </li>
          </ul>
        </div>

        <form className="quote" onSubmit={send} data-reveal>
          <h3>Request a quote</h3>
          <label>
            <span>Your name</span>
            <input required value={form.name} onChange={set('name')} placeholder="Full name" />
          </label>
          <label>
            <span>Phone number</span>
            <input required type="tel" value={form.phone} onChange={set('phone')} placeholder="10-digit mobile" />
          </label>
          <label>
            <span>What do you need?</span>
            <select value={form.service} onChange={set('service')}>
              {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
            </select>
          </label>
          <label>
            <span>Details <i>(quantity, size, deadline)</i></span>
            <textarea rows="3" value={form.details} onChange={set('details')}
              placeholder="e.g. 500 visiting cards, matte finish, needed by Friday" />
          </label>
          <button className="btn btn--gold btn--block" type="submit">
            <Icon d={I.wa} size={19} /> Send on WhatsApp
          </button>
          <p className="quote__note">Opens WhatsApp with your details already filled in.</p>
        </form>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="cmyk-bar" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="wrap footer__inner">
        <div className="footer__brand">
          <Logo size={44} />
          <div>
            <strong>Morya Enterprises</strong>
            <span>Printing Press · Dighori, Nagpur</span>
          </div>
        </div>
        <p className="footer__tag">Quality Printing at Best Price</p>
        <div className="footer__meta">
          <a href={`tel:+91${PHONE}`}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <div className="wrap footer__bottom">
        <span>© {new Date().getFullYear()} Morya Enterprises. All rights reserved.</span>
        <span className="footer__promise">HIGH QUALITY <i>|</i> ON TIME DELIVERY <i>|</i> CUSTOMER SATISFACTION</span>
      </div>
    </footer>
  )
}

function FloatingCTA() {
  return (
    <a className="fab" href={`https://wa.me/${PHONE_INTL}`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <Icon d={I.wa} size={26} />
      <span>Chat with us</span>
    </a>
  )
}

export default function App() {
  useReveal()
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Process />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  )
}
