
import './App.css';
import React from 'react'
import Pricecard from './Component/Pricecard';

let data = [
  {
    plan:"FREE",
    price:"0",
    users:"Single User",
    usersEnabler:true,
    storage:"5GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:false,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:false,
    subDomain:"Free subdomain",
    subDomainEnabler:false,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false,
  },
  {
    plan:"PLUS",
    price:"9",
    users:"5 User",
    usersEnabler:true,
    storage:"50GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Free subdomain",
    subDomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:false,
  },
  {
    plan:"PRO",
    price:"49",
    users:"Unlimited Users",
    usersEnabler:true,
    storage:"150GB Storage",
    storageEnabler:true,
    publicProjects:"Unlimited Public Projects",
    publicProjectsEnabler:true,
    communityAccess:"Community Access",
    communityAccessEnabler:true,
    privateProjects:"Unlimited Private Projects",
    privateProjectsEnabler:true,
    phoneSupport:"Dedicated Phone Support",
    phoneSupportEnabler:true,
    subDomain:"Unlimited Free subdomains",
    subDomainEnabler:true,
    statusReports:"Monthly Status Reports",
    statusReportsEnabler:true,
  }
]

function App() {
  return <>
 
 <section className="pricing py-5">
  <div className="container">
    <div className="row">
    
    <Pricecard data={data[0]}/>
    <Pricecard data={data[1]}/>
    <Pricecard data={data[2]}/>
 
      </div>
  </div>
</section>
  </>
}
 
export default App;
