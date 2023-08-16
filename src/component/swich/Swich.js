import "./swich.css";

const Swich = () => {
  return (
    <div className="swichWrap">
      <label for="checkbox" className="swichTitle">Show Percentage</label>
      <label className="wrapper">
          <input type="checkbox"id="checkbox"/>
          <span class="left"></span>
          <span class="right"></span>
      </label>
    </div>
  )
}

export default Swich