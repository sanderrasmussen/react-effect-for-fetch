import FavouriteSlipsList from "./components/FavouriteSlipsList"
import AdviceSlip from "./components/AdviceSlip"

function AdviceSection() {
  return (
    <section>
      <h2>Advice Section</h2>
      <AdviceSlip></AdviceSlip>
      <FavouriteSlipsList></FavouriteSlipsList>
    </section>
  )
}

export default AdviceSection
