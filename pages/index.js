import Products from '../components/Products';
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Products />

      <h2>Voleu comprar el nostre arròs?</h2>

      <p className="textBlock">Segueix el seguen enllaç per a informar-te de com trobar el nostre arròs.</p>

      <a href="/comprar">Vull provar l'Arròs Tramuntana!</a>

      <a href="/comprar" className="cigonya">
        <img src="/images/cigonya-gran.jpg" alt="Dibuix de la cigonya" title="La cigonya" />
      </a>
    </Layout>
  )
}
