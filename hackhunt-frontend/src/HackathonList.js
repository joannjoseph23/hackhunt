import './HackathonList.css';

const hackathons = [
  {
    name: "AI Innovation Challenge",
    prize: "₹1,00,000",
    teamSize: "3",
    accommodation: "Yes",
    mode: "Offline",
    registerUrl: "https://example.com/register"
  },
  {
    name: "CodeStorm 2025",
    prize: "₹50,000",
    teamSize: "4",
    accommodation: "No",
    mode: "Online",
    registerUrl: "https://example.com/codestorm"
  },
  {
    name: "Tech Titans",
    prize: "₹2,00,000",
    teamSize: "5",
    accommodation: "Yes",
    mode: "Offline",
    registerUrl: "https://example.com/techtitans"
  }
];

function HackathonList() {
  return (
    <div className="hackathon-list">
      {hackathons.map((event, idx) => (
        <div key={idx} className="hackathon-card">
          <h2>{event.name}</h2>
          <p><strong>Prize:</strong> {event.prize}</p>
          <p><strong>Team Size:</strong> {event.teamSize}</p>
          <p><strong>Accommodation:</strong> {event.accommodation}</p>
          <p><strong>Mode:</strong> {event.mode}</p>
          <a href={event.registerUrl} target="_blank" rel="noopener noreferrer">
            <button className="register-btn">Register Now</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default HackathonList;
