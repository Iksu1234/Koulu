import Henkilö from "./Henkilö.mjs";

export default class Urheilija extends Henkilö {
  constructor(
    etunimet,
    sukunimi,
    kutsumanimi,
    syntymävuosi,
    linkki_kuvaan,
    omapaino,
    laji,
    saavutukset
  ) {
    super(etunimet, sukunimi, kutsumanimi, syntymävuosi);
    this._linkki_kuvaan = linkki_kuvaan;
    this._omapaino = omapaino;
    this._laji = laji;
    this._saavutukset = saavutukset;
  }
  get etunimet() {
    return this._etunimet;
  }
  set etunimet(value) {
    this._etunimet = value;
  }
  get sukunimi() {
    return this._sukunimi;
  }
  set sukunimi(value) {
    this._sukunimi = value;
  }
  get kutsumanimi() {
    return this._kutsumanimi;
  }
  set kutsumanimi(value) {
    this._kutsumanimi = value;
  }
  get syntymävuosi() {
    return this._syntymävuosi;
  }
  set syntymävuosi(value) {
    this._syntymävuosi = value;
  }
  get linkki_kuvaan() {
    return this._linkki_kuvaan;
  }
  set linkki_kuvaan(value) {
    this._linkki_kuvaan = value;
  }
  get omapaino() {
    return this._omapaino;
  }
  set omapaino(value) {
    this._omapaino = value;
  }
  get laji() {
    return this._laji;
  }
  set laji(value) {
    this._laji = value;
  }
  get saavutukset() {
    return this._saavutukset;
  }
  set saavutukset(value) {
    this._saavutukset = value;
  }
}
