import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Slimy Peppery Lyrebird</title>
        <meta property="og:title" content="Slimy Peppery Lyrebird" />
      </Helmet>
      <div className="home-navbar">
        <div className="home-navbar-container">
          <div className="home-navbar-links">
            <div className="home-logosvg">
              <img
                alt="carmailer528"
                src="/playground_assets/carmailer528-acz7.svg"
                className="home-carmailer"
              />
              <img
                alt="Vector529"
                src="/playground_assets/vector529-amel.svg"
                className="home-vector"
              />
            </div>
            <div className="home-navbar-links-items">
              <span className="home-text">
                <span>Warum carmailer?</span>
              </span>
              <span className="home-text02">
                <span>Wie funktioniert carmailer?</span>
              </span>
              <a
                href="https://www.google.de"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link"
              >
                <div className="home-navbar-links-item-button">
                  <span className="home-text04">
                    <span>Demo vereinbaren</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="home-navbar-actions">
            <div className="home-navbar-actions-login">
              <span className="home-text06">
                <span>Anmelden</span>
              </span>
              <img
                alt="IconUser5222"
                src="/playground_assets/iconuser5222-drpa.svg"
                className="home-icon-user"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-hero">
          <div className="home-hero-container">
            <div className="home-hero-container-content">
              <span className="home-text08">
                <span>E-Mail Marketing für die Automobilbranche</span>
              </span>
              <span className="home-text10">
                <span>
                  Die richtige E-Mail zum richtigen Zeitpunkt sorgt in der
                  Kundenbeziehung für Vertrauen und mehr Umsatz. In Zeiten von
                  Informationsüberfluss, entscheidet nicht die Masse, sondern
                  die Qualität, ob Ihre Nachrichten gelesen werden.
                </span>
              </span>
              <div className="home-hero-actions">
                <div className="home-hero-actions-primary">
                  <span className="home-text12">
                    <span>Demo vereinbaren</span>
                  </span>
                </div>
                <div className="home-hero-actions-button">
                  <span className="home-text14">
                    <span>Mehr erfahren</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1">
        <div className="home-features">
          <div className="home-features-title">
            <div className="home-features-title-objective">
              <span className="home-text16">
                <span>Warum carmailer?</span>
              </span>
            </div>
            <h2 className="home-text18">
              <span>
                Damit die richtige Nachricht, zum richtigen Zeitpunkt auch
                gelesen wird.
              </span>
            </h2>
          </div>
          <div className="home-features-items">
            <div className="home-features-item">
              <div className="home-features-item-image"></div>
              <div className="home-features-item-content">
                <h3 className="home-text20">
                  <span>Ihre Nachricht im Posteingang Ihres Kunden</span>
                </h3>
                <div className="home-features-item-content-description">
                  <p className="home-text22">
                    <span>
                      “Schauen Sie mal im Spam-Ordner” gehört mit uns zur
                      Vergangenheit. Wir versenden Ihre E-Mails mit der
                      richtigen Technik.
                    </span>
                  </p>
                  <span className="home-text24">
                    <span>Laufende Anti-Spam Massnahmen</span>
                  </span>
                  <span className="home-text26">
                    <span>Versand über Ihre Internetadresse</span>
                  </span>
                  <span className="home-text28">
                    <span>Immer höchster Technik-Standard</span>
                  </span>
                  <span className="home-text30">
                    <span>SPF, DKIM und DMARC Einrichtung</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-features-item1">
              <div className="home-features-item-image1"></div>
              <div className="home-features-item-content1">
                <h3 className="home-text32">
                  <span>Die richtige Nachricht zum perfekten Zeitpunkt</span>
                </h3>
                <div className="home-features-item-content-description1">
                  <p className="home-text34">
                    <span>
                      Automatischer und personalisierter Versand an Ihre Kunden.
                      Sie können die passenden Automatisierungen einfach
                      aktivieren.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                  <span className="home-text36">
                    <span>Erinnerung zum Service oder MFK</span>
                  </span>
                  <span className="home-text38">
                    <span>Abfrage Kundenzufriedenheit</span>
                  </span>
                  <span className="home-text40">
                    <span>Persönliche Nachricht zum Geburtstag</span>
                  </span>
                  <span className="home-text42">
                    <span>Erinnerung zu Terminen</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-features-item2">
              <div className="home-features-item-image2"></div>
              <div className="home-features-item-content2">
                <h3 className="home-text44">
                  <span>Passender Auftritt auch im E-Mail Postfach</span>
                </h3>
                <div className="home-features-item-content-description2">
                  <p className="home-text46">
                    <span>
                      Sie erhalten ein E-Mail Design in Ihrem Marken-Design.
                      Dieses funktioniert auf dem Mobile als auch auf dem PC.
                    </span>
                  </p>
                  <span className="home-text48">
                    <span>Getestet mit allen E-Mail Programmen</span>
                  </span>
                  <span className="home-text50">
                    <span>Auch auf dem Mobile perfekt lesbar</span>
                  </span>
                  <span className="home-text52">
                    <span>Logo, Farben und Schriften angepasst</span>
                  </span>
                  <span className="home-text54">
                    <span>Einfachste Bedienung zum Versand</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section2">
        <div className="home-propositions">
          <div className="home-propositions-title">
            <div className="home-propositions-title-objective">
              <span className="home-text56">
                <span>Wie funktioniert carmailer?</span>
              </span>
            </div>
            <h2 className="home-text58">
              <span>
                So einfach wie ein Textprogramm – carmailer regelt den Rest.
              </span>
            </h2>
          </div>
          <div className="home-propositions-items">
            <div className="home-propositions-item">
              <img
                alt="PropositionsItemIconsvg5210"
                src="/playground_assets/propositionsitemiconsvg5210-74ht.svg"
                className="home-propositions-item-iconsvg"
              />
              <div className="home-propositions-item-description">
                <h3 className="home-text60">
                  <span>Simple verfassen von E-Mails</span>
                </h3>
                <p className="home-text62">
                  <span>
                    Keine komplexen Edtioren. Sie geben einfach Texte ein und
                    carmailer kümmert sich darum, dass es im gewünschten Design
                    versendet wird.
                  </span>
                </p>
              </div>
            </div>
            <div className="home-propositions-item1">
              <img
                alt="PropositionsItemIconsvg5211"
                src="/playground_assets/propositionsitemiconsvg5211-2fkl.svg"
                className="home-propositions-item-iconsvg1"
              />
              <div className="home-propositions-item-description1">
                <h3 className="home-text64">
                  <span>Einfache Dateneingabe</span>
                </h3>
                <p className="home-text66">
                  <span>
                    Eingeloggt über Ihren Browser können Sie die Daten Ihrer
                    Kunden einfach pflegen. Durch die Eingabe werden passende
                    Automatisierungen gestartet.
                  </span>
                </p>
              </div>
            </div>
            <div className="home-propositions-item2">
              <img
                alt="PropositionsItemIconsvg5212"
                src="/playground_assets/propositionsitemiconsvg5212-hvip.svg"
                className="home-propositions-item-iconsvg2"
              />
              <div className="home-propositions-item-description2">
                <h3 className="home-text68">
                  <span>Fertige Automatisierungen</span>
                </h3>
                <p className="home-text70">
                  <span>
                    Wir haben die gängigsten Automatisierungen bereits
                    vorbeitet. Diese müssen nur noch aktiviert werden. Die
                    Auswahl wird ständig erweitert.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <div className="home-call-to-action-container">
          <div className="home-call-to-action-content">
            <span className="home-text72">
              <span>Sind Sie bereit für carmailer?</span>
            </span>
            <span className="home-text74">
              <span>
                Vereinbaren Sie einen kostenlosen und unverbindlichen
                Demo-Termin. In einem ca. 30 minütigen Video-Gespräch
                präsentieren wir Ihnen carmailer. Danach entscheiden Sie, wie es
                weiter geht.
              </span>
            </span>
            <div className="home-call-to-action-button">
              <span className="home-text76">
                <span>Jetzt Termin auswählen</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section4">
        <div className="home-f-a-q">
          <div className="home-f-a-q-title">
            <span className="home-text78">
              <span>Häufig gestellte Fragen</span>
            </span>
          </div>
          <div className="home-f-a-q-items">
            <div className="home-f-a-q-item-open">
              <div className="home-f-a-q-item-title">
                <img
                  alt="FAQItemIcon5275"
                  src="/playground_assets/faqitemicon5275-mnvf.svg"
                  className="home-f-a-q-item-icon"
                />
                <span className="home-text80">
                  <span>Was ist carmailer genau?</span>
                </span>
              </div>
              <div className="home-f-a-q-item-answer">
                <span className="home-text82">
                  <span>Das hier kann die Antwort sein.</span>
                </span>
              </div>
            </div>
            <div className="home-f-a-q-item-closed">
              <img
                alt="FAQItemIcon5281"
                src="/playground_assets/faqitemicon5281-vgjb.svg"
                className="home-f-a-q-item-icon1"
              />
              <span className="home-text84">
                <span>Wie lange dauert die Einrichtung von carmailer?</span>
              </span>
            </div>
            <div className="home-f-a-q-item-closed1">
              <img
                alt="FAQItemIcon5285"
                src="/playground_assets/faqitemicon5285-71z9.svg"
                className="home-f-a-q-item-icon2"
              />
              <span className="home-text86">
                <span>
                  Kann ich meine Kundendaten über eine Schnittstelle mit
                  carmailer synchronisieren?
                </span>
              </span>
            </div>
            <div className="home-f-a-q-item-closed2">
              <img
                alt="FAQItemIcon5289"
                src="/playground_assets/faqitemicon5289-j3wa.svg"
                className="home-f-a-q-item-icon3"
              />
              <span className="home-text88">
                <span>Was kostet carmailer für mich?</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section5">
        <div className="home-footer">
          <span className="home-text90">
            <span>© 2022 carmailer</span>
          </span>
          <div className="home-footer-links">
            <span className="home-text92">
              <span>Datenschutzerklärung</span>
            </span>
            <span className="home-text94">
              <span>Impressum</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
