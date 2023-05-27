import './Confirmation.css'

function Confirmation() {
    return (
        <div className='confirmation'>
            <div className='container'>
              <h1 className = "Success">Success!</h1>
              <p className="Traveler">Itinerary has been sent to Liam Johnson</p>
              <p className="IDnum">0b24c9ac-1b6c-4a85-8b2d-2d40e208b87c</p>
              <p className="Days"># Days in Location</p>
            </div>
        </div>
    )
}

export default Confirmation;