import { useState, useEffect } from "react";
import { currentCustomer, IPlans } from "../common/models";

export const Plans= ({ name } :currentCustomer) => {

  const [plans, setPlans] = useState<IPlans[] | null>();
  const [selectedPlan, setSelectedPlan] = useState(0);

  useEffect(() => { 

    const fetchPlans = async () => {
        const response = await fetch('http://localhost:3010/plans');
        const jsonData = await response.json();
        setPlans(jsonData)
    }
    fetchPlans();
  }, [name]);

  const handleSelect = (e) => {
    const currentPlanId = e.currentTarget.value
    setSelectedPlan(currentPlanId);

  }

  return (
    plans ?
        (
        <div className="p-4 row">
          <label className="form-control w-full max-w-xs">
            <span className="label-text">Choose Plans</span>
            <select className="select select-bordered" value={selectedPlan} onChange={(e) => handleSelect(e)}>
            <option value="No plan selected" defaultValue="No plan selected" disabled>No plan selected</option>
            {plans!.map((plan) => <option key={plan.id} value={plan.id} data-cost={plan.cost} data-validity={plan.validity}>{plan.name}</option>)}
            </select>
          </label>
        </div>
      ) : <h2>Loading...</h2>
  )
}
