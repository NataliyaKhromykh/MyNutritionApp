function MyNutritionComponent({label,quantity,unit}) {
    return (
       <div className="ingr-box">
        <div className="label-box">
        <h4>{label}</h4>
        </div>
        <div className="unit-box">
        <p>{quantity.toFixed()} {unit}</p>
        </div>

    </div>)
}
export default MyNutritionComponent;