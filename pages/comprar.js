import Layout from '../components/Layout';
import Map from '../components/Map';

export default function Comprar() {
  return (
    <Layout>
      <h2>Vols comprar el nostre arròs?</h2>
      <p className="textBlock">Podeu trobar el Arròs Tramuntana a moltes botiques de l'Empordà i comarques de Girona. Hem elaborat un mapa amb algunes de les botigues on el podeu trobar. Si coneixeu algun comerç on es ven i no apareix al mapa, contacteu-nos i l'afegirem!</p>
      <p className="textBlock">Per altra banda, <strong>per a quantitats grans d'arròs</strong>, nosaltres ens en podem encarregar del transport, <a href="/contacte">contacta'ns</a> i en parlem!</p>

      <Map />
    </Layout>
  )
}

